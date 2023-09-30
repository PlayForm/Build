import type { DefaultTheme, Options, PageEvent, Reflection } from "typedoc";
export default interface Type {
    constructor(Theme: DefaultTheme, Page: PageEvent<Reflection>, Option: Options): Type;
    init: () => void;
}
