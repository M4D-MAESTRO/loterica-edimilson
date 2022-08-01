(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_transacoes_transacoes_module_ts"],{

/***/ 60420:
/*!***************************************************************!*\
  !*** ./src/app/pages/transacoes/transacoes-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransacoesPageRoutingModule": () => (/* binding */ TransacoesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _transacoes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transacoes.page */ 81131);




const routes = [
    {
        path: '',
        component: _transacoes_page__WEBPACK_IMPORTED_MODULE_0__.TransacoesPage
    }
];
let TransacoesPageRoutingModule = class TransacoesPageRoutingModule {
};
TransacoesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransacoesPageRoutingModule);



/***/ }),

/***/ 46752:
/*!*******************************************************!*\
  !*** ./src/app/pages/transacoes/transacoes.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransacoesPageModule": () => (/* binding */ TransacoesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dataview */ 378);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ 75127);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 33103);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 3681);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 70472);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 56899);
/* harmony import */ var _transacoes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transacoes-routing.module */ 60420);
/* harmony import */ var _transacoes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transacoes.page */ 81131);
/* harmony import */ var src_app_shared_components_fluxo_module_fluxo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/fluxo-module/fluxo.module */ 52372);














let TransacoesPageModule = class TransacoesPageModule {
};
TransacoesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _transacoes_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransacoesPageRoutingModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_8__.DataViewModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_9__.PanelModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
            src_app_shared_components_fluxo_module_fluxo_module__WEBPACK_IMPORTED_MODULE_2__.FluxoModule,
        ],
        declarations: [_transacoes_page__WEBPACK_IMPORTED_MODULE_1__.TransacoesPage]
    })
], TransacoesPageModule);



/***/ }),

/***/ 81131:
/*!*****************************************************!*\
  !*** ./src/app/pages/transacoes/transacoes.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransacoesPage": () => (/* binding */ TransacoesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_transacoes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./transacoes.page.html */ 69512);
/* harmony import */ var _transacoes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transacoes.page.scss */ 32424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enumerations/statusTransacao.enum */ 58969);
/* harmony import */ var src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enumerations/toast.enum */ 85382);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 55646);
/* harmony import */ var src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transacao/transacao.service */ 6887);
/* harmony import */ var src_app_shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/ExternalLink */ 93301);
/* harmony import */ var src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/funcionario/funcionario.service */ 43270);













let TransacoesPage = class TransacoesPage {
    constructor(transacaoService, confirmationService, modal, toastService, storage, funcionarioService) {
        this.transacaoService = transacaoService;
        this.confirmationService = confirmationService;
        this.modal = modal;
        this.toastService = toastService;
        this.storage = storage;
        this.funcionarioService = funcionarioService;
        this.transacoes = [];
        this.transacoesOriginais = [];
        this.isLoaded = false;
        this.showJustificativaModal = false;
        this.sortTipoTransacao = [];
        this.sortUserInicial = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    }
    ngOnInit() {
        const { id: user_final_id, loterica_id } = this.storage.getLocalUser().user;
        this.loadTransacoes({
            user_final_id,
            status_transacao_cod: src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__.StatusTransacaoEnum.PENDENTE,
            loterica_id
        });
        this.loadFuncionarios();
        this.loadTipoTransacao();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadTransacoes({ loterica_id, status_transacao_cod, tipo_transacao_id, user_final_id, user_inicial_id, }) {
        //const loterica_id = "c8af6707-748d-4997-b8b3-84feaffc309a";
        const sub = this.transacaoService.list({ loterica_id, status_transacao_cod, tipo_transacao_id, user_final_id, user_inicial_id, })
            .subscribe(data => {
            this.transacoes = data;
            this.transacoesOriginais = data;
            this.isLoaded = true;
        });
        this.subscriptions.add(sub);
    }
    loadTipoTransacao() {
        const sub = this.transacaoService.listTipoTransacao()
            .subscribe(data => {
            this.sortTipoTransacao = data;
        });
        this.subscriptions.add(sub);
    }
    loadFuncionarios() {
        const { loterica_id } = this.storage.getLocalUser().user;
        const sub = this.funcionarioService.listAllUsers(loterica_id)
            .subscribe(data => {
            this.sortUserInicial = data;
        });
        this.subscriptions.add(sub);
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
        const { id } = transacao;
        this.confirmationDialog(src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__.StatusTransacaoEnum.APROVADO, id);
    }
    rejeitar(transacao) {
        this.showJustificativaModal = true;
        this.transacaoToBeDeleted = transacao;
    }
    atualizar() {
        const { id: user_final_id, loterica_id } = this.storage.getLocalUser().user;
        this.loadTransacoes({
            user_final_id,
            status_transacao_cod: src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__.StatusTransacaoEnum.PENDENTE,
            loterica_id
        });
    }
    filterTipoTransacao(event) {
        if (event) {
            event.first = 0;
        }
        if (this.selectedUserInicial) {
            this.transacoes = this.transacoesOriginais.filter(t => t.user_inicial.id == this.selectedUserInicial.id);
            this.transacoes = this.transacoes.filter(t => t.tipo_transacao.codigo == this.selectedTipoTransacao.codigo);
        }
        else {
            this.transacoes = this.transacoesOriginais.filter(t => t.tipo_transacao.codigo == this.selectedTipoTransacao.codigo);
        }
    }
    filterSolicitante(event) {
        if (event) {
            event.first = 0;
        }
        if (this.selectedTipoTransacao) {
            this.transacoes = this.transacoesOriginais.filter(t => t.tipo_transacao.codigo == this.selectedTipoTransacao.codigo);
            this.transacoes = this.transacoes.filter(t => t.user_inicial.id == this.selectedUserInicial.id);
        }
        else {
            this.transacoes = this.transacoesOriginais.filter(t => t.user_inicial.id == this.selectedUserInicial.id);
        }
    }
    filterClear() {
        this.transacoes = this.transacoesOriginais;
        if (this.selectedUserInicial) {
            this.transacoes = this.transacoesOriginais.filter(t => t.user_inicial.id == this.selectedUserInicial.id);
        }
        if (this.selectedTipoTransacao) {
            this.transacoes = this.transacoesOriginais.filter(t => t.tipo_transacao.codigo == this.selectedTipoTransacao.codigo);
        }
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
                    const { id: user_final_id, loterica_id } = this.storage.getLocalUser().user;
                    this.loadTransacoes({
                        user_final_id,
                        status_transacao_cod: src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__.StatusTransacaoEnum.PENDENTE,
                        loterica_id
                    });
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
                const { id: user_final_id, loterica_id, } = this.storage.getLocalUser().user;
                this.loadTransacoes({
                    user_final_id,
                    status_transacao_cod: src_app_shared_enumerations_statusTransacao_enum__WEBPACK_IMPORTED_MODULE_2__.StatusTransacaoEnum.PENDENTE,
                    loterica_id,
                });
                this.transacaoToBeDeleted = undefined;
                this.presentToast('success', 'Sucesso!', `Rejeitado com sucesso!`, src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_3__.Toast.mediumDuration);
            });
            this.subscriptions.add(sub);
        }
        this.transacaoToBeDeleted = undefined;
    }
    showModal(component, componentProps) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.loadTransacoes({ loterica_id });
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
TransacoesPage.ctorParameters = () => [
    { type: src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_5__.TransacaoService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService },
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_7__.FuncionarioService }
];
TransacoesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-transacoes',
        template: _raw_loader_transacoes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_transacoes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TransacoesPage);



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

/***/ 32424:
/*!*******************************************************!*\
  !*** ./src/app/pages/transacoes/transacoes.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ::ng-deep .data-container .center {\n  text-align: center;\n}\n:host ::ng-deep .data-container .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n:host ::ng-deep .data-container .transacao-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n:host ::ng-deep .data-container .transacao-description {\n  margin: 0 0 1rem 0;\n}\n:host ::ng-deep .data-container .transacao-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n:host ::ng-deep .data-container .transacao-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n:host ::ng-deep .data-container .transacao-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n:host ::ng-deep .data-container .transacao-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n:host ::ng-deep .data-container .transacao-list-item .transacao-list-detail {\n  flex: 1 1 0;\n}\n:host ::ng-deep .data-container .transacao-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n:host ::ng-deep .data-container .transacao-list-item .transacao-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n:host ::ng-deep .data-container .transacao-list-item .transacao-list-action {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep .data-container .transacao-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .transacao-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  :host ::ng-deep .transacao-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-list-detail {\n    text-align: center;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-price {\n    align-self: center;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  :host ::ng-deep .transacao-list-item .transacao-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n.margin-menu {\n  margin-right: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWNvZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksa0JBQUE7QUFEWjtBQUdRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtBQUhaO0FBTVE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBSlo7QUFPUTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFMWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFOWjtBQVFZO0VBQ0ksWUFBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7QUFOaEI7QUFTWTtFQUNJLFdBQUE7QUFQaEI7QUFVWTtFQUNJLG9CQUFBO0FBUmhCO0FBV1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVRoQjtBQVlZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBVmhCO0FBYVk7RUFDSSxxQkFBQTtBQVhoQjtBQWlCQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxtQkFBQTtFQWROO0VBZ0JNO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUFkVjtFQWlCTTtJQUNJLGtCQUFBO0VBZlY7RUFrQk07SUFDSSxrQkFBQTtFQWhCVjtFQW1CTTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQWpCVjtFQW9CTTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQWxCVjtBQUNGO0FBc0JBO0VBQ0ksNkJBQUE7QUFwQkoiLCJmaWxlIjoidHJhbnNhY29lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5kYXRhLWNvbnRhaW5lciB7XG4gICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5wLWRyb3Bkb3duIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNhY2FvLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFuc2FjYW8tZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyYW5zYWNhby1jYXRlZ29yeS1pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFuc2FjYW8tY2F0ZWdvcnkge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNhY2FvLWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRyYW5zYWNhby1saXN0LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wLXJhdGluZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50cmFuc2FjYW8tcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHJhbnNhY2FvLWxpc3QtYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIDpob3N0IDo6bmctZGVlcCAudHJhbnNhY2FvLWxpc3QtaXRlbSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmFuc2FjYW8tbGlzdC1kZXRhaWwge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyYW5zYWNhby1wcmljZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNhY2FvLWxpc3QtYWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyYW5zYWNhby1saXN0LWFjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1hcmdpbi1tZW51IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 69512:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transacoes/transacoes.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Transações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br>\n  <div style=\"max-width: 95%; margin: auto\" class=\"card\">\n    <p-dataView emptyMessage=\"Nenhuma transação pendente de sua aprovação\" class=\"data-container\" #dv\n      [value]=\"transacoes\" [paginator]=\"true\" [rows]=\"9\" filterBy=\"nome\" layout=\"list\">\n      <ng-template pTemplate=\"header\">\n\n        <div class=\"flex flex-column md:flex-row md:justify-content-center row-space\">\n          <p-dropdown class=\"margin-menu\" [showClear]=\"true\" [options]=\"sortTipoTransacao\" \n            placeholder=\"Tipo de Transação\" optionLabel=\"nome\"  [(ngModel)]=\"selectedTipoTransacao\"\n            styleClass=\"mb-2 md:mb-0\" (onChange)=\"filterTipoTransacao(dv)\" (onClear)=\"filterClear()\"></p-dropdown>\n\n          <p-dropdown [showClear]=\"true\" [options]=\"sortUserInicial\" \n            placeholder=\"Usuário solicitante\" optionLabel=\"nome\"  [(ngModel)]=\"selectedUserInicial\"\n            styleClass=\"mb-2 md:mb-0\" (onChange)=\"filterSolicitante(dv)\" (onClear)=\"filterClear()\"></p-dropdown>\n        </div>\n        <br>\n        <div class=\"flex flex-column md:flex-row md:justify-content-center row-space\">\n          <span class=\"p-input-icon-left mb-2 md:mb-0 margin-menu\">\n            <i class=\"pi pi-search\"></i>\n            <input type=\"search\" pInputText placeholder=\"Buscar por nome\" (input)=\"dv.filter($event.target.value)\">\n          </span>\n\n          <p-button class=\"filter-btn\" icon=\"pi pi-refresh\" [disabled]=\"disabledBTN\" label=\"Atualizar\"\n            (click)=\"atualizar()\">\n          </p-button>\n        </div>\n\n      </ng-template>\n      <ng-template let-transacao pTemplate=\"listItem\">\n        <div *ngIf=\"isLoaded\" #templateGrid class=\"col-12\">\n          <div class=\"transacao-list-item\">\n            <div class=\"transacao-list-detail\">\n              <div class=\"transacao-name\">{{ transacao.nome }}</div>\n              <div class=\"transacao-description\">Status: {{ transacao.status_transacao }}</div>\n              <div class=\"transacao-description\">Tipo: {{ transacao.tipo_transacao?.nome }}</div>\n              <div class=\"transacao-description\">Solicitante: {{ transacao.user_inicial.nome }}</div>\n              <div class=\"transacao-description\">Requerido: {{ transacao.user_final.nome }}</div>\n              <span class=\"transacao-category\">R$ {{\n                transacao.valor_transacao | currency:'BRL': '' }}</span>\n            </div>\n            <div class=\"transacao-list-action\">\n              <p-button icon=\"pi pi-check\" label=\"Aprovar\" (click)=\"aprovar(transacao)\">\n              </p-button>\n              <p-button icon=\"pi pi-times\" label=\"Rejeitar\" (click)=\"rejeitar(transacao)\">\n              </p-button>\n              <p-button *ngIf=\"transacao.anexo\" icon=\"pi pi-cloud-download\" label=\"Baixar anexo\"\n                (click)=\"downloadAnexo(transacao)\">\n              </p-button>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </p-dataView>\n  </div>\n</ion-content>\n\n<p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n  rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\n\n<app-justificar-rejeicao-modal [isDialogVisible]=\"showJustificativaModal\" (notifyParent)=\"getNotification($event)\">\n</app-justificar-rejeicao-modal>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transacoes_transacoes_module_ts.js.map