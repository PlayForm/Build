import { readFile as _File } from "fs/promises";
import { dirname as Dir } from "path";
import { fileURLToPath as Path } from "url";
var JSON_default = async (File, From = import.meta.url) => JSON.parse(
  (await _File(
    `${Dir(Path(From ?? import.meta.url))}/${File}`,
    "utf-8"
  )).toString()
);
export {
  JSON_default as default
};
//# sourceMappingURL=JSON.js.map
