import { exec as Exec } from "child_process";
import { deepmerge as Merge } from "deepmerge-ts";
import { build as Build } from "esbuild";
import Glob from "fast-glob";
import esbuild from "../Configuration/esbuild.js";
var Build_default = async (Files, Options) => {
  const Pipe = [];
  for (const File of Files) {
    for (const _File of await Glob(
      File.replaceAll("'", "").replaceAll('"', "")
    )) {
      Pipe.push(_File);
    }
  }
  Pipe.reverse();
  await Build(
    Merge(esbuild, {
      entryPoints: Object.fromEntries(
        Pipe.map((File) => [
          File.replace("Source/", "").split(".").slice(0, -1).join("."),
          File
        ])
      )
    })
  );
  if (Options?.TypeScript) {
    Exec(`tsc -p ${Options?.TypeScript}`);
  } else {
    Exec("tsc");
  }
};
export {
  Build_default as default
};
//# sourceMappingURL=Build.js.map
