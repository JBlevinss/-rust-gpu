#![feature(rustc_private)]

extern crate rustc_codegen_ssa;
extern crate rustc_errors;
extern crate rustc_middle;
extern crate rustc_mir;
#[macro_use]
extern crate rustc_data_structures;
extern crate rustc_driver;
extern crate rustc_hir;
extern crate rustc_session;
extern crate rustc_span;
extern crate rustc_symbol_mangling;
extern crate rustc_target;

use rustc_codegen_ssa::traits::CodegenBackend;
use rustc_data_structures::owning_ref::OwningRef;
use rustc_data_structures::sync::MetadataRef;
use rustc_errors::ErrorReported;
use rustc_middle::dep_graph::DepGraph;
use rustc_middle::middle::cstore::{EncodedMetadata, MetadataLoader, MetadataLoaderDyn};
use rustc_middle::ty::query::Providers;
use rustc_middle::ty::TyCtxt;
use rustc_session::config::OutputFilenames;
use rustc_session::Session;
use rustc_span::symbol::Symbol;
use rustc_target::spec::Target;
use std::any::Any;
use std::path::Path;

use rustc_middle::mir::mono::{Linkage as RLinkage, MonoItem, Visibility};
use rustc_middle::mir::Rvalue;
use rustc_middle::mir::StatementKind;

pub struct NoLlvmMetadataLoader;

impl MetadataLoader for NoLlvmMetadataLoader {
    fn get_rlib_metadata(&self, _: &Target, filename: &Path) -> Result<MetadataRef, String> {
        let buf =
            std::fs::read(filename).map_err(|e| format!("metadata file open err: {:?}", e))?;
        let buf: OwningRef<Vec<u8>, [u8]> = OwningRef::new(buf);
        Ok(rustc_erase_owner!(buf.map_owner_box()))
    }

    fn get_dylib_metadata(&self, target: &Target, filename: &Path) -> Result<MetadataRef, String> {
        self.get_rlib_metadata(target, filename)
    }
}

struct TheBackend;

impl CodegenBackend for TheBackend {
    fn metadata_loader(&self) -> Box<MetadataLoaderDyn> {
        Box::new(NoLlvmMetadataLoader)
    }

    fn provide(&self, providers: &mut Providers) {
        rustc_symbol_mangling::provide(providers);

        // jb-todo: target_features_whitelist is old name for supported_target_features
        providers.target_features_whitelist = |tcx, _cnum| {
            Default::default() // Just a dummy
        };
        providers.is_reachable_non_generic = |_tcx, _defid| true;
        providers.exported_symbols = |_tcx, _crate| &[];
    }

    fn provide_extern(&self, providers: &mut Providers) {
        providers.is_reachable_non_generic = |_tcx, _defid| true;
    }

    fn codegen_crate<'a, 'tcx>(
        &self,
        tcx: TyCtxt<'tcx>,
        _metadata: EncodedMetadata,
        _need_metadata_module: bool,
    ) -> Box<dyn Any> {
        use rustc_hir::def_id::LOCAL_CRATE;

        println!("In codegen_crate");

        let cgus = if tcx.sess.opts.output_types.should_codegen() {
            tcx.collect_and_partition_mono_items(LOCAL_CRATE).1
        } else {
            // If only `--emit metadata` is used, we shouldn't perform any codegen.
            // Also `tcx.collect_and_partition_mono_items` may panic in that case.
            &[]
        };

        dbg!(cgus.len());

        cgus.iter().for_each(|cgu| {
            dbg!(cgu.name());

            let cgu = tcx.codegen_unit(cgu.name());
            let mono_items = cgu.items_in_deterministic_order(tcx);

            for (mono_item, (linkage, visibility)) in mono_items {
                match mono_item {
                    MonoItem::Fn(instance) => {
                        {
                            let mut mir = ::std::io::Cursor::new(Vec::new());

                            crate::rustc_mir::util::write_mir_pretty(
                                tcx,
                                Some(instance.def_id()),
                                &mut mir,
                            )
                            .unwrap();

                            let s = String::from_utf8(mir.into_inner()).unwrap();

                            println!("{}", s);
                        }

                        let mir = tcx.instance_mir(instance.def);
                        for (bb, bb_data) in mir.basic_blocks().iter_enumerated() {
                            for stmt in &bb_data.statements {
                                match &stmt.kind {
                                    StatementKind::Assign(to_place_and_rval) => {
                                        let place = to_place_and_rval.0; // jb-todo: iterate though place.projection & build OpAccessChain from it? see trans_place in cranelift

                                        dbg!(&place);
                                        for elem in place.projection {
                                            match elem {
                                                _ => {}
                                            }
                                        }

                                        dbg!(&to_place_and_rval.1);
                                        match &to_place_and_rval.1 {
                                            Rvalue::Use(operand) => {
                                                //let val = trans_operand(fx, operand);
                                                //lval.write_cvalue(fx, val);
                                                dbg!(operand);
                                            }
                                            _ => {}
                                        }
                                        //let lval = trans_place(fx, to_place_and_rval.0);
                                        //dbg!(lval);
                                        //println!("Assign");
                                    }
                                    _ => {}
                                }
                            }
                        }
                    }
                    _ => {}
                }
            }
        });

        Box::new(tcx.crate_name(LOCAL_CRATE) as Symbol)
    }

    fn join_codegen(
        &self,
        ongoing_codegen: Box<dyn Any>,
        _sess: &Session,
        _dep_graph: &DepGraph,
    ) -> Result<Box<dyn Any>, ErrorReported> {
        let crate_name = ongoing_codegen
            .downcast::<Symbol>()
            .expect("in join_codegen: ongoing_codegen is not a Symbol");
        Ok(crate_name)
    }

    fn link(
        &self,
        sess: &Session,
        codegen_results: Box<dyn Any>,
        outputs: &OutputFilenames,
    ) -> Result<(), ErrorReported> {
        use rustc_session::{config::CrateType, output::out_filename};
        use std::io::Write;
        let crate_name = codegen_results
            .downcast::<Symbol>()
            .expect("in link: codegen_results is not a Symbol");
        for &crate_type in sess.opts.crate_types.iter() {
            if crate_type != CrateType::Rlib {
                sess.fatal(&format!("Crate type is {:?}", crate_type));
            }
            let output_name = out_filename(sess, crate_type, &outputs, &*crate_name.as_str());
            let mut out_file = ::std::fs::File::create(output_name).unwrap();
            write!(out_file, "This has been \"compiled\" successfully.").unwrap();
        }
        Ok(())
    }
}

/// This is the entrypoint for a hot plugged rustc_codegen_llvm
#[no_mangle]
pub fn __rustc_codegen_backend() -> Box<dyn CodegenBackend> {
    Box::new(TheBackend)
}


/// https://github.com/bjorn3/rustc_codegen_cranelift/blob/1b8df386aa72bc3dacb803f7d4deb4eadd63b56f/src/base.rs