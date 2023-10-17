/**
 * @module Load
 *
 */
export default interface Type {
    /**
     * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
     *
     * @param Application - The `Application` parameter is an instance of TypeDoc's Application
     * class, representing the TypeDoc application to which the plugin should be loaded.
     *
     */
    load: (Application: Application) => void;
}
import type { Application } from "typedoc";
