window.SIDEBAR_ITEMS = {"fn":[["minimize_exports","Remove exports which aren’t “roots” (`is_root(export_key)` returns `false`), and which aren’t otherwise kept alive by a “root” (through `Import::LinkName` declarations, with `name` matching `ExportKey::LinkName`), either directly or transitively (including through any number of imports)."],["resolve_imports","Remap `Import::LinkName` to definitions exported as `ExportKey::LinkName`."]]};