import { copy as Copy } from "esbuild-plugin-copy";
import { rm as Remove } from "fs/promises";
const Out = "Target";
var esbuild_default = {
  format: "esm",
  minify: false,
  outdir: Out,
  platform: "node",
  target: "esnext",
  write: true,
  sourcemap: true,
  plugins: [
    {
      name: "Target",
      setup(build) {
        build.onStart(async () => {
          try {
            await Remove(Out, {
              recursive: true
            });
          } catch (_Error) {
            console.log(_Error);
          }
        });
      }
    },
    Copy({
      resolveFrom: "out",
      assets: [
        {
          from: "./Source/Configuration/TypeScript.json",
          to: "./Configuration/"
        }
      ]
    })
  ]
};
export {
  esbuild_default as default
};
//# sourceMappingURL=esbuild.js.map
