/**
 * @module TypeDoc
 *
 */
export default interface Type {
    (Name: Record<string, boolean | null | undefined>, Extra?: string): string;
}
