(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_fluxo-dez_fluxo-dez_module_ts"],{

/***/ 74123:
/*!*************************************************************!*\
  !*** ./src/app/pages/fluxo-dez/fluxo-dez-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoDezPageRoutingModule": () => (/* binding */ FluxoDezPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _fluxo_dez_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluxo-dez.page */ 50121);




const routes = [
    {
        path: '',
        component: _fluxo_dez_page__WEBPACK_IMPORTED_MODULE_0__.FluxoDezPage
    }
];
let FluxoDezPageRoutingModule = class FluxoDezPageRoutingModule {
};
FluxoDezPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FluxoDezPageRoutingModule);



/***/ }),

/***/ 22154:
/*!*****************************************************!*\
  !*** ./src/app/pages/fluxo-dez/fluxo-dez.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoDezPageModule": () => (/* binding */ FluxoDezPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 70472);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputmask */ 62878);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 33103);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 25533);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 56899);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/message */ 26999);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 33666);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 80814);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ 55010);
/* harmony import */ var _fluxo_dez_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluxo-dez-routing.module */ 74123);
/* harmony import */ var _fluxo_dez_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fluxo-dez.page */ 50121);
/* harmony import */ var src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directive/directives.module */ 69513);
/* harmony import */ var src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/pipe.module */ 19502);


















let FluxoDezPageModule = class FluxoDezPageModule {
};
FluxoDezPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _fluxo_dez_routing_module__WEBPACK_IMPORTED_MODULE_0__.FluxoDezPageRoutingModule,
            src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.DropdownModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_13__.InputMaskModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_14__.MessageModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumberModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__.InputTextareaModule,
            src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
        ],
        declarations: [_fluxo_dez_page__WEBPACK_IMPORTED_MODULE_1__.FluxoDezPage]
    })
], FluxoDezPageModule);



/***/ }),

/***/ 50121:
/*!***************************************************!*\
  !*** ./src/app/pages/fluxo-dez/fluxo-dez.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoDezPage": () => (/* binding */ FluxoDezPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_fluxo_dez_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fluxo-dez.page.html */ 87641);
/* harmony import */ var _fluxo_dez_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fluxo-dez.page.scss */ 37932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 6856);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/filesystem */ 2679);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enumerations/toast.enum */ 85382);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 55646);
/* harmony import */ var src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/funcionario/funcionario.service */ 43270);
/* harmony import */ var src_app_shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/preferences/preferences.service */ 31405);
/* harmony import */ var src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/transacao/transacao.service */ 6887);
/* harmony import */ var src_config_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/config/app.config */ 90672);
/* harmony import */ var src_app_shared_utils_CameraUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/utils/CameraUtils */ 81581);
/* harmony import */ var src_app_shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/app-loader/loader.service */ 38088);
/* harmony import */ var src_app_shared_webSocket_transacao_transacao_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/webSocket/transacao/transacao-socket.service */ 75390);
/* harmony import */ var src_app_shared_consts_Perfil_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/consts/Perfil.const */ 41400);





















let FluxoDezPage = class FluxoDezPage {
    constructor(formBuilder, router, funcionarioService, storage, toastService, transacaoService, preferenceService, menu, platform, loaderService, transacaoSocketService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.funcionarioService = funcionarioService;
        this.storage = storage;
        this.toastService = toastService;
        this.transacaoService = transacaoService;
        this.preferenceService = preferenceService;
        this.menu = menu;
        this.platform = platform;
        this.loaderService = loaderService;
        this.transacaoSocketService = transacaoSocketService;
        this.loggedUsers = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
        this.form = this.formBuilder.group({
            nome: ['', []],
            valor_transacao: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,]],
            quantidade_transacao: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,]],
            user_final_id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,]],
            anexo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,]],
        });
    }
    ngOnInit() {
        this.loadCurrentLoggedUsers();
        this.currentTheme = this.preferenceService.getThemePreference();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    ionViewWillLeave() {
        this.menu.enable(true);
    }
    goBack() {
        this.router.navigateByUrl('home');
    }
    loadCurrentLoggedUsers() {
        const { loterica_id } = this.storage.getLocalUser().user;
        const { id } = this.storage.getLocalUser().user;
        const sub = this.funcionarioService.listAllUsers(loterica_id, { perfil_nomes: [src_app_shared_consts_Perfil_const__WEBPACK_IMPORTED_MODULE_13__.PerfilEnum.OPERADOR] })
            .subscribe(loggedUsers => {
            this.loggedUsers = loggedUsers.filter(lu => lu.id !== id);
        });
        this.subscriptions.add(sub);
    }
    createTransacao() {
        const { loterica_id, nome } = this.storage.getLocalUser().user;
        const { id: user_final_id, nome: userSolicitado } = this.form.get('user_final_id').value;
        let nomeTransacao = this.form.get('nome').value;
        if (!nomeTransacao || nomeTransacao.trim().length <= 0) {
            const date = new Date();
            nomeTransacao = `Resumo Bolão - de ${nome} para ${userSolicitado} às ${date.toLocaleString("pt-BR")}`;
        }
        const transacao = {
            nome: nomeTransacao.trim(),
            local_entrada: 'CEF',
            local_saida: 'Caixa',
            loterica_id,
            quantidade_transacao: this.form.get('quantidade_transacao').value,
            tipo_transacao_codigo: 16,
            user_final_id,
            valor_transacao: this.form.get('valor_transacao').value,
        };
        const sub = this.transacaoService.create(transacao)
            .subscribe(data => {
            const { id } = data;
            const anexo = this.form.get('anexo').value;
            const sub = this.transacaoService.uploadAnexo(anexo, id)
                .subscribe(response => {
                this.transacaoSocketService.emitNewTransacao(id);
                this.presentToast('success', 'Sucesso!', 'Sua transação foi criada com sucesso', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_4__.Toast.mediumDuration);
                this.router.navigateByUrl('home');
            });
            this.subscriptions.add(sub);
        });
        this.subscriptions.add(sub);
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
    questionTerminal() {
        this.presentToast('warn', 'Terminal do caixa', 'Insira o terminal que você está operando', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_4__.Toast.mediumDuration);
    }
    getFileButtonFill() {
        if (this.currentTheme == 'dark') {
            return 'outline';
        }
        return 'solid';
    }
    uploadFile(event) {
        const file = event.target.files[0];
        this.fileSelected = `${file.name} - ${(file.size / 1000).toFixed(2)}KB`;
        this.form.get('anexo').setValue(file);
    }
    takePhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera
            });
            if (image) {
                this.loaderService.isLoading.next(true);
                try {
                    yield this.saveImage(image);
                }
                catch (e) {
                    console.error(e.message);
                    this.presentToast('error', 'Falha ao salvar a foto', e.message, src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_4__.Toast.mediumDuration);
                }
                this.loaderService.isLoading.next(false);
            }
        });
    }
    saveImage(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const base64Data = yield src_app_shared_utils_CameraUtils__WEBPACK_IMPORTED_MODULE_10__.CameraUtils.readAsBase64(photo, this.platform);
            const fileName = new Date().getTime() + '.png';
            try {
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Filesystem.mkdir({
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Directory.Data,
                    path: `${src_config_app_config__WEBPACK_IMPORTED_MODULE_9__.IMAGE_DIR}`,
                    recursive: true,
                });
            }
            catch (e) {
                console.error('Pasta não criada: ' + e.message);
            }
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Filesystem.writeFile({
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Directory.Data,
                path: `${src_config_app_config__WEBPACK_IMPORTED_MODULE_9__.IMAGE_DIR}/${fileName}`,
                data: base64Data,
            });
            const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Filesystem.readFile({
                path: `${src_config_app_config__WEBPACK_IMPORTED_MODULE_9__.IMAGE_DIR}/${fileName}`,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Directory.Data,
            });
            const localPhoto = {
                data: `data:image/png;base64,${readFile.data}`,
                name: fileName,
                path: `${src_config_app_config__WEBPACK_IMPORTED_MODULE_9__.IMAGE_DIR}/${fileName}`
            };
            const response = yield fetch(localPhoto.data);
            const blob = yield response.blob();
            const file = new File([blob], fileName);
            this.fileSelected = `${fileName} - ${(blob.size / 1000).toFixed(2)}KB`;
            this.form.get('anexo').setValue(file);
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
FluxoDezPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_6__.FuncionarioService },
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_18__.MessageService },
    { type: src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_8__.TransacaoService },
    { type: src_app_shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_7__.PreferencesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform },
    { type: src_app_shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService },
    { type: src_app_shared_webSocket_transacao_transacao_socket_service__WEBPACK_IMPORTED_MODULE_12__.TransacaoSocketService }
];
FluxoDezPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ['fileInput',] }]
};
FluxoDezPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-fluxo-dez',
        template: _raw_loader_fluxo_dez_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fluxo_dez_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FluxoDezPage);



/***/ }),

/***/ 37932:
/*!*****************************************************!*\
  !*** ./src/app/pages/fluxo-dez/fluxo-dez.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".upload-btn {\n  height: 75px;\n}\n\n.btn-keep-color {\n  --background: var(--same-line)!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXhvLWRlei5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx3Q0FBQTtBQUNKIiwiZmlsZSI6ImZsdXhvLWRlei5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWJ0biB7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uYnRuLWtlZXAtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zYW1lLWxpbmUpIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 87641:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fluxo-dez/fluxo-dez.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\n      <ion-button style=\"min-width: 70px;\" size=\"large\" color=\"primary\" shape=\"round\" fill=\"outline\">\n        <ion-icon style=\"font-size:40px\" name=\"arrow-undo-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Relatório Bolão\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <form *ngIf=\"loggedUsers.length > 0\" [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n    <div class=\"default-form\">\n      <ion-grid class=\"border\">\n        <div class=\"limiter\">\n          <ion-row style=\"margin-top: 5px\">\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                <p-inputNumber placeholder=\"Custo da transação, ex: 123,999\" formControlName=\"valor_transacao\"\n                  mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                *ngIf=\"isInputError('valor_transacao')\"></p-message>\n            </ion-col>\n\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                <p-inputNumber placeholder=\"Quantidade de bolões, ex: 3\" formControlName=\"quantidade_transacao\">\n                </p-inputNumber>\n              </div>\n              <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                *ngIf=\"isInputError('quantidade_transacao')\"></p-message>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                <p-dropdown [options]=\"loggedUsers\" placeholder=\"Selecione um funcionário\"\n                  formControlName=\"user_final_id\" optionLabel=\"nome\"></p-dropdown>\n              </div>\n              <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione um funcionário\"\n                *ngIf=\"isInputError('user_final_id')\"></p-message>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-button [fill]=\"getFileButtonFill()\" class=\"upload-btn\" (click)=\"fileInput.click()\">\n                <ion-label class=\"wrap-text\">\n                  Anexar <br />\n                  Arquivo\n                  <br />\n                  <ion-icon style=\"margin-top: 5px; font-size: 24px\" name=\"folder-open-outline\" size=\"large\"></ion-icon>\n                </ion-label>\n              </ion-button>\n              <input class=\"ion-hide\" #fileInput type=\"file\" (change)=\"uploadFile($event)\" id=\"file-input\"\n                accept=\"image/png, image/jpeg\" />\n            </ion-col>\n            <ion-col class=\"ion-text-center\">\n              <ion-button class=\"upload-btn\" [fill]=\"getFileButtonFill()\" (click)=\"takePhoto()\">\n                <ion-label>Tirar <br />\n                  Foto\n                  <br />\n                  <ion-icon style=\"margin-top: 5px; font-size: 20px\" name=\"camera-outline\">\n                  </ion-icon>\n                </ion-label>\n              </ion-button>\n\n              <input class=\"ion-hide\" #fileInput2 type=\"file\" (change)=\"uploadFile($event)\" id=\"file-input\"\n                accept=\"image/png, image/jpeg\" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item class=\"btn-keep-color\" >\n                <ion-label>\n                  {{ fileSelected }}\n                </ion-label>\n                <ion-icon name=\"information-circle\" size=\"small\" slot=\"end\"></ion-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row class=\"ion-justify-content-end\">\n            <ion-col class=\"ion-align-self-end\">\n              <div class=\"btn-end\">\n                <p-button label=\"Criar\" (onClick)=\"createTransacao()\" [disabled]=\"disableBTN()\" icon=\"pi pi-angle-right\"\n                  iconPos=\"right\"></p-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fluxo-dez_fluxo-dez_module_ts.js.map