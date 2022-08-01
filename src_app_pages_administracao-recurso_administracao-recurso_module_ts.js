(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_administracao-recurso_administracao-recurso_module_ts"],{

/***/ 11097:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoRecursoPageRoutingModule": () => (/* binding */ AdministracaoRecursoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _administracao_recurso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-recurso.page */ 1417);




const routes = [
    {
        path: '',
        component: _administracao_recurso_page__WEBPACK_IMPORTED_MODULE_0__.AdministracaoRecursoPage
    }
];
let AdministracaoRecursoPageRoutingModule = class AdministracaoRecursoPageRoutingModule {
};
AdministracaoRecursoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdministracaoRecursoPageRoutingModule);



/***/ }),

/***/ 41578:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoRecursoPageModule": () => (/* binding */ AdministracaoRecursoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _administracao_recurso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-recurso-routing.module */ 11097);
/* harmony import */ var _administracao_recurso_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-recurso.page */ 1417);
/* harmony import */ var src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directive/directives.module */ 69513);
/* harmony import */ var src_app_shared_components_adm_recurso_module_adm_recurso_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/adm-recurso-module/adm-recurso-module.module */ 46489);









let AdministracaoRecursoPageModule = class AdministracaoRecursoPageModule {
};
AdministracaoRecursoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _administracao_recurso_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracaoRecursoPageRoutingModule,
            src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            src_app_shared_components_adm_recurso_module_adm_recurso_module_module__WEBPACK_IMPORTED_MODULE_3__.AdmRecursoModuleModule,
        ],
        declarations: [_administracao_recurso_page__WEBPACK_IMPORTED_MODULE_1__.AdministracaoRecursoPage]
    })
], AdministracaoRecursoPageModule);



/***/ }),

/***/ 1417:
/*!***************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoRecursoPage": () => (/* binding */ AdministracaoRecursoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_administracao_recurso_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./administracao-recurso.page.html */ 95535);
/* harmony import */ var _administracao_recurso_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-recurso.page.scss */ 48961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let AdministracaoRecursoPage = class AdministracaoRecursoPage {
    constructor() {
        this.currentTab = 'funcionario';
    }
    ngOnInit() {
    }
    changeTab(event) {
        this.currentTab = event.detail.value;
    }
};
AdministracaoRecursoPage.ctorParameters = () => [];
AdministracaoRecursoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-administracao-recurso',
        template: _raw_loader_administracao_recurso_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_administracao_recurso_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdministracaoRecursoPage);



/***/ }),

/***/ 46489:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/adm-recurso-module.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmRecursoModuleModule": () => (/* binding */ AdmRecursoModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dataview */ 378);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/panel */ 75127);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 70472);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/rating */ 93569);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 33103);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 56899);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ 56360);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/message */ 26999);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/steps */ 9873);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/password */ 22572);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputmask */ 62878);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputswitch */ 92938);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputnumber */ 80814);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ 3681);
/* harmony import */ var _funcionario_main_funcionario_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcionario-main/funcionario-main.component */ 85449);
/* harmony import */ var _funcionario_detail_funcionario_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcionario-detail/funcionario-detail.component */ 11404);
/* harmony import */ var _funcionario_cadastro_funcionario_cadastro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcionario-cadastro/funcionario-cadastro.component */ 36643);
/* harmony import */ var _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endereco-module/endereco.module */ 32475);
/* harmony import */ var _patrimonio_cadastro_patrimonio_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patrimonio-cadastro/patrimonio-cadastro.component */ 96131);
/* harmony import */ var _patrimonio_detail_patrimonio_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patrimonio-detail/patrimonio-detail.component */ 64450);
/* harmony import */ var _patrimonio_main_patrimonio_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patrimonio-main/patrimonio-main.component */ 6882);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directive/directives.module */ 69513);



























let AdmRecursoModuleModule = class AdmRecursoModuleModule {
};
AdmRecursoModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_funcionario_main_funcionario_main_component__WEBPACK_IMPORTED_MODULE_0__.FuncionarioMainComponent, _funcionario_detail_funcionario_detail_component__WEBPACK_IMPORTED_MODULE_1__.FuncionarioDetailComponent, _funcionario_cadastro_funcionario_cadastro_component__WEBPACK_IMPORTED_MODULE_2__.FuncionarioCadastroComponent, _patrimonio_cadastro_patrimonio_cadastro_component__WEBPACK_IMPORTED_MODULE_4__.PatrimonioCadastroComponent, _patrimonio_detail_patrimonio_detail_component__WEBPACK_IMPORTED_MODULE_5__.PatrimonioDetailComponent, _patrimonio_main_patrimonio_main_component__WEBPACK_IMPORTED_MODULE_6__.PatrimonioMainComponent,],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_13__.DataViewModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_14__.PanelModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabViewModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_18__.RatingModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_20__.MessageModule,
            primeng_steps__WEBPACK_IMPORTED_MODULE_21__.StepsModule,
            primeng_password__WEBPACK_IMPORTED_MODULE_22__.PasswordModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_23__.InputMaskModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24__.InputSwitchModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_25__.InputNumberModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__.ConfirmDialogModule,
            _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_3__.EnderecoModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule,
        ],
        exports: [_funcionario_main_funcionario_main_component__WEBPACK_IMPORTED_MODULE_0__.FuncionarioMainComponent, _funcionario_detail_funcionario_detail_component__WEBPACK_IMPORTED_MODULE_1__.FuncionarioDetailComponent, _funcionario_cadastro_funcionario_cadastro_component__WEBPACK_IMPORTED_MODULE_2__.FuncionarioCadastroComponent, _patrimonio_cadastro_patrimonio_cadastro_component__WEBPACK_IMPORTED_MODULE_4__.PatrimonioCadastroComponent, _patrimonio_detail_patrimonio_detail_component__WEBPACK_IMPORTED_MODULE_5__.PatrimonioDetailComponent, _patrimonio_main_patrimonio_main_component__WEBPACK_IMPORTED_MODULE_6__.PatrimonioMainComponent,],
    })
], AdmRecursoModuleModule);



/***/ }),

/***/ 36643:
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/funcionario-cadastro/funcionario-cadastro.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuncionarioCadastroComponent": () => (/* binding */ FuncionarioCadastroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_funcionario_cadastro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./funcionario-cadastro.component.html */ 49395);
/* harmony import */ var _funcionario_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcionario-cadastro.component.scss */ 23977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/funcionario/funcionario.service */ 43270);
/* harmony import */ var src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/loterica/loterica.service */ 5211);
/* harmony import */ var src_app_shared_services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/perfil/perfil.service */ 39319);










let FuncionarioCadastroComponent = class FuncionarioCadastroComponent {
    constructor(formBuilder, funcionarioService, lotericaService, perfilService, modal) {
        this.formBuilder = formBuilder;
        this.funcionarioService = funcionarioService;
        this.lotericaService = lotericaService;
        this.perfilService = perfilService;
        this.modal = modal;
        this.perfis = [];
        this.lotericas = [];
        this.isLoaded = false;
        this.stepIndex = 0;
        this.createdUserId = '';
        this.userWasCreated = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = this.formBuilder.group({
            nome: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            senha: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            cpf: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            perfil_id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            loterica_id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
        });
    }
    ionViewWillEnter() {
        this.loadLotericas();
        this.loadPerfis();
    }
    ngOnInit() {
        this.steps = [
            {
                label: 'Informações',
            },
            {
                label: 'Endereço',
            },
        ];
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadLotericas() {
        const sub = this.lotericaService.list()
            .subscribe(data => {
            this.lotericas = data;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    loadPerfis() {
        const sub = this.perfilService.list()
            .subscribe(data => {
            this.perfis = data;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    create() {
        const nome = this.form.get('nome').value;
        const email = this.form.get('email').value;
        const senha = this.form.get('senha').value;
        const cpf = this.form.get('cpf').value;
        const { id: perfilId } = this.form.get('perfil_id').value;
        const { id: loterica_id } = this.form.get('loterica_id').value;
        const sub = this.funcionarioService.createUser({ nome, email, senha, cpf, perfilId, loterica_id })
            .subscribe(response => {
            this.createdUserId = response.id;
            this.userWasCreated = true;
            this.stepIndex++;
        });
        this.subscriptions.add(sub);
    }
    listenEndereco(event) {
        this.fechar(this.userWasCreated);
    }
    fechar(userWasCreated = false) {
        this.modal.dismiss(userWasCreated);
    }
    isInputError(inputName) {
        const resp = this.form.controls[inputName].dirty &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableBTN() {
        const situacao = !this.form.valid;
        return situacao;
    }
};
FuncionarioCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_2__.FuncionarioService },
    { type: src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_3__.LotericaService },
    { type: src_app_shared_services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_4__.PerfilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
FuncionarioCadastroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-funcionario-cadastro',
        template: _raw_loader_funcionario_cadastro_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_funcionario_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FuncionarioCadastroComponent);



/***/ }),

/***/ 11404:
/*!*********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/funcionario-detail/funcionario-detail.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuncionarioDetailComponent": () => (/* binding */ FuncionarioDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_funcionario_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./funcionario-detail.component.html */ 68661);
/* harmony import */ var _funcionario_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcionario-detail.component.scss */ 7450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var src_app_shared_consts_Status_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/consts/Status.const */ 92315);
/* harmony import */ var src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/funcionario/funcionario.service */ 43270);
/* harmony import */ var src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/loterica/loterica.service */ 5211);
/* harmony import */ var src_app_shared_services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/perfil/perfil.service */ 39319);











let FuncionarioDetailComponent = class FuncionarioDetailComponent {
    constructor(formBuilder, funcionarioService, lotericaService, perfilService, modal) {
        this.formBuilder = formBuilder;
        this.funcionarioService = funcionarioService;
        this.lotericaService = lotericaService;
        this.perfilService = perfilService;
        this.modal = modal;
        this.perfis = [];
        this.lotericas = [];
        this.listStatus = [];
        this.isLoaded = false;
        this.createdUserId = '';
        this.userWasCreated = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    }
    ionViewWillEnter() {
        this.listStatus = src_app_shared_consts_Status_const__WEBPACK_IMPORTED_MODULE_2__.Status;
        this.loadLotericas();
        this.loadPerfis();
    }
    ngOnInit() {
        const { nome, email, is_admin, perfil, status } = this.user;
        this.form = this.formBuilder.group({
            nome: [nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            email: [email, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            senha: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            is_admin: [is_admin, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            status: [status, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            perfil_id: [{ value: perfil }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            loterica_id: [perfil, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadLotericas() {
        const sub = this.lotericaService.list()
            .subscribe(data => {
            this.lotericas = data;
            const { unidadeLoterica } = this.user;
            this.form.get("loterica_id").setValue(this.lotericas.find(p => p.id === unidadeLoterica.id));
        });
        this.subscriptions.add(sub);
    }
    loadPerfis() {
        const sub = this.perfilService.list()
            .subscribe(data => {
            this.perfis = data;
            const { perfil, status } = this.user;
            if (perfil) {
                this.form.get("perfil_id").setValue(this.perfis.find(p => p.id === perfil.id));
            }
            this.form.get("status").setValue(this.listStatus.find(s => s.value === status));
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    update() {
        const { id } = this.user;
        const nome = this.form.get('nome').value;
        const email = this.form.get('email').value;
        const senha = this.form.get('senha').value;
        const is_admin = this.form.get('is_admin').value;
        const status = this.form.get('status').value.value;
        const { id: perfil_id } = this.form.get('perfil_id').value;
        const { id: unidadeLoterica } = this.form.get('loterica_id').value;
        const sub = this.funcionarioService.updateUser({ nome, email, senha, is_admin, status, perfil_id, unidadeLoterica }, id)
            .subscribe(response => {
            this.fechar(true);
        });
        this.subscriptions.add(sub);
    }
    fechar(userWasCreated = false) {
        this.modal.dismiss(userWasCreated);
    }
    isInputError(inputName) {
        const resp = this.form.controls[inputName].dirty &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableBTN() {
        const situacao = !this.form.valid;
        return situacao;
    }
};
FuncionarioDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_3__.FuncionarioService },
    { type: src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_4__.LotericaService },
    { type: src_app_shared_services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_5__.PerfilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
FuncionarioDetailComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
FuncionarioDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-funcionario-detail',
        template: _raw_loader_funcionario_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_funcionario_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FuncionarioDetailComponent);



/***/ }),

/***/ 85449:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/funcionario-main/funcionario-main.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuncionarioMainComponent": () => (/* binding */ FuncionarioMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_funcionario_main_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./funcionario-main.component.html */ 91263);
/* harmony import */ var _funcionario_main_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcionario-main.component.scss */ 14948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enumerations/toast.enum */ 85382);
/* harmony import */ var src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/funcionario/funcionario.service */ 43270);
/* harmony import */ var src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/loterica/loterica.service */ 5211);
/* harmony import */ var _endereco_module_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../endereco-module/endereco/endereco.component */ 58288);
/* harmony import */ var _endereco_module_update_endereco_update_endereco_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../endereco-module/update-endereco/update-endereco.component */ 42361);
/* harmony import */ var _funcionario_cadastro_funcionario_cadastro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../funcionario-cadastro/funcionario-cadastro.component */ 36643);
/* harmony import */ var _funcionario_detail_funcionario_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../funcionario-detail/funcionario-detail.component */ 11404);














let FuncionarioMainComponent = class FuncionarioMainComponent {
    constructor(funcionarioService, modal, toastService, lotericaService) {
        this.funcionarioService = funcionarioService;
        this.modal = modal;
        this.toastService = toastService;
        this.lotericaService = lotericaService;
        this.users = [];
        this.sortOptions = [];
        this.sortLotericas = [];
        this.isLoaded = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    }
    ngOnInit() {
        this.sortOptions = [
            { label: 'Todos os usuários', value: 'all' },
            { label: 'Apenas usuários logados', value: 'logged' }
        ];
        this.loadLotericas();
        //this.loadFuncionarios();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    changeFiltro(event) {
        if (event.value === 'logged') {
            this.loadLoggedFuncionarios();
            return;
        }
        this.loadFuncionarios();
    }
    changeLoterica(event) {
        const { value: loterica_id } = event;
        this.currentLotericaLoaded = loterica_id;
    }
    loadLotericas() {
        const sub = this.lotericaService.list()
            .subscribe(data => {
            this.sortLotericas = data.map((l) => {
                const { id, nome, codigo } = l;
                return {
                    value: id,
                    label: `${nome} - ${codigo}`
                };
            });
        });
        this.subscriptions.add(sub);
    }
    loadFuncionarios() {
        const loterica_id = this.currentLotericaLoaded;
        if (!loterica_id) {
            this.presentToast('warn', 'Lotérica inválida', 'Selecione uma lotérica para continuar', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__.Toast.shortDuration);
            return;
        }
        const sub = this.funcionarioService.listAllUsers(loterica_id)
            .subscribe(response => {
            this.users = response;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    loadLoggedFuncionarios() {
        const loterica_id = this.currentLotericaLoaded;
        if (!loterica_id) {
            this.presentToast('warn', 'Lotérica inválida', 'Selecione uma lotérica para continuar', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__.Toast.shortDuration);
            return;
        }
        const sub = this.funcionarioService.listAllLogedUsers(loterica_id)
            .subscribe(response => {
            this.users = response;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    detalharFuncionario(user) {
        this.showModal(_funcionario_detail_funcionario_detail_component__WEBPACK_IMPORTED_MODULE_8__.FuncionarioDetailComponent, { user });
    }
    detalharEndereco(user) {
        if (user.endereco) {
            this.showModal(_endereco_module_update_endereco_update_endereco_component__WEBPACK_IMPORTED_MODULE_6__.UpdateEnderecoComponent, { currentEndereco: user, isFuncionario: true });
        }
        else {
            this.showModal(_endereco_module_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_5__.EnderecoComponent, { idOf: user.id, isFuncionario: true, isModal: true });
        }
    }
    setUserImage(user) {
        return user.avatar || "assets/imgs/outros/default-user.jpg";
    }
    createNewUser() {
        this.showModal(_funcionario_cadastro_funcionario_cadastro_component__WEBPACK_IMPORTED_MODULE_7__.FuncionarioCadastroComponent);
    }
    showModal(component, componentProps) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.loadFuncionarios();
                    this.presentToast('success', 'Sucesso!', 'Operação bem sucedida!', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_2__.Toast.mediumDuration);
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
FuncionarioMainComponent.ctorParameters = () => [
    { type: src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_3__.FuncionarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService },
    { type: src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_4__.LotericaService }
];
FuncionarioMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-funcionario-main',
        template: _raw_loader_funcionario_main_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_funcionario_main_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FuncionarioMainComponent);



/***/ }),

/***/ 96131:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/patrimonio-cadastro/patrimonio-cadastro.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatrimonioCadastroComponent": () => (/* binding */ PatrimonioCadastroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_patrimonio_cadastro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./patrimonio-cadastro.component.html */ 80184);
/* harmony import */ var _patrimonio_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patrimonio-cadastro.component.scss */ 91328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 63697);
/* harmony import */ var src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/loterica/loterica.service */ 5211);
/* harmony import */ var src_app_shared_services_patrimonio_patrimonio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/patrimonio/patrimonio.service */ 31377);










let PatrimonioCadastroComponent = class PatrimonioCadastroComponent {
    constructor(formBuilder, patrimonioService, lotericaService, modal) {
        this.formBuilder = formBuilder;
        this.patrimonioService = patrimonioService;
        this.lotericaService = lotericaService;
        this.modal = modal;
        this.lotericas = [];
        this.isLoaded = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = this.formBuilder.group({
            nome: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            descricao: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            valor_patrimonio: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            loterica_id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            id_fisico: [],
        });
    }
    ngOnInit() {
        this.loadLotericas();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadLotericas() {
        const sub = this.lotericaService.list()
            .subscribe(data => {
            this.lotericas = data;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const nome = this.form.get('nome').value;
            const descricao = this.form.get('descricao').value;
            const valor_patrimonio = this.form.get('valor_patrimonio').value;
            const id_fisico = this.form.get('id_fisico').value;
            const { id: loterica_id } = this.form.get('loterica_id').value;
            let idOfThisPlataform = undefined;
            if (id_fisico) {
                idOfThisPlataform = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getId()).uuid;
            }
            const sub = this.patrimonioService.create({ nome, descricao, valor_patrimonio, id_fisico: idOfThisPlataform, loterica_id })
                .subscribe(response => {
                this.fechar(true, { loterica_id });
            });
            this.subscriptions.add(sub);
        });
    }
    fechar(wasCreated = false, data) {
        this.modal.dismiss(wasCreated, data);
    }
    isInputError(inputName) {
        const resp = this.form.controls[inputName].dirty &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableBTN() {
        const situacao = !this.form.valid;
        return situacao;
    }
};
PatrimonioCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_shared_services_patrimonio_patrimonio_service__WEBPACK_IMPORTED_MODULE_4__.PatrimonioService },
    { type: src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_3__.LotericaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
PatrimonioCadastroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-patrimonio-cadastro',
        template: _raw_loader_patrimonio_cadastro_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_patrimonio_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PatrimonioCadastroComponent);



/***/ }),

/***/ 64450:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/patrimonio-detail/patrimonio-detail.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatrimonioDetailComponent": () => (/* binding */ PatrimonioDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_patrimonio_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./patrimonio-detail.component.html */ 90681);
/* harmony import */ var _patrimonio_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patrimonio-detail.component.scss */ 49100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var src_app_shared_consts_Status_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/consts/Status.const */ 92315);
/* harmony import */ var src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/loterica/loterica.service */ 5211);
/* harmony import */ var src_app_shared_services_patrimonio_patrimonio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/patrimonio/patrimonio.service */ 31377);










let PatrimonioDetailComponent = class PatrimonioDetailComponent {
    constructor(formBuilder, patrimonioService, lotericaService, modal) {
        this.formBuilder = formBuilder;
        this.patrimonioService = patrimonioService;
        this.lotericaService = lotericaService;
        this.modal = modal;
        this.lotericas = [];
        this.listStatus = src_app_shared_consts_Status_const__WEBPACK_IMPORTED_MODULE_2__.StatusPatrimonio;
        this.isLoaded = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    }
    ngOnInit() {
        const { nome, descricao, valor_patrimonio, id_fisico, status_patrimonio } = this.patrimonio;
        this.form = this.formBuilder.group({
            nome: [nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            descricao: [descricao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            valor_patrimonio: [valor_patrimonio, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            loterica_id: [this.loterica_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            status_patrimonio: [status_patrimonio, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,]],
            id_fisico: [],
        });
        this.loadLotericas();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadLotericas() {
        const { status_patrimonio } = this.patrimonio;
        const sub = this.lotericaService.list()
            .subscribe(data => {
            this.lotericas = data;
            this.form.get("loterica_id").setValue(this.lotericas.find(l => l.id === this.loterica_id));
            this.form.get("status_patrimonio").setValue(this.listStatus.find(s => s.value === status_patrimonio));
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    update() {
        const { id } = this.patrimonio;
        const nome = this.form.get('nome').value;
        const descricao = this.form.get('descricao').value;
        const valor_patrimonio = this.form.get('valor_patrimonio').value;
        const id_fisico = this.form.get('id_fisico').value;
        const status_patrimonio = this.form.get('status_patrimonio').value.value;
        const { id: loterica_id } = this.form.get('loterica_id').value;
        let idOfThisPlataform = undefined;
        if (id_fisico) {
            // TODO - Funcao que retorne o UUID atual da maquina: idOfThisPlataform = 'UUID';
        }
        const sub = this.patrimonioService.update(id, { nome, descricao, valor_patrimonio, id_fisico: idOfThisPlataform, loterica_id, status_patrimonio })
            .subscribe(response => {
            this.fechar(true, { loterica_id });
        });
        this.subscriptions.add(sub);
    }
    fechar(wasCreated = false, data) {
        this.modal.dismiss(wasCreated, data);
    }
    isInputError(inputName) {
        const resp = this.form.controls[inputName].dirty &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableBTN() {
        const situacao = !this.form.valid;
        return situacao;
    }
};
PatrimonioDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_shared_services_patrimonio_patrimonio_service__WEBPACK_IMPORTED_MODULE_4__.PatrimonioService },
    { type: src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_3__.LotericaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
PatrimonioDetailComponent.propDecorators = {
    patrimonio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    loterica_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
PatrimonioDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-patrimonio-detail',
        template: _raw_loader_patrimonio_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_patrimonio_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PatrimonioDetailComponent);



/***/ }),

/***/ 6882:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/patrimonio-main/patrimonio-main.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatrimonioMainComponent": () => (/* binding */ PatrimonioMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_patrimonio_main_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./patrimonio-main.component.html */ 95802);
/* harmony import */ var _patrimonio_main_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patrimonio-main.component.scss */ 70682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 63697);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enumerations/toast.enum */ 85382);
/* harmony import */ var src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/loterica/loterica.service */ 5211);
/* harmony import */ var src_app_shared_services_patrimonio_patrimonio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/patrimonio/patrimonio.service */ 31377);
/* harmony import */ var _patrimonio_cadastro_patrimonio_cadastro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patrimonio-cadastro/patrimonio-cadastro.component */ 96131);
/* harmony import */ var _patrimonio_detail_patrimonio_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patrimonio-detail/patrimonio-detail.component */ 64450);













let PatrimonioMainComponent = class PatrimonioMainComponent {
    constructor(patrimonioService, lotericaService, modal, toastService, confirmationService) {
        this.patrimonioService = patrimonioService;
        this.lotericaService = lotericaService;
        this.modal = modal;
        this.toastService = toastService;
        this.confirmationService = confirmationService;
        this.patrimonios = [];
        this.sortLotericas = [];
        this.isLoaded = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.idFisicoDispositivo = yield this.getCurrentIdFisico();
            console.log(this.idFisicoDispositivo);
            this.loadLotericas();
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadLotericas() {
        const sub = this.lotericaService.list()
            .subscribe(data => {
            this.sortLotericas = data.map((l) => {
                const { id, nome, codigo } = l;
                return {
                    value: id,
                    label: `${nome} - ${codigo}`
                };
            });
        });
        this.subscriptions.add(sub);
    }
    lotericaLabel(loterica) {
        return `${loterica.nome} - ${loterica.codigo}`;
    }
    changeFiltro(event) {
        const { value: loterica_id } = event;
        this.currentLotericaLoaded = loterica_id;
        this.loadPatrimonioByLoterica(loterica_id);
    }
    loadPatrimonioByLoterica(loterica_id) {
        const sub = this.patrimonioService.list(loterica_id)
            .subscribe(response => {
            this.patrimonios = response;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    createNewpatrimonio() {
        this.showModal(_patrimonio_cadastro_patrimonio_cadastro_component__WEBPACK_IMPORTED_MODULE_6__.PatrimonioCadastroComponent);
    }
    editarPatrimonio(patrimonio) {
        this.showModal(_patrimonio_detail_patrimonio_detail_component__WEBPACK_IMPORTED_MODULE_7__.PatrimonioDetailComponent, { patrimonio, loterica_id: this.currentLotericaLoaded });
    }
    associar(patrimonio) {
        this.confirmationService.confirm({
            message: 'Deseja associar o dispositivo em que está logado a este patrimônio?',
            header: 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.patrimonioService.associate(patrimonio.id, this.idFisicoDispositivo)
                    .subscribe(data => {
                    this.loadPatrimonioByLoterica(this.currentLotericaLoaded);
                    this.presentToast('success', 'Sucesso!', 'Associado com sucesso!', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
                });
            },
            reject: (type) => {
                this.toastService.clear();
            }
        });
    }
    desassociar(patrimonio) {
        this.confirmationService.confirm({
            message: 'Deseja desassociar o dispositivo este patrimônio?',
            header: 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.patrimonioService.desassociar(patrimonio.id)
                    .subscribe(data => {
                    this.loadPatrimonioByLoterica(this.currentLotericaLoaded);
                    this.presentToast('success', 'Sucesso!', 'Desassociado com sucesso!', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
                });
            },
            reject: (type) => {
                this.toastService.clear();
            }
        });
    }
    getCurrentIdFisico() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const { uuid } = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getId();
            return uuid;
        });
    }
    showModal(component, componentProps) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component,
                backdropDismiss: false,
                cssClass: 'modal-size-80',
                componentProps,
            });
            modal.onDidDismiss()
                .then((data) => {
                const { data: hasUpdate } = data;
                if (hasUpdate) {
                    this.presentToast('success', 'Sucesso!', 'Operação bem sucedida!', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
                }
                if (data.role) {
                    const { loterica_id } = data.role;
                    this.loadPatrimonioByLoterica(loterica_id);
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
PatrimonioMainComponent.ctorParameters = () => [
    { type: src_app_shared_services_patrimonio_patrimonio_service__WEBPACK_IMPORTED_MODULE_5__.PatrimonioService },
    { type: src_app_shared_services_loterica_loterica_service__WEBPACK_IMPORTED_MODULE_4__.LotericaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService }
];
PatrimonioMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-patrimonio-main',
        template: _raw_loader_patrimonio_main_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_patrimonio_main_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PatrimonioMainComponent);



/***/ }),

/***/ 31377:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/patrimonio/patrimonio.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatrimonioService": () => (/* binding */ PatrimonioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 35848);




let PatrimonioService = class PatrimonioService {
    constructor(http) {
        this.http = http;
    }
    list(loterica_id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('loterica_id', loterica_id);
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/patrimonio`, {
            params,
        });
    }
    create(newPatrimonio) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/patrimonio`, newPatrimonio, {
            responseType: 'json',
        });
    }
    //TODO - Implementar o update
    update(patrimonio_id, newPatrimonio) {
        return this.http.put(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/patrimonio/${patrimonio_id}`, newPatrimonio, {
            responseType: 'json',
        });
    }
    associate(patrimonio_id, id_fisico) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/patrimonio/${patrimonio_id}`, {
            id_fisico
        }, {
            responseType: 'json',
        });
    }
    desassociar(patrimonio_id) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/patrimonio/${patrimonio_id}/desassociar`, {
            responseType: 'json',
        });
    }
};
PatrimonioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PatrimonioService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PatrimonioService);



/***/ }),

/***/ 39319:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/perfil/perfil.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilService": () => (/* binding */ PerfilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 35848);




let PerfilService = class PerfilService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/perfil`, {
            responseType: 'json',
        });
    }
};
PerfilService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PerfilService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PerfilService);



/***/ }),

/***/ 48961:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhY2FvLXJlY3Vyc28ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 23977:
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/funcionario-cadastro/funcionario-cadastro.component.scss ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5jaW9uYXJpby1jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 7450:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/funcionario-detail/funcionario-detail.component.scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5jaW9uYXJpby1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 14948:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/funcionario-main/funcionario-main.component.scss ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ::ng-deep .data-container .center {\n  text-align: center;\n}\n:host ::ng-deep .data-container .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n:host ::ng-deep .data-container .user-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n:host ::ng-deep .data-container .user-description {\n  margin: 0 0 1rem 0;\n}\n:host ::ng-deep .data-container .user-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n:host ::ng-deep .data-container .user-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n:host ::ng-deep .data-container .user-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n:host ::ng-deep .data-container .user-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n:host ::ng-deep .data-container .user-list-item .user-list-detail {\n  flex: 1 1 0;\n}\n:host ::ng-deep .data-container .user-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n:host ::ng-deep .data-container .user-list-item .user-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n:host ::ng-deep .data-container .user-list-item .user-list-action {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep .data-container .user-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n:host ::ng-deep .data-container .row-space {\n  margin-bottom: 10px;\n}\n:host ::ng-deep p-dropdown {\n  margin-left: 5px;\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .user-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  :host ::ng-deep .user-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  :host ::ng-deep .user-list-item .user-list-detail {\n    text-align: center;\n  }\n  :host ::ng-deep .user-list-item .user-price {\n    align-self: center;\n  }\n  :host ::ng-deep .user-list-item .user-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  :host ::ng-deep .user-list-item .user-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmNpb25hcmlvLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxrQkFBQTtBQURaO0FBR1E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtBQUhaO0FBTVE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBSlo7QUFPUTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFMWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFOWjtBQVFZO0VBQ0ksWUFBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7QUFOaEI7QUFTWTtFQUNJLFdBQUE7QUFQaEI7QUFVWTtFQUNJLG9CQUFBO0FBUmhCO0FBV1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVRoQjtBQVlZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBVmhCO0FBYVk7RUFDSSxxQkFBQTtBQVhoQjtBQWlCUTtFQUNJLG1CQUFBO0FBZlo7QUFtQkk7RUFDSSxnQkFBQTtBQWpCUjtBQXFCQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxtQkFBQTtFQWxCTjtFQW9CTTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VBbEJWO0VBcUJNO0lBQ0ksa0JBQUE7RUFuQlY7RUFzQk07SUFDSSxrQkFBQTtFQXBCVjtFQXVCTTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQXJCVjtFQXdCTTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQXRCVjtBQUNGIiwiZmlsZSI6ImZ1bmNpb25hcmlvLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5kYXRhLWNvbnRhaW5lciB7XG4gICAgICAgIC5jZW50ZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnAtZHJvcGRvd24ge1xuICAgICAgICAgICAgd2lkdGg6IDE0cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItY2F0ZWdvcnktaWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1jYXRlZ29yeSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXItbGlzdC1kZXRhaWwge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucC1yYXRpbmcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXNlci1wcmljZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLWxpc3QtYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3ctc3BhY2V7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC1kcm9wZG93bntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgOmhvc3QgOjpuZy1kZWVwIC51c2VyLWxpc3QtaXRlbSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWxpc3QtZGV0YWlsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLXByaWNlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWxpc3QtYWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItbGlzdC1hY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 91328:
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/patrimonio-cadastro/patrimonio-cadastro.component.scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRyaW1vbmlvLWNhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 49100:
/*!*********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/patrimonio-detail/patrimonio-detail.component.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRyaW1vbmlvLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 70682:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-recurso-module/patrimonio-main/patrimonio-main.component.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ::ng-deep .data-container .center {\n  text-align: center;\n}\n:host ::ng-deep .data-container .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n:host ::ng-deep .data-container .patrimonio-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n:host ::ng-deep .data-container .patrimonio-description {\n  margin: 0 0 1rem 0;\n}\n:host ::ng-deep .data-container .patrimonio-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n:host ::ng-deep .data-container .patrimonio-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n:host ::ng-deep .data-container .patrimonio-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n:host ::ng-deep .data-container .patrimonio-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n:host ::ng-deep .data-container .patrimonio-list-item .patrimonio-list-detail {\n  margin-left: 10px;\n  flex: 1 1 0;\n}\n:host ::ng-deep .data-container .patrimonio-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n:host ::ng-deep .data-container .patrimonio-list-item .patrimonio-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n:host ::ng-deep .data-container .patrimonio-list-item .patrimonio-list-action {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep .data-container .patrimonio-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .patrimonio-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  :host ::ng-deep .patrimonio-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  :host ::ng-deep .patrimonio-list-item .patrimonio-list-detail {\n    text-align: center;\n  }\n  :host ::ng-deep .patrimonio-list-item .patrimonio-price {\n    align-self: center;\n  }\n  :host ::ng-deep .patrimonio-list-item .patrimonio-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  :host ::ng-deep .patrimonio-list-item .patrimonio-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdHJpbW9uaW8tbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGtCQUFBO0FBRFo7QUFHUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQURaO0FBSVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRlo7QUFLUTtFQUNJLGtCQUFBO0FBSFo7QUFNUTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUFKWjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUxaO0FBUVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQU5aO0FBUVk7RUFDSSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtBQU5oQjtBQVNZO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBUGhCO0FBVVk7RUFDSSxvQkFBQTtBQVJoQjtBQVdZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFUaEI7QUFZWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVZoQjtBQWFZO0VBQ0kscUJBQUE7QUFYaEI7QUFpQkE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUFkTjtFQWdCTTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VBZFY7RUFpQk07SUFDSSxrQkFBQTtFQWZWO0VBa0JNO0lBQ0ksa0JBQUE7RUFoQlY7RUFtQk07SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUFqQlY7RUFvQk07SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFsQlY7QUFDRiIsImZpbGUiOiJwYXRyaW1vbmlvLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5kYXRhLWNvbnRhaW5lciB7XG4gICAgICAgIC5jZW50ZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnAtZHJvcGRvd24ge1xuICAgICAgICAgICAgd2lkdGg6IDE0cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXRyaW1vbmlvLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhdHJpbW9uaW8tZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhdHJpbW9uaW8tY2F0ZWdvcnktaWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucGF0cmltb25pby1jYXRlZ29yeSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXRyaW1vbmlvLWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhdHJpbW9uaW8tbGlzdC1kZXRhaWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucC1yYXRpbmcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGF0cmltb25pby1wcmljZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wYXRyaW1vbmlvLWxpc3QtYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIDpob3N0IDo6bmctZGVlcCAucGF0cmltb25pby1saXN0LWl0ZW0ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgIH1cblxuICAgICAgICAucGF0cmltb25pby1saXN0LWRldGFpbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGF0cmltb25pby1wcmljZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGF0cmltb25pby1saXN0LWFjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXRyaW1vbmlvLWxpc3QtYWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 95535:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administracao-recurso/administracao-recurso.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADM. Recursos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br />\n  <ion-segment class=\"background-segment\" [(ngModel)]=\"currentTab\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"changeTab($event)\">\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"funcionario\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"people-outline\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Funcionários\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"max-width: 200px\" layout=\"icon-start\" value=\"patrimonio\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"desktop-outline\"></ion-icon>\n      <ion-label style=\"font-size: 1.1em\"> Patrimônios </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <br />\n\n  <ng-container *ngIf=\"currentTab === 'funcionario'\">\n    <div style=\"max-width: 95%; margin: auto\">\n      <app-funcionario-main></app-funcionario-main>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"currentTab === 'patrimonio'\">\n    <div style=\"max-width: 95%; margin: auto\">\n      <app-patrimonio-main></app-patrimonio-main>\n    </div>\n  </ng-container>\n</ion-content>");

/***/ }),

/***/ 49395:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/adm-recurso-module/funcionario-cadastro/funcionario-cadastro.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content appScrollTheme>\n  <br>\n  <div class=\"card\">\n    <p-steps [activeIndex]=\"stepIndex\" [model]=\"steps\" [readonly]=\"true\"></p-steps>\n  </div>\n\n  <ng-container *ngIf=\"stepIndex == 0\">\n    <form *ngIf=\"isLoaded\" [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n      <div class=\"default-form\">\n        <ion-grid class=\"border\">\n          <div class=\"limiter\">\n            <ion-row style=\"margin-top: 5px\">\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-id-card\"></i></span>\n                  <input type=\"text\" pInputText placeholder=\"Nome do funcionário\" formControlName=\"nome\" />\n                </div>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-password placeholder=\"Senha do funcionário\" formControlName=\"senha\" [toggleMask]=\"true\"\n                    [feedback]=\"false\"></p-password>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a senha \"\n                  *ngIf=\"isInputError('senha')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-desktop\"></i></span>\n                  <p-inputMask placeholder=\"CPF do funcionário\" formControlName=\"cpf\" mask=\"999.999.999-99\">\n                  </p-inputMask>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o CPF\"\n                  *ngIf=\"isInputError('cpf')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <input type=\"text\" pInputText placeholder=\"Email do funcionário\" formControlName=\"email\" />\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o email \"\n                  *ngIf=\"isInputError('email')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                  <p-dropdown [options]=\"perfis\" placeholder=\"Selecione um perfil\" formControlName=\"perfil_id\"\n                    optionLabel=\"nome\"></p-dropdown>\n                </div>\n                <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione um perfil\"\n                  *ngIf=\"isInputError('perfil_id')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                  <p-dropdown [options]=\"lotericas\" placeholder=\"Qual lotérica ele estará alocado?\"\n                    formControlName=\"loterica_id\" optionLabel=\"nome\"></p-dropdown>\n                </div>\n                <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione uma lotérica\"\n                  *ngIf=\"isInputError('loterica_id')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col class=\"ion-align-self-end\">\n                <div class=\"btn-end\">\n                  <p-button label=\"Avançar\" (onClick)=\"create()\" [disabled]=\"disableBTN()\" icon=\"pi pi-angle-right\"\n                    iconPos=\"right\"></p-button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-grid>\n      </div>\n    </form>\n  </ng-container>\n\n  <ng-container *ngIf=\"stepIndex == 1\">\n    <app-endereco [idOf]=\"createdUserId\" [isFuncionario]=\"true\" (createdEvent)=\"listenEndereco($event)\"></app-endereco>\n  </ng-container>\n\n  <br>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 68661:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/adm-recurso-module/funcionario-detail/funcionario-detail.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<br>\n\n<ion-content appScrollTheme>\n  <form *ngIf=\"isLoaded\" [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n    <div class=\"default-form\">\n      <ion-grid class=\"border\">\n        <div class=\"limiter\">\n          <ion-row style=\"margin-top: 5px\">\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-id-card\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Nome do funcionário\" formControlName=\"nome\" />\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                <p-password placeholder=\"Senha do funcionário\" formControlName=\"senha\" [feedback]=\"false\"></p-password>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a senha \"\n                *ngIf=\"isInputError('senha')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\" style=\"width: 100%; text-align: start; justify-content: start\">É administrador?</span>\n                <span class=\"p-inputgroup-addon\">\n                  <p-inputSwitch formControlName=\"is_admin\"></p-inputSwitch>\n                </span>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o CPF\"\n                *ngIf=\"isInputError('is_admin')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                <p-dropdown [options]=\"listStatus\" placeholder=\"Qual status?\" formControlName=\"status\"\n                  optionLabel=\"nome\"></p-dropdown>\n              </div>\n              <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione um status\"\n                *ngIf=\"isInputError('status')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Email do funcionário\" formControlName=\"email\" />\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o email \"\n                *ngIf=\"isInputError('email')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                <p-dropdown [options]=\"perfis\" placeholder=\"Selecione um perfil\" formControlName=\"perfil_id\"\n                  optionLabel=\"nome\"></p-dropdown>\n              </div>\n              <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione um perfil\"\n                *ngIf=\"isInputError('perfil_id')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                <p-dropdown [options]=\"lotericas\" placeholder=\"Qual lotérica ele estará alocado?\"\n                  formControlName=\"loterica_id\" optionLabel=\"nome\"></p-dropdown>\n              </div>\n              <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione um perfil\"\n                *ngIf=\"isInputError('perfil_id')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-justify-content-end\">\n            <ion-col class=\"ion-align-self-end\">\n              <div class=\"btn-end\">\n                <p-button label=\"Atualizar\" (onClick)=\"update()\" [disabled]=\"disableBTN()\" icon=\"pi pi-angle-right\"\n                  iconPos=\"right\"></p-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n  </form>\n</ion-content>\n\n<br>\n\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 91263:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/adm-recurso-module/funcionario-main/funcionario-main.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<br>\n<div class=\"card\">\n  <p-dataView emptyMessage=\"Nada encontrado, experimente escolher outra lotérica\" class=\"data-container\" #dv\n    [value]=\"users\" [paginator]=\"true\" [rows]=\"9\" filterBy=\"nome\" layout=\"list\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex flex-column md:flex-row md:justify-content-start row-space\">\n\n        <p-dropdown [options]=\"sortLotericas\" placeholder=\"Lotérica\" (onChange)=\"changeLoterica($event)\"\n          styleClass=\"mb-2 md:mb-0\"></p-dropdown>\n\n        <p-dropdown  [options]=\"sortOptions\" placeholder=\"Filtrar\" (onChange)=\"changeFiltro($event)\"\n          styleClass=\"mb-2 md:mb-0\"></p-dropdown>\n\n      </div>\n      <div class=\"flex flex-column md:flex-row md:justify-content-between row-space\">\n        <span class=\"p-input-icon-left mb-2 md:mb-0 \">\n          <i class=\"pi pi-search\"></i>\n          <input type=\"search\" pInputText placeholder=\"Buscar por nome\" (input)=\"dv.filter($event.target.value)\">\n        </span>\n        <p-button icon=\"pi pi-user-plus\" label=\"Novo funcionário\" (click)=\"createNewUser()\">\n        </p-button>\n      </div>\n\n    </ng-template>\n    <ng-template let-user pTemplate=\"listItem\">\n      <div *ngIf=\"isLoaded\" #templateGrid class=\"col-12\">\n        <div class=\"user-list-item\">\n          <img [src]=\"setUserImage(user)\" [alt]=\"user.name\" />\n          <div class=\"user-list-detail\">\n            <div class=\"user-name\">{{ user.nome }}</div>\n            <div class=\"user-description\">{{ user.cpf }}</div>\n            <div class=\"user-description\">{{ user.current_machine?.nome || \"Usuário deslogado\" }}</div>\n            <i class=\"pi pi-sitemap user-category-icon\"></i><span class=\"user-category\">{{user.perfil?.nome || \"Sem\n              Perfil\"}}</span>\n          </div>\n          <div class=\"user-list-action\">\n            <p-button icon=\"pi pi-user-edit\" label=\"Funcionário\" (click)=\"detalharFuncionario(user)\">\n            </p-button>\n            <p-button icon=\"pi pi-user-edit\" label=\"Endereço\" (click)=\"detalharEndereco(user)\">\n            </p-button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</div>");

/***/ }),

/***/ 80184:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/adm-recurso-module/patrimonio-cadastro/patrimonio-cadastro.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content appScrollTheme>\n  <form *ngIf=\"isLoaded\" [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n    <div class=\"default-form\">\n      <ion-grid class=\"border\">\n        <div class=\"limiter\">\n          <ion-row style=\"margin-top: 5px\">\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-id-card\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Nome do patrimônio\" formControlName=\"nome\" />\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-align-center\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Descrição do patrimônio\" formControlName=\"descricao\" />\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a descrição \"\n                *ngIf=\"isInputError('descricao')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                <p-inputNumber placeholder=\"Insira o valor do patrimônio\" formControlName=\"valor_patrimonio\"\n                  inputId=\"currency-br\" mode=\"currency\" currency=\"BRL\" locale=\"pt-BR\">\n                </p-inputNumber>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o valor\"\n                *ngIf=\"isInputError('valor_patrimonio')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\" style=\"width: 100%; text-align: start; justify-content: start\">Associar\n                  a\n                  este dispositivo?</span>\n                <span class=\"p-inputgroup-addon\">\n                  <p-inputSwitch formControlName=\"id_fisico\"></p-inputSwitch>\n                </span>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Asscoiar?\"\n                *ngIf=\"isInputError('id_fisico')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                <p-dropdown [options]=\"lotericas\" placeholder=\"Qual lotérica ele estará alocado?\"\n                  formControlName=\"loterica_id\" optionLabel=\"nome\"></p-dropdown>\n              </div>\n              <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione uma lotérica\"\n                *ngIf=\"isInputError('loterica_id')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-justify-content-end\">\n            <ion-col class=\"ion-align-self-end\">\n              <div class=\"btn-end\">\n                <p-button label=\"Salvar\" (onClick)=\"create()\" [disabled]=\"disableBTN()\" icon=\"pi pi-angle-right\"\n                  iconPos=\"right\"></p-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 90681:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/adm-recurso-module/patrimonio-detail/patrimonio-detail.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content appScrollTheme>\n  <form *ngIf=\"isLoaded\" [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n    <div class=\"default-form\">\n      <ion-grid class=\"border\">\n        <div class=\"limiter\">\n          <ion-row style=\"margin-top: 5px\">\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-id-card\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Nome do patrimônio\" formControlName=\"nome\" />\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-align-center\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Descrição do patrimônio\" formControlName=\"descricao\" />\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a descrição \"\n                *ngIf=\"isInputError('descricao')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                <p-inputNumber placeholder=\"Insira o valor do patrimônio\" formControlName=\"valor_patrimonio\"\n                  inputId=\"currency-br\" mode=\"currency\" currency=\"BRL\" locale=\"pt-BR\">\n                </p-inputNumber>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o valor\"\n                *ngIf=\"isInputError('valor_patrimonio')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\" style=\"width: 100%; text-align: start; justify-content: start\">Associar\n                  a\n                  este dispositivo?</span>\n                <span class=\"p-inputgroup-addon\">\n                  <p-inputSwitch formControlName=\"id_fisico\"></p-inputSwitch>\n                </span>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Asscoiar?\"\n                *ngIf=\"isInputError('id_fisico')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                <p-dropdown [options]=\"listStatus\" placeholder=\"Qual seu status?\"\n                  formControlName=\"status_patrimonio\" optionLabel=\"nome\"></p-dropdown>\n              </div>\n              <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione um status\"\n                *ngIf=\"isInputError('status_patrimonio')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                <p-dropdown [options]=\"lotericas\" placeholder=\"Qual lotérica ele estará alocado?\"\n                  formControlName=\"loterica_id\" optionLabel=\"nome\"></p-dropdown>\n              </div>\n              <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione uma lotérica\"\n                *ngIf=\"isInputError('loterica_id')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-justify-content-end\">\n            <ion-col class=\"ion-align-self-end\">\n              <div class=\"btn-end\">\n                <p-button label=\"Atualizar\" (onClick)=\"update()\" [disabled]=\"disableBTN()\" icon=\"pi pi-angle-right\"\n                  iconPos=\"right\"></p-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 95802:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/adm-recurso-module/patrimonio-main/patrimonio-main.component.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<br>\n<div class=\"card\">\n  <p-dataView emptyMessage=\"Nada encontrado, experimente escolher outra lotérica\" class=\"data-container\" #dv\n    [value]=\"patrimonios\" [paginator]=\"true\" [rows]=\"9\" filterBy=\"nome\" layout=\"list\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex flex-column md:flex-row md:justify-content-between\">\n        <p-dropdown [options]=\"sortLotericas\" placeholder=\"Filtrar\" (onChange)=\"changeFiltro($event)\"\n          styleClass=\"mb-2 md:mb-0\"></p-dropdown>\n        <span class=\"p-input-icon-left mb-2 md:mb-0 \">\n          <i class=\"pi pi-search\"></i>\n          <input type=\"search\" pInputText placeholder=\"Buscar por nome\" (input)=\"dv.filter($event.target.value)\">\n        </span>\n        <p-button icon=\"pi pi-plus\" label=\"Novo\" (click)=\"createNewpatrimonio()\">\n        </p-button>\n      </div>\n\n    </ng-template>\n    <ng-template let-patrimonio pTemplate=\"listItem\">\n      <div *ngIf=\"isLoaded\" #templateGrid class=\"col-12\">\n        <div class=\"patrimonio-list-item\">\n          <div class=\"patrimonio-list-detail\">\n            <div class=\"patrimonio-name\">{{ patrimonio.nome }}</div>\n            <div class=\"patrimonio-description\">{{ patrimonio.descricao }}</div>\n            <div class=\"patrimonio-description\">Usuário logado: {{ patrimonio.current_user?.nome || \"Sem usuário logado\n              no patrimônio\" }}</div>\n            <span class=\"patrimonio-category\">R$ {{patrimonio.valor_patrimonio | currency:'BRL': ''}}</span>\n          </div>\n          <div class=\"patrimonio-list-action\">\n            <p-button icon=\"pi pi-pencil\" label=\"Editar\" (click)=\"editarPatrimonio(patrimonio)\">\n            </p-button>\n            <p-button icon=\"pi pi-sync\" label=\"Associar\" (click)=\"associar(patrimonio)\">\n            </p-button>\n            <button pButton [disabled]=\"!patrimonio.id_fisico\" icon=\"pi pi-sync\" class=\" p-button-warning\" label=\"Desassociar\"\n              (click)=\"desassociar(patrimonio)\">\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</div>\n\n\n<p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n  rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administracao-recurso_administracao-recurso_module_ts.js.map