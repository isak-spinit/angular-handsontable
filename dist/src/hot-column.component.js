/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Injector, OnChanges, SimpleChanges, } from "@angular/core";
import { HotTableComponent } from "./hot-table.component";
var HotColumnComponent = /** @class */ (function () {
    function HotColumnComponent(inj) {
        this.inj = inj;
        this.parentComponent = this.inj.get(HotTableComponent);
    }
    /**
     * @return {?}
     */
    HotColumnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.firstRun = false;
        this.parentComponent.addColumn(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HotColumnComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.firstRun) {
            return;
        }
        this.parentComponent.onAfterColumnsChange();
    };
    /**
     * @return {?}
     */
    HotColumnComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.parentComponent.removeColumn(this);
    };
    return HotColumnComponent;
}());
export { HotColumnComponent };
function HotColumnComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HotColumnComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HotColumnComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HotColumnComponent.propDecorators;
    /** @type {?} */
    HotColumnComponent.prototype.firstRun;
    /** @type {?} */
    HotColumnComponent.prototype.parentComponent;
    /** @type {?} */
    HotColumnComponent.prototype.allowHtml;
    /** @type {?} */
    HotColumnComponent.prototype.allowInsertColumn;
    /** @type {?} */
    HotColumnComponent.prototype.allowInsertRow;
    /** @type {?} */
    HotColumnComponent.prototype.allowInvalid;
    /** @type {?} */
    HotColumnComponent.prototype.allowRemoveColumn;
    /** @type {?} */
    HotColumnComponent.prototype.allowRemoveRow;
    /** @type {?} */
    HotColumnComponent.prototype.autoColumnSize;
    /** @type {?} */
    HotColumnComponent.prototype.autoComplete;
    /** @type {?} */
    HotColumnComponent.prototype.autoRowSize;
    /** @type {?} */
    HotColumnComponent.prototype.autoWrapCol;
    /** @type {?} */
    HotColumnComponent.prototype.autoWrapRow;
    /** @type {?} */
    HotColumnComponent.prototype.bindRowsWithHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.cell;
    /** @type {?} */
    HotColumnComponent.prototype.cells;
    /** @type {?} */
    HotColumnComponent.prototype.checkedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.className;
    /** @type {?} */
    HotColumnComponent.prototype.colHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.collapsibleColumns;
    /** @type {?} */
    HotColumnComponent.prototype.columnHeaderHeight;
    /** @type {?} */
    HotColumnComponent.prototype.columns;
    /** @type {?} */
    HotColumnComponent.prototype.columnSorting;
    /** @type {?} */
    HotColumnComponent.prototype.columnSummary;
    /** @type {?} */
    HotColumnComponent.prototype.colWidths;
    /** @type {?} */
    HotColumnComponent.prototype.commentedCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.comments;
    /** @type {?} */
    HotColumnComponent.prototype.contextMenu;
    /** @type {?} */
    HotColumnComponent.prototype.copyable;
    /** @type {?} */
    HotColumnComponent.prototype.copyColsLimit;
    /** @type {?} */
    HotColumnComponent.prototype.copyPaste;
    /** @type {?} */
    HotColumnComponent.prototype.copyRowsLimit;
    /** @type {?} */
    HotColumnComponent.prototype.correctFormat;
    /** @type {?} */
    HotColumnComponent.prototype.currentColClassName;
    /** @type {?} */
    HotColumnComponent.prototype.currentHeaderClassName;
    /** @type {?} */
    HotColumnComponent.prototype.currentRowClassName;
    /** @type {?} */
    HotColumnComponent.prototype.customBorders;
    /** @type {?} */
    HotColumnComponent.prototype.data;
    /** @type {?} */
    HotColumnComponent.prototype.dataSchema;
    /** @type {?} */
    HotColumnComponent.prototype.dateFormat;
    /** @type {?} */
    HotColumnComponent.prototype.debug;
    /** @type {?} */
    HotColumnComponent.prototype.defaultDate;
    /** @type {?} */
    HotColumnComponent.prototype.disableVisualSelection;
    /** @type {?} */
    HotColumnComponent.prototype.dropdownMenu;
    /** @type {?} */
    HotColumnComponent.prototype.editor;
    /** @type {?} */
    HotColumnComponent.prototype.enterBeginsEditing;
    /** @type {?} */
    HotColumnComponent.prototype.enterMoves;
    /** @type {?} */
    HotColumnComponent.prototype.fillHandle;
    /** @type {?} */
    HotColumnComponent.prototype.filter;
    /** @type {?} */
    HotColumnComponent.prototype.filteringCaseSensitive;
    /** @type {?} */
    HotColumnComponent.prototype.filters;
    /** @type {?} */
    HotColumnComponent.prototype.fixedColumnsLeft;
    /** @type {?} */
    HotColumnComponent.prototype.fixedRowsBottom;
    /** @type {?} */
    HotColumnComponent.prototype.fixedRowsTop;
    /** @type {?} */
    HotColumnComponent.prototype.format;
    /** @type {?} */
    HotColumnComponent.prototype.formulas;
    /** @type {?} */
    HotColumnComponent.prototype.fragmentSelection;
    /** @type {?} */
    HotColumnComponent.prototype.ganttChart;
    /** @type {?} */
    HotColumnComponent.prototype.headerTooltips;
    /** @type {?} */
    HotColumnComponent.prototype.height;
    /** @type {?} */
    HotColumnComponent.prototype.hiddenColumns;
    /** @type {?} */
    HotColumnComponent.prototype.hiddenRows;
    /** @type {?} */
    HotColumnComponent.prototype.invalidCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.label;
    /** @type {?} */
    HotColumnComponent.prototype.language;
    /** @type {?} */
    HotColumnComponent.prototype.manualColumnFreeze;
    /** @type {?} */
    HotColumnComponent.prototype.manualColumnMove;
    /** @type {?} */
    HotColumnComponent.prototype.manualColumnResize;
    /** @type {?} */
    HotColumnComponent.prototype.manualRowMove;
    /** @type {?} */
    HotColumnComponent.prototype.manualRowResize;
    /** @type {?} */
    HotColumnComponent.prototype.maxCols;
    /** @type {?} */
    HotColumnComponent.prototype.maxRows;
    /** @type {?} */
    HotColumnComponent.prototype.mergeCells;
    /** @type {?} */
    HotColumnComponent.prototype.minCols;
    /** @type {?} */
    HotColumnComponent.prototype.minRows;
    /** @type {?} */
    HotColumnComponent.prototype.minSpareCols;
    /** @type {?} */
    HotColumnComponent.prototype.minSpareRows;
    /** @type {?} */
    HotColumnComponent.prototype.multiSelect;
    /** @type {?} */
    HotColumnComponent.prototype.nestedHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.noWordWrapClassName;
    /** @type {?} */
    HotColumnComponent.prototype.observeChanges;
    /** @type {?} */
    HotColumnComponent.prototype.observeDOMVisibility;
    /** @type {?} */
    HotColumnComponent.prototype.outsideClickDeselects;
    /** @type {?} */
    HotColumnComponent.prototype.pasteMode;
    /** @type {?} */
    HotColumnComponent.prototype.persistentState;
    /** @type {?} */
    HotColumnComponent.prototype.placeholder;
    /** @type {?} */
    HotColumnComponent.prototype.placeholderCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.preventOverflow;
    /** @type {?} */
    HotColumnComponent.prototype.readOnly;
    /** @type {?} */
    HotColumnComponent.prototype.readOnlyCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.renderAllRows;
    /** @type {?} */
    HotColumnComponent.prototype.renderer;
    /** @type {?} */
    HotColumnComponent.prototype.rowHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.rowHeaderWidth;
    /** @type {?} */
    HotColumnComponent.prototype.rowHeights;
    /** @type {?} */
    HotColumnComponent.prototype.search;
    /** @type {?} */
    HotColumnComponent.prototype.selectOptions;
    /** @type {?} */
    HotColumnComponent.prototype.skipColumnOnPaste;
    /** @type {?} */
    HotColumnComponent.prototype.sortByRelevance;
    /** @type {?} */
    HotColumnComponent.prototype.sortFunction;
    /** @type {?} */
    HotColumnComponent.prototype.sortIndicator;
    /** @type {?} */
    HotColumnComponent.prototype.source;
    /** @type {?} */
    HotColumnComponent.prototype.startCols;
    /** @type {?} */
    HotColumnComponent.prototype.startRows;
    /** @type {?} */
    HotColumnComponent.prototype.stretchH;
    /** @type {?} */
    HotColumnComponent.prototype.strict;
    /** @type {?} */
    HotColumnComponent.prototype.tableClassName;
    /** @type {?} */
    HotColumnComponent.prototype.tabMoves;
    /** @type {?} */
    HotColumnComponent.prototype.title;
    /** @type {?} */
    HotColumnComponent.prototype.trimDropdown;
    /** @type {?} */
    HotColumnComponent.prototype.trimRows;
    /** @type {?} */
    HotColumnComponent.prototype.trimWhitespace;
    /** @type {?} */
    HotColumnComponent.prototype.type;
    /** @type {?} */
    HotColumnComponent.prototype.uncheckedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.undo;
    /** @type {?} */
    HotColumnComponent.prototype.validator;
    /** @type {?} */
    HotColumnComponent.prototype.viewportColumnRenderingOffset;
    /** @type {?} */
    HotColumnComponent.prototype.viewportRowRenderingOffset;
    /** @type {?} */
    HotColumnComponent.prototype.visibleRows;
    /** @type {?} */
    HotColumnComponent.prototype.width;
    /** @type {?} */
    HotColumnComponent.prototype.wordWrap;
    /** @type {?} */
    HotColumnComponent.prototype.inj;
}
