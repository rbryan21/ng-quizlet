webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isSignedIn = function () {
        return (this.user == null && this.authToken == null) ? false : true;
    };
    // if it's successful 
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token); // store token in localStorage
        localStorage.setItem('user', JSON.stringify(user)); // store user in local storage (local storage can only store strings)
        this.authToken = token;
        this.user = user;
    };
    ;
    AuthService.prototype.logout = function () {
        console.log("user logged out");
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashcardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlashcardService = (function () {
    function FlashcardService(http) {
        this.http = http;
    }
    FlashcardService.prototype.addFlashcardSet = function (flashcardSet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/flashcardsets/create', flashcardSet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FlashcardService.prototype.getFlashcardSets = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/flashcardsets/' + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FlashcardService.prototype.getFlashcardSet = function (id) {
        console.log('id = ', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/flashcardsets/set/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FlashcardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FlashcardService);
    return FlashcardService;
    var _a;
}());
//# sourceMappingURL=flashcard.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // Make sure user has all the fields
    ValidateService.prototype.validateRegister = function (user) {
        return (user.firstName != undefined && user.lastName != undefined && user.email != undefined && user.password != undefined && user.passwordRepeat != undefined);
    };
    // returns true/false if the email matches email regex
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePasswordMatch = function (password, passwordRepeat) {
        return password === passwordRepeat;
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 339;


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
//might need to add const platform = platformBrowserDynamic();
var platform = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(534),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_signup_signup_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_view_flashcard_set_view_flashcard_set_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_flashcard_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_flashcard_form_flashcard_form_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_flashcard_form_flashset_flashset_component__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'view-flashcard-set/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_view_flashcard_set_view_flashcard_set_component__["a" /* ViewFlashcardSetComponent */] },
    { path: 'flashcard', component: __WEBPACK_IMPORTED_MODULE_16__components_flashcard_form_flashcard_form_component__["a" /* FlashcardFormComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_view_flashcard_set_view_flashcard_set_component__["a" /* ViewFlashcardSetComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_flashcard_form_flashcard_form_component__["a" /* FlashcardFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_flashcard_form_flashset_flashset_component__["a" /* FlashsetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__services_flashcard_service__["a" /* FlashcardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flashcard_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(flashcardService, flashMessage, router) {
        this.flashcardService = flashcardService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = "Dashboard";
        this.flashcardSets = [];
    }
    // When they click the Create set buttons -> /flashcard
    DashboardComponent.prototype.goToCreate = function () {
        this.router.navigate(['flashcard']);
    };
    DashboardComponent.prototype.goToView = function (flashcardSet) {
        var link = ['/view-flashcard-set', flashcardSet._id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.getFlashcardSets = function () {
        var _this = this;
        var userJSON = JSON.parse(localStorage.getItem('user'));
        this.flashcardService.getFlashcardSets(userJSON.email).subscribe(function (data) {
            if (data.success) {
                _this.flashcardSets = data.flashcardSets;
            }
            else {
                _this.flashcardSets = [];
            }
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getFlashcardSets();
        console.log(this.flashcardSets);
        this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
        this.lastName = JSON.parse(localStorage.getItem("user")).lastName;
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(535),
            styles: [__webpack_require__(525)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flashcard_service__["a" /* FlashcardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_flashcard_service__["a" /* FlashcardService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flashcard_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashcardFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlashcardFormComponent = (function () {
    function FlashcardFormComponent(_fb, flashcardService, flashMessage) {
        this._fb = _fb;
        this.flashcardService = flashcardService;
        this.flashMessage = flashMessage;
    }
    FlashcardFormComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            author: JSON.parse(localStorage.getItem('user')),
            subject: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)]],
            flashset: this._fb.array([])
        });
        // add address
        this.addFlashset();
        /* subscribe to addresses value changes */
        // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    };
    FlashcardFormComponent.prototype.initFlashset = function () {
        return this._fb.group({
            term: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            definition: ['']
        });
    };
    FlashcardFormComponent.prototype.addFlashset = function () {
        var control = this.myForm.controls['flashset'];
        var flashsetCtrl = this.initFlashset();
        control.push(flashsetCtrl);
        /* subscribe to individual flashset value changes */
        // flashsetCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    };
    FlashcardFormComponent.prototype.removeFlashset = function (i) {
        var control = this.myForm.controls['flashset'];
        control.removeAt(i);
    };
    FlashcardFormComponent.prototype.saveFlashcardSet = function () {
        var _this = this;
        this.flashcardService.addFlashcardSet(JSON.stringify(this.myForm.value)).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Successfully added!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    FlashcardFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flashcard-form',
            template: __webpack_require__(536),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_flashcard_service__["a" /* FlashcardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_flashcard_service__["a" /* FlashcardService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], FlashcardFormComponent);
    return FlashcardFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=flashcard-form.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashsetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlashsetComponent = (function () {
    function FlashsetComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) === 'function' && _a) || Object)
    ], FlashsetComponent.prototype, "flashsetForm", void 0);
    FlashsetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flashset',
            template: __webpack_require__(537),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [])
    ], FlashsetComponent);
    return FlashsetComponent;
    var _a;
}());
//# sourceMappingURL=flashset.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(538),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        // Validate email
        if (!this.validateService.validateEmail(this.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                console.log('data  ', data.user);
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 3000 });
                _this.email = '';
                _this.password = '';
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(539),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.isUserSignedIn = function () {
        return this.authService.isSignedIn();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(540),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUpSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            passwordRepeat: this.passwordRepeat
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validatePasswordMatch(user.password, user.passwordRepeat)) {
            this.flashMessage.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        console.log(user);
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                // if the user gets registered
                _this.flashMessage.show('Successfully registered!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                // if the user doesn't get registered
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(541),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flashcard_service__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFlashcardSetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewFlashcardSetComponent = (function () {
    function ViewFlashcardSetComponent(flashcardService, route, router) {
        this.flashcardService = flashcardService;
        this.route = route;
        this.router = router;
        this.flashcards = [];
        this.currentCardIndex = 0;
        this.flip = 'inactive';
    }
    ViewFlashcardSetComponent.prototype.onkeyup = function () {
        this.onKey(event);
    };
    ViewFlashcardSetComponent.prototype.onKey = function (event) {
        console.log(this.flashcards.length);
        console.log(event);
        switch (event.key) {
            case 'ArrowRight':
                if (this.currentCardIndex < this.flashcards.length - 1) {
                    this.currentCardIndex++;
                    console.log('currentCardIndex = ', this.currentCardIndex);
                }
                break;
            case 'ArrowLeft':
                if (this.currentCardIndex > this.flashcards.length - 2) {
                    this.currentCardIndex--;
                    console.log('currentCardIndex = ', this.currentCardIndex);
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                this.toggleFlip();
                break;
            default:
                break;
        }
    };
    ViewFlashcardSetComponent.prototype.toggleFlip = function () {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    };
    ViewFlashcardSetComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('currentCardIndex = ', this.currentCardIndex);
        this.route.params.forEach(function (params) {
            var id = params['id'];
            console.log('idd = ', id);
            _this.flashcardService.getFlashcardSet(id).subscribe(function (data) {
                if (data.success) {
                    _this.name = data.flashcardSet.name;
                    _this.flashcards = data.flashcardSet.flashcards;
                    console.log('flashcards = ', _this.flashcards);
                }
                else {
                    var link = ['/dashboard'];
                    _this.router.navigate(link);
                }
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keydown'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ViewFlashcardSetComponent.prototype, "onkeyup", null);
    ViewFlashcardSetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-flashcard-set',
            template: __webpack_require__(542),
            styles: [__webpack_require__(532)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flipState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'rotateY(179.9deg)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'rotateY(0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_flashcard_service__["a" /* FlashcardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_flashcard_service__["a" /* FlashcardService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ViewFlashcardSetComponent);
    return ViewFlashcardSetComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=view-flashcard-set.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".panel-default {\r\n  background-color: lightgray;\r\n  padding: 30px;\r\n}\r\n\r\n.sets {\r\n  width: 80%;\r\n  padding-left: 30px;\r\n  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".btn {\r\n  background-color: black;\r\n  color: ghostwhite;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n\r\n}\r\n\r\nul li:hover {\r\n  color: orange;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\nheader .header-content {\r\n  position: relative;\r\n  text-align: center;\r\n  padding: 100px 15px 100px;\r\n  width: 100%;\r\n  background: url(/src/app/images/header.jpg) no-repeat center center fixed; \r\n  opacity: .9;\r\n  background-size: cover;\r\n  min-height: auto;\r\n  color: white;\r\n  \r\n}\r\nheader .header-content .header-content-inner h1 {\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 70px;\r\n  color: white;\r\n}\r\n\r\nheader .header-content .header-content-inner hr {\r\n  margin: 30px auto;\r\n}\r\n\r\nheader .header-content .header-content-inner p {\r\n  font-weight: 300;\r\n  color: rgba(255, 255, 255, 0.7);\r\n  font-size: 20px;\r\n  margin: 20%;\r\n}\r\n\r\nbody {\r\n  \r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "\r\nh1 {\r\n  color:black;\r\n}\r\n\r\nform {\r\n  \r\n  border: 3px solid deepskyblue;\r\n  padding: 40px;\r\n  font-size: 20px;\r\n  background-color: lightgrey;\r\n}\r\n\r\n.btn-space {\r\n  -ms-flex-line-pack: stretch;\r\n      align-content: stretch;\r\n  padding-top: 30px;\r\n}\r\n\r\n.btn {\r\n  width: 100%; \r\n}\r\n\r\n\r\n\r\n\r\n \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "/* Full-width input fields */\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn,.signupbtn {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "    .tp-wrapper {\r\n      -webkit-perspective: 800px;\r\n              perspective: 800px;\r\n    }\r\n    \r\n    .tp-box {\r\n      position: relative;\r\n      width: 200px;\r\n      height: 100px;\r\n      margin: 3rem auto;\r\n      -webkit-transform-style: preserve-3d;\r\n              transform-style: preserve-3d;\r\n      -webkit-transition: -webkit-transform 1s;\r\n      transition: -webkit-transform 1s;\r\n      transition: transform 1s;\r\n      transition: transform 1s, -webkit-transform 1s;\r\n    }\r\n    .tp-box__side {\r\n      width: 100%;\r\n      height: 100%;\r\n      position: absolute;\r\n      -webkit-backface-visibility: hidden;\r\n              backface-visibility: hidden;\r\n      color: #fff;\r\n      text-align: center;\r\n      line-height: 100px;\r\n      font-size: 24px;\r\n      font-weight: 700;\r\n      cursor: pointer;\r\n      -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n          -ms-user-select: none;\r\n              user-select: none;\r\n    }\r\n    .tp-box__front {\r\n      background: #f30d36;\r\n    }\r\n    .tp-box__back {\r\n      background: #23262d;\r\n      -webkit-transform: rotateY(179.9deg);\r\n              transform: rotateY(179.9deg);\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar> \r\n<div class=\"container-fluid\">\r\n  <flash-messages></flash-messages>\r\n      <router-outlet></router-outlet>\r\n</div>\r\n "

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<h1 highlight>Welcome {{ firstName }} {{ lastName }} <h1>\r\n\r\n<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content\">\r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n    <div class=\"col-sm-8 text-left\"> \r\n<div class=\"sets\" *ngIf=\"flashcardSetName.length > 0\">\r\n    <h1>Flashcard Sets</h1>\r\n    <div class=\"panel panel-default\" *ngFor=\"let flashcard of flashcardSetName\">\r\n       \r\n        <h3>{{ flashcard.subject }}<span><a href=\"view-flashcard-set\" type=\"button\" class=\"btn btn-primary pull-right\">View</a></span></h3>\r\n\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary\">Create New Set</button>\r\n</div>\r\n\r\n<div *ngIf=\"flashcardSetName.length == 0\">\r\n\r\n    <h3>You don't have any flashcard sets.</h3>\r\n    <button type=\"button\" class=\"btn btn-success\">Create</button>\r\n</div>\r\n<div class=\"background\"></div>\r\n\r\n<div class=\"sets\" *ngIf=\"flashcardSets.length > 0\">\r\n    <h1>Flashcard Sets</h1>\r\n    <div class=\"panel panel-default\" *ngFor=\"let flashcardSet of flashcardSets\">\r\n        <h4>{{ flashcardSet.name }}<span><a (click)=\"goToView(flashcardSet)\" type=\"button\" class=\"btn btn-primary pull-right\">View</a></span></h4>\r\n    </div>\r\n    <button type=\"button\" (click)=\"goToCreate()\" class=\"btn btn-primary\">Create New Set</button>\r\n</div>\r\n\r\n<div *ngIf=\"flashcardSets.length == 0\">\r\n\r\n    <h3>You don't have any flashcard sets.</h3>\r\n    <button type=\"button\" (click)=\"goToCreate()\" class=\"btn btn-success\">Create</button>\r\n</div>\r\n<div class=\"background\"></div>\r\n\r\n\r\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"margin-20\">\r\n        <h3>Add Flashcard</h3>\r\n      </div>\r\n      <form [formGroup]=\"myForm\" novalidate (submit)=\"saveFlashcardSet()\">\r\n        <div class=\"form-group\">\r\n          <label>Subject</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)] = \"name\" formControlName=\"subject\">\r\n          <small *ngIf=\"!myForm.controls.subject.valid\" class=\"text-danger\">\r\n              Subject is required (minimum 3 characters).\r\n            </small>\r\n        </div>\r\n\r\n        <!--flashset-->\r\n        <div formArrayName=\"flashset\">\r\n          <div *ngFor=\"let flashset of myForm.controls.flashset.controls; let i=index\" class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              <span>Flashset {{i + 1}}</span>\r\n              <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.flashset.controls.length > 1\" (click)=\"removeFlashset(i)\"></span>\r\n            </div>\r\n            <div class=\"panel-body\" [formGroupName]=\"i\">\r\n              <app-flashset [group]=\"myForm.controls.flashset.controls[i]\"></app-flashset>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"margin-20\">\r\n          <a (click)=\"addFlashset()\" style=\"cursor: default\">\r\n            Add another flashset +\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"margin-20\">\r\n          <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div> \r\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"flashsetForm\">\r\n    <div class=\"form-group col-xs-6\">\r\n        <label>term</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"term\">\r\n        <small [hidden]=\"flashsetForm.controls.term.valid\" class=\"text-danger\">\r\n            Term is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group col-xs-6\">\r\n        <label>definition</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"definition\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <header>\r\n        <div class=\"header-content\">\r\n            <div class=\"header-content-inner\">\r\n                <h1 id=\"homeHeading\">Quizlet RipOff</h1>\r\n                <hr>\r\n                <h3><strong>Web Application Using Mean Stack Architecture</strong></h3>\r\n                <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>\r\n                <a href=\"#about\" class=\"btn btn-primary btn-xl page-scroll\">Find Out More</a>\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n\r\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content\">\r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n    <div class=\"col-sm-8 text-left\"> \r\n      <h1 class=\"page-header\">\r\n  Login Page</h1>\r\n<form (submit)=\"onLoginSubmit()\" class=\"form-inline\">\r\n \r\n  <div class=\"form-group\">\r\n    <label ><b>Email</b></label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"enter email\" name=\"email\" size=\"50\">\r\n  </div>\r\n \r\n  <div class=\"form-group\">\r\n    <br>\r\n    <label><b>Password</b></label>\r\n    \r\n    <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"enter password\" name=\"password\" size=\"46\">\r\n   \r\n  </div>\r\n  <div class=\"btn-space\">\r\n  <input type=\"submit\" class=\"btn btn-primary btn-md\"  value=\"Login\">\r\n  </div>\r\n</form>\r\n    </div>\r\n    <div class=\"col-sm-2 sidenav\">\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n             <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Quizlet RipOff</a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n           <ul class=\"nav navbar-nav navbar-left\">\r\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n                <li *ngIf=\"!isUserSignedIn()\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n                <li *ngIf=\"isUserSignedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<h2>Signup Form</h2>\r\n\r\n<form (submit)=\"onSignUpSubmit()\" style=\"border:1px solid #ccc\">\r\n  <div class=\"container\">\r\n\r\n    <label><b>First Name</b></label>\r\n    <input type=\"text\" [(ngModel)]=\"firstName\" placeholder=\"Enter First Name\" name=\"firstName\">\r\n\r\n    <label><b>Last Name</b></label>\r\n    <input type=\"text\" [(ngModel)]=\"lastName\" placeholder=\"Enter Last Name\" name=\"lastName\">\r\n\r\n    <label><b>Email</b></label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\">\r\n\r\n    <label><b>Password</b></label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\">\r\n\r\n    <label><b>Repeat Password</b></label>\r\n    <input type=\"password\" [(ngModel)]=\"passwordRepeat\" placeholder=\"Repeat Password\" name=\"passwordRepeat\">\r\n    <input type=\"checkbox\" checked=\"checked\"> Remember me\r\n    <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n\r\n    <div class=\"clearfix\">\r\n      <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n      <button type=\"submit\" class=\"signupbtn\">Sign Up</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<h1>You are viewing Study Set {{ name }}</h1>\r\n<hr>\r\n\r\n<button class=\"btn btn-lg\" (click)=\"returnToDash()\">Return to dashboard</button>\r\n\r\n<div class=\"sets\" *ngIf=\"flashcards.length > 0\">\r\n    <div *ngFor=\"let flashcard of flashcards; let i=index\">\r\n      <div *ngIf=\"i == currentCardIndex\" class=\"tp-wrapper\">\r\n        <div class=\"tp-box\" (click)=\"toggleFlip()\" [@flipState]=\"flip\">\r\n          <div class=\"tp-box__side tp-box__front\"> {{ flashcard.term }}\r\n          </div>\r\n          <div class=\"tp-box__side tp-box__back\">  {{ flashcard.definition }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<p align=\"center\">You are viewing card {{ currentCardIndex + 1 }} of {{ flashcards.length }}</p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ })

},[560]);
//# sourceMappingURL=main.bundle.js.map