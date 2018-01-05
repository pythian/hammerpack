import _ = require("lodash");
import {IWebpackBundleOptions} from "../internal/IWebpackBundleOptions";
import {IWebpackOptions} from "../internal/IWebpackOptions";

export interface IWebLibraryOptions extends IWebpackBundleOptions, IWebpackOptions {

    /**
     * Adds this object to the window object on the client side.
     *
     * See:
     * - https://webpack.js.org/plugins/define-plugin/
     */
    define?: object;

    /**
     * Allows shimming modules in the client.
     *
     * See:
     * - https://webpack.js.org/plugins/provide-plugin/
     * - https://webpack.github.io/docs/shimming-modules.html
     */
    provide?: _.Dictionary<string>;

    /**
     * Specify a file suffix for the output files.
     *
     * For example, for a project with name mylib, given the following bundleSuffixes, the filenames would be:
     * - none: mylib.js
     * - hash: mylib.4b29b16eb5360fe7a630.js  (the hash of the contents of the file)
     * - rootPackageVersion: mylib.1.0.2.js  (the version specified by root package.json file, none if not specified)
     * - 2.1.0: mylib.2.1.0.js  (include file suffix yourself)
     * - 2.1.0-RC0: mylib.2.1.0-RC0.js  (include file suffix yourself)
     */
    bundleSuffix?: "none" | "hash" | "rootPackageVersion" | string;

}
