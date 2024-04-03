/**
 * @module ESBuild
 *
 */
export default {
    plugins: [
        await (await import("@playform/copy")).default({
            Resolve: "out",
            Asset: [
                {
                    from: "./Source/Notation/TypeScript.json",
                    to: "./Notation/",
                },
            ],
        }),
    ],
};
