(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_perfil_perfil_module_ts"],{

/***/ 43170:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-image.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "ImageModule": () => (/* binding */ ImageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 88638);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 80938);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 63821);









const _c0 = ["mask"];

function Image_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Image_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Image_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.indicatorTemplate);
  }
}

function Image_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
  }
}

function Image_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.onImageClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Image_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Image_div_2_ng_template_2_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.indicatorTemplate)("ngIfElse", _r3);
  }
}

const _c1 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};

const _c2 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};

function Image_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Image_div_3_div_13_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.onAnimationStart($event);
    })("@animation.done", function Image_div_3_div_13_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.onAnimationEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_div_13_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r13.onPreviewImageClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r9.showTransitionOptions, ctx_r9.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.imagePreviewStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}

function Image_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.onMaskClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r16.rotateRight();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r17.rotateLeft();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.zoomOut();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r19.zoomIn();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Image_div_3_div_13_Template, 2, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.zoomDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.zoomDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previewVisible);
  }
}

class Image {
  constructor(config, cd) {
    this.config = config;
    this.cd = cd;
    this.preview = false;
    this.showTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.maskVisible = false;
    this.previewVisible = false;
    this.rotate = 0;
    this.scale = 1;
    this.previewClick = false;
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'indicator':
          this.indicatorTemplate = item.template;
          break;

        default:
          this.indicatorTemplate = item.template;
          break;
      }
    });
  }

  onImageClick() {
    if (this.preview) {
      this.maskVisible = true;
      this.previewVisible = true;
    }
  }

  onMaskClick() {
    if (!this.previewClick) {
      this.previewVisible = false;
      this.rotate = 0;
      this.scale = 1;
    }

    this.previewClick = false;
  }

  onPreviewImageClick() {
    this.previewClick = true;
  }

  rotateRight() {
    this.rotate += 90;
    this.previewClick = true;
  }

  rotateLeft() {
    this.rotate -= 90;
    this.previewClick = true;
  }

  zoomIn() {
    this.scale = this.scale + 0.1;
    this.previewClick = true;
  }

  zoomOut() {
    this.scale = this.scale - 0.1;
    this.previewClick = true;
  }

  zoomDisabled() {
    return this.scale <= 0.5 || this.scale >= 1.5;
  }

  onAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.container = event.element;
        this.wrapper = this.container.parentElement;
        this.appendContainer();
        this.moveOnTop();
        break;

      case 'void':
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
        break;
    }
  }

  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
        this.maskVisible = false;
        this.container = null;
        this.wrapper = null;
        this.cd.markForCheck();
        this.onHide.emit({});
        break;

      case 'visible':
        this.onShow.emit({});
        break;
    }
  }

  moveOnTop() {
    primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.config.zIndex.modal);
    this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
  }

  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }

  imagePreviewStyle() {
    return {
      transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')'
    };
  }

  containerClass() {
    return {
      'p-image p-component': true,
      'p-image-preview-container': this.preview
    };
  }

}

Image.ɵfac = function Image_Factory(t) {
  return new (t || Image)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

Image.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Image,
  selectors: [["p-image"]],
  contentQueries: function Image_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Image_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    imageClass: "imageClass",
    imageStyle: "imageStyle",
    styleClass: "styleClass",
    style: "style",
    src: "src",
    alt: "alt",
    width: "width",
    height: "height",
    appendTo: "appendTo",
    preview: "preview",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide"
  },
  decls: 4,
  vars: 13,
  consts: [[3, "ngClass", "ngStyle"], [3, "ngStyle"], ["class", "p-image-preview-indicator", 3, "click", 4, "ngIf"], ["class", "p-image-mask p-component-overlay p-component-overlay-enter", 3, "click", 4, "ngIf"], [1, "p-image-preview-indicator", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [4, "ngTemplateOutlet"], [1, "p-image-preview-icon", "pi", "pi-eye"], [1, "p-image-mask", "p-component-overlay", "p-component-overlay-enter", 3, "click"], ["mask", ""], [1, "p-image-toolbar"], ["type", "button", 1, "p-image-action", "p-link", 3, "click"], [1, "pi", "pi-refresh"], [1, "pi", "pi-undo"], ["type", "button", 1, "p-image-action", "p-link", 3, "disabled", "click"], [1, "pi", "pi-search-minus"], [1, "pi", "pi-search-plus"], ["type", "button", 1, "p-image-action", "p-link"], [1, "pi", "pi-times"], [4, "ngIf"], [1, "p-image-preview", 3, "ngStyle", "click"]],
  template: function Image_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Image_div_2_Template, 4, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Image_div_3_Template, 14, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.imageClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.imageStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.alt)("width", ctx.width)("height", ctx.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
  styles: [".p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon{font-size:1.5rem}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Image, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-image',
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <img [attr.src]="src" [attr.alt]="alt" [attr.width]="width" [attr.height]="height" [ngStyle]="imageStyle" [class]="imageClass" />
            <div class="p-image-preview-indicator" *ngIf="preview" (click)="onImageClick()">
                <ng-container *ngIf="indicatorTemplate;else defaultTemplate">
                    <ng-container *ngTemplateOutlet="indicatorTemplate"></ng-container>
                </ng-container>
                <ng-template #defaultTemplate>
                    <i class="p-image-preview-icon pi pi-eye"></i>
                </ng-template>
            </div>
            <div #mask class="p-image-mask p-component-overlay p-component-overlay-enter" *ngIf="maskVisible" (click)="onMaskClick()">
                <div class="p-image-toolbar">
                    <button class="p-image-action p-link" (click)="rotateRight()" type="button">
                        <i class="pi pi-refresh"></i>
                    </button>
                    <button class="p-image-action p-link" (click)="rotateLeft()" type="button">
                        <i class="pi pi-undo"></i>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomOut()" type="button" [disabled]="zoomDisabled()">
                        <i class="pi pi-search-minus"></i>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomIn()" type="button" [disabled]="zoomDisabled()">
                        <i class="pi pi-search-plus"></i>
                    </button>
                    <button class="p-image-action p-link" type="button">
                        <i class="pi pi-times"></i>
                    </button>
                </div>
                <div *ngIf="previewVisible" [@animation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}"
                    (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)">
                    <img [attr.src]="src" class="p-image-preview" [ngStyle]="imagePreviewStyle()" (click)="onPreviewImageClick()"/>
                </div>
            </div>
        </span>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }))])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styleUrls: ['./image.css'],
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    imageClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preview: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['mask']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate]
    }]
  });
})();

class ImageModule {}

ImageModule.ɵfac = function ImageModule_Factory(t) {
  return new (t || ImageModule)();
};

ImageModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ImageModule,
  declarations: [Image],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  exports: [Image, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
ImageModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      exports: [Image, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
      declarations: [Image]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=primeng-image.js.map

/***/ }),

/***/ 14616:
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 27335);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 46583:
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/image */ 43170);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/password */ 22572);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 33103);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/message */ 26999);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ 75127);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 14616);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 27335);
/* harmony import */ var src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directive/directives.module */ 69513);













let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule,
            src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            primeng_image__WEBPACK_IMPORTED_MODULE_8__.ImageModule,
            primeng_password__WEBPACK_IMPORTED_MODULE_9__.PasswordModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_11__.MessageModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_12__.PanelModule,
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 27335:
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./perfil.page.html */ 33827);
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss */ 25831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enumerations/toast.enum */ 85382);
/* harmony import */ var src_app_shared_services_auth_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/password.service */ 29999);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 55646);
/* harmony import */ var src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/funcionario/funcionario.service */ 43270);










let PerfilPage = class PerfilPage {
    constructor(passwordService, toastService, funcionarioService, storage) {
        this.passwordService = passwordService;
        this.toastService = toastService;
        this.funcionarioService = funcionarioService;
        this.storage = storage;
        this.senha = '';
        this.isLoaded = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    }
    ngOnInit() {
        this.loadUser();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadUser() {
        const { id } = this.storage.getLocalUser().user;
        const sub = this.funcionarioService.findById(id)
            .subscribe(data => {
            this.user = data;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    setUserImage(user) {
        return user.avatar || "assets/imgs/outros/default-user.jpg";
    }
    uploadFile(event) {
        const file = event.target.files[0];
        const sub = this.funcionarioService.uploadAvatar(file)
            .subscribe(response => {
            this.presentToast('success', 'Sucesso!', 'Foto alterada!', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__.Toast.shortDuration);
            this.isLoaded = false;
            this.loadUser();
        });
        this.subscriptions.add(sub);
    }
    trocarSenha() {
        const sub = this.passwordService.change(this.senha)
            .subscribe(response => {
            this.presentToast('success', 'Sucesso!', 'Senha alterada!', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__.Toast.shortDuration);
        });
        this.subscriptions.add(sub);
    }
    disabledBTN() {
        return this.senha.length < 8 ? true : false;
    }
    presentToast(severity, summary, detail, life) {
        this.toastService.clear();
        this.toastService.add({
            severity,
            summary,
            detail,
            life,
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_shared_services_auth_password_service__WEBPACK_IMPORTED_MODULE_3__.PasswordService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService },
    { type: src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_5__.FuncionarioService },
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PerfilPage);



/***/ }),

/***/ 43270:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/funcionario/funcionario.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuncionarioService": () => (/* binding */ FuncionarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 35848);




let FuncionarioService = class FuncionarioService {
    constructor(http) {
        this.http = http;
    }
    findById(user_id) {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario/${user_id}`, {
            responseType: 'json',
        });
    }
    listAllLogedUsers(loterica_id) {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario/logged/${loterica_id}`, {
            responseType: 'json',
        });
    }
    listAllUsers(loterica_id, filter) {
        const params = {};
        if (filter && filter.perfil_nomes) {
            params.perfil_nomes = JSON.stringify(filter.perfil_nomes);
        }
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario/all/${loterica_id}`, {
            responseType: 'json',
            params
        });
    }
    createUser(newUser) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario`, newUser, {
            responseType: 'json',
        });
    }
    updateUser(updatedUser, idUser) {
        return this.http.put(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario/${idUser}`, updatedUser, {
            responseType: 'json',
        });
    }
    createEndereco(newEndereco, user_id) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario/${user_id}/endereco`, newEndereco, {
            responseType: 'json',
        });
    }
    updateEndereco(newEndereco, user_id) {
        return this.http.put(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario/${user_id}/endereco`, newEndereco, {
            responseType: 'json',
        });
    }
    uploadAvatar(anexo) {
        const formData = new FormData();
        formData.append('avatar', anexo);
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/funcionario/avatar`, formData);
    }
};
FuncionarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
FuncionarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FuncionarioService);



/***/ }),

/***/ 25831:
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".user-name {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n.user-name strong {\n  font-style: italic;\n}\n:host ::ng-deep .perfil-container .p-button {\n  height: 40px !important;\n}\n.change-img {\n  font-size: 12px;\n  color: var(--back-text);\n  margin-bottom: 15px;\n}\n.change-img:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFLUTtFQUNJLHVCQUFBO0FBRlo7QUFPQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSko7QUFPQTtFQUNJLGVBQUE7QUFKSiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucGVyZmlsLWNvbnRhaW5lciB7XG4gICAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNoYW5nZS1pbWcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tYmFjay10ZXh0KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2hhbmdlLWltZzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ 33827:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n    <ion-grid *ngIf=\"isLoaded\" style=\"margin: auto; text-align: center;\">\n      <p-panel header=\"Seu perfil\">\n        <ion-row>\n          <ion-col>\n            <span class=\"user-name\">Olá, <strong>{{user.nome}}</strong>! </span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-image [src]=\"setUserImage(user)\" [alt]=\"user.nome\" width=\"250\" height=\"300\">\n            </p-image>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class=\"change-img\" (click)=\"fileInput.click()\">Clique para alterar foto do perfil (300x250)</span>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-start\">\n          <ion-col style=\"margin: auto; text-align: center;\" class=\"ion-align-self-center\">\n            <h5>Trocar senha</h5>\n            <div class=\"perfil-container\">\n              <p-password [(ngModel)]=\"senha\" [toggleMask]=\"true\" [feedback]=\"false\"></p-password>\n              <p-button class=\"password-btn\" icon=\"pi pi-pencil\" [disabled]=\"disabledBTN()\" label=\"Alterar\"\n                (click)=\"trocarSenha()\"></p-button>\n            </div>\n            <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Pelo menos 8 caracteres\"\n              *ngIf=\"disabledBTN()\">\n            </p-message>\n          </ion-col>\n        </ion-row>\n      </p-panel>\n    </ion-grid>\n\n</ion-content>\n\n<input class=\"ion-hide\" #fileInput type=\"file\" (change)=\"uploadFile($event)\" id=\"file-input\"\n  accept=\"image/png, image/jpeg\" />");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfil_perfil_module_ts.js.map