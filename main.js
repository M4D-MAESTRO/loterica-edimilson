(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth-guard.guard */ 62272);

/* eslint-disable max-len */



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 60441)).then(m => m.LoginPageModule)
    },
    {
        path: 'password-reset',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-steps_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_password-reset_password-reset_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/password-reset/password-reset.module */ 12646)).then(m => m.PasswordResetPageModule),
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 21572)).then(m => m.HomePageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'perfil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-password_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_perfil_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/perfil/perfil.module */ 46583)).then(m => m.PerfilPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'administracao-financeira',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-tabview_js-src_app_shared_services_loterica_lot-306c74"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-financeira_administracao-financeira_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-financeira/administracao-financeira.module */ 68709)).then(m => m.AdministracaoFinanceiraPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
        data: {
            role: ['ADMIN']
        }
    },
    {
        path: 'administracao-recurso',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-steps_js"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-tabview_js-src_app_shared_services_loterica_lot-306c74"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-password_js"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputswitch_js-node_modules_primeng_fesm2015_pr-2a9f27"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-recurso_administracao-recurso_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-recurso/administracao-recurso.module */ 41578)).then(m => m.AdministracaoRecursoPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
        data: {
            role: ['ADMIN']
        }
    },
    {
        path: 'administracao-geral',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-steps_js"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-tabview_js-src_app_shared_services_loterica_lot-306c74"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-password_js"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputswitch_js-node_modules_primeng_fesm2015_pr-2a9f27"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-geral_administracao-geral_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-geral/administracao-geral.module */ 62970)).then(m => m.AdministracaoGeralPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
        data: {
            role: ['ADMIN']
        }
    },
    {
        path: 'transacoes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_transacoes_transacoes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transacoes/transacoes.module */ 46752)).then(m => m.TransacoesPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-1',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-um_fluxo-um_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-um/fluxo-um.module */ 70797)).then(m => m.FluxoUmPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-dois_fluxo-dois_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-dois/fluxo-dois.module */ 38112)).then(m => m.FluxoDoisPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-tres_fluxo-tres_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-tres/fluxo-tres.module */ 82278)).then(m => m.FluxoTresPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-4',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-quatro_fluxo-quatro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-quatro/fluxo-quatro.module */ 68917)).then(m => m.FluxoQuatroPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-5',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-cinco_fluxo-cinco_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-cinco/fluxo-cinco.module */ 47223)).then(m => m.FluxoCincoPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-6',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-seis_fluxo-seis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-seis/fluxo-seis.module */ 11062)).then(m => m.FluxoSeisPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-7',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-sete_fluxo-sete_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-sete/fluxo-sete.module */ 46032)).then(m => m.FluxoSetePageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-8',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-oito_fluxo-oito_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-oito/fluxo-oito.module */ 56378)).then(m => m.FluxoOitoPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-9',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-nove_fluxo-nove_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-nove/fluxo-nove.module */ 89736)).then(m => m.FluxoNovePageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-10',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-dez_fluxo-dez_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-dez/fluxo-dez.module */ 22154)).then(m => m.FluxoDezPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'fluxo-11',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-inputmask_js-src_app_shared_services_funcionari-d171de"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-card_js-node_modules_primeng_fesm2015_primeng-i-e152a3"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-steps_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fluxo-onze_fluxo-onze_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-onze/fluxo-onze.module */ 48340)).then(m => m.FluxoOnzePageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 27194);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dynamicdialog */ 16547);
/* harmony import */ var _shared_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/webSocket */ 99190);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/preferences/preferences.service */ 31405);
/* harmony import */ var _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/theme/theme.service */ 92389);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ 74797);
/* harmony import */ var _shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/app-loader/loader.service */ 38088);
/* harmony import */ var _shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/transacao/transacao.service */ 6887);
/* harmony import */ var _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth/storage.service */ 55646);
/* harmony import */ var _shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/enumerations/statusTransacao.enum */ 58969);
/* harmony import */ var _shared_webSocket_transacao_transacao_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/webSocket/transacao/transacao-socket.service */ 75390);
/* harmony import */ var _shared_components_fluxo_module_nova_transacao_modal_nova_transacao_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/fluxo-module/nova-transacao-modal/nova-transacao-modal.component */ 76289);



















let AppComponent = class AppComponent {
    constructor(preferencesService, themeService, auth, loaderService, transacaoService, storage, transacaoSocketService, dialogService, menu, toastService, modal) {
        this.preferencesService = preferencesService;
        this.themeService = themeService;
        this.auth = auth;
        this.loaderService = loaderService;
        this.transacaoService = transacaoService;
        this.storage = storage;
        this.transacaoSocketService = transacaoSocketService;
        this.dialogService = dialogService;
        this.menu = menu;
        this.toastService = toastService;
        this.modal = modal;
        this.isDarkTheme = false;
        this.transacoesPendentes = 0;
        this.obs = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.blockUI = false;
        this.appPages = [
            { title: 'Fluxo de Transações', url: '/home', icon: 'cash' },
            { title: 'Consultar Transações', url: '/transacoes', icon: 'list' },
            { title: 'ADM. Financeira', url: '/administracao-financeira', icon: 'wallet' },
            { title: 'ADM. Recurso', url: '/administracao-recurso', icon: 'laptop' },
            { title: 'ADM. Geral', url: '/administracao-geral', icon: 'business' },
            { title: 'Perfil', url: '/perfil', icon: 'person' },
        ];
        const theme = this.preferencesService.getThemePreference();
        document.body.setAttribute('color-theme', theme);
        if (theme === 'dark') {
            this.isDarkTheme = true;
            this.themeService.switchTheme('bootstrap4-dark-yellow');
        }
        else {
            this.isDarkTheme = false;
            this.themeService.switchTheme('saga-blue');
        }
    }
    ngOnInit() {
        (0,_shared_webSocket__WEBPACK_IMPORTED_MODULE_2__.setupWebSockets)();
        // this.presentTransacaoRequest();
        this.showModal();
    }
    ionWillOpen() {
        //TODO Adicionar recurso que retorne apenas a quantidade de transacoes PENDENTES (filtrar Status)
        //TODO Verificar memory leak  da abertura de menu
        const { id: user_final_id } = this.storage.getLocalUser().user;
        this.transacaoService.countTransacoes({
            user_final_id,
            status_transacao_cod: _shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_9__.StatusTransacaoEnum.PENDENTE
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.obs))
            .subscribe(data => {
            this.transacoesPendentes = data.count;
        });
    }
    ionDidClose() {
        this.obs.next();
        this.obs.complete();
    }
    toggleDetails(p) {
        if (p.showDetails) {
            p.showDetails = false;
            p.icon = 'ios-arrow-down';
        }
        else {
            p.showDetails = true;
            p.icon = 'ios-arrow-up';
        }
    }
    toggleThemes(event) {
        const { checked } = event.detail;
        if (checked) {
            document.body.setAttribute('color-theme', 'dark');
            this.themeService.switchTheme('bootstrap4-dark-yellow');
            this.preferencesService.setThemePreference('dark');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
            this.preferencesService.setThemePreference('light');
            this.themeService.switchTheme('saga-blue');
        }
    }
    logout() {
        this.auth.logout();
    }
    sincronizar() {
        (0,_shared_webSocket__WEBPACK_IMPORTED_MODULE_2__.setupWebSockets)(true);
    }
    presentTransacaoRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.transacaoSocketService.listenNewTransacao()
                .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                this.blockUI = true;
                const currentMenu = yield this.menu.isEnabled();
                this.menu.enable(true);
                this.menu.open();
                const { transacao } = data;
                this.transacaoService.setTransacaoPendente([transacao]);
                this.ref = this.dialogService.open(_shared_components_fluxo_module_nova_transacao_modal_nova_transacao_modal_component__WEBPACK_IMPORTED_MODULE_11__.NovaTransacaoModalComponent, {
                    header: 'Nova transação requisitada',
                    width: '70%',
                    contentStyle: { "max-height": "500px", "overflow": "auto" },
                    baseZIndex: 999999999999999999999,
                    closable: false,
                });
                this.ref.onClose.subscribe(() => {
                    this.blockUI = false;
                    this.menu.enable(currentMenu);
                });
            }));
        });
    }
    showModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.transacaoSocketService.listenNewTransacao()
                .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                const { transacao } = data;
                this.transacaoService.setTransacaoPendente([transacao]);
                const modal = yield this.modal.create({
                    component: _shared_components_fluxo_module_nova_transacao_modal_nova_transacao_modal_component__WEBPACK_IMPORTED_MODULE_11__.NovaTransacaoModalComponent,
                    backdropDismiss: false,
                    cssClass: 'modal-size-transacao-request',
                });
                return yield modal.present();
            }));
        });
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
AppComponent.ctorParameters = () => [
    { type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_3__.PreferencesService },
    { type: _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService },
    { type: _shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_7__.TransacaoService },
    { type: _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: _shared_webSocket_transacao_transacao_socket_service__WEBPACK_IMPORTED_MODULE_10__.TransacaoSocketService },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__.DialogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.MenuController },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_17__.MessageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 93220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/br */ 48633);
/* harmony import */ var _angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 18366);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 32404);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 33666);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/blockui */ 63250);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressbar */ 55094);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/progressspinner */ 16864);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dynamicdialog */ 16547);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/interceptors/auth-interceptor */ 300);
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/interceptors/error-interceptor */ 89751);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/pipes/pipe.module */ 19502);
/* harmony import */ var _shared_components_fluxo_module_fluxo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/fluxo-module/fluxo.module */ 52372);






















(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)((_angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0___default()), 'pt-BR');
(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.enableProdMode)();
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule,
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__.DynamicDialogModule,
            primeng_blockui__WEBPACK_IMPORTED_MODULE_17__.BlockUIModule,
            _shared_components_fluxo_module_fluxo_module__WEBPACK_IMPORTED_MODULE_7__.FluxoModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule,
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__.ProgressSpinnerModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            primeng_api__WEBPACK_IMPORTED_MODULE_21__.MessageService,
            primeng_api__WEBPACK_IMPORTED_MODULE_21__.ConfirmationService,
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__.DialogService,
            _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.authInterceptorProvider,
            _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_5__.errorInterceptorProvider,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID,
                useValue: 'pt-BR'
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        exports: [primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule, _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule],
    })
], AppModule);

(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_1__.defineCustomElements)(window);


/***/ }),

/***/ 62272:
/*!********************************************!*\
  !*** ./src/app/guards/auth-guard.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardGuard": () => (/* binding */ AuthGuardGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 14089);
/* harmony import */ var _shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/enumerations/toast.enum */ 85382);
/* harmony import */ var _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth/storage.service */ 55646);







let AuthGuardGuard = class AuthGuardGuard {
    constructor(storageService, router, toastService) {
        this.storageService = storageService;
        this.router = router;
        this.toastService = toastService;
    }
    canActivate(next, state) {
        let url = state.url;
        return this.checkUserRole(next, url);
    }
    canActivateChild(next, state) {
        return this.canActivate(next, state);
    }
    canLoad(route, segments) {
        const url = segments.map(s => `/${s}`).join('');
        return this.checkAuthState(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    }
    checkAuthState(redirect) {
        return this.storageService.isLogedInObs().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(is => {
            if (!is) {
                this.presentToast('warn', 'Não autenticado', 'Por favor, realize login', _shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
                this.router.navigate(['/login'], { queryParams: { redirect } });
            }
        }));
    }
    checkUserRole(route, url) {
        if (this.storageService.isLogedIn()) {
            const isAdmin = this.storageService.getUserIsAdmin();
            if (isAdmin) {
                return true;
            }
            const userRole = this.storageService.getRole();
            if ((route.data.role && route.data.role.indexOf(userRole) === -1)) {
                this.presentToast('warn', 'Sem permissão', `Apenas ${route.data.role} podem acessar esta funcionalidade!`, _shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
                this.router.navigate(['/home']);
                return false;
            }
            return true;
        }
        this.presentToast('warn', 'Não autenticado', 'Por favor, realize login', _shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
        this.router.navigate(['/login']);
        return false;
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
AuthGuardGuard.ctorParameters = () => [
    { type: _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService }
];
AuthGuardGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthGuardGuard);



/***/ }),

/***/ 52372:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/fluxo-module/fluxo.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoModule": () => (/* binding */ FluxoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 70472);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 33103);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 57914);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/message */ 26999);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/messages */ 95154);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dataview */ 378);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ 75127);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ 3681);
/* harmony import */ var _justificar_rejeicao_modal_justificar_rejeicao_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./justificar-rejeicao-modal/justificar-rejeicao-modal.component */ 19822);
/* harmony import */ var _nova_transacao_modal_nova_transacao_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nova-transacao-modal/nova-transacao-modal.component */ 76289);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directive/directives.module */ 69513);
















let FluxoModule = class FluxoModule {
};
FluxoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_justificar_rejeicao_modal_justificar_rejeicao_modal_component__WEBPACK_IMPORTED_MODULE_0__.JustificarRejeicaoModalComponent, _nova_transacao_modal_nova_transacao_modal_component__WEBPACK_IMPORTED_MODULE_1__.NovaTransacaoModalComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_8__.DataViewModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_9__.PanelModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_13__.MessageModule,
            primeng_messages__WEBPACK_IMPORTED_MODULE_14__.MessagesModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__.ConfirmDialogModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule
        ],
        exports: [_justificar_rejeicao_modal_justificar_rejeicao_modal_component__WEBPACK_IMPORTED_MODULE_0__.JustificarRejeicaoModalComponent, _nova_transacao_modal_nova_transacao_modal_component__WEBPACK_IMPORTED_MODULE_1__.NovaTransacaoModalComponent]
    })
], FluxoModule);



/***/ }),

/***/ 19822:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-module/justificar-rejeicao-modal/justificar-rejeicao-modal.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JustificarRejeicaoModalComponent": () => (/* binding */ JustificarRejeicaoModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_justificar_rejeicao_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./justificar-rejeicao-modal.component.html */ 62815);
/* harmony import */ var _justificar_rejeicao_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./justificar-rejeicao-modal.component.scss */ 92033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 93324);





let JustificarRejeicaoModalComponent = class JustificarRejeicaoModalComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.isDialogVisible = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.erroMsg = 'Entre com seis caracteres numéricos';
        this.form = this.formBuilder.group({
            justificativa: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
        });
    }
    ngOnInit() { }
    save() {
        if (this.saveButtonControl()) {
            return;
        }
        const justificativa = this.form.get('justificativa').value;
        this.form.reset();
        this.notifyParent.emit({
            justificativa,
            hasToClose: true,
        });
    }
    isInputError(inputName) {
        const resp = this.form.controls[inputName].dirty && this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    saveButtonControl() {
        if (this.form.invalid) {
            return true;
        }
        return false;
    }
    cancel(event) {
        const { className } = event.target;
        if (className.includes('p-dialog-header-close')) {
            this.notifyParent.emit({
                justificativa: undefined,
                hasToClose: true,
            });
        }
    }
    close() {
        this.notifyParent.emit({
            justificativa: undefined,
            hasToClose: true,
        });
    }
};
JustificarRejeicaoModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
JustificarRejeicaoModalComponent.propDecorators = {
    isDialogVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    notifyParent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
JustificarRejeicaoModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-justificar-rejeicao-modal',
        template: _raw_loader_justificar_rejeicao_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_justificar_rejeicao_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JustificarRejeicaoModalComponent);



/***/ }),

/***/ 76289:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-module/nova-transacao-modal/nova-transacao-modal.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovaTransacaoModalComponent": () => (/* binding */ NovaTransacaoModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_nova_transacao_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nova-transacao-modal.component.html */ 16958);
/* harmony import */ var _nova_transacao_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nova-transacao-modal.component.scss */ 69883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enumerations/statusTransacao.enum */ 58969);
/* harmony import */ var src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enumerations/toast.enum */ 85382);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 55646);
/* harmony import */ var src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transacao/transacao.service */ 6887);
/* harmony import */ var src_app_shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/ExternalLink */ 93301);












let NovaTransacaoModalComponent = class NovaTransacaoModalComponent {
    constructor(transacaoService, confirmationService, modal, toastService, storage, menu) {
        this.transacaoService = transacaoService;
        this.confirmationService = confirmationService;
        this.modal = modal;
        this.toastService = toastService;
        this.storage = storage;
        this.menu = menu;
        this.transacoes = [];
        this.isLoaded = true;
        this.showJustificativaModal = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    }
    ngOnInit() {
        this.loadTransacoes();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadTransacoes() {
        this.transacoes = this.transacaoService.getTransacaoPendente();
    }
    downloadAnexo(transacao) {
        this.toastService.clear();
        if (transacao.anexo) {
            (0,src_app_shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_6__.externalLinkHandle)(transacao.anexo);
        }
        else {
            this.presentToast("warn", "Sem anexo", "A transação não possui anexo", src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
        }
    }
    aprovar(transacao) {
        try {
            this.menu.close();
        }
        catch (e) { }
        const { id } = transacao;
        this.confirmationDialog(src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__.StatusTransacaoEnum.APROVADO, id);
    }
    rejeitar(transacao) {
        try {
            this.menu.close();
        }
        catch (e) { }
        this.showJustificativaModal = true;
        this.transacaoToBeDeleted = transacao;
    }
    confirmationDialog(status, transacao_id) {
        const operacao = status == 1 ? 'Rejeitada' : 'Aprovada';
        this.confirmationService.confirm({
            message: `Deseja mesmo que esta transação seja ${operacao}?`,
            header: 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const sub = this.transacaoService.changeStatus({ status, transacao_id })
                    .subscribe(data => {
                    this.modal.dismiss();
                    this.presentToast('success', 'Sucesso!', `${operacao} com sucesso!`, src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
                });
                this.subscriptions.add(sub);
            },
            reject: (type) => {
                this.toastService.clear();
            }
        });
    }
    getNotification(event) {
        console.log(event);
        const { hasToClose, justificativa } = event;
        if (hasToClose) {
            this.showJustificativaModal = false;
        }
        if (justificativa) {
            const { id } = this.transacaoToBeDeleted;
            const sub = this.transacaoService.changeStatus({ status: src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__.StatusTransacaoEnum.REJEITADO, transacao_id: id, justificativa, })
                .subscribe(data => {
                this.modal.dismiss();
                this.transacaoToBeDeleted = undefined;
                this.presentToast('success', 'Sucesso!', `Rejeitado com sucesso!`, src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
            });
            this.subscriptions.add(sub);
        }
        this.transacaoToBeDeleted = undefined;
    }
    showModal(component, componentProps) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component,
                backdropDismiss: false,
                cssClass: 'modal-size-80',
                componentProps,
            });
            modal.onDidDismiss().then((data) => {
                const { data: hasUpdate } = data;
                if (hasUpdate) {
                    this.isLoaded = false;
                    const { loterica_id } = this.storage.getLocalUser().user;
                    this.presentToast('success', 'Sucesso!', 'Operação bem sucedida!', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
                }
            });
            return yield modal.present();
        });
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
NovaTransacaoModalComponent.ctorParameters = () => [
    { type: src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_5__.TransacaoService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService },
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController }
];
NovaTransacaoModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-nova-transacao-modal',
        template: _raw_loader_nova_transacao_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nova_transacao_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NovaTransacaoModalComponent);



/***/ }),

/***/ 69513:
/*!*******************************************************!*\
  !*** ./src/app/shared/directive/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _scroll_theme_scroll_theme_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-theme/scroll-theme.directive */ 42234);




let DirectivesModule = class DirectivesModule {
};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_scroll_theme_scroll_theme_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollThemeDirective],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ],
        exports: [_scroll_theme_scroll_theme_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollThemeDirective],
    })
], DirectivesModule);



/***/ }),

/***/ 42234:
/*!*************************************************************************!*\
  !*** ./src/app/shared/directive/scroll-theme/scroll-theme.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollThemeDirective": () => (/* binding */ ScrollThemeDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 42741);


let ScrollThemeDirective = class ScrollThemeDirective {
    constructor(el) {
        const stylesheet = `
      ::-webkit-scrollbar {
      width: 10px;
      }
      ::-webkit-scrollbar-track {
      background: #0f0f0f;
      }
      ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: linear-gradient(var(--primary-color), var(--ion-color-dark));
      border: 4px solid #020202;
      }
      ::-webkit-scrollbar-thumb:hover {
      }
    `;
        const styleElmt = el.nativeElement.shadowRoot.querySelector('style');
        if (styleElmt) {
            styleElmt.append(stylesheet);
        }
        else {
            const barStyle = document.createElement('style');
            barStyle.append(stylesheet);
            el.nativeElement.shadowRoot.appendChild(barStyle);
        }
    }
};
ScrollThemeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ScrollThemeDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appScrollTheme]'
    })
], ScrollThemeDirective);



/***/ }),

/***/ 58969:
/*!*************************************************************!*\
  !*** ./src/app/shared/enumerations/statusTransacao.enum.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusTransacaoEnum": () => (/* binding */ StatusTransacaoEnum)
/* harmony export */ });
var StatusTransacaoEnum;
(function (StatusTransacaoEnum) {
    StatusTransacaoEnum[StatusTransacaoEnum["PENDENTE"] = 0] = "PENDENTE";
    StatusTransacaoEnum[StatusTransacaoEnum["REJEITADO"] = 1] = "REJEITADO";
    StatusTransacaoEnum[StatusTransacaoEnum["APROVADO"] = 2] = "APROVADO";
})(StatusTransacaoEnum || (StatusTransacaoEnum = {}));


/***/ }),

/***/ 85382:
/*!***************************************************!*\
  !*** ./src/app/shared/enumerations/toast.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
var Toast;
(function (Toast) {
    Toast[Toast["shortDuration"] = 5000] = "shortDuration";
    Toast[Toast["mediumDuration"] = 10000] = "mediumDuration";
    Toast[Toast["longDuration"] = 15000] = "longDuration";
})(Toast || (Toast = {}));


/***/ }),

/***/ 300:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth-interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "authInterceptorProvider": () => (/* binding */ authInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 35848);
/* harmony import */ var _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/storage.service */ 55646);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enumerations/toast.enum */ 85382);








let AuthInterceptor = class AuthInterceptor {
    constructor(storage, toastService, router) {
        this.storage = storage;
        this.toastService = toastService;
        this.router = router;
    }
    // terminar o refresh token
    intercept(req, next) {
        this.toastService.clear();
        const localUser = this.storage.getLocalUser();
        const N = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL.length;
        const reqToApi = req.url.substring(0, N) === _config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL;
        if (localUser && reqToApi) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localUser.refresh_token),
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
    checkToken() {
        this.presentToast('warn', 'Acesse novamente', 'É preciso autenticar-se novamente', _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__.Toast.mediumDuration);
        this.router.navigateByUrl('login');
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
AuthInterceptor.ctorParameters = () => [
    { type: _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthInterceptor);

const authInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};


/***/ }),

/***/ 89751:
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error-interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor),
/* harmony export */   "errorInterceptorProvider": () => (/* binding */ errorInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7535);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 72072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 51076);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 27813);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enumerations/toast.enum */ 85382);
/* harmony import */ var _services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app-loader/loader.service */ 38088);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/api.config */ 35848);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ 74797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 29535);












let ErrorInterceptor = class ErrorInterceptor {
    constructor(alertContr, toastService, loaderService, authService, router, menu) {
        this.alertContr = alertContr;
        this.toastService = toastService;
        this.loaderService = loaderService;
        this.authService = authService;
        this.router = router;
        this.menu = menu;
        this.timeoutTiming = 10000;
    }
    intercept(req, next) {
        this.loaderService.isLoading.next(true);
        this.loadBlock(true);
        return next
            .handle(req)
            //Pipe para Erros
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { statusText } = response;
            if (statusText === 'Unknown Error') {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Timeout');
            }
            const { status } = response;
            if (response.error instanceof Blob) {
                response.error = JSON.parse(yield response.error.text());
            }
            const { message } = response.error;
            switch (Number(status)) {
                case 400:
                    this.handle400(message);
                    break;
                case 403:
                    this.handle403(message);
                    break;
                case 401:
                    this.handle401(message);
                    break;
                case 422:
                    this.handle422(message);
                    break;
                case 404:
                    this.handle404(message);
                    break;
                default:
                    this.handleDefaultError(message, status);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(message);
        })))
            //Pipe para Timeout
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(this.timeoutTiming), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((response) => {
            if (response !== 'Timeout') {
                return;
            }
            const e = `Tempo de espera excedido: ${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}`;
            this.handle408(e);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(e);
        }))
            //Pipe para loading de requisições
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.loaderService.isLoading.next(false);
            this.loadBlock(false);
        }));
    }
    handle400(error) {
        this.presentToast('warn', '400 - Requisição com problema', error, _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
    }
    handle401(error) {
        if (error == 'Invalid token' || error == 'Token is missing') {
            this.presentToast('warn', 'Acesse novamente', 'É preciso autenticar-se novamente', _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
            this.menu.close();
            this.authService.logout();
            this.router.navigateByUrl('login');
        }
        else {
            this.presentToast('warn', '401 - Não autorizado', error, _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
        }
    }
    handle403(error) {
        this.presentToast('warn', '403 - Proibido', error, _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
        //this.storage.setLocalUser(null);
    }
    handle404(error) {
        this.presentToast('warn', '404 - Não encontrado', error, _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.mediumDuration);
    }
    handle408(error) {
        this.presentToast('error', '408 - Request Timeout', error, _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.longDuration);
    }
    handle422(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.presentToast('error', '422 - Não processável', error, _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.longDuration);
        });
    }
    handleDefaultError(message, status = 500) {
        this.presentToast('error', status.toString(), message, _enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_0__.Toast.longDuration);
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
    createAlert(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let titulo = error.error;
            let message = error.msg;
            if (!titulo) {
                titulo = 'Falha';
            }
            if (!message) {
                message = error.message;
            }
            const alert = yield this.alertContr.create({
                header: error.status + ': ' + titulo,
                message,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                    },
                ],
            });
            yield alert.present();
        });
    }
    loadBlock(isBlock = false) {
        const value = isBlock ? 'none' : 'all';
        document.documentElement.style.setProperty('--load-block', value);
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService },
    { type: _services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()
], ErrorInterceptor);

const errorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ 19502:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/empty.pipe */ 26825);




let PipeModule = class PipeModule {
};
PipeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__.EmptyPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,],
        exports: [_utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__.EmptyPipe],
    })
], PipeModule);



/***/ }),

/***/ 26825:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/utils/empty.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyPipe": () => (/* binding */ EmptyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);


let EmptyPipe = class EmptyPipe {
    transform(value) {
        if (value) {
            return value;
        }
        return '-';
    }
};
EmptyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'emptyPipe'
    })
], EmptyPipe);



/***/ }),

/***/ 38088:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/app-loader/loader.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 29923);



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
};
LoaderService.ctorParameters = () => [];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 74797:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 35848);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 55646);
/* harmony import */ var _preferences_preferences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../preferences/preferences.service */ 31405);
/* harmony import */ var _webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../webSocket */ 99190);







let AuthService = class AuthService {
    constructor(http, storage, preferencesService) {
        this.http = http;
        this.storage = storage;
        this.preferencesService = preferencesService;
    }
    authenticate(credenciais) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/autenticacao`, credenciais, {
            responseType: 'json',
        });
    }
    refreshToken() {
        try {
            const token = {
                token: this.storage.getLocalUser().refresh_token
            };
            return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/autenticacao/refresh`, token, {
                responseType: 'json',
            });
        }
        catch (e) {
        }
    }
    loginSucesso(logedUser) {
        this.storage.setLocalUser(logedUser);
        (0,_webSocket__WEBPACK_IMPORTED_MODULE_3__.setupWebSockets)();
    }
    logout() {
        //this.preferencesService.setThemePreference('light');
        this.storage.setLocalUser(null);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _preferences_preferences_service__WEBPACK_IMPORTED_MODULE_2__.PreferencesService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 55646:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/auth/storage.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/storageKeys.config */ 17843);




let StorageService = class StorageService {
    constructor() {
        this.wsIsActive = false;
    }
    getLocalUser() {
        const user = localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }
        else {
            return JSON.parse(user);
        }
    }
    setLocalUser(obj) {
        if (obj == null) {
            localStorage.removeItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
    isLogedIn() {
        const user = JSON.parse(localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser));
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    isLogedInObs() {
        const user = JSON.parse(localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser));
        if (user) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
        }
    }
    getRole() {
        const localUser = JSON.parse(localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser));
        const { perfil } = localUser.user;
        return perfil.nome;
    }
    getUserIsAdmin() {
        const localUser = JSON.parse(localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser));
        const { isAdmin } = localUser.user;
        return isAdmin;
    }
    turnWsOn() {
        this.wsIsActive = true;
    }
    getWs() {
        return this.wsIsActive;
    }
};
StorageService.ctorParameters = () => [];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 31405:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/preferences/preferences.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesService": () => (/* binding */ PreferencesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 36983);



let PreferencesService = class PreferencesService {
    constructor() {
        this.themeSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    }
    setThemePreference(themePreference) {
        localStorage.setItem('theme-preference', themePreference);
        this.themeSubscriber.next(themePreference);
    }
    getThemePreference() {
        return localStorage.getItem('theme-preference') || 'light';
    }
};
PreferencesService.ctorParameters = () => [];
PreferencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PreferencesService);



/***/ }),

/***/ 92389:
/*!********************************************************!*\
  !*** ./src/app/shared/services/theme/theme.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 16274);



let ThemeService = class ThemeService {
    constructor(document) {
        this.document = document;
    }
    switchTheme(theme) {
        const themeLink = this.document.getElementById('app-theme');
        if (themeLink) {
            themeLink.href = theme + '.css';
        }
    }
};
ThemeService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
ThemeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root',
    })
], ThemeService);



/***/ }),

/***/ 6887:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/transacao/transacao.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransacaoService": () => (/* binding */ TransacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 35848);




let TransacaoService = class TransacaoService {
    constructor(http) {
        this.http = http;
    }
    create(transacao) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao`, transacao, {
            responseType: 'json',
        });
    }
    changeStatus({ status, transacao_id, justificativa }) {
        const request = {
            status_transacao_cod: status,
            justificativa,
        };
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao/${transacao_id}`, request, {
            responseType: 'json',
        });
    }
    update(transacao) {
        return this.http.put(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao`, transacao, {
            responseType: 'json',
        });
    }
    uploadAnexo(anexo, transacao_id) {
        const formData = new FormData();
        formData.append('file', anexo);
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao/file/${transacao_id}`, formData);
    }
    list({ loterica_id, tipo_transacao_id, status_transacao_cod, user_final_id, user_inicial_id }) {
        console.log(status_transacao_cod);
        let statusCod = '';
        if (Number(status_transacao_cod) >= 0) {
            statusCod = status_transacao_cod;
        }
        console.log(statusCod);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set("loterica_id", loterica_id)
            .set("tipo_transacao_id", tipo_transacao_id ? tipo_transacao_id : '')
            .set("status_transacao_cod", statusCod)
            .set("user_final_id", user_final_id ? user_final_id : '')
            .set("user_inicial_id", user_inicial_id ? user_inicial_id : '');
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao`, {
            responseType: 'json',
            params,
        });
    }
    countTransacoes({ status_transacao_cod, user_final_id }) {
        let statusCod = '';
        if (status_transacao_cod >= 0) {
            statusCod = status_transacao_cod;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set("status_transacao_cod", statusCod)
            .set("user_final_id", user_final_id ? user_final_id : '');
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao/count`, {
            responseType: 'json',
            params,
        });
    }
    listTipoTransacao() {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao/tipo`, {
            responseType: 'json',
        });
    }
    createResumoOperadora(transacao) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao/resumo`, transacao, {
            responseType: 'json',
        });
    }
    insertAnexo(anexo) {
        const formData = new FormData();
        formData.append('file', anexo);
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao/resumo/file`, formData);
    }
    associateAnexoTransacoes({ file_id, transacoes_id }) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/transacao/resumo/${file_id}`, { transacoes_id }, {
            responseType: 'json',
        });
    }
    getTransacaoPendente() {
        return this.transacaoPendente;
    }
    setTransacaoPendente(transacaoPendente) {
        this.transacaoPendente = transacaoPendente;
    }
};
TransacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
TransacaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], TransacaoService);



/***/ }),

/***/ 93301:
/*!**********************************************!*\
  !*** ./src/app/shared/utils/ExternalLink.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "externalLinkHandle": () => (/* binding */ externalLinkHandle)
/* harmony export */ });
function externalLinkHandle(link) {
    console.log(link);
    window.open(link, '_blank');
}


/***/ }),

/***/ 65170:
/*!*************************************************!*\
  !*** ./src/app/shared/webSocket/SocketStart.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSocket": () => (/* binding */ initSocket),
/* harmony export */   "io": () => (/* binding */ io)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 59101);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/config/api.config */ 35848);


const io = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(src_config_api_config__WEBPACK_IMPORTED_MODULE_1__.API_CONFIG.socketURL, { reconnection: true, });
let intervalId;
let userId = '';
function initSocket(user_id) {
    io.emit("start", { user_id });
    userId = user_id;
    clearInterval(intervalId);
}
io.on("disconnect", () => {
    reconnection(userId);
});
function reconnection(user_id) {
    intervalId = setInterval(() => {
        initSocket(user_id);
    }, 4000);
}



/***/ }),

/***/ 99190:
/*!*******************************************!*\
  !*** ./src/app/shared/webSocket/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupWebSockets": () => (/* binding */ setupWebSockets)
/* harmony export */ });
/* harmony import */ var _SocketStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocketStart */ 65170);
/* harmony import */ var _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/storage.service */ 55646);



const storage = new _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService();
function setupWebSockets(force = false) {
    var _a;
    if (storage && storage.getLocalUser()) {
        const { id: user_id } = (_a = storage.getLocalUser()) === null || _a === void 0 ? void 0 : _a.user;
        if ((force) || (user_id && !storage.getWs())) {
            (0,_SocketStart__WEBPACK_IMPORTED_MODULE_0__.initSocket)(user_id);
            storage.turnWsOn();
        }
    }
    else {
        console.log(`Web Socket não inicializado por usuário não estar autenticado!`);
    }
}



/***/ }),

/***/ 75390:
/*!************************************************************************!*\
  !*** ./src/app/shared/webSocket/transacao/transacao-socket.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransacaoSocketService": () => (/* binding */ TransacaoSocketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 85087);
/* harmony import */ var _SocketStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SocketStart */ 65170);




let TransacaoSocketService = class TransacaoSocketService {
    constructor() {
        this.socket = _SocketStart__WEBPACK_IMPORTED_MODULE_0__.io;
    }
    emitNewTransacao(transacao_id) {
        this.socket.emit("new_transacao", { transacao_id });
    }
    listenNewTransacao() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
            this.socket.on("notification_transacao", (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                observer.next(data);
            }));
        });
    }
};
TransacaoSocketService.ctorParameters = () => [];
TransacaoSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], TransacaoSocketService);



/***/ }),

/***/ 35848:
/*!**********************************!*\
  !*** ./src/config/api.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_CONFIG": () => (/* binding */ API_CONFIG),
/* harmony export */   "changeBaseURL": () => (/* binding */ changeBaseURL)
/* harmony export */ });
/*export const API_CONFIG = {
  baseURL: 'http://192.168.0.22:3333',
  socketURL: 'http://192.168.0.22:3333',
};*/
const API_CONFIG = {
    baseURL: 'https://tykhel-edimilson.herokuapp.com',
    socketURL: 'https://tykhel-edimilson.herokuapp.com',
};
function changeBaseURL(newUrl) {
    API_CONFIG.baseURL = newUrl;
    API_CONFIG.socketURL = newUrl;
}


/***/ }),

/***/ 17843:
/*!******************************************!*\
  !*** ./src/config/storageKeys.config.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORAGE_KEYS": () => (/* binding */ STORAGE_KEYS)
/* harmony export */ });
const STORAGE_KEYS = {
    localUser: 'localUser',
};


/***/ }),

/***/ 24766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 90476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 24766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		95261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		29009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		27221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		34694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		70993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		63645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		62245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		23482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		53315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		37542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		21459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		47618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		90101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		82210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		47370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		23652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		28220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		25500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		84913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		15078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		14857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		48958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		14383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		97630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		81297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		35492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		13752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		61778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		82904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		81609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		31218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		92849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		28400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		14397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		43391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		66793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		11695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		18274,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		53221,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		33489,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		73705,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		64223,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.loader-bar-container {\n  z-index: 1032;\n}\n\n.loader-spinnner-container {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  /* or: left: 50%; */\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n.block-load {\n  pointer-events: none;\n}\n\n:host ::ng-deep ion-content {\n  pointer-events: var(--load-block);\n}\n\n:host ::ng-deep ion-menu ion-content {\n  pointer-events: all !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQVUsbUJBQUE7RUFDVixZQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQ0FBQTtBQUZGOztBQUtBO0VBQ0UsOEJBQUE7QUFGRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubG9hZGVyLWJhci1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDMyO1xufVxuLmxvYWRlci1zcGlubm5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDsgLyogb3I6IGxlZnQ6IDUwJTsgKi9cbiAgb3BhY2l0eTogMC44O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJsb2NrLWxvYWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGlvbi1jb250ZW50IHtcbiAgcG9pbnRlci1ldmVudHM6IHZhcigtLWxvYWQtYmxvY2spO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLW1lbnUgaW9uLWNvbnRlbnR7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 92033:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-module/justificar-rejeicao-modal/justificar-rejeicao-modal.component.scss ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".input-sample-justificativa {\n  margin-top: 35px;\n}\n\n.input-new-justificativa {\n  margin-top: 20px;\n}\n\n.button-space {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1c3RpZmljYXItcmVqZWljYW8tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJqdXN0aWZpY2FyLXJlamVpY2FvLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXNhbXBsZS1qdXN0aWZpY2F0aXZhe1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5pbnB1dC1uZXctanVzdGlmaWNhdGl2YXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnV0dG9uLXNwYWNlIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ 69883:
/*!*********************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-module/nova-transacao-modal/nova-transacao-modal.component.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ::ng-deep .data-container .center {\n  text-align: center;\n}\n:host ::ng-deep .data-container .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n:host ::ng-deep .data-container .transacao-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n:host ::ng-deep .data-container .transacao-description {\n  margin: 0 0 1rem 0;\n}\n:host ::ng-deep .data-container .transacao-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n:host ::ng-deep .data-container .transacao-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n:host ::ng-deep .data-container .transacao-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n:host ::ng-deep .data-container .transacao-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n:host ::ng-deep .data-container .transacao-list-item .transacao-list-detail {\n  flex: 1 1 0;\n}\n:host ::ng-deep .data-container .transacao-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n:host ::ng-deep .data-container .transacao-list-item .transacao-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n:host ::ng-deep .data-container .transacao-list-item .transacao-list-action {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep .data-container .transacao-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n@media screen and (max-width: 2076px) {\n  :host ::ng-deep .transacao-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  :host ::ng-deep .transacao-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-list-detail {\n    text-align: center;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-price {\n    align-self: center;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdmEtdHJhbnNhY2FvLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksa0JBQUE7QUFEWjtBQUdRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtBQUhaO0FBTVE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBSlo7QUFPUTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFMWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFOWjtBQVFZO0VBQ0ksWUFBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7QUFOaEI7QUFTWTtFQUNJLFdBQUE7QUFQaEI7QUFVWTtFQUNJLG9CQUFBO0FBUmhCO0FBV1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVRoQjtBQVlZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBVmhCO0FBYVk7RUFDSSxxQkFBQTtBQVhoQjtBQWlCQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxtQkFBQTtFQWROO0VBZ0JNO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUFkVjtFQWlCTTtJQUNJLGtCQUFBO0VBZlY7RUFrQk07SUFDSSxrQkFBQTtFQWhCVjtFQW1CTTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQWpCVjtFQW9CTTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQWxCVjtBQUNGIiwiZmlsZSI6Im5vdmEtdHJhbnNhY2FvLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAuZGF0YS1jb250YWluZXIge1xuICAgICAgICAuY2VudGVye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5wLWRyb3Bkb3duIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNhY2FvLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFuc2FjYW8tZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyYW5zYWNhby1jYXRlZ29yeS1pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFuc2FjYW8tY2F0ZWdvcnkge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNhY2FvLWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRyYW5zYWNhby1saXN0LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wLXJhdGluZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50cmFuc2FjYW8tcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHJhbnNhY2FvLWxpc3QtYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDc2cHgpIHtcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnRyYW5zYWNhby1saXN0LWl0ZW0ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNhY2FvLWxpc3QtZGV0YWlsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFuc2FjYW8tcHJpY2Uge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyYW5zYWNhby1saXN0LWFjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFuc2FjYW8tbGlzdC1hY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-app>\n    <ion-split-pane contentId=\"main-content\" when=\"(max-width: 0px)\">\n      <ion-menu (ionWillOpen)=\"ionWillOpen()\" (ionDidClose)=\"ionDidClose()\" contentId=\"main-content\" type=\"overlay\">\n        <ion-content>\n          <ion-list id=\"inbox-list\">\n            <ion-item>\n              <img src=\"assets/imgs/logos/logo-i.png\" />\n              <ion-list-header>GTL</ion-list-header>\n            </ion-item>\n            <br />\n            <ion-note>Gestão de Transações Lotéricas</ion-note>\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n              <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n                routerLinkActive=\"selected\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-outline'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n                <ion-badge *ngIf=\"p.url.includes('transacoes')\" slot=\"end\">{{ transacoesPendentes }}</ion-badge>\n              </ion-item>\n            </ion-menu-toggle>\n          </ion-list>\n          <ion-list id=\"labels-list\">\n            <ion-list-header>Preferências</ion-list-header>\n            <ion-item lines=\"full\" (ionChange)=\"toggleThemes($event)\">\n              <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n              <ion-label> Dark Theme </ion-label>\n              <ion-toggle [checked]=\"isDarkTheme\" id=\"themeToggle\" slot=\"end\"></ion-toggle>\n            </ion-item>\n            <br />\n            <ion-button color=\"primary\" id=\"logout\" size=\"small\" expand=\"block\" (click)=\"sincronizar()\"\n              routerDirection=\"root\" routerLinkActive=\"selected\">\n              Sincronizar\n              <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\n            </ion-button>\n            <br>\n            <ion-button color=\"primary\" id=\"logout\" size=\"small\" expand=\"block\" (click)=\"logout()\"\n              routerDirection=\"root\" routerLinkActive=\"selected\" [routerLink]=\"'login'\" fill=\"outline\">\n              Logout\n              <ion-icon slot=\"end\" name=\"walk-outline\"></ion-icon>\n            </ion-button>\n          </ion-list>\n          <div *ngIf=\"loaderService.isLoading | async\" class=\"loader-bar-container\">\n            <p-progressBar mode=\"indeterminate\"></p-progressBar>\n          </div>\n        </ion-content>\n      </ion-menu>\n\n      <ion-router-outlet id=\"main-content\">\n        <div *ngIf=\"loaderService.isLoading | async\" class=\"loader-spinnner-container\">\n          <p-progressSpinner [style]=\"{ width: '100px', height: '100px' }\"></p-progressSpinner>\n        </div>\n      </ion-router-outlet>\n\n    </ion-split-pane>\n</ion-app>\n\n<p-toast position=\"top-right\"> </p-toast>");

/***/ }),

/***/ 62815:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/fluxo-module/justificar-rejeicao-modal/justificar-rejeicao-modal.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p-dialog [visible]=\"isDialogVisible\" [modal]=\"true\" [draggable]=\"false\" [focusTrap]=\"true\" [closable]=\"true\"\n  (click)=\"cancel($event)\">\n  <p-header>\n    Justifique\n  </p-header>\n  <form [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n\n    <div class=\"p-input-filled input-new-justificativa\">\n      <span class=\"p-float-label\">\n        <input pInputText [style]=\"{'min-width': '280px'}\" formControlName=\"justificativa\" id=\"justificativa-input\">\n        <label for=\"justificativa-input\">Justificativa*</label>\n      </span>\n      <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Preencha com mais detalhes\"\n        *ngIf=\"isInputError('justificativa')\"></p-message>\n    </div>\n  </form>\n  <p-footer>\n    <p-button  class=\"ui-button-warning\" label=\"Cancelar\" icon=\"pi pi-times\"\n      iconPos=\"right\" (click)=\"close()\"></p-button>\n    <p-button [disabled]=\"saveButtonControl()\" class=\"ui-button-success\" label=\"Salvar\" icon=\"pi pi-check\"\n      iconPos=\"right\" (click)=\"save()\"></p-button>\n  </p-footer>\n</p-dialog>");

/***/ }),

/***/ 16958:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/fluxo-module/nova-transacao-modal/nova-transacao-modal.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content appScrollTheme>\n    <p-dataView emptyMessage=\"Nenhuma transação pendente de sua aprovação\" class=\"data-container\" #dv\n      [value]=\"transacoes\" [paginator]=\"false\" [rows]=\"9\" filterBy=\"nome\" layout=\"list\">\n      <ng-template let-transacao pTemplate=\"listItem\">\n        <div #templateGrid class=\"col-12\">\n          <div class=\"transacao-list-item\">\n            <div class=\"transacao-list-detail\">\n              <div class=\"transacao-name\">{{ transacao.nome }}</div>\n              <div class=\"transacao-description\">Status: {{ transacao.status_transacao }}</div>\n              <div class=\"transacao-description\">Tipo: {{ transacao.tipo_transacao?.nome }}</div>\n              <div class=\"transacao-description\">Solicitante: {{ transacao.user_inicial.nome }}</div>\n              <div class=\"transacao-description\">Requerido: {{ transacao.user_final.nome }}</div>\n              <span class=\"transacao-category\">R$ {{\n                transacao.valor_transacao | currency:'BRL': '' }}</span>\n            </div>\n            <div class=\"transacao-list-action\">\n              <p-button icon=\"pi pi-check\" label=\"Aprovar\" (click)=\"aprovar(transacao)\">\n              </p-button>\n              <p-button icon=\"pi pi-times\" label=\"Rejeitar\" (click)=\"rejeitar(transacao)\">\n              </p-button>\n              <p-button *ngIf=\"transacao.anexo\" icon=\"pi pi-cloud-download\" label=\"Baixar anexo\"\n                (click)=\"downloadAnexo(transacao)\">\n              </p-button>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </p-dataView>\n\n<p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n  rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\n\n<app-justificar-rejeicao-modal [isDialogVisible]=\"showJustificativaModal\" (notifyParent)=\"getNotification($event)\">\n</app-justificar-rejeicao-modal>\n\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map