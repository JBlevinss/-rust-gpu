var sourcesIndex = JSON.parse('{\
"aho_corasick":["",[["packed",[["teddy",[],["compile.rs","mod.rs","runtime.rs"]]],["api.rs","mod.rs","pattern.rs","rabinkarp.rs","vector.rs"]]],["ahocorasick.rs","automaton.rs","buffer.rs","byte_frequencies.rs","classes.rs","dfa.rs","error.rs","lib.rs","nfa.rs","prefilter.rs","state_id.rs"]],\
"ar":["",[],["lib.rs"]],\
"arrayvec":["",[],["array_string.rs","arrayvec.rs","arrayvec_impl.rs","char.rs","errors.rs","lib.rs","utils.rs"]],\
"bitflags":["",[],["lib.rs"]],\
"bytemuck":["",[],["anybitpattern.rs","checked.rs","contiguous.rs","internal.rs","lib.rs","no_uninit.rs","offset_of.rs","pod.rs","pod_in_option.rs","transparent.rs","zeroable.rs","zeroable_in_option.rs"]],\
"byteorder":["",[],["io.rs","lib.rs"]],\
"cfg_if":["",[],["lib.rs"]],\
"either":["",[],["lib.rs"]],\
"elsa":["",[],["index_map.rs","index_set.rs","lib.rs","map.rs","sync.rs","vec.rs"]],\
"errno":["",[],["lib.rs","unix.rs"]],\
"fastrand":["",[],["lib.rs"]],\
"fxhash":["",[],["lib.rs"]],\
"glam":["",[["bool",[["sse2",[],["bvec3a.rs","bvec4a.rs"]]],["bvec2.rs","bvec3.rs","bvec4.rs","sse2.rs"]],["f32",[["sse2",[],["mat2.rs","mat3a.rs","mat4.rs","quat.rs","vec3a.rs","vec4.rs"]]],["affine2.rs","affine3a.rs","mat3.rs","math.rs","sse2.rs","vec2.rs","vec3.rs"]],["f64",[],["daffine2.rs","daffine3.rs","dmat2.rs","dmat3.rs","dmat4.rs","dquat.rs","dvec2.rs","dvec3.rs","dvec4.rs","math.rs"]],["i32",[],["ivec2.rs","ivec3.rs","ivec4.rs"]],["i64",[],["i64vec2.rs","i64vec3.rs","i64vec4.rs"]],["swizzles",[["sse2",[],["vec3a_impl.rs","vec4_impl.rs"]]],["dvec2_impl.rs","dvec3_impl.rs","dvec4_impl.rs","i64vec2_impl.rs","i64vec3_impl.rs","i64vec4_impl.rs","ivec2_impl.rs","ivec3_impl.rs","ivec4_impl.rs","sse2.rs","u64vec2_impl.rs","u64vec3_impl.rs","u64vec4_impl.rs","uvec2_impl.rs","uvec3_impl.rs","uvec4_impl.rs","vec2_impl.rs","vec3_impl.rs","vec_traits.rs"]],["u32",[],["uvec2.rs","uvec3.rs","uvec4.rs"]],["u64",[],["u64vec2.rs","u64vec3.rs","u64vec4.rs"]]],["align16.rs","bool.rs","deref.rs","euler.rs","f32.rs","f64.rs","features.rs","i32.rs","i64.rs","lib.rs","macros.rs","sse2.rs","swizzles.rs","u32.rs","u64.rs"]],\
"hashbrown":["",[["external_trait_impls",[],["mod.rs"]],["raw",[],["alloc.rs","bitmask.rs","mod.rs","sse2.rs"]]],["lib.rs","macros.rs","map.rs","scopeguard.rs","set.rs"]],\
"indexmap":["",[["map",[["core",[],["raw.rs"]]],["core.rs"]]],["arbitrary.rs","equivalent.rs","lib.rs","macros.rs","map.rs","mutable_keys.rs","set.rs","util.rs"]],\
"internal_iterator":["",[],["adaptors.rs","alloc_impls.rs","lib.rs","std_impls.rs"]],\
"io_lifetimes":["",[],["example_ffi.rs","lib.rs","portability.rs","raw.rs","traits.rs","views.rs"]],\
"itertools":["",[["adaptors",[],["coalesce.rs","map.rs","mod.rs","multi_product.rs"]]],["combinations.rs","combinations_with_replacement.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","duplicates_impl.rs","either_or_both.rs","exactly_one_err.rs","extrema_set.rs","flatten_ok.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","grouping_map.rs","impl_macros.rs","intersperse.rs","k_smallest.rs","kmerge_impl.rs","lazy_buffer.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peek_nth.rs","peeking_take_while.rs","permutations.rs","powerset.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","unziptuple.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]],\
"itoa":["",[],["lib.rs","udiv128.rs"]],\
"lazy_static":["",[],["inline_lazy.rs","lib.rs"]],\
"libc":["",[["unix",[["bsd",[["apple",[["b64",[["x86_64",[],["align.rs","mod.rs"]]],["mod.rs"]]],["long_array.rs","mod.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["fixed_width_ints.rs","lib.rs","macros.rs"]],\
"libm":["",[["math",[],["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]]],["lib.rs"]],\
"longest_increasing_subsequence":["",[],["lib.rs"]],\
"memchr":["",[["memchr",[["x86",[],["avx.rs","mod.rs","sse2.rs"]]],["fallback.rs","iter.rs","mod.rs","naive.rs"]],["memmem",[["prefilter",[["x86",[],["avx.rs","mod.rs","sse.rs"]]],["fallback.rs","genericsimd.rs","mod.rs"]],["x86",[],["avx.rs","mod.rs","sse.rs"]]],["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]]],["cow.rs","lib.rs"]],\
"num_traits":["",[["ops",[],["checked.rs","euclid.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]]],["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]],\
"once_cell":["",[],["imp_std.rs","lib.rs","race.rs"]],\
"proc_macro2":["",[],["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","rcvec.rs","wrapper.rs"]],\
"quote":["",[],["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]],\
"raw_string":["",[["str",[],["index.rs","mod.rs","utf8chunks.rs"]]],["lib.rs","string.rs","unix.rs"]],\
"regex":["",[["literal",[],["imp.rs","mod.rs"]]],["backtrack.rs","compile.rs","dfa.rs","error.rs","exec.rs","expand.rs","find_byte.rs","input.rs","lib.rs","pikevm.rs","pool.rs","prog.rs","re_builder.rs","re_bytes.rs","re_set.rs","re_trait.rs","re_unicode.rs","sparse.rs","utf8.rs"]],\
"regex_syntax":["",[["ast",[],["mod.rs","parse.rs","print.rs","visitor.rs"]],["hir",[["literal",[],["mod.rs"]]],["interval.rs","mod.rs","print.rs","translate.rs","visitor.rs"]],["unicode_tables",[],["age.rs","case_folding_simple.rs","general_category.rs","grapheme_cluster_break.rs","mod.rs","perl_word.rs","property_bool.rs","property_names.rs","property_values.rs","script.rs","script_extension.rs","sentence_break.rs","word_break.rs"]]],["either.rs","error.rs","lib.rs","parser.rs","unicode.rs","utf8.rs"]],\
"rspirv":["",[["binary",[],["assemble.rs","autogen_error.rs","decoder.rs","disassemble.rs","mod.rs","parser.rs","tracker.rs"]],["dr",[["build",[],["mod.rs"]]],["autogen_operand.rs","constructs.rs","loader.rs","mod.rs"]],["grammar",[],["autogen_table.rs","mod.rs","reflect.rs","syntax.rs"]],["lift",[],["mod.rs","storage.rs"]],["sr",[],["autogen_decoration.rs","autogen_instructions.rs","autogen_ops.rs","autogen_types.rs","constants.rs","mod.rs","module.rs","storage.rs","types.rs"]],["utils",[],["mod.rs","version.rs"]]],["lib.rs"]],\
"rustc_codegen_spirv":["",[["builder",[],["builder_methods.rs","byte_addressable_buffer.rs","ext_inst.rs","intrinsics.rs","libm_intrinsics.rs","mod.rs","spirv_asm.rs"]],["codegen_cx",[],["constant.rs","declare.rs","entry.rs","mod.rs","type_.rs"]],["linker",[["spirt_passes",[],["debuginfo.rs","diagnostics.rs","fuse_selects.rs","mod.rs","reduce.rs"]]],["dce.rs","destructure_composites.rs","duplicates.rs","entry_interface.rs","import_export_link.rs","inline.rs","ipo.rs","mem2reg.rs","mod.rs","param_weakening.rs","peephole_opts.rs","simple_passes.rs","specializer.rs","zombies.rs"]]],["abi.rs","attr.rs","builder_spirv.rs","custom_decorations.rs","custom_insts.rs","lib.rs","link.rs","spirv_type.rs","spirv_type_constraints.rs","symbols.rs","target.rs","target_feature.rs"]],\
"rustc_codegen_spirv_types":["",[],["compile_result.rs","lib.rs"]],\
"rustc_demangle":["",[],["legacy.rs","lib.rs","v0.rs"]],\
"rustc_hash":["",[],["lib.rs"]],\
"rustix":["",[["backend",[["libc",[["fs",[],["dir.rs","mod.rs","syscalls.rs","types.rs"]],["io",[],["errno.rs","mod.rs","poll_fd.rs","syscalls.rs","types.rs"]],["process",[],["mod.rs","syscalls.rs","types.rs","wait.rs"]],["time",[],["mod.rs","syscalls.rs","types.rs"]]],["conv.rs","mod.rs","offset.rs","weak.rs"]]]],["ffi",[],["mod.rs"]],["fs",[],["abs.rs","at.rs","constants.rs","cwd.rs","dir.rs","fcntl.rs","fcntl_darwin.rs","fcopyfile.rs","fd.rs","file_type.rs","getpath.rs","mod.rs"]],["io",[],["close.rs","dup.rs","errno.rs","fcntl.rs","ioctl.rs","is_read_write.rs","mod.rs","pipe.rs","poll.rs","read_write.rs","stdio.rs"]],["path",[],["arg.rs","mod.rs"]],["process",[],["chdir.rs","exit.rs","id.rs","kill.rs","mod.rs","priority.rs","rlimit.rs","sched_yield.rs","uname.rs","wait.rs"]]],["const_assert.rs","cstr.rs","lib.rs","utils.rs"]],\
"ryu":["",[["buffer",[],["mod.rs"]],["pretty",[],["exponent.rs","mantissa.rs","mod.rs"]]],["common.rs","d2s.rs","d2s_full_table.rs","d2s_intrinsics.rs","digit_table.rs","f2s.rs","f2s_intrinsics.rs","lib.rs"]],\
"sanitize_filename":["",[],["lib.rs"]],\
"serde":["",[["de",[],["format.rs","ignored_any.rs","impls.rs","mod.rs","seed.rs","utf8.rs","value.rs"]],["private",[],["de.rs","doc.rs","mod.rs","ser.rs","size_hint.rs"]],["ser",[],["fmt.rs","impls.rs","impossible.rs","mod.rs"]]],["integer128.rs","lib.rs","macros.rs"]],\
"serde_derive":["",[["internals",[],["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","receiver.rs","respan.rs","symbol.rs"]]],["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","this.rs","try.rs"]],\
"serde_json":["",[["features_check",[],["mod.rs"]],["io",[],["mod.rs"]],["value",[],["de.rs","from.rs","index.rs","mod.rs","partial_eq.rs","ser.rs"]]],["de.rs","error.rs","iter.rs","lib.rs","macros.rs","map.rs","number.rs","read.rs","ser.rs"]],\
"smallvec":["",[],["lib.rs"]],\
"spirt":["",[["passes",[],["legalize.rs","link.rs","qptr.rs"]],["print",[],["mod.rs","multiversion.rs","pretty.rs"]],["qptr",[],["analyze.rs","layout.rs","lift.rs","lower.rs","mod.rs","shapes.rs"]],["spv",[],["lift.rs","lower.rs","mod.rs","print.rs","read.rs","spec.rs","write.rs"]]],["cfg.rs","context.rs","func_at.rs","lib.rs","transform.rs","visit.rs"]],\
"spirv":["",[],["autogen_spirv.rs","lib.rs"]],\
"spirv_builder":["",[],["depfile.rs","lib.rs"]],\
"spirv_std":["",[["arch",[],["atomics.rs","barrier.rs","demote_to_helper_invocation_ext.rs","derivative.rs","primitive.rs","ray_tracing.rs"]],["image",[],["params.rs","sample_with.rs"]]],["arch.rs","byte_addressable_buffer.rs","float.rs","image.rs","integer.rs","lib.rs","memory.rs","number.rs","ray_tracing.rs","runtime_array.rs","sampler.rs","scalar.rs","sealed.rs","vector.rs"]],\
"spirv_std_macros":["",[],["image.rs","lib.rs"]],\
"spirv_std_types":["",[],["image_params.rs","lib.rs"]],\
"spirv_tools":["",[["assembler",[],["tool.rs"]],["opt",[],["tool.rs"]],["val",[],["tool.rs"]]],["assembler.rs","binary.rs","cmd.rs","error.rs","lib.rs","opt.rs","val.rs"]],\
"spirv_tools_sys":["",[],["assembler.rs","diagnostics.rs","lib.rs","opt.rs","shared.rs","val.rs"]],\
"stable_deref_trait":["",[],["lib.rs"]],\
"syn":["",[["gen",[],["clone.rs","debug.rs","eq.rs","hash.rs"]]],["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","drops.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","gen_helper.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]],\
"tempfile":["",[["file",[["imp",[],["mod.rs","unix.rs"]]],["mod.rs"]]],["dir.rs","error.rs","lib.rs","spooled.rs","util.rs"]],\
"unicode_ident":["",[],["lib.rs","tables.rs"]]\
}');
createSourceSidebar();
