(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_fluxo-onze_fluxo-onze_module_ts"],{

/***/ 50560:
/*!***************************************************************!*\
  !*** ./src/app/pages/fluxo-onze/fluxo-onze-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoOnzePageRoutingModule": () => (/* binding */ FluxoOnzePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _fluxo_onze_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluxo-onze.page */ 89482);




const routes = [
    {
        path: '',
        component: _fluxo_onze_page__WEBPACK_IMPORTED_MODULE_0__.FluxoOnzePage
    }
];
let FluxoOnzePageRoutingModule = class FluxoOnzePageRoutingModule {
};
FluxoOnzePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FluxoOnzePageRoutingModule);



/***/ }),

/***/ 48340:
/*!*******************************************************!*\
  !*** ./src/app/pages/fluxo-onze/fluxo-onze.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoOnzePageModule": () => (/* binding */ FluxoOnzePageModule)
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
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 80814);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ 55010);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/steps */ 9873);
/* harmony import */ var _fluxo_onze_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluxo-onze-routing.module */ 50560);
/* harmony import */ var _fluxo_onze_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fluxo-onze.page */ 89482);
/* harmony import */ var src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directive/directives.module */ 69513);
/* harmony import */ var src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/pipe.module */ 19502);



















let FluxoOnzePageModule = class FluxoOnzePageModule {
};
FluxoOnzePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _fluxo_onze_routing_module__WEBPACK_IMPORTED_MODULE_0__.FluxoOnzePageRoutingModule,
            src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.DropdownModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_13__.InputMaskModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_14__.MessageModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule,
            primeng_steps__WEBPACK_IMPORTED_MODULE_16__.StepsModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__.InputTextareaModule,
            src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
        ],
        declarations: [_fluxo_onze_page__WEBPACK_IMPORTED_MODULE_1__.FluxoOnzePage]
    })
], FluxoOnzePageModule);



/***/ }),

/***/ 89482:
/*!*****************************************************!*\
  !*** ./src/app/pages/fluxo-onze/fluxo-onze.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoOnzePage": () => (/* binding */ FluxoOnzePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_fluxo_onze_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fluxo-onze.page.html */ 62540);
/* harmony import */ var _fluxo_onze_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fluxo-onze.page.scss */ 1277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 88984);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 6856);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/filesystem */ 2679);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 41388);
/* harmony import */ var src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enumerations/toast.enum */ 85382);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 55646);
/* harmony import */ var src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/funcionario/funcionario.service */ 43270);
/* harmony import */ var src_app_shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/preferences/preferences.service */ 31405);
/* harmony import */ var src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/transacao/transacao.service */ 6887);
/* harmony import */ var src_config_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/config/app.config */ 90672);
/* harmony import */ var src_app_shared_utils_CameraUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/utils/CameraUtils */ 81581);
/* harmony import */ var src_app_shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/app-loader/loader.service */ 38088);



















let FluxoOnzePage = class FluxoOnzePage {
    constructor(formBuilder, router, funcionarioService, storage, toastService, transacaoService, preferenceService, menu, platform, loaderService) {
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
        this.loggedUsers = [];
        this.stepIndex = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
        this.form = this.formBuilder.group({
            nome: ['', []],
            user_final_id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            anexo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_transacao_jogos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_jogos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_transacao_contas: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_contas: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_transacao_premios: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_premios: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_transacao_pagamentos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_pagamentos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_transacao_depositos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_depositos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_consultas: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_transacao_estornos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_estornos: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_transacao_saques: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_saques: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_saque_bb: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_saque_bb: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_saque_emergencial: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_saque_emergencial: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_estorno_jogo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            quantidade_estorno_jogo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
            valor_entrada_extra: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,]],
        });
        this.steps = [
            {
                label: 'Básico',
            },
            {
                label: 'Resumo',
            },
            {
                label: 'Anexo',
            },
        ];
        this.stepIndex = 0;
    }
    ngOnInit() {
        console.log(this.stepIndex);
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
    prevStep() {
        if (this.stepIndex > 0)
            this.stepIndex--;
    }
    nextStep() {
        if (this.stepIndex < 2)
            this.stepIndex++;
    }
    loadCurrentLoggedUsers() {
        const { loterica_id } = this.storage.getLocalUser().user;
        const { id } = this.storage.getLocalUser().user;
        const sub = this.funcionarioService.listAllLogedUsers(loterica_id)
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
            nomeTransacao = `Resumo Operadora - de ${nome} para ${userSolicitado} às ${date.toLocaleString("pt-BR")}`;
        }
        const resumoOperadora = {
            nome: nomeTransacao.trim(),
            loterica_id,
            user_final_id,
            quantidade_contas: this.form.get('quantidade_contas').value,
            valor_transacao_contas: this.form.get('valor_transacao_contas').value,
            quantidade_jogos: this.form.get('quantidade_jogos').value,
            valor_transacao_jogos: this.form.get('valor_transacao_jogos').value,
            quantidade_depositos: this.form.get('quantidade_depositos').value,
            valor_transacao_depositos: this.form.get('valor_transacao_depositos').value,
            quantidade_pagamentos: this.form.get('quantidade_pagamentos').value,
            valor_transacao_pagamentos: this.form.get('valor_transacao_pagamentos').value,
            quantidade_estornos: this.form.get('quantidade_estornos').value,
            valor_transacao_estornos: this.form.get('valor_transacao_estornos').value,
            quantidade_premios: this.form.get('quantidade_premios').value,
            valor_transacao_premios: this.form.get('valor_transacao_premios').value,
            quantidade_consultas: this.form.get('quantidade_consultas').value,
            valor_transacao_saques: this.form.get('valor_transacao_saques').value,
            quantidade_saques: this.form.get('quantidade_saques').value,
            valor_saque_bb: this.form.get('valor_saque_bb').value,
            quantidade_saque_bb: this.form.get('quantidade_saque_bb').value,
            valor_saque_emergencial: this.form.get('valor_saque_emergencial').value,
            quantidade_saque_emergencial: this.form.get('quantidade_saque_emergencial').value,
            valor_estorno_jogo: this.form.get('valor_estorno_jogo').value,
            quantidade_estorno_jogo: this.form.get('quantidade_estorno_jogo').value,
            valor_entrada_extra: this.form.get('valor_entrada_extra').value,
        };
        const sub = this.transacaoService.createResumoOperadora(resumoOperadora)
            .subscribe(data => {
            const { transacoes_id } = data;
            const sub = this.transacaoService.insertAnexo(this.form.get('anexo').value)
                .subscribe(data => {
                const { file_id } = data;
                const sub = this.transacaoService.associateAnexoTransacoes({ file_id, transacoes_id })
                    .subscribe(data => {
                    console.log(data);
                    this.presentToast('success', 'Sucesso!', 'Sua transação foi criada com sucesso', src_app_shared_enumerations_toast_enum__WEBPACK_IMPORTED_MODULE_4__.Toast.mediumDuration);
                    this.router.navigateByUrl('home');
                });
                this.subscriptions.add(sub);
            });
            this.subscriptions.add(sub);
        });
        this.subscriptions.add(sub);
    }
    goBack() {
        this.router.navigateByUrl('home');
    }
    isInputError(inputName) {
        const resp = this.form.controls[inputName].dirty &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableSetp1() {
        const situacao = !(this.form.get('user_final_id').valid && this.form.get('anexo').valid);
        return situacao;
    }
    disableSetp2() {
        const situacao = !(this.form.get('valor_transacao_jogos').valid && this.form.get('quantidade_jogos').valid
            && this.form.get('valor_transacao_contas').valid && this.form.get('quantidade_contas').valid
            && this.form.get('valor_transacao_premios').valid && this.form.get('quantidade_premios').valid
            && this.form.get('valor_transacao_pagamentos').valid && this.form.get('quantidade_pagamentos').valid
            && this.form.get('valor_transacao_depositos').valid && this.form.get('quantidade_depositos').valid
            && this.form.get('quantidade_consultas').valid
            && this.form.get('valor_transacao_estornos').valid && this.form.get('quantidade_estornos').valid);
        return situacao;
    }
    disableSetp3() {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
FluxoOnzePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: src_app_shared_services_funcionario_funcionario_service__WEBPACK_IMPORTED_MODULE_6__.FuncionarioService },
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService },
    { type: src_app_shared_services_transacao_transacao_service__WEBPACK_IMPORTED_MODULE_8__.TransacaoService },
    { type: src_app_shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_7__.PreferencesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform },
    { type: src_app_shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService }
];
FluxoOnzePage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['fileInput',] }]
};
FluxoOnzePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-fluxo-onze',
        template: _raw_loader_fluxo_onze_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fluxo_onze_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FluxoOnzePage);



/***/ }),

/***/ 1277:
/*!*******************************************************!*\
  !*** ./src/app/pages/fluxo-onze/fluxo-onze.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".upload-btn {\n  height: 75px;\n}\n\n.btn-keep-color {\n  --background: var(--same-line)!important;\n}\n\n.btn-start {\n  text-align: start;\n}\n\n.btn-end {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXhvLW9uemUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZmx1eG8tb256ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWJ0biB7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uYnRuLWtlZXAtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zYW1lLWxpbmUpIWltcG9ydGFudDtcbn1cblxuLmJ0bi1zdGFydHtcbiAgICB0ZXh0LWFsaWduOnN0YXJ0O1xufVxuXG4uYnRuLWVuZHtcbiAgICB0ZXh0LWFsaWduOmVuZDtcbn0iXX0= */");

/***/ }),

/***/ 62540:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fluxo-onze/fluxo-onze.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\n      <ion-button style=\"min-width: 70px;\" size=\"large\" color=\"primary\" shape=\"round\" fill=\"outline\">\n        <ion-icon style=\"font-size:40px\" name=\"arrow-undo-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Relatório Operadora\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br>\n  <div class=\"card\">\n    <p-steps [activeIndex]=\"stepIndex\" [model]=\"steps\" [readonly]=\"true\"></p-steps>\n  </div>\n  <form *ngIf=\"loggedUsers.length > 0\" [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n\n    <div class=\"default-form\">\n      <ion-grid class=\"border\">\n        <div class=\"limiter\">\n\n          <ng-container *ngIf=\"stepIndex == 0\">\n            <ion-row style=\"margin-top: 5px\">\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-list\"></i></span>\n                  <p-dropdown [options]=\"loggedUsers\" placeholder=\"Selecione um funcionário\"\n                    formControlName=\"user_final_id\" optionLabel=\"nome\"></p-dropdown>\n                </div>\n                <p-message [style]=\"{ 'margin-top': '3px' }\" severity=\"error\" text=\"Selecione um funcionário\"\n                  *ngIf=\"isInputError('user_final_id')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col class=\"ion-text-center\">\n                <ion-button [fill]=\"getFileButtonFill()\" class=\"upload-btn\" (click)=\"fileInput.click()\">\n                  <ion-label class=\"wrap-text\">\n                    Anexar <br />\n                    Arquivo\n                    <br />\n                    <ion-icon style=\"margin-top: 5px; font-size: 24px\" name=\"folder-open-outline\" size=\"large\">\n                    </ion-icon>\n                  </ion-label>\n                </ion-button>\n                <input class=\"ion-hide\" #fileInput type=\"file\" (change)=\"uploadFile($event)\" id=\"file-input\"\n                  accept=\"image/png, image/jpeg\" />\n              </ion-col>\n              <ion-col class=\"ion-text-center\">\n                <ion-button class=\"upload-btn\" [fill]=\"getFileButtonFill()\" (click)=\"takePhoto()\">\n                  <ion-label>Tirar <br />\n                    Foto\n                    <br />\n                    <ion-icon style=\"margin-top: 5px; font-size: 20px\" name=\"camera-outline\">\n                    </ion-icon>\n                  </ion-label>\n                </ion-button>\n\n                <input class=\"ion-hide\" #fileInput2 type=\"file\" (change)=\"uploadFile($event)\" id=\"file-input\"\n                  accept=\"image/png, image/jpeg\" />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item class=\"btn-keep-color\">\n                  <ion-label>\n                    {{ fileSelected }}\n                  </ion-label>\n                  <ion-icon name=\"information-circle\" size=\"small\" slot=\"end\"></ion-icon>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col class=\"ion-align-self-end\">\n                <div class=\"btn-start\">\n                  <p-button label=\"Anterior\" (onClick)=\"prevStep()\" icon=\"pi pi-angle-left\" iconPos=\"left\"></p-button>\n                </div>\n              </ion-col>\n              <ion-col class=\"ion-align-self-end\">\n                <div class=\"btn-end\">\n                  <p-button label=\"Próximo\" (onClick)=\"nextStep()\" icon=\"pi pi-angle-right\" iconPos=\"right\"\n                    [disabled]=\"disableSetp1()\"></p-button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ng-container>\n\n\n          <ng-container *ngIf=\"stepIndex == 1\">\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de jogos, ex: 123,999\" formControlName=\"valor_transacao_jogos\"\n                    mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_transacao_jogos')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Qtd de jogos, ex: 3\" formControlName=\"quantidade_jogos\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_jogos')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de ESTORNO de jogos, ex: 123,999\"\n                    formControlName=\"valor_estorno_jogo\" mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_estorno_jogo')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Qtd de ESTORNO de jogos, ex: 3\" formControlName=\"quantidade_estorno_jogo\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_estorno_jogo')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de contas, ex: 123,999\" formControlName=\"valor_transacao_contas\"\n                    mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_transacao_contas')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Qtd de contas, ex: 3\" formControlName=\"quantidade_contas\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_contas')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de prêmios, ex: 123,999\" formControlName=\"valor_transacao_premios\"\n                    mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_transacao_premios')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Qtd de prêmios, ex: 3\" formControlName=\"quantidade_premios\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_premios')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de pagamentos, ex: 123,999\"\n                    formControlName=\"valor_transacao_pagamentos\" mode=\"decimal\" [minFractionDigits]=\"2\"\n                    [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_transacao_pagamentos')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Qtd de pagamentos, ex: 3\" formControlName=\"quantidade_pagamentos\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_pagamentos')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de depósitos, ex: 123,999\"\n                    formControlName=\"valor_transacao_depositos\" mode=\"decimal\" [minFractionDigits]=\"2\"\n                    [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_transacao_depositos')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Qtd de depósitos, ex: 3\" formControlName=\"quantidade_depositos\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_depositos')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de estornos, ex: 123,999\" formControlName=\"valor_transacao_estornos\"\n                    mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_transacao_estornos')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Quantidade de estornos, ex: 3\" formControlName=\"quantidade_estornos\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_estornos')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de saques, ex: 123,999\" formControlName=\"valor_transacao_saques\"\n                    mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_transacao_saques')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Quantidade de saques, ex: 3\" formControlName=\"quantidade_saques\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_saques')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de saques EMERGÊNCIAIS, ex: 123,999\"\n                    formControlName=\"valor_saque_emergencial\" mode=\"decimal\" [minFractionDigits]=\"2\"\n                    [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_saque_emergencial')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Quantidade de saques EMERGÊNCIAIS, ex: 3\"\n                    formControlName=\"quantidade_saque_emergencial\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_saque_emergencial')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Valor de saques BB, ex: 123,999\" formControlName=\"valor_saque_bb\"\n                    mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_saque_bb')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Quantidade de saques BB, ex: 3\" formControlName=\"quantidade_saque_bb\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_saque_bb')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-dollar\"></i></span>\n                  <p-inputNumber placeholder=\"Entrada extra, ex: 123,999\" formControlName=\"valor_entrada_extra\"\n                    mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira o custo \"\n                  *ngIf=\"isInputError('valor_entrada_extra')\"></p-message>\n              </ion-col>\n            </ion-row>\n            <br>\n\n            <ion-row>\n              <ion-col>\n                <div class=\"p-inputgroup\">\n                  <span class=\"p-inputgroup-addon\"><i class=\"pi pi-sort-numeric-up-alt\"></i></span>\n                  <p-inputNumber placeholder=\"Qtd de consultas, ex: 3\" formControlName=\"quantidade_consultas\">\n                  </p-inputNumber>\n                </div>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Insira a quantidade\"\n                  *ngIf=\"isInputError('quantidade_consultas')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col class=\"ion-align-self-end\">\n                <div class=\"btn-start\">\n                  <p-button label=\"Anterior\" (onClick)=\"prevStep()\" icon=\"pi pi-angle-left\" iconPos=\"left\"></p-button>\n                </div>\n              </ion-col>\n              <ion-col class=\"ion-align-self-end\">\n                <div class=\"btn-end\">\n                  <p-button label=\"Criar\" (onClick)=\"createTransacao()\" [disabled]=\"disableSetp3()\" icon=\"pi pi-send\"\n                    iconPos=\"right\"></p-button>\n                </div>\n              </ion-col>\n            </ion-row>\n\n          </ng-container>\n\n        </div>\n      </ion-grid>\n    </div>\n\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fluxo-onze_fluxo-onze_module_ts.js.map