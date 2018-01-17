/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as Handsontable from "handsontable";
var /** @type {?} */ instances = new Map();
var HotRegisterer = /** @class */ (function () {
    function HotRegisterer() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    HotRegisterer.prototype.getInstance = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return instances.get(id);
    };
    /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    HotRegisterer.prototype.registerInstance = /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    function (id, instance) {
        instances.set(id, instance);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    HotRegisterer.prototype.removeInstance = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        instances.delete(id);
    };
    return HotRegisterer;
}());
export { HotRegisterer };
function HotRegisterer_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HotRegisterer.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HotRegisterer.ctorParameters;
}
