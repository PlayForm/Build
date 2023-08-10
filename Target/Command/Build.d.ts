import type { Pattern } from "fast-glob";
export type Pipe = string[];
declare const _default: (Files: Pattern[], Options?: {
    esbuild?: string;
    TypeScript?: string;
}) => Promise<void>;
export default _default;
