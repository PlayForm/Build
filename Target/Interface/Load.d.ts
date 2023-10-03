/**
 * @module Load
 *
 * This module defines the `Load` function, which is used by TypeDoc to load a plugin
 * into the TypeDoc instance.
 */
export default interface Type {
    /**
     * The `Load` function is responsible for loading a plugin into the TypeDoc instance.
     *
     * @param Application - The `Application` parameter is an instance of TypeDoc's Application
     * class, representing the TypeDoc application to which the plugin should be loaded.
     *
     */
    (Application: Application): void;
}
import type { Application } from "typedoc";
