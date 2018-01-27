webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentauthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentauthService = (function () {
    function StudentauthService(http) {
        this.http = http;
    }
    // Register new student
    StudentauthService.prototype.registerStudent = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('student/register', student, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Authenticate login for existing user
    StudentauthService.prototype.authenticateStudent = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('student/authenticate', student, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Store jwt value in local Storage
    StudentauthService.prototype.storeStudentData = function (student, token) {
        localStorage.clear();
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(student)); // company and student both will be
        // stored as user as we ccan't determine what type of user it is before asking for user var
        this.authToken = token;
        this.student = student;
    };
    StudentauthService.prototype.getStudentId = function () {
        var user = localStorage.getItem('user');
        try {
            var obj = JSON.parse(user);
            if (obj)
                return obj.id;
            else
                return null;
        }
        catch (ex) {
            console.error(ex);
        }
    };
    StudentauthService.prototype.applyForJob = function (job_id, student_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var apply_job = {
            job_id: job_id,
            student_id: student_id
        };
        return this.http.post('student/apply', apply_job, { headers: headers }).map(function (res) { return res.json(); });
    };
    StudentauthService.prototype.studentLogout = function () {
        this.authToken = null;
        this.student = null;
        localStorage.clear();
    };
    StudentauthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], StudentauthService);
    return StudentauthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentauth.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentprofileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentprofileService = (function () {
    function StudentprofileService(http) {
        this.http = http;
    }
    StudentprofileService.prototype.getStudentId = function () {
        var user = localStorage.getItem('user');
        try {
            var obj = JSON.parse(user);
            if (obj)
                return obj.id;
            else
                return null;
        }
        catch (ex) {
            console.error(ex);
        }
    };
    StudentprofileService.prototype.getJobs = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('student/jobs', { headers: headers }).map(function (res) { return res.json(); });
    };
    StudentprofileService.prototype.getStudentInfo = function (student_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var student = {
            _id: student_id
        };
        return this.http.post('student/profile', student, { headers: headers }).map(function (res) { return res.json(); });
    };
    StudentprofileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], StudentprofileService);
    return StudentprofileService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentprofile.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanydashService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanydashService = (function () {
    function CompanydashService(http) {
        this.http = http;
    }
    CompanydashService.prototype.getJobsPosted = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('company/postedjobs', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanydashService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CompanydashService);
    return CompanydashService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companydash.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyvalidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyvalidateService = (function () {
    function CompanyvalidateService() {
    }
    CompanyvalidateService.prototype.validateRegister = function (company) {
        if (company.name == undefined || company.email == undefined || company.password == undefined) {
            return false;
        }
        else
            return true;
    };
    CompanyvalidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    CompanyvalidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CompanyvalidateService);
    return CompanyvalidateService;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companyvalidate.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostjobService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostjobService = (function () {
    function PostjobService(http) {
        this.http = http;
    }
    PostjobService.prototype.validateForm = function (job) {
        if (job.expected_CTC == undefined ||
            isNaN(job.expected_CTC)) {
            return false;
        }
        else
            return true;
    };
    PostjobService.prototype.postNewJob = function (job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('company/jobs', job, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostjobService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PostjobService);
    return PostjobService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/postjob.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentvalidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentvalidateService = (function () {
    function StudentvalidateService() {
    }
    StudentvalidateService.prototype.validateRegister = function (student) {
        if (student.name == undefined ||
            student.enrollment_no == undefined ||
            student.cgpa == undefined ||
            student.email_address == undefined ||
            student.password == undefined) {
            return false;
        }
        else
            return true;
    };
    StudentvalidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    StudentvalidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], StudentvalidateService);
    return StudentvalidateService;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentvalidate.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 399;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(518);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/main.js.map

/***/ }),

/***/ 517:
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
            template: __webpack_require__(703),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_home_home_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_studentlogin_studentlogin_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_studentregister_studentregister_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_studentdashboard_studentdashboard_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_companylogin_companylogin_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_companyregister_companyregister_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_companydashboard_companydashboard_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_postjobs_postjobs_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_companyvalidate_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_postjob_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_companynavbar_companynavbar_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_studentvalidate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_studentauth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_studentprofile_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_companyauth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_companydash_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_companyauth_guard__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_studentauth_guard__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_studentprofile_studentprofile_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__component_showjobs_showjobs_component__ = __webpack_require__(525);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__component_home_home_component__["a" /* HomeComponent */] },
    { path: 'student/login', component: __WEBPACK_IMPORTED_MODULE_7__component_studentlogin_studentlogin_component__["a" /* StudentloginComponent */] },
    { path: 'student/register', component: __WEBPACK_IMPORTED_MODULE_8__component_studentregister_studentregister_component__["a" /* StudentregisterComponent */] },
    { path: 'student/dashboard', component: __WEBPACK_IMPORTED_MODULE_9__component_studentdashboard_studentdashboard_component__["a" /* StudentdashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_studentauth_guard__["a" /* StudentauthGuard */]] },
    { path: 'student/profile', component: __WEBPACK_IMPORTED_MODULE_25__component_studentprofile_studentprofile_component__["a" /* StudentprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_studentauth_guard__["a" /* StudentauthGuard */]] },
    { path: 'company/login', component: __WEBPACK_IMPORTED_MODULE_10__component_companylogin_companylogin_component__["a" /* CompanyloginComponent */] },
    { path: 'company/register', component: __WEBPACK_IMPORTED_MODULE_11__component_companyregister_companyregister_component__["a" /* CompanyregisterComponent */] },
    { path: 'company/dashboard', component: __WEBPACK_IMPORTED_MODULE_12__component_companydashboard_companydashboard_component__["a" /* CompanydashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_companyauth_guard__["a" /* CompanyauthGuard */]] },
    { path: 'company/jobs', component: __WEBPACK_IMPORTED_MODULE_13__component_postjobs_postjobs_component__["a" /* PostjobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_companyauth_guard__["a" /* CompanyauthGuard */]] },
    { path: 'company/showjobs', component: __WEBPACK_IMPORTED_MODULE_26__component_showjobs_showjobs_component__["a" /* ShowjobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_companyauth_guard__["a" /* CompanyauthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_studentlogin_studentlogin_component__["a" /* StudentloginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_studentregister_studentregister_component__["a" /* StudentregisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_studentdashboard_studentdashboard_component__["a" /* StudentdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_companylogin_companylogin_component__["a" /* CompanyloginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_companyregister_companyregister_component__["a" /* CompanyregisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_companydashboard_companydashboard_component__["a" /* CompanydashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_postjobs_postjobs_component__["a" /* PostjobsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_companynavbar_companynavbar_component__["a" /* CompanynavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__component_studentprofile_studentprofile_component__["a" /* StudentprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__component_studentprofile_studentprofile_component__["a" /* StudentprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__component_showjobs_showjobs_component__["a" /* ShowjobsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_companyvalidate_service__["a" /* CompanyvalidateService */],
                __WEBPACK_IMPORTED_MODULE_21__services_companyauth_service__["a" /* CompanyauthService */],
                __WEBPACK_IMPORTED_MODULE_23__guards_companyauth_guard__["a" /* CompanyauthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__services_companydash_service__["a" /* CompanydashService */],
                __WEBPACK_IMPORTED_MODULE_16__services_postjob_service__["a" /* PostjobService */],
                __WEBPACK_IMPORTED_MODULE_18__services_studentvalidate_service__["a" /* StudentvalidateService */],
                __WEBPACK_IMPORTED_MODULE_19__services_studentauth_service__["a" /* StudentauthService */],
                __WEBPACK_IMPORTED_MODULE_24__guards_studentauth_guard__["a" /* StudentauthGuard */],
                __WEBPACK_IMPORTED_MODULE_20__services_studentprofile_service__["a" /* StudentprofileService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/app.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_companydash_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_companyauth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanydashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanydashboardComponent = (function () {
    function CompanydashboardComponent(companyauthService, companydashService, flashMessage, router) {
        this.companyauthService = companyauthService;
        this.companydashService = companydashService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    CompanydashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.company_id = this.companyauthService.getCompanyId();
        var company = {
            _id: this.company_id
        };
        this.companydashService.getJobsPosted(company).subscribe(function (data) {
            console.log('data', data);
            if (data.success) {
                _this.flashMessage.show('Query Successful', { cssClass: 'alert-success', timeout: 3000 });
                _this.jobs_posted = data.jobs;
            }
            else {
                _this.flashMessage.show('Something went wrong! :(', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    CompanydashboardComponent.prototype.showAppliedStudent = function (job_id) {
        var _this = this;
        this.companyauthService.getStudentApplied(job_id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                localStorage.setItem('students', JSON.stringify(data.students));
                _this.router.navigate(['/company/showjobs']);
            }
        });
    };
    CompanydashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-companydashboard',
            template: __webpack_require__(704),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_companyauth_service__["a" /* CompanyauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_companyauth_service__["a" /* CompanyauthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_companydash_service__["a" /* CompanydashService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_companydash_service__["a" /* CompanydashService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CompanydashboardComponent);
    return CompanydashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companydashboard.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_companyauth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyloginComponent = (function () {
    function CompanyloginComponent(companyauthService, router, flashMessage) {
        this.companyauthService = companyauthService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    CompanyloginComponent.prototype.ngOnInit = function () {
    };
    CompanyloginComponent.prototype.onCompanyLogin = function () {
        var _this = this;
        var company = {
            email: this.email,
            password: this.password
        };
        // Authenticate
        this.companyauthService.authenticateCompany(company).subscribe(function (data) {
            if (data.success) {
                _this.companyauthService.storeCompanyData(data.company, data.jwt);
                _this.flashMessage.show('Login Successful', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/company/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/company/login']);
            }
        });
    };
    CompanyloginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-companylogin',
            template: __webpack_require__(705),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_companyauth_service__["a" /* CompanyauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_companyauth_service__["a" /* CompanyauthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], CompanyloginComponent);
    return CompanyloginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companylogin.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_companyauth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanynavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanynavbarComponent = (function () {
    function CompanynavbarComponent(companyauthService, router, flashMessage) {
        this.companyauthService = companyauthService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    CompanynavbarComponent.prototype.ngOnInit = function () {
    };
    CompanynavbarComponent.prototype.onCompanyLogout = function () {
        this.companyauthService.companyLogout();
        this.flashMessage.show('You are Logged out.', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    CompanynavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-companynavbar',
            template: __webpack_require__(706),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_companyauth_service__["a" /* CompanyauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_companyauth_service__["a" /* CompanyauthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], CompanynavbarComponent);
    return CompanynavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companynavbar.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_companyvalidate_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_companyauth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyregisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyregisterComponent = (function () {
    function CompanyregisterComponent(companyvalidateService, flashMessage, companyauthService, router) {
        this.companyvalidateService = companyvalidateService;
        this.flashMessage = flashMessage;
        this.companyauthService = companyauthService;
        this.router = router;
    }
    CompanyregisterComponent.prototype.ngOnInit = function () {
    };
    CompanyregisterComponent.prototype.onCompanyRegister = function () {
        var _this = this;
        var company = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        // Required field
        if (!this.companyvalidateService.validateRegister(company)) {
            this.flashMessage.show('Fill in all the fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email address
        if (!this.companyvalidateService.validateEmail(company.email)) {
            this.flashMessage.show('Invalid Email Address', { cssClass: 'alert-danger', timout: 3000 });
            return false;
        }
        // Register company
        this.companyauthService.registerCompany(company).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You have been registered. Login now to access your account', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/company/login']); // Change to company dashboard when jwt local storage is done
            }
            else {
                _this.flashMessage.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/company/register']);
            }
        });
    };
    CompanyregisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-companyregister',
            template: __webpack_require__(707),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_companyvalidate_service__["a" /* CompanyvalidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_companyvalidate_service__["a" /* CompanyvalidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_companyauth_service__["a" /* CompanyauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_companyauth_service__["a" /* CompanyauthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CompanyregisterComponent);
    return CompanyregisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companyregister.component.js.map

/***/ }),

/***/ 523:
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
            template: __webpack_require__(708),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/home.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_postjob_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_companyauth_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostjobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostjobsComponent = (function () {
    function PostjobsComponent(postjobService, flashMessagesService, router, companyauthService) {
        this.postjobService = postjobService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.companyauthService = companyauthService;
    }
    PostjobsComponent.prototype.ngOnInit = function () {
    };
    PostjobsComponent.prototype.postJob = function () {
        var _this = this;
        this.company_id = this.companyauthService.getCompanyId();
        var job = {
            company_id: this.company_id,
            title: this.title,
            location: this.location,
            description: this.description,
            expected_CTC: this.expected_CTC
        };
        if (!this.postjobService.validateForm(job)) {
            this.flashMessagesService.show('Please fill correct inputs.', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return;
        }
        this.postjobService.postNewJob(job).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('Job has been posted.', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/company/dashboard']);
            }
            else {
                _this.flashMessagesService.show('Something went wrong', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    PostjobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-postjobs',
            template: __webpack_require__(709),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_postjob_service__["a" /* PostjobService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_postjob_service__["a" /* PostjobService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_companyauth_service__["a" /* CompanyauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_companyauth_service__["a" /* CompanyauthService */]) === 'function' && _d) || Object])
    ], PostjobsComponent);
    return PostjobsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/postjobs.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowjobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowjobsComponent = (function () {
    function ShowjobsComponent() {
    }
    ShowjobsComponent.prototype.ngOnInit = function () {
        this.students = JSON.parse(localStorage.getItem('students'));
        console.log(this.students);
    };
    ShowjobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-showjobs',
            template: __webpack_require__(710),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], ShowjobsComponent);
    return ShowjobsComponent;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/showjobs.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_studentprofile_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentdashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentdashboardComponent = (function () {
    function StudentdashboardComponent(studentauthService, studentprofileService, router, flashMessage) {
        this.studentauthService = studentauthService;
        this.studentprofileService = studentprofileService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.applied = new Set();
    }
    StudentdashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student_id = this.studentauthService.getStudentId();
        this.studentprofileService.getStudentInfo(this.student_id).subscribe(function (data) {
            if (data.success) {
                _this.jobs_applied = data.student.jobs_applied;
                _this.jobs_applied.forEach(function (job_id) {
                    _this.applied.add(job_id);
                });
            }
            else {
                _this.flashMessage.show('Something went wrong', {
                    cssClass: 'alert-danger', timeout: 3000
                });
            }
        });
        this.studentprofileService.getJobs().subscribe(function (data) {
            if (data.success) {
                _this.all_jobs = data.jobs;
            }
        });
    };
    StudentdashboardComponent.prototype.applyForJob = function (job_id) {
        var _this = this;
        this.studentauthService.applyForJob(job_id, this.student_id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.applied.add(job_id);
            }
            else {
                _this.flashMessage.show('Something went Wrong', {
                    cssClass: 'alert-danger', timeout: 3000
                });
                console.log('Job Applied Error');
            }
        });
    };
    StudentdashboardComponent.prototype.onStudentLogout = function () {
        this.studentauthService.studentLogout();
        this.flashMessage.show('You are Logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    StudentdashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-studentdashboard',
            template: __webpack_require__(711),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__["a" /* StudentauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__["a" /* StudentauthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_studentprofile_service__["a" /* StudentprofileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_studentprofile_service__["a" /* StudentprofileService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], StudentdashboardComponent);
    return StudentdashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentdashboard.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentloginComponent = (function () {
    function StudentloginComponent(studentauthService, router, flashMessage) {
        this.studentauthService = studentauthService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    StudentloginComponent.prototype.ngOnInit = function () {
    };
    StudentloginComponent.prototype.onStudentLogin = function () {
        var _this = this;
        var student = {
            enrollment_no: this.enrollment_no,
            password: this.password
        };
        // Authenticate
        this.studentauthService.authenticateStudent(student).subscribe(function (data) {
            if (data.success) {
                _this.studentauthService.storeStudentData(data.student, data.jwt);
                _this.flashMessage.show('Login Successful', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/student/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/student/login']);
            }
        });
    };
    StudentloginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-studentlogin',
            template: __webpack_require__(712),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__["a" /* StudentauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__["a" /* StudentauthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], StudentloginComponent);
    return StudentloginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentlogin.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_studentprofile_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentprofileComponent = (function () {
    function StudentprofileComponent(studentauthService, router, flashMessage, studentprofileService) {
        this.studentauthService = studentauthService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.studentprofileService = studentprofileService;
    }
    StudentprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student_id = this.studentprofileService.getStudentId();
        this.studentprofileService.getStudentInfo(this.student_id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.name = data.student.name;
                _this.enrollment_no = data.student.enrollment_no;
                _this.cgpa = data.student.cgpa;
                _this.email_address = data.student.email_address;
            }
            else {
                _this.flashMessage.show('Something went wrong', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    StudentprofileComponent.prototype.onStudentLogout = function () {
        this.studentauthService.studentLogout();
        this.flashMessage.show('You are Logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    StudentprofileComponent.prototype.onProfileUpdate = function () {
        console.log('update profile');
    };
    StudentprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-studentprofile',
            template: __webpack_require__(713),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__["a" /* StudentauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_studentauth_service__["a" /* StudentauthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_studentprofile_service__["a" /* StudentprofileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_studentprofile_service__["a" /* StudentprofileService */]) === 'function' && _d) || Object])
    ], StudentprofileComponent);
    return StudentprofileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentprofile.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_studentvalidate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_studentauth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentregisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentregisterComponent = (function () {
    function StudentregisterComponent(studentvalidateService, flashMessage, studentauthService, router) {
        this.studentvalidateService = studentvalidateService;
        this.flashMessage = flashMessage;
        this.studentauthService = studentauthService;
        this.router = router;
    }
    StudentregisterComponent.prototype.ngOnInit = function () {
    };
    StudentregisterComponent.prototype.onStudentRegister = function () {
        var _this = this;
        var student = {
            name: this.name,
            enrollment_no: this.enrollment_no,
            cgpa: this.cgpa,
            email_address: this.email_address,
            password: this.password
        };
        // Required field
        if (!this.studentvalidateService.validateRegister(student)) {
            this.flashMessage.show('Please fill in all the fields.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email address
        if (!this.studentvalidateService.validateEmail(student.email_address)) {
            this.flashMessage.show('Invalid Email Address', { cssClass: 'alert-danger', timout: 3000 });
            return false;
        }
        // Register student
        this.studentauthService.registerStudent(student).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You have been registered, Login now to access your account', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/student/login']); // Change to student dashboard when jwt local storage is done
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/student/register']);
            }
        });
    };
    StudentregisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-studentregister',
            template: __webpack_require__(714),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_studentvalidate_service__["a" /* StudentvalidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_studentvalidate_service__["a" /* StudentvalidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_studentauth_service__["a" /* StudentauthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_studentauth_service__["a" /* StudentauthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], StudentregisterComponent);
    return StudentregisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentregister.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyauthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyauthGuard = (function () {
    function CompanyauthGuard(router) {
        this.router = router;
    }
    CompanyauthGuard.prototype.canActivate = function () {
        this.getUserType();
        if (this.isLoggedIn()) {
            if (this.user_type == 'company') {
                return true;
            }
            else {
                this.router.navigate(['/student/dashboard']);
                return false;
            }
        }
        else {
            this.router.navigate(['/company/login']);
            return false;
        }
    };
    CompanyauthGuard.prototype.getUserType = function () {
        var user = localStorage.getItem('user');
        try {
            var obj = JSON.parse(user);
            if (obj)
                this.user_type = obj.user_type;
        }
        catch (ex) {
            console.error(ex);
        }
    };
    CompanyauthGuard.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    CompanyauthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], CompanyauthGuard);
    return CompanyauthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companyauth.guard.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentauthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentauthGuard = (function () {
    function StudentauthGuard(router) {
        this.router = router;
    }
    StudentauthGuard.prototype.canActivate = function () {
        this.getUserType();
        if (this.isLoggedIn()) {
            if (this.user_type == 'student') {
                return true;
            }
            else {
                this.router.navigate(['/company/dashboard']);
                return false;
            }
        }
        else {
            this.router.navigate(['/student/login']);
            return false;
        }
    };
    StudentauthGuard.prototype.getUserType = function () {
        var user = localStorage.getItem('user');
        try {
            var obj = JSON.parse(user);
            if (obj)
                this.user_type = obj.user_type;
            else
                this.user_type = null;
        }
        catch (ex) {
            console.error(ex);
        }
    };
    StudentauthGuard.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    StudentauthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], StudentauthGuard);
    return StudentauthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/studentauth.guard.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/environment.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".login-card {\r\n  padding: 5%;\r\n  width: 100% ;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n  float:left;\r\n}\r\n.row>h3{margin-left: 15px;}\r\n.login-card:hover{\r\n\tbackground: linear-gradient(#037,#0af);\r\n\ttransition: all 0.4s;\r\n\topacity:0.8;\r\n\tcolor: white;\r\n}\r\n\r\n.login-card:hover>small{color: white}\r\n.login-card:hover>button{\r\nbackground-color: black;}\r\n\r\nsmall{\r\n\tfont-size: 15px;\r\n}\r\nh3>p{\r\n\t\r\n\tmargin-left: -5%;\r\n\tmargin-right: -5%;\r\npadding: 5px;\r\npadding-left: 15px;\r\n}"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);\r\n\r\nbody {\r\n  background-size: cover;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-card {\r\n  padding: 40px;\r\n  width: 30%;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n.login-card h1 {\r\n  font-weight: 100;\r\n  text-align: center;\r\n  font-size: 2.3em;\r\n}\r\n\r\n.login-card input[type=submit] {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.login-card input, input[type=password],button {\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n}\r\n\r\n.login-card input[type=text]:hover, input[type=password]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n/* border-radius: 3px; */\r\n/* -webkit-user-select: none;\r\n  user-select: none; */\r\n}\r\n\r\n.login-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1); \r\n  background-color: #4d90fe;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.login-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n\r\n.login-card a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  display: inline-block;\r\n  opacity: 0.6;\r\n  transition: opacity ease 0.5s;\r\n}\r\n\r\n.login-card a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.login-help {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n\r\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);\r\n\r\nbody {\r\n  background-size: cover;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-card {\r\n  padding: 40px;\r\n  width: 40%;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n.login-card h1 {\r\n  font-weight: 100;\r\n  text-align: center;\r\n  font-size: 2.3em;\r\n}\r\n\r\n.login-card input[type=submit] {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.login-card input, input[type=password],button {\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n}\r\n\r\n.login-card input[type=text]:hover, input[type=password]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n/* border-radius: 3px; */\r\n/* -webkit-user-select: none;\r\n  user-select: none; */\r\n}\r\n\r\n.login-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1); \r\n  background-color: #4d90fe;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.login-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n\r\n.login-card a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  display: inline-block;\r\n  opacity: 0.6;\r\n  transition: opacity ease 0.5s;\r\n}\r\n\r\n.login-card a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.login-help {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n\r\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ".panel {\r\n     background-color: #4289f4 !important;\r\n     color: white;\r\n     background-color: #2F2727;\r\n  opacity:0.8;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n\r\n  /* Safari 4-5, Chrome 1-9 */\r\n  /* Can't specify a percentage size? Laaaaaame. */\r\n\r\n  /* Safari 5.1+, Chrome 10+ */\r\n  background: -webkit-radial-gradient(circle, #1a82f7, #2F2727);\r\n\r\n}"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);\r\n\r\nbody {\r\n  background-size: cover;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-card {\r\n  padding: 40px;\r\n  width: 50%;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n\r\n.login-card input,button {\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n}\r\n\r\n.login-card input[type=text]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n/* border-radius: 3px; */\r\n/* -webkit-user-select: none;\r\n  user-select: none; */\r\n}\r\n\r\n.login-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1); \r\n  background-color: #4d90fe;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.login-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".login-card {\r\n  padding: 5%;\r\n  width: 100% ;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n  float:left;\r\n}\r\n\r\n.login-card:hover{\r\n\tbackground: linear-gradient(#037,#0af);\r\n\ttransition: all 0.4s;\r\n\topacity:0.8;\r\n\tcolor: white;\r\n}\r\n\r\n.login-card:hover>small{color: white}\r\n.login-card:hover>button{\r\nbackground-color: black;}\r\n\r\n.row>h3{margin-left: 15px;}\r\n\r\nsmall{\r\n\tfont-size: 15px;\r\n}\r\nh3>p{\r\n\t\r\n\tmargin-left: -5%;\r\n\tmargin-right: -5%;\r\npadding: 5px;\r\npadding-left: 15px;\r\n}"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ".login-card {\r\n  padding: 5%;\r\n  width: 100% ;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n  float:left;\r\n}\r\n\r\n.login-card:hover{\r\n\tbackground: linear-gradient(#037,#0af);\r\n\ttransition: all 0.4s;\r\n\topacity:0.8;\r\n\tcolor: white;\r\n}\r\n\r\n.login-card:hover>small{color: white}\r\n.login-card:hover>button{\r\nbackground-color: black;}\r\n\r\nsmall{\r\n\tfont-size: 15px;\r\n}\r\nh3>p{\r\n\t\r\n\tmargin-left: -5%;\r\n\tmargin-right: -5%;\r\npadding: 5px;\r\npadding-left: 15px;\r\n}"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "/*#inputEnrollmentNumber{\n\tinput[type=number]::-webkit-inner-spin-button, \n\tinput[type=number]::-webkit-outer-spin-button { \n\t  -webkit-appearance: none; \n\t  margin: 0; \n\t}\n}\n*/\n\n/*#inputEnrollmentNumber{\n\tinput[type=number]::-webkit-inner-spin-button, \n\tinput[type=number]::-webkit-outer-spin-button { \n\t  -webkit-appearance: none; \n\t  margin: 0; \n\t}\n}\n*/\n\n@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);\n\nbody {\n  background-size: cover;\n  font-family: 'Roboto', sans-serif;\n}\n\n.login-card {\n  padding: 40px;\n  width: 30%;\n  background-color: #F7F7F7;\n  margin: 0 auto 10px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n\n.login-card h1 {\n  font-weight: 100;\n  text-align: center;\n  font-size: 2.3em;\n}\n\n.login-card input[type=submit] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.login-card input[id=inputEnrollmentNumber], input[type=password] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  /* border-radius: 2px; */\n  padding: 0 8px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.login-card input[type=text]:hover, input[type=password]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n\n.login {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n/* border-radius: 3px; */\n/* -webkit-user-select: none;\n  user-select: none; */\n}\n\n.login-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1); \n  background-color: #4d90fe;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n}\n\n.login-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #357ae8;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n\n.login-card a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  transition: opacity ease 0.5s;\n}\n\n.login-card a:hover {\n  opacity: 1;\n}\n\n.login-help {\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n}\n\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "/*#inputEnrollmentNumber{\r\n\tinput[type=number]::-webkit-inner-spin-button, \r\n\tinput[type=number]::-webkit-outer-spin-button { \r\n\t  -webkit-appearance: none; \r\n\t  margin: 0; \r\n\t}\r\n}\r\n*/\r\n\r\n/*#inputEnrollmentNumber{\r\n\tinput[type=number]::-webkit-inner-spin-button, \r\n\tinput[type=number]::-webkit-outer-spin-button { \r\n\t  -webkit-appearance: none; \r\n\t  margin: 0; \r\n\t}\r\n}\r\n*/\r\n\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);\r\n\r\nbody {\r\n  background-size: cover;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-card {\r\n  padding: 40px;\r\n  width: 50%;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n.login-card h1 {\r\n  font-weight: 100;\r\n  text-align: center;\r\n  font-size: 2.3em;\r\n}\r\n\r\n.login-card input[type=submit] {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.login-card input ,button{\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n}\r\n\r\n.login-card input[type=text]:hover, input[type=password]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n/* border-radius: 3px; */\r\n/* -webkit-user-select: none;\r\n  user-select: none; */\r\n}\r\n\r\n.login-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1); \r\n  background-color: #4d90fe;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.login-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n\r\n.login-card a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  display: inline-block;\r\n  opacity: 0.6;\r\n  transition: opacity ease 0.5s;\r\n}\r\n\r\n.login-card a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.login-help {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n\r\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n/*#inputEnrollmentNumber{\r\n  input[type=number]::-webkit-inner-spin-button, \r\n  input[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n}\r\n*/\r\n\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);\r\n\r\nbody {\r\n  background-size: cover;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-card {\r\n  padding: 40px;\r\n  width: 30%;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n.login-card h1 {\r\n  font-weight: 100;\r\n  text-align: center;\r\n  font-size: 2.3em;\r\n}\r\n\r\n.login-card input[type=submit] {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.login-card input, input[type=password],button {\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n}\r\n\r\n.login-card input[type=text]:hover, input[type=password]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n/* border-radius: 3px; */\r\n/* -webkit-user-select: none;\r\n  user-select: none; */\r\n}\r\n\r\n.login-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1); \r\n  background-color: #4d90fe;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.login-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n\r\n.login-card a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  display: inline-block;\r\n  opacity: 0.6;\r\n  transition: opacity ease 0.5s;\r\n}\r\n\r\n.login-card a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.login-help {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n\r\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>\n<flash-messages class=\"text-center\"></flash-messages>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<app-companynavbar></app-companynavbar>\n<div class=\"row\">\n\t<h3>Jobs Posted</h3>\n\t<div class=\"col-md-4 rounded\" *ngFor=\"let job of jobs_posted\">\n\t\t<div class=\"login-card\">\n\t\t<h3><p>{{job.title}}</p></h3>\n    <small class=\"text-muted\">{{job.location}}</small>\n    <p style=\"height: 3em; overflow: hidden;\">{{job.description}}</p>\n    <small class=\"text-muted\">CTC:  Rs {{job.expected_CTC}} lakhs</small>\n\t\t  <button class=\"btn btn-primary btn-sm pull-right\" (click)=\"showAppliedStudent(job._id)\">Show Students</button>\n\t\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-card\">\n\t<form (submit)=\"onCompanyLogin()\">\n        <h2 class=\"form-signin-heading\" align=\"center\">Company Login</h2>\n\n        <input type=\"email\" id=\"inputEmail\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n\n        <input type=\"password\" id=\"inputPassword\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n        \n       \n        <button class=\"login login-submit\" type=\"submit\">Login</button>\n         <a [routerLink]=\"['/company/register']\">Register new account</a>\n    </form>\n</div>\n\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t    <div class=\"navbar-header\">\n\t      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t        <span class=\"sr-only\">Toggle navigation</span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t      </button>\n\t      <a class=\"navbar-brand\" [routerLink]=\"['/company/dashboard']\">Company Dashboard</a>\n\t    </div>\n\t    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\t      <ul class=\"nav navbar-nav navebar-left\">\n\t      </ul>\n\n\t      <ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li><a [routerLink]=\"['/company/jobs']\">Post a Job</a></li>\n\t        <li class=\"active\"><a (click)=\"onCompanyLogout()\" href=\"#\">Logout</a></li>\n\t      </ul>\n\t    </div>\n\t</div>\n</nav>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = " <div class=\"login-card\">\n\t<form (submit)=\"onCompanyRegister()\">\n        <h2 class=\"form-signin-heading\" align=\"center\">Company Registration</h2><br>\n        \n        <input id=\"inputName\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Company Name\" required autofocus>\n        <input id=\"inputEmail\" [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email address\" required>\n        <input id=\"inputPassword\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n\n        \n      \n        <button class=\"login login-submit\" type=\"submit\">Register</button>\n          <a [routerLink]=\"['/company/login']\">Login</a>\n    </form>\n</div>\n \n        \n        "

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <h1 class=\"display-4\">Welcome to Campus Placement Portal</h1>\n  <p class=\"lead\">Let employers find you, thousands of employers searching for the right candidates. Your Future Starts here</p>\n  <hr class=\"my-4\">\n  <div class=\" text-center\">\n  <p> Register yourself for this placement season.</p>\n  <p class=\"lead\" >\n    <a class=\"btn btn-lg btn-primary\" [routerLink]=\"['/student/dashboard']\" role=\"button\">I'm a Student</a>\n    <a class=\"btn btn-lg btn-primary\" [routerLink]=\"['/company/dashboard']\" role=\"button\">I'm a Company</a>\n  </p></div>\n</div>\n\n<hr class=\"my-4\">\n<div class=\"row panel\">\n\t<div class=\"col-md-12\">\n\t\t<h3>MongoDB</h3>\n\t\t<p>MongoDB usually acts as the database for your application, in case you need to persist data. It's where we store records.</p>\n\t</div>\n\n\t<div class=\"col-md-12\">\n\t\t<h3>Express Backend</h3>\n\t\t<p>ExpressJS is a web framework for nodejs, usually used as a backend for web apps in the MEAN stack.</p>\n\t</div>\n \n\t<div class=\"col-md-12\">\n\t\t<h3>Angular-CLI</h3>\n\t\t<p>Angular-CLI to generate components, services and more.</p>\n\t</div>\n  \n\t<div class=\"col-md-12\">\n     \n\t\t<h3>NodeJS</h3>\n\t\t<p>NodeJS powers express, and will be the layer for our server to run on.</p>\n\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<app-companynavbar></app-companynavbar>\n <div class=\"login-card\">\n\n  <form class=\"form-signin\" (submit)=\"postJob()\">\n    <h2 class=\"form-signin-heading\">Fill post details</h2><br>\n\n    <input class=\"form-control\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Job title\" required autofocus>\n    <input class=\"form-control\" [(ngModel)]=\"location\" name=\"location\" placeholder=\"Location\" required >\n    <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" id=\"exampleTextarea\" rows=\"5\" placeholder=\"Job description\" style=\"resize:vertical\"></textarea>\n    <input class=\"form-control\" [(ngModel)]=\"expected_CTC\" name=\"expected_CTC\" placeholder=\"Expected CTC\" required >\n\n    <button class=\"login login-submit\" type=\"submit\">Post job</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<app-companynavbar></app-companynavbar>\n<div class=\"row\">\n\t<h3>Interested Students</h3><br>\n\t<div class=\"col-md-4 rounded\" *ngFor=\"let student of students\">\n\t\t<div class=\"login-card\">\n\t\t<h4>{{student.name}}</h4>\n    <small class=\"text-muted\">{{student.email_address}}</small><br>\n    <p>CGPA: {{student.cgpa}}/10</p>\n</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t    <div class=\"navbar-header\">\n\t      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t        <span class=\"sr-only\">Toggle navigation</span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t      </button>\n\t      <a class=\"navbar-brand\" [routerLink]=\"['/student/dashboard']\">Student Dashboard</a>\n\t    </div>\n\t    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\t      <ul class=\"nav navbar-nav navebar-left\">\n\t      </ul>\n\n\t      <ul class=\"nav navbar-nav navbar-right\">\n\t      \t<li><a [routerLink]=\"['/student/profile']\">Profile</a></li>\n\t        <li class=\"active\"><a (click)=\"onStudentLogout()\" href=\"#\">Logout</a></li>\n\t      </ul>\n\t    </div>\n\t</div>\n</nav>\n\n<div class=\"row\">\n\t<div class=\"col-md-4 rounded\" *ngFor=\"let job of all_jobs\">\n\t\t<div class=\"login-card\">\n\t\t<h3><p>{{job.title}}</p></h3>\n    <small class=\"text-muted\">{{job.location}}</small>\n    <p style=\"height: 3em; overflow: hidden;\">{{job.description}}</p>\n    <small class=\"text-muted\">CTC:  Rs {{job.expected_CTC}}</small>\n\t\t  <button [disabled]=\"applied.has(job._id)\" class=\"btn btn-primary pull-right\" (click)=\"applyForJob(job._id)\">Apply</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = " <div class=\"login-card\">\n     <h2 class=\"form-signin-heading\" align=\"center\">Student Login</h2><br>\n  <form (submit) = \"onStudentLogin()\">\n    <input id=\"inputEnrollmentNumber\" class=\"form-control\" [(ngModel)]=\"enrollment_no\" name=\"enrollment_no\"  placeholder=\"Enrollment Number\" required autofocus>\n     <input id=\"inputPassword\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n   \n    <input class=\"login login-submit\" type=\"submit\">\n   <a [routerLink]=\"['/student/register']\">Register new account</a>\n    \n  </form>\n    \n \n  </div>\n\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t    <div class=\"navbar-header\">\n\t      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t        <span class=\"sr-only\">Toggle navigation</span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t      </button>\n\t      <a class=\"navbar-brand\" [routerLink]=\"['/student/dashboard']\">Student Dashboard</a>\n\t    </div>\n\t    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\t      <ul class=\"nav navbar-nav navebar-left\">\n\t      </ul>\n\n\t      <ul class=\"nav navbar-nav navbar-right\">\n\t      \t<li><a [routerLink]=\"['/student/profile']\">Profile</a></li>\n\t        <li class=\"active\"><a (click)=\"onStudentLogout()\" href=\"#\">Logout</a></li>\n\t      </ul>\n\t    </div>\n\t</div>\n</nav>\n <div class=\"login-card\">\n\t<form (submit) = \"onProfileUpdate()\">\n        <h2 class=\"form-signin-heading\" align=\"center\">Student Profile</h2><br>\n  <label for=\"name\">Name :</label>\n        <input id=\"inputName\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder={{name}} disabled>\n<label for=\"enrollmentno\">Enrollment Number :</label>\n        <input id=\"inputEnrollmentNumber\" [(ngModel)]=\"enrollment_no\" name=\"enrollmentno\" class=\"form-control\" placeholder={{enrollment_no}} disabled>\n<label for=\"cgpa\">CGPA : </label>\n        <input id=\"inputCgpa\" [(ngModel)]=\"cgpa\" name=\"cgpa\" class=\"form-control\" placeholder={{cgpa}} disabled>\n<label for=\"email_address\">E-mail : </label>\n        <input type=\"email\" [(ngModel)]=\"email_address\" name=\"email_address\" id=\"inputEmail\" class=\"form-control\" placeholder={{email_address}} disabled>\n\n        <button class=\"login login-submit\" type=\"submit\">Update Profile</button>\n    </form>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = " <div class=\"login-card\">\n    <form (submit) = \"onStudentRegister()\">\n        <h2 class=\"form-signin-heading\" align=\"center\">Student Registration</h2>\n        \n        <input id=\"inputName\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Full Name\" required autofocus>\n\n        <input id=\"inputEnrollmentNumber\" [(ngModel)]=\"enrollment_no\" name=\"enrollmentno\" class=\"form-control\" placeholder=\"Enrollment Number\" required>\n\n        <input id=\"inputCgpa\" [(ngModel)]=\"cgpa\" name=\"cgpa\" class=\"form-control\" placeholder=\"Cgpa\" required>\n\n        <input type=\"email\" [(ngModel)]=\"email_address\" name=\"email_address\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required>   \n        \n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n\n        \n         <button class=\"login login-submit\" type=\"submit\">Register</button>\n     <a [routerLink]=\"['/student/login']\">Login</a>\n    </form>\n </div>"

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyauthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyauthService = (function () {
    function CompanyauthService(http) {
        this.http = http;
    }
    // Register new Company
    CompanyauthService.prototype.registerCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('company/register', company, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Authenticate login for existing user
    CompanyauthService.prototype.authenticateCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('company/authenticate', company, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Store jwt value in local Storage
    CompanyauthService.prototype.storeCompanyData = function (company, token) {
        localStorage.clear();
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(company)); // company and student both will be
        // stored as user as we ccan't determine what type of user it is before asking for user var
        this.authToken = token;
        this.company = company;
    };
    CompanyauthService.prototype.getStudentApplied = function (job_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var job = {
            _id: job_id
        };
        return this.http.post('company/showjobs', job, { headers: headers }).map(function (res) { return res.json(); });
    };
    CompanyauthService.prototype.getCompanyId = function () {
        var user = localStorage.getItem('user');
        try {
            var obj = JSON.parse(user);
            if (obj)
                return obj.id;
            else
                return null;
        }
        catch (ex) {
            console.error(ex);
        }
    };
    CompanyauthService.prototype.companyLogout = function () {
        this.authToken = null;
        this.company = null;
        localStorage.clear();
    };
    CompanyauthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CompanyauthService);
    return CompanyauthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pratyush/NodeJS/CollegePlacement-master - Copy/angular-src/src/companyauth.service.js.map

/***/ })

},[752]);
//# sourceMappingURL=main.bundle.map