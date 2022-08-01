(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 25926:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 84418);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 60441:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 25926);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 84418);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 84418:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 63697);
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ 74797);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/preferences/preferences.service */ 31405);
/* harmony import */ var src_app_shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/theme/theme.service */ 92389);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 55646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/config/api.config */ 35848);



/* eslint-disable max-len */










let LoginPage = class LoginPage {
    constructor(router, menu, auth, preferencesService, themeService, storage, activatedRoute) {
        this.router = router;
        this.menu = menu;
        this.auth = auth;
        this.preferencesService = preferencesService;
        this.themeService = themeService;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.credenciais = {
            email: '',
            senha: '',
            current_terminal: '',
        };
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    }
    ngOnInit() {
        document.body.setAttribute('color-theme', 'light');
        this.themeService.switchTheme('saga-blue');
        this.menu.close();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    ionViewWillEnter() {
        document.body.setAttribute('color-theme', 'light');
        this.themeService.switchTheme('saga-blue');
        this.menu.close();
        this.menu.enable(false);
    }
    ionViewDidEnter() {
        try {
            const sub = this.auth.refreshToken()
                .subscribe(response => {
                const localUser = this.storage.getLocalUser();
                localUser.token = response.token;
                localUser.refresh_token = response.refresh_token;
                this.auth.loginSucesso(localUser);
                // setupWebSockets();
                this.router.navigateByUrl('home');
            }, error => {
                this.menu.enable(true);
                this.menu.close();
                this.menu.enable(false);
                this.auth.logout();
            });
            this.subscriptions.add(sub);
        }
        catch (e) {
            this.menu.enable(true);
            this.menu.close();
            this.menu.enable(false);
        }
    }
    ionViewWillLeave() {
        const theme = this.preferencesService.getThemePreference();
        document.body.setAttribute('color-theme', theme);
        if (theme === 'dark') {
            this.themeService.switchTheme('bootstrap4-dark-yellow');
        }
        else {
            this.themeService.switchTheme('saga-blue');
        }
        this.menu.enable(true);
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.controlLoginButton()) {
                return;
            }
            if (this.credenciais.email.trim().toUpperCase().includes('URL:')) {
                this.forceNewUrl();
                return;
            }
            const { uuid } = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getId();
            this.credenciais.current_machine_id = uuid;
            const sub = this.auth.authenticate(this.credenciais).subscribe((response) => {
                this.auth.loginSucesso(response);
                const url = this.activatedRoute.snapshot.queryParamMap.get('redirect') ||
                    'home';
                //setupWebSockets();
                this.router.navigateByUrl(url);
            }, error => { });
            this.subscriptions.add(sub);
        });
    }
    forceNewUrl() {
        const { email } = this.credenciais;
        const newUrl = email.trim().toUpperCase().split('URL:').pop().trim();
        (0,src_config_api_config__WEBPACK_IMPORTED_MODULE_7__.changeBaseURL)(newUrl);
    }
    goToRequestReset() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl('password-reset');
        });
    }
    setFocus(nextElement) {
        nextElement.setFocus();
    }
    controlLoginButton() {
        if (this.credenciais.email && this.credenciais.senha) {
            return false;
        }
        return true;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_4__.PreferencesService },
    { type: src_app_shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService },
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  text-align: center;\n  color: black;\n  padding: 1px 20px;\n  font-size: 0.8em;\n}\n\n.credicon {\n  font: bold 2px;\n  color: #2bc48a;\n  text-decoration: none;\n}\n\n.rodape {\n  text-align: center;\n}\n\n@media only screen and (max-width: 599px) {\n  img {\n    max-width: 300px;\n    max-height: 238px;\n  }\n}\n\nimg {\n  display: flex;\n  width: 500px;\n  height: 396px;\n  align-self: center;\n  margin: auto;\n  padding: 10px;\n}\n\na {\n  display: flex;\n  justify-content: center;\n}\n\n.border {\n  border-radius: 23px;\n  max-width: 600px;\n  margin: auto;\n  background-color: var(--ion-color-dark) !important;\n}\n\n.limiter {\n  max-width: 500px;\n  margin: auto;\n}\n\n.container {\n  max-width: 600px;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  align-content: center;\n}\n\n/*\nion-content {\n  --background: url(\"../../assets/Fundos/PC/1.jpg\") no-repeat center center / cover !important;\n}\n*/\n\nion-item {\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7Ozs7Q0FBQTs7QUFLQTtFQUNFLHFCQUFBO0FBQUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxcHggMjBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5jcmVkaWNvbiB7XG4gIGZvbnQ6IGJvbGQgMnB4O1xuICBjb2xvcjogIzJiYzQ4YTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucm9kYXBlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMzhweDtcbiAgfVxufVxuXG5pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMzk2cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuXG4ubGltaXRlciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0Z1bmRvcy9QQy8xLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG59XG4qL1xuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header  [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src=\"assets/imgs/logos/login-bg.png\" alt=\"logo\">\n      </ion-col>\n    </ion-row>\n\n    <div class=\"border\">\n      <div class=\"limiter\">\n        <ion-row>\n          <ion-col>\n            <ion-item style=\"margin-top: 5px;\" color=\"light\">\n              <ion-input color=\"primary\" (keyup.enter)=\"setFocus(pass)\" [(ngModel)]=\"credenciais.email\"\n                [ngModelOptions]=\"{standalone: true}\" type=\"email\" placeholder=\"Insira seu usuário\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item style=\"margin-top: 5px;\" color=\"light\">\n              <ion-input color=\"primary\" (keyup.enter)=\"setFocus(pass)\" [(ngModel)]=\"credenciais.current_terminal\"\n                [ngModelOptions]=\"{standalone: true}\" placeholder=\"Insira seu terminal\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item color=\"light\">\n              <ion-input #pass color=\"primary\" (keyup.enter)=\"login()\" [(ngModel)]=\"credenciais.senha\"\n                [ngModelOptions]=\"{standalone: true}\" type=\"password\" placeholder=\"Insira sua senha\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" fill=\"solid\"\n            [disabled]=\"controlLoginButton()\" (click)=\"login()\">Login</ion-button>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" fill=\"outline\" color=\"warning\"\n             (click)=\"goToRequestReset()\">Esqueci minha senha</ion-button>\n          </ion-col>\n        </ion-row>\n\n      </div>\n\n    </div>\n    <br><br>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map