(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 86893:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-splitter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Splitter": () => (/* binding */ Splitter),
/* harmony export */   "SplitterModule": () => (/* binding */ SplitterModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 80938);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 41388);






const _c0 = ["container"];

function Splitter_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Splitter_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Splitter_ng_template_2_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.onGutterMouseDown($event, i_r3);
    })("touchstart", function Splitter_ng_template_2_div_2_Template_div_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.onGutterTouchStart($event, i_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.gutterStyle());
  }
}

function Splitter_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Splitter_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Splitter_ng_template_2_div_2_Template, 2, 1, "div", 4);
  }

  if (rf & 2) {
    const panel_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.panelContainerClass())("ngStyle", ctx_r1.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", panel_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 !== ctx_r1.panels.length - 1);
  }
}

class Splitter {
  constructor(cd, el) {
    this.cd = cd;
    this.el = el;
    this.stateStorage = "session";
    this.stateKey = null;
    this.layout = "horizontal";
    this.gutterSize = 4;
    this.panelSizes = [];
    this.minSizes = [];
    this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nested = false;
    this.panels = [];
    this.dragging = false;
    this.mouseMoveListener = null;
    this.mouseUpListener = null;
    this.touchMoveListener = null;
    this.touchEndListener = null;
    this.size = null;
    this.gutterElement = null;
    this.startPos = null;
    this.prevPanelElement = null;
    this.nextPanelElement = null;
    this.nextPanelSize = null;
    this.prevPanelSize = null;
    this._panelSizes = null;
    this.prevPanelIndex = null;
  }

  ngOnInit() {
    this.nested = this.isNested();
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'panel':
          this.panels.push(item.template);
          break;

        default:
          this.panels.push(item.template);
          break;
      }
    });
  }

  ngAfterViewInit() {
    if (this.panels && this.panels.length) {
      let initialized = false;

      if (this.isStateful()) {
        initialized = this.restoreState();
      }

      if (!initialized) {
        let children = [...this.el.nativeElement.children[0].children].filter(child => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(child, 'p-splitter-panel'));
        let _panelSizes = [];
        this.panels.map((panel, i) => {
          let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
          let panelSize = panelInitialSize || 100 / this.panels.length;
          _panelSizes[i] = panelSize;
          children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
        });
        this._panelSizes = _panelSizes;
      }
    }
  }

  resizeStart(event, index) {
    this.gutterElement = event.currentTarget;
    this.size = this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(this.containerViewChild.nativeElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(this.containerViewChild.nativeElement);
    this.dragging = true;
    this.startPos = this.horizontal() ? event.pageX || event.changedTouches[0].pageX : event.pageY || event.changedTouches[0].pageY;
    this.prevPanelElement = this.gutterElement.previousElementSibling;
    this.nextPanelElement = this.gutterElement.nextElementSibling;
    this.prevPanelSize = 100 * (this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterWidth(this.prevPanelElement, true) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
    this.nextPanelSize = 100 * (this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterWidth(this.nextPanelElement, true) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
    this.prevPanelIndex = index;
    primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing');
    primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.containerViewChild.nativeElement, 'p-splitter-resizing');
    this.onResizeStart.emit({
      originalEvent: event,
      sizes: this._panelSizes
    });
  }

  onResize(event) {
    let newPos;
    if (this.horizontal()) newPos = event.pageX * 100 / this.size - this.startPos * 100 / this.size;else newPos = event.pageY * 100 / this.size - this.startPos * 100 / this.size;
    let newPrevPanelSize = this.prevPanelSize + newPos;
    let newNextPanelSize = this.nextPanelSize - newPos;

    if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
      this.prevPanelElement.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
      this.nextPanelElement.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
      this._panelSizes[this.prevPanelIndex] = newPrevPanelSize;
      this._panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
    }
  }

  resizeEnd(event) {
    if (this.isStateful()) {
      this.saveState();
    }

    this.onResizeEnd.emit({
      originalEvent: event,
      sizes: this._panelSizes
    });
    primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing');
    primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-splitter-resizing');
    this.clear();
  }

  onGutterMouseDown(event, index) {
    this.resizeStart(event, index);
    this.bindMouseListeners();
  }

  onGutterTouchStart(event, index) {
    if (event.cancelable) {
      this.resizeStart(event, index);
      this.bindTouchListeners();
      event.preventDefault();
    }
  }

  onGutterTouchEnd(event) {
    this.resizeEnd(event);
    this.unbindTouchListeners();
    if (event.cancelable) event.preventDefault();
  }

  validateResize(newPrevPanelSize, newNextPanelSize) {
    if (this.minSizes.length >= 1 && this.minSizes[0] && this.minSizes[0] > newPrevPanelSize) {
      return false;
    }

    if (this.minSizes.length > 1 && this.minSizes[1] && this.minSizes[1] > newNextPanelSize) {
      return false;
    }

    return true;
  }

  bindMouseListeners() {
    if (!this.mouseMoveListener) {
      this.mouseMoveListener = event => this.onResize(event);

      document.addEventListener('mousemove', this.mouseMoveListener);
    }

    if (!this.mouseUpListener) {
      this.mouseUpListener = event => {
        this.resizeEnd(event);
        this.unbindMouseListeners();
      };

      document.addEventListener('mouseup', this.mouseUpListener);
    }
  }

  bindTouchListeners() {
    if (!this.touchMoveListener) {
      this.touchMoveListener = event => this.onResize(event.changedTouches[0]);

      document.addEventListener('touchmove', this.touchMoveListener);
    }

    if (!this.touchEndListener) {
      this.touchEndListener = event => {
        this.resizeEnd(event);
        this.unbindTouchListeners();
      };

      document.addEventListener('touchend', this.touchEndListener);
    }
  }

  unbindMouseListeners() {
    if (this.mouseMoveListener) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
      this.mouseMoveListener = null;
    }

    if (this.mouseUpListener) {
      document.removeEventListener('mouseup', this.mouseUpListener);
      this.mouseUpListener = null;
    }
  }

  unbindTouchListeners() {
    if (this.touchMoveListener) {
      document.removeEventListener('touchmove', this.touchMoveListener);
      this.touchMoveListener = null;
    }

    if (this.touchEndListener) {
      document.removeEventListener('touchend', this.touchEndListener);
      this.touchEndListener = null;
    }
  }

  clear() {
    this.dragging = false;
    this.size = null;
    this.startPos = null;
    this.prevPanelElement = null;
    this.nextPanelElement = null;
    this.prevPanelSize = null;
    this.nextPanelSize = null;
    this.gutterElement = null;
    this.prevPanelIndex = null;
  }

  isNested() {
    if (this.el.nativeElement) {
      let parent = this.el.nativeElement.parentElement;

      while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(parent, 'p-splitter')) {
        parent = parent.parentElement;
      }

      return parent !== null;
    } else {
      return false;
    }
  }

  isStateful() {
    return this.stateKey != null;
  }

  getStorage() {
    switch (this.stateStorage) {
      case 'local':
        return window.localStorage;

      case 'session':
        return window.sessionStorage;

      default:
        throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
    }
  }

  saveState() {
    this.getStorage().setItem(this.stateKey, JSON.stringify(this._panelSizes));
  }

  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);

    if (stateString) {
      this._panelSizes = JSON.parse(stateString);
      let children = [...this.containerViewChild.nativeElement.children].filter(child => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(child, 'p-splitter-panel'));
      children.forEach((child, i) => {
        child.style.flexBasis = 'calc(' + this._panelSizes[i] + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
      });
      return true;
    }

    return false;
  }

  containerClass() {
    return {
      'p-splitter p-component': true,
      'p-splitter-horizontal': this.layout === "horizontal",
      'p-splitter-vertical': this.layout === "vertical"
    };
  }

  panelContainerClass() {
    return {
      'p-splitter-panel': true,
      'p-splitter-panel-nested': true
    };
  }

  gutterStyle() {
    if (this.horizontal()) return {
      width: this.gutterSize + 'px'
    };else return {
      height: this.gutterSize + 'px'
    };
  }

  horizontal() {
    return this.layout === 'horizontal';
  }

}

Splitter.ɵfac = function Splitter_Factory(t) {
  return new (t || Splitter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

Splitter.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Splitter,
  selectors: [["p-splitter"]],
  contentQueries: function Splitter_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Splitter_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  hostVars: 2,
  hostBindings: function Splitter_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-splitter-panel-nested", ctx.nested);
    }
  },
  inputs: {
    styleClass: "styleClass",
    panelStyleClass: "panelStyleClass",
    style: "style",
    panelStyle: "panelStyle",
    stateStorage: "stateStorage",
    stateKey: "stateKey",
    layout: "layout",
    gutterSize: "gutterSize",
    panelSizes: "panelSizes",
    minSizes: "minSizes"
  },
  outputs: {
    onResizeEnd: "onResizeEnd",
    onResizeStart: "onResizeStart"
  },
  decls: 3,
  vars: 5,
  consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["ngFor", "", 3, "ngForOf"], [4, "ngTemplateOutlet"], ["class", "p-splitter-gutter", 3, "ngStyle", "mousedown", "touchstart", 4, "ngIf"], [1, "p-splitter-gutter", 3, "ngStyle", "mousedown", "touchstart"], [1, "p-splitter-gutter-handle"]],
  template: function Splitter_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Splitter_ng_template_2_Template, 3, 6, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".p-splitter{display:flex;flex-wrap:nowrap}.p-splitter-vertical{flex-direction:column}.p-splitter-panel{flex-grow:1}.p-splitter-panel-nested{display:flex}.p-splitter-panel p-splitter{flex-grow:1}.p-splitter-panel .p-splitter{flex-grow:1;border:0}.p-splitter-gutter{flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:col-resize}.p-splitter-horizontal.p-splitter-resizing{cursor:col-resize;-webkit-user-select:none;-ms-user-select:none;user-select:none}.p-splitter-horizontal>.p-splitter-gutter>.p-splitter-gutter-handle{height:24px;width:100%}.p-splitter-horizontal>.p-splitter-gutter{cursor:col-resize}.p-splitter-vertical.p-splitter-resizing{cursor:row-resize;-webkit-user-select:none;-ms-user-select:none;user-select:none}.p-splitter-vertical>.p-splitter-gutter{cursor:row-resize}.p-splitter-vertical>.p-splitter-gutter>.p-splitter-gutter-handle{width:24px;height:100%}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Splitter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-splitter',
      template: `
        <div #container [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-template ngFor let-panel let-i="index" [ngForOf]="panels">
                <div [ngClass]="panelContainerClass()" [class]="panelStyleClass" [ngStyle]="panelStyle">
                    <ng-container *ngTemplateOutlet="panel"></ng-container>
                </div>
                <div class="p-splitter-gutter" *ngIf="i !== (panels.length - 1)" [ngStyle]="gutterStyle()"
                    (mousedown)="onGutterMouseDown($event, i)" (touchstart)="onGutterTouchStart($event, i)">
                    <div class="p-splitter-gutter-handle"></div>
                </div>
            </ng-template>
        </div>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styleUrls: ['./splitter.css'],
      host: {
        'class': 'p-element',
        '[class.p-splitter-panel-nested]': 'nested'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stateStorage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stateKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    layout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onResizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onResizeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate]
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container', {
        static: false
      }]
    }]
  });
})();

class SplitterModule {}

SplitterModule.ɵfac = function SplitterModule_Factory(t) {
  return new (t || SplitterModule)();
};

SplitterModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SplitterModule,
  declarations: [Splitter],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  exports: [Splitter, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
SplitterModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [Splitter, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
      declarations: [Splitter]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=primeng-splitter.js.map

/***/ }),

/***/ 90845:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 95006);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 21572:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/splitter */ 86893);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 90845);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 95006);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directive/directives.module */ 69513);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            primeng_splitter__WEBPACK_IMPORTED_MODULE_8__.SplitterModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 95006:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 78102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 17603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 55646);
/* harmony import */ var src_app_shared_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/webSocket */ 99190);







let HomePage = class HomePage {
    constructor(route, storage) {
        this.route = route;
        this.storage = storage;
    }
    ngOnInit() {
        (0,src_app_shared_webSocket__WEBPACK_IMPORTED_MODULE_3__.setupWebSockets)();
    }
    setFluxo(fluxo) {
        this.currentFluxo = fluxo;
        this.route.navigateByUrl(`fluxo-${fluxo}`);
    }
    canLoad(fluxo) {
        const { perfil } = this.storage.getLocalUser().user;
        switch (perfil.nome) {
            case 'OPERADOR':
                return [2, 3, 4, 5, 7, 9].includes(fluxo);
            case 'SUPERVISOR':
                return [1, 6, 8, 10, 11].includes(fluxo);
            case 'GERENTE':
                return [1, 6, 8, 10, 11].includes(fluxo);
            case 'ADMIN':
                return [-1].includes(fluxo);
        }
        return false;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 17603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  min-width: 260px !important;\n  max-width: 260px !important;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XG4gICAgbWluLXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjYwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn0iXX0= */");

/***/ }),

/***/ 78102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Fluxos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br>\n  <div class=\"splitter-container\">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col *ngIf=\"canLoad(1)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(1)\" shape=\"round\">Saída Tesouraria</ion-button>\n        </ion-col>\n\n        <ion-col *ngIf=\"canLoad(2)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(2)\" shape=\"round\">Cofre</ion-button>\n        </ion-col>\n\n        <ion-col *ngIf=\"canLoad(3)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(3)\" shape=\"round\">PIX</ion-button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col *ngIf=\"canLoad(4)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(4)\" shape=\"round\">Cartão</ion-button>\n        </ion-col>\n\n        <ion-col *ngIf=\"canLoad(5)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(5)\" shape=\"round\">Transf. Operadora</ion-button>\n        </ion-col>\n\n        <ion-col *ngIf=\"canLoad(6)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(6)\" shape=\"round\">Despesa</ion-button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col *ngIf=\"canLoad(7)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(7)\" shape=\"round\">Entrada Tesouraria</ion-button>\n        </ion-col>\n\n        <ion-col *ngIf=\"canLoad(8)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(8)\" shape=\"round\">Carro Forte</ion-button>\n        </ion-col>\n\n        <ion-col *ngIf=\"canLoad(9)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(9)\" shape=\"round\">Venda de produto</ion-button>\n        </ion-col>\n\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col *ngIf=\"canLoad(10)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(10)\" shape=\"round\">Bolão</ion-button>\n        </ion-col>\n\n        <ion-col *ngIf=\"canLoad(11)\">\n          <ion-button color=\"primary\" size=\"large\" (click)=\"setFluxo(11)\" shape=\"round\">Fechamento</ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n  <br>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map