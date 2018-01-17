/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, ModuleWithProviders } from "@angular/core";
import { HotTableComponent } from "./src/hot-table.component";
import { HotColumnComponent } from "./src/hot-column.component";
import { HotRegisterer } from "./src/hot-registerer.service";
var HotTableModule = /** @class */ (function () {
    function HotTableModule() {
    }
    /**
     * @return {?}
     */
    HotTableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: HotTableModule,
            providers: [HotRegisterer]
        };
    };
    return HotTableModule;
}());
export { HotTableModule };
function HotTableModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HotTableModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HotTableModule.ctorParameters;
}
