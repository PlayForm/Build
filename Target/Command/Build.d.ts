import type { Pattern } from "fast-glob";
export type Pipe = string[];
declare const _default: (Files: Pattern[], Options?: {
    TypeScript?: string;
}) => Promise<void>;
export default _default;
