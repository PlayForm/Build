declare const _default: {
    color: true;
    format: "esm";
    metafile: true;
    minify: true;
    outdir: string;
    platform: "node";
    target: string;
    write: true;
    logLevel: "debug";
    plugins: import("esbuild").Plugin[];
    define: {
        "process.env.VERSION_PACKAGE": string;
    };
};
export default _default;
