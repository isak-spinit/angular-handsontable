/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, NgZone, AfterContentInit, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation, } from "@angular/core";
import Handsontable from "handsontable";
import { HotRegisterer } from "./hot-registerer.service";
import { HotHelper } from "./hot-settings.utils";
import { HotColumnComponent } from "./hot-column.component";
var HotTableComponent = /** @class */ (function () {
    function HotTableComponent(el, _ngZone, _hotRegisterer, _hotHelper) {
        this.el = el;
        this._ngZone = _ngZone;
        this._hotRegisterer = _hotRegisterer;
        this._hotHelper = _hotHelper;
    }
    /**
     * @return {?}
     */
    HotTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.container = document.createElement('div');
        if (this.hotId) {
            this.container.id = this.hotId;
        }
        this.el.nativeElement.appendChild(this.container);
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ options = this._hotHelper.mergeSettings(this);
        if (this.columnsComponents.length > 0) {
            var /** @type {?} */ columns_1 = [];
            this.columnsComponents.forEach(function (column) {
                columns_1.push(_this._hotHelper.mergeSettings(column));
            });
            options['columns'] = columns_1;
        }
        this._ngZone.runOutsideAngular(function () {
            _this.hotInstance = new Handsontable(_this.container, options);
        });
        if (this.hotId) {
            this._hotRegisterer.registerInstance(this.hotId, this.hotInstance);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HotTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.hotInstance === void 0) {
            return;
        }
        var /** @type {?} */ newOptions = this._hotHelper.prepareChanges(changes);
        this.updateHotTable(newOptions);
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hotInstance.destroy();
        if (this.hotId) {
            this._hotRegisterer.removeInstance(this.hotId);
        }
    };
    /**
     * @param {?} newSettings
     * @return {?}
     */
    HotTableComponent.prototype.updateHotTable = /**
     * @param {?} newSettings
     * @return {?}
     */
    function (newSettings) {
        if (!this.hotInstance) {
            return;
        }
        this.hotInstance.updateSettings(newSettings, false);
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.onAfterColumnsChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.columnsComponents === void 0) {
            return;
        }
        if (this.columnsComponents.length > 0) {
            var /** @type {?} */ columns_2 = [];
            this.columnsComponents.forEach(function (column) {
                columns_2.push(_this._hotHelper.mergeSettings(column));
            });
            var /** @type {?} */ newOptions = {
                columns: columns_2
            };
            this.updateHotTable(newOptions);
        }
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.onAfterColumnsNumberChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ columns = [];
        if (this.columnsComponents.length > 0) {
            this.columnsComponents.forEach(function (column) {
                columns.push(_this._hotHelper.mergeSettings(column));
            });
        }
        this.updateHotTable({ columns: columns });
    };
    /**
     * @param {?} column
     * @return {?}
     */
    HotTableComponent.prototype.addColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.columnsComponents.push(column);
        this.onAfterColumnsNumberChange();
    };
    /**
     * @param {?} column
     * @return {?}
     */
    HotTableComponent.prototype.removeColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        var /** @type {?} */ index = this.columnsComponents.indexOf(column);
        this.columnsComponents.splice(index, 1);
        this.onAfterColumnsNumberChange();
    };
    return HotTableComponent;
}());
export { HotTableComponent };
function HotTableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HotTableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HotTableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HotTableComponent.propDecorators;
    /** @type {?} */
    HotTableComponent.prototype.hotInstance;
    /** @type {?} */
    HotTableComponent.prototype.container;
    /** @type {?} */
    HotTableComponent.prototype.columnsComponents;
    /** @type {?} */
    HotTableComponent.prototype.settings;
    /** @type {?} */
    HotTableComponent.prototype.hotId;
    /** @type {?} */
    HotTableComponent.prototype.allowEmpty;
    /** @type {?} */
    HotTableComponent.prototype.allowHtml;
    /** @type {?} */
    HotTableComponent.prototype.allowInsertColumn;
    /** @type {?} */
    HotTableComponent.prototype.allowInsertRow;
    /** @type {?} */
    HotTableComponent.prototype.allowInvalid;
    /** @type {?} */
    HotTableComponent.prototype.allowRemoveColumn;
    /** @type {?} */
    HotTableComponent.prototype.allowRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.autoColumnSize;
    /** @type {?} */
    HotTableComponent.prototype.autoComplete;
    /** @type {?} */
    HotTableComponent.prototype.autoRowSize;
    /** @type {?} */
    HotTableComponent.prototype.autoWrapCol;
    /** @type {?} */
    HotTableComponent.prototype.autoWrapRow;
    /** @type {?} */
    HotTableComponent.prototype.bindRowsWithHeaders;
    /** @type {?} */
    HotTableComponent.prototype.cell;
    /** @type {?} */
    HotTableComponent.prototype.cells;
    /** @type {?} */
    HotTableComponent.prototype.checkedTemplate;
    /** @type {?} */
    HotTableComponent.prototype.className;
    /** @type {?} */
    HotTableComponent.prototype.colHeaders;
    /** @type {?} */
    HotTableComponent.prototype.collapsibleColumns;
    /** @type {?} */
    HotTableComponent.prototype.columnHeaderHeight;
    /** @type {?} */
    HotTableComponent.prototype.columns;
    /** @type {?} */
    HotTableComponent.prototype.columnSorting;
    /** @type {?} */
    HotTableComponent.prototype.columnSummary;
    /** @type {?} */
    HotTableComponent.prototype.colWidths;
    /** @type {?} */
    HotTableComponent.prototype.commentedCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.comments;
    /** @type {?} */
    HotTableComponent.prototype.contextMenu;
    /** @type {?} */
    HotTableComponent.prototype.copyable;
    /** @type {?} */
    HotTableComponent.prototype.copyColsLimit;
    /** @type {?} */
    HotTableComponent.prototype.copyPaste;
    /** @type {?} */
    HotTableComponent.prototype.copyRowsLimit;
    /** @type {?} */
    HotTableComponent.prototype.correctFormat;
    /** @type {?} */
    HotTableComponent.prototype.currentColClassName;
    /** @type {?} */
    HotTableComponent.prototype.currentHeaderClassName;
    /** @type {?} */
    HotTableComponent.prototype.currentRowClassName;
    /** @type {?} */
    HotTableComponent.prototype.customBorders;
    /** @type {?} */
    HotTableComponent.prototype.data;
    /** @type {?} */
    HotTableComponent.prototype.dataSchema;
    /** @type {?} */
    HotTableComponent.prototype.dateFormat;
    /** @type {?} */
    HotTableComponent.prototype.debug;
    /** @type {?} */
    HotTableComponent.prototype.defaultDate;
    /** @type {?} */
    HotTableComponent.prototype.disableVisualSelection;
    /** @type {?} */
    HotTableComponent.prototype.dropdownMenu;
    /** @type {?} */
    HotTableComponent.prototype.editor;
    /** @type {?} */
    HotTableComponent.prototype.enterBeginsEditing;
    /** @type {?} */
    HotTableComponent.prototype.enterMoves;
    /** @type {?} */
    HotTableComponent.prototype.fillHandle;
    /** @type {?} */
    HotTableComponent.prototype.filter;
    /** @type {?} */
    HotTableComponent.prototype.filteringCaseSensitive;
    /** @type {?} */
    HotTableComponent.prototype.filters;
    /** @type {?} */
    HotTableComponent.prototype.fixedColumnsLeft;
    /** @type {?} */
    HotTableComponent.prototype.fixedRowsBottom;
    /** @type {?} */
    HotTableComponent.prototype.fixedRowsTop;
    /** @type {?} */
    HotTableComponent.prototype.format;
    /** @type {?} */
    HotTableComponent.prototype.formulas;
    /** @type {?} */
    HotTableComponent.prototype.fragmentSelection;
    /** @type {?} */
    HotTableComponent.prototype.ganttChart;
    /** @type {?} */
    HotTableComponent.prototype.headerTooltips;
    /** @type {?} */
    HotTableComponent.prototype.height;
    /** @type {?} */
    HotTableComponent.prototype.hiddenColumns;
    /** @type {?} */
    HotTableComponent.prototype.hiddenRows;
    /** @type {?} */
    HotTableComponent.prototype.invalidCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.label;
    /** @type {?} */
    HotTableComponent.prototype.language;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnFreeze;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.manualRowMove;
    /** @type {?} */
    HotTableComponent.prototype.manualRowResize;
    /** @type {?} */
    HotTableComponent.prototype.maxCols;
    /** @type {?} */
    HotTableComponent.prototype.maxRows;
    /** @type {?} */
    HotTableComponent.prototype.mergeCells;
    /** @type {?} */
    HotTableComponent.prototype.minCols;
    /** @type {?} */
    HotTableComponent.prototype.minRows;
    /** @type {?} */
    HotTableComponent.prototype.minSpareCols;
    /** @type {?} */
    HotTableComponent.prototype.minSpareRows;
    /** @type {?} */
    HotTableComponent.prototype.multiSelect;
    /** @type {?} */
    HotTableComponent.prototype.nestedHeaders;
    /** @type {?} */
    HotTableComponent.prototype.noWordWrapClassName;
    /** @type {?} */
    HotTableComponent.prototype.observeChanges;
    /** @type {?} */
    HotTableComponent.prototype.observeDOMVisibility;
    /** @type {?} */
    HotTableComponent.prototype.outsideClickDeselects;
    /** @type {?} */
    HotTableComponent.prototype.pasteMode;
    /** @type {?} */
    HotTableComponent.prototype.persistentState;
    /** @type {?} */
    HotTableComponent.prototype.placeholder;
    /** @type {?} */
    HotTableComponent.prototype.placeholderCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.preventOverflow;
    /** @type {?} */
    HotTableComponent.prototype.readOnly;
    /** @type {?} */
    HotTableComponent.prototype.readOnlyCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.renderAllRows;
    /** @type {?} */
    HotTableComponent.prototype.renderer;
    /** @type {?} */
    HotTableComponent.prototype.rowHeaders;
    /** @type {?} */
    HotTableComponent.prototype.rowHeaderWidth;
    /** @type {?} */
    HotTableComponent.prototype.rowHeights;
    /** @type {?} */
    HotTableComponent.prototype.search;
    /** @type {?} */
    HotTableComponent.prototype.selectOptions;
    /** @type {?} */
    HotTableComponent.prototype.skipColumnOnPaste;
    /** @type {?} */
    HotTableComponent.prototype.sortByRelevance;
    /** @type {?} */
    HotTableComponent.prototype.sortFunction;
    /** @type {?} */
    HotTableComponent.prototype.sortIndicator;
    /** @type {?} */
    HotTableComponent.prototype.source;
    /** @type {?} */
    HotTableComponent.prototype.startCols;
    /** @type {?} */
    HotTableComponent.prototype.startRows;
    /** @type {?} */
    HotTableComponent.prototype.stretchH;
    /** @type {?} */
    HotTableComponent.prototype.strict;
    /** @type {?} */
    HotTableComponent.prototype.tableClassName;
    /** @type {?} */
    HotTableComponent.prototype.tabMoves;
    /** @type {?} */
    HotTableComponent.prototype.title;
    /** @type {?} */
    HotTableComponent.prototype.trimDropdown;
    /** @type {?} */
    HotTableComponent.prototype.trimRows;
    /** @type {?} */
    HotTableComponent.prototype.trimWhitespace;
    /** @type {?} */
    HotTableComponent.prototype.type;
    /** @type {?} */
    HotTableComponent.prototype.uncheckedTemplate;
    /** @type {?} */
    HotTableComponent.prototype.undo;
    /** @type {?} */
    HotTableComponent.prototype.validator;
    /** @type {?} */
    HotTableComponent.prototype.viewportColumnRenderingOffset;
    /** @type {?} */
    HotTableComponent.prototype.viewportRowRenderingOffset;
    /** @type {?} */
    HotTableComponent.prototype.visibleRows;
    /** @type {?} */
    HotTableComponent.prototype.width;
    /** @type {?} */
    HotTableComponent.prototype.wordWrap;
    /** @type {?} */
    HotTableComponent.prototype.afterAddChild;
    /** @type {?} */
    HotTableComponent.prototype.afterBeginEditing;
    /** @type {?} */
    HotTableComponent.prototype.afterCellMetaReset;
    /** @type {?} */
    HotTableComponent.prototype.afterChange;
    /** @type {?} */
    HotTableComponent.prototype.afterChangesObserved;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnSort;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuDefaultOptions;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuHide;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.afterCopy;
    /** @type {?} */
    HotTableComponent.prototype.afterCopyLimit;
    /** @type {?} */
    HotTableComponent.prototype.afterCreateCol;
    /** @type {?} */
    HotTableComponent.prototype.afterCreateRow;
    /** @type {?} */
    HotTableComponent.prototype.afterCut;
    /** @type {?} */
    HotTableComponent.prototype.afterDeselect;
    /** @type {?} */
    HotTableComponent.prototype.afterDestroy;
    /** @type {?} */
    HotTableComponent.prototype.afterDetachChild;
    /** @type {?} */
    HotTableComponent.prototype.afterDocumentKeyDown;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuDefaultOptions;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuHide;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.afterFilter;
    /** @type {?} */
    HotTableComponent.prototype.afterGetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.afterGetColHeader;
    /** @type {?} */
    HotTableComponent.prototype.afterGetColumnHeaderRenderers;
    /** @type {?} */
    HotTableComponent.prototype.afterGetRowHeader;
    /** @type {?} */
    HotTableComponent.prototype.afterGetRowHeaderRenderers;
    /** @type {?} */
    HotTableComponent.prototype.afterInit;
    /** @type {?} */
    HotTableComponent.prototype.afterLoadData;
    /** @type {?} */
    HotTableComponent.prototype.afterModifyTransformEnd;
    /** @type {?} */
    HotTableComponent.prototype.afterModifyTransformStart;
    /** @type {?} */
    HotTableComponent.prototype.afterMomentumScroll;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellCornerDblClick;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellCornerMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseOver;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseOut;
    /** @type {?} */
    HotTableComponent.prototype.afterPluginsInitialized;
    /** @type {?} */
    HotTableComponent.prototype.afterRedo;
    /** @type {?} */
    HotTableComponent.prototype.afterRemoveCol;
    /** @type {?} */
    HotTableComponent.prototype.afterRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.afterRender;
    /** @type {?} */
    HotTableComponent.prototype.afterRenderer;
    /** @type {?} */
    HotTableComponent.prototype.afterRowMove;
    /** @type {?} */
    HotTableComponent.prototype.afterRowResize;
    /** @type {?} */
    HotTableComponent.prototype.afterScrollHorizontally;
    /** @type {?} */
    HotTableComponent.prototype.afterScrollVertically;
    /** @type {?} */
    HotTableComponent.prototype.afterSelection;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionByProp;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionEnd;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionEndByProp;
    /** @type {?} */
    HotTableComponent.prototype.afterSetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.afterSetDataAtCell;
    /** @type {?} */
    HotTableComponent.prototype.afterSetDataAtRowProp;
    /** @type {?} */
    HotTableComponent.prototype.afterTrimRow;
    /** @type {?} */
    HotTableComponent.prototype.afterUndo;
    /** @type {?} */
    HotTableComponent.prototype.afterUntrimRow;
    /** @type {?} */
    HotTableComponent.prototype.afterUpdateSettings;
    /** @type {?} */
    HotTableComponent.prototype.afterValidate;
    /** @type {?} */
    HotTableComponent.prototype.afterViewportColumnCalculatorOverride;
    /** @type {?} */
    HotTableComponent.prototype.afterViewportRowCalculatorOverride;
    /** @type {?} */
    HotTableComponent.prototype.beforeAddChild;
    /** @type {?} */
    HotTableComponent.prototype.beforeAutofill;
    /** @type {?} */
    HotTableComponent.prototype.beforeAutofillInsidePopulate;
    /** @type {?} */
    HotTableComponent.prototype.beforeCellAlignment;
    /** @type {?} */
    HotTableComponent.prototype.beforeChange;
    /** @type {?} */
    HotTableComponent.prototype.beforeChangeRender;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnSort;
    /** @type {?} */
    HotTableComponent.prototype.beforeContextMenuSetItems;
    /** @type {?} */
    HotTableComponent.prototype.beforeCopy;
    /** @type {?} */
    HotTableComponent.prototype.beforeCreateCol;
    /** @type {?} */
    HotTableComponent.prototype.beforeCreateRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeCut;
    /** @type {?} */
    HotTableComponent.prototype.beforeDetachChild;
    /** @type {?} */
    HotTableComponent.prototype.beforeDrawBorders;
    /** @type {?} */
    HotTableComponent.prototype.beforeDropdownMenuSetItems;
    /** @type {?} */
    HotTableComponent.prototype.beforeFilter;
    /** @type {?} */
    HotTableComponent.prototype.beforeGetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.beforeInit;
    /** @type {?} */
    HotTableComponent.prototype.beforeInitWalkontable;
    /** @type {?} */
    HotTableComponent.prototype.beforeKeyDown;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseOut;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseOver;
    /** @type {?} */
    HotTableComponent.prototype.beforePaste;
    /** @type {?} */
    HotTableComponent.prototype.beforeRedo;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveCol;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeRender;
    /** @type {?} */
    HotTableComponent.prototype.beforeRenderer;
    /** @type {?} */
    HotTableComponent.prototype.beforeRowMove;
    /** @type {?} */
    HotTableComponent.prototype.beforeRowResize;
    /** @type {?} */
    HotTableComponent.prototype.beforeSetRangeEnd;
    /** @type {?} */
    HotTableComponent.prototype.beforeSetRangeStart;
    /** @type {?} */
    HotTableComponent.prototype.beforeStretchingColumnWidth;
    /** @type {?} */
    HotTableComponent.prototype.beforeTouchScroll;
    /** @type {?} */
    HotTableComponent.prototype.beforeUndo;
    /** @type {?} */
    HotTableComponent.prototype.beforeValidate;
    /** @type {?} */
    HotTableComponent.prototype.beforeValueRender;
    /** @type {?} */
    HotTableComponent.prototype.construct;
    /** @type {?} */
    HotTableComponent.prototype.hiddenColumn;
    /** @type {?} */
    HotTableComponent.prototype.hiddenRow;
    /** @type {?} */
    HotTableComponent.prototype.init;
    /** @type {?} */
    HotTableComponent.prototype.manualRowHeights;
    /** @type {?} */
    HotTableComponent.prototype.modifyAutofillRange;
    /** @type {?} */
    HotTableComponent.prototype.modifyCol;
    /** @type {?} */
    HotTableComponent.prototype.modifyColHeader;
    /** @type {?} */
    HotTableComponent.prototype.modifyColumnHeaderHeight;
    /** @type {?} */
    HotTableComponent.prototype.modifyColWidth;
    /** @type {?} */
    HotTableComponent.prototype.modifyCopyableRange;
    /** @type {?} */
    HotTableComponent.prototype.modifyData;
    /** @type {?} */
    HotTableComponent.prototype.modifyRow;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeader;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeaderWidth;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeight;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowData;
    /** @type {?} */
    HotTableComponent.prototype.modifyTransformEnd;
    /** @type {?} */
    HotTableComponent.prototype.modifyTransformStart;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateLoad;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateReset;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateSave;
    /** @type {?} */
    HotTableComponent.prototype.skipLengthCache;
    /** @type {?} */
    HotTableComponent.prototype.unmodifyCol;
    /** @type {?} */
    HotTableComponent.prototype.unmodifyRow;
    /** @type {?} */
    HotTableComponent.prototype.el;
    /** @type {?} */
    HotTableComponent.prototype._ngZone;
    /** @type {?} */
    HotTableComponent.prototype._hotRegisterer;
    /** @type {?} */
    HotTableComponent.prototype._hotHelper;
}
