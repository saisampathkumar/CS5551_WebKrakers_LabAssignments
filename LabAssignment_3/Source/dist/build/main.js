webpackJsonp([2],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//firebase


var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, http, firebase, fireDatabase) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.firebase = firebase;
        this.fireDatabase = fireDatabase;
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        var validate = true;
        if (this.emailId.value == "" || this.firstName.value == "" || this.lastName.value == "" || this.pwd.value == "" || this.confirmPwd.value == "") {
            alert("Fields should not be empty");
            validate = false;
        }
        if (!(this.pwd.value == this.confirmPwd.value)) {
            alert("Password Should Match");
            validate = false;
        }
        if (validate == true) {
            this.url = '/users/create';
            this.firebase.auth.createUserWithEmailAndPassword(this.emailId.value, this.pwd.value).then(function (data) {
                console.log("Got data from Firebase: ", data);
                _this.http.post(_this.url, {
                    email: _this.emailId.value,
                    firstName: _this.firstName.value,
                    lastName: _this.lastName.value
                }).subscribe(function (res) {
                    _this.message = res.message;
                    alert(_this.message);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                });
            }).catch(function (error) {
                console.log("error in registration : ", error);
            });
        }
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "emailId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fname'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('lname'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "pwd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('confirmPwd'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "confirmPwd", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n     <ion-row class="logo-row">\n\n    <ion-col></ion-col>\n\n    <ion-col width-67>\n\n<img src="http://www.shim-icacs2018.org/key4register/images/client/592/images/Icones/signup-icon.png"/>    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n\n\n    <ion-list >\n\n            \n\n            <ion-item>\n\n              <ion-label floating>EMail Id</ion-label>\n\n              <ion-input  type="text"  #username ></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-label floating>First Name</ion-label>\n\n              <ion-input  type="text" #fname ></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Last Name</ion-label>\n\n              <ion-input  type="text" #lname ></ion-input>\n\n            </ion-item>\n\n        \n\n            <ion-item>\n\n              <ion-label floating>Password</ion-label>\n\n              <ion-input  type="password" #password ></ion-input>\n\n            </ion-item>\n\n        \n\n            <ion-item>\n\n              <ion-label floating>Confirm Password</ion-label>\n\n              <ion-input  type="password"  #confirmPwd ></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n    </div>\n\n    <div id="homebuttons">\n\n\n\n    <button ion-button   type="submit" (click)="register()" round>Register</button>\n\n    <button ion-button   type="submit" (click)="login()" round>Login</button></div>\n\n\n\n\n\n\n\n<!--\n\n<div id="homebuttons">\n\n  <button  ion-button (click) = "register()">Register</button>\n\n\n\n</div>\n\n-->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportsPage = /** @class */ (function () {
    function ReportsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportsPage');
    };
    ReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reports',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\reports\reports.html"*/'<!--\n\n  Generated template for the ReportsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reports</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\reports\reports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReportsPage);
    return ReportsPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/register/register.module": [
		654,
		1
	],
	"../pages/reports/reports.module": [
		655,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 279;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_home_events_home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reports_reports__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__events_home_events_home__["a" /* EventsHomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__reports_reports__["a" /* ReportsPage */];
    }
    TabsPage.prototype.navigateToSignIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        console.log("Sign-out successful.");
    };
    TabsPage.prototype.signOut = function () {
        console.log("sign out called");
        this.navigateToSignIn();
        // this.firebase.auth.signOut().then(function() {
        //   navigateToSignIn();
        //
        // }).catch(function(error) {
        //   console.log("An error happened."+ error.message);
        // });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>  \n\n  <ion-tab [root]="tab4Root" tabTitle="Reports" tabIcon="md-analytics"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Chat" tabIcon="md-chatbubbles"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab (ionSelect)="signOut()" tabTitle="Sign Out" tabIcon="log-out"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>About us</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div id="contact_details" class="row col-md-6" style="display: block; padding-top: 25px;">\n\n        <div class="column">\n\n            <div class="col-md-4 ">\n\n                <img src="assets/imgs/Veeresha.jpeg" style=" display: block; margin-left: auto; margin-right: auto;"\n\n                    height="150px" width="150px" class="img-rounded">\n\n            </div>\n\n            <div class="col-md-8" style="text-align: center;">\n\n                <blockquote style="margin: 0 0 50px; padding-top: 10px;">\n\n                    <span>Veeresha Thotigar</span><br>\n\n                    <span>vmt9mm@mail.umkc.edu</span><br>\n\n                    <span><strong>Class ID: </strong>53</span>\n\n                </blockquote>\n\n            </div>\n\n        </div>\n\n        <div class="column">\n\n            <div class="col-md-4 ">\n\n                <img src="assets/imgs/Vidyullatha.jpeg" style=" display: block; margin-left: auto; margin-right: auto;"\n\n                    height="150px" width="150px" class="img-rounded">\n\n            </div>\n\n            <div class="col-md-8" style="text-align: center;">\n\n                <blockquote style="margin: 0 0 50px; padding-top: 10px;">\n\n                    <span>Vidyullatha Lakshmi Kaza</span><br>\n\n                    <span>vkrwc@mail.umkc.edu</span><br>\n\n                    <span><strong>Class ID: </strong>26</span>\n\n                </blockquote>\n\n            </div>\n\n        </div>\n\n        <div class="column">\n\n            <div class="col-md-4 ">\n\n                <img src="assets/imgs/Vineetha.jpeg" style=" display: block; margin-left: auto; margin-right: auto;"\n\n                    height="150px" width="150px" class="img-rounded">\n\n            </div>\n\n            <div class="col-md-8" style="text-align: center;">\n\n                <blockquote style="margin: 0 0 50px; padding-top: 10px;">\n\n                    <span>Vineetha Gummadi</span><br>\n\n                    <span>vgk9k@mail.umkc.edu</span><br>\n\n                    <span><strong>Class ID: </strong>15</span>\n\n                </blockquote>\n\n            </div>\n\n        </div>\n\n        <div class="column">\n\n            <div class="col-md-4 ">\n\n                <img src="assets/imgs/Sampath.jpeg" style=" display: block; margin-left: auto; margin-right: auto;"\n\n                    height="150px" width="150px" class="img-rounded">\n\n            </div>\n\n            <div class="col-md-8" style="text-align: center;">\n\n                <blockquote style="margin: 0 0 50px; padding-top: 10px;">\n\n                    <span>Sai Sampath Kumar Raigiri</span><br>\n\n                    <span>srtwr@mail.umkc.edu</span><br>\n\n                    <span><strong>Class ID: </strong>41</span>\n\n                </blockquote>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_action__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_event__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_socket_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_user_dialog_user_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_user_dialog_user_type__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AVATAR_URL = 'https://api.adorable.io/avatars/285';
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, socketService, dialog) {
        this.navCtrl = navCtrl;
        this.socketService = socketService;
        this.dialog = dialog;
        this.action = __WEBPACK_IMPORTED_MODULE_3__shared_model_action__["a" /* Action */];
        this.messages = [];
        this.defaultDialogUserParams = {
            disableClose: true,
            data: {
                title: 'Welcome',
                dialogType: __WEBPACK_IMPORTED_MODULE_7__dialog_user_dialog_user_type__["a" /* DialogUserType */].NEW
            }
        };
    }
    ChatPage.prototype.ngOnInit = function () {
        this.initModel();
        this.initIoConnection();
    };
    ChatPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // subscribing to any changes in the list of items / messages
        this.matListItems.changes.subscribe(function (elements) {
            _this.scrollToBottom();
        });
    };
    // auto-scroll fix: inspired by this stack overflow post
    // https://stackoverflow.com/questions/35232731/angular2-scroll-to-bottom-chat-style
    ChatPage.prototype.scrollToBottom = function () {
        try {
            this.matList.nativeElement.scrollTop = this.matList.nativeElement.scrollHeight;
        }
        catch (err) {
        }
    };
    ChatPage.prototype.initModel = function () {
        var randomId = this.getRandomId();
        this.user = {
            id: randomId,
            avatar: AVATAR_URL + "/" + randomId + ".png"
        };
    };
    ChatPage.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (message) {
            _this.messages.push(message);
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_4__shared_model_event__["a" /* Event */].CONNECT)
            .subscribe(function () {
            console.log('connected');
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_4__shared_model_event__["a" /* Event */].DISCONNECT)
            .subscribe(function () {
            console.log('disconnected');
        });
    };
    ChatPage.prototype.getRandomId = function () {
        return Math.floor(Math.random() * (1000000)) + 1;
    };
    ChatPage.prototype.onClickUserInfo = function () {
        this.openUserPopup({
            data: {
                username: this.user.name,
                title: 'Edit Details',
                dialogType: __WEBPACK_IMPORTED_MODULE_7__dialog_user_dialog_user_type__["a" /* DialogUserType */].EDIT
            }
        });
    };
    ChatPage.prototype.openUserPopup = function (params) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialog_user_dialog_user_component__["a" /* DialogUserComponent */], params);
        this.dialogRef.afterClosed().subscribe(function (paramsDialog) {
            if (!paramsDialog) {
                return;
            }
            _this.user.name = paramsDialog.username;
            if (paramsDialog.dialogType === __WEBPACK_IMPORTED_MODULE_7__dialog_user_dialog_user_type__["a" /* DialogUserType */].NEW) {
                _this.initIoConnection();
                _this.sendNotification(paramsDialog, __WEBPACK_IMPORTED_MODULE_3__shared_model_action__["a" /* Action */].JOINED);
            }
            else if (paramsDialog.dialogType === __WEBPACK_IMPORTED_MODULE_7__dialog_user_dialog_user_type__["a" /* DialogUserType */].EDIT) {
                _this.sendNotification(paramsDialog, __WEBPACK_IMPORTED_MODULE_3__shared_model_action__["a" /* Action */].RENAME);
            }
        });
    };
    ChatPage.prototype.sendMessage = function (message) {
        if (!message) {
            return;
        }
        this.socketService.send({
            from: this.user,
            content: message
        });
        this.messageContent = null;
    };
    ChatPage.prototype.sendNotification = function (params, action) {
        var message;
        if (action === __WEBPACK_IMPORTED_MODULE_3__shared_model_action__["a" /* Action */].JOINED) {
            message = {
                from: this.user,
                action: action
            };
        }
        else if (action === __WEBPACK_IMPORTED_MODULE_3__shared_model_action__["a" /* Action */].RENAME) {
            message = {
                action: action,
                content: {
                    username: this.user.name,
                    previousUsername: params.previousUsername
                }
            };
        }
        this.socketService.send(message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatList */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], ChatPage.prototype, "matList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatListItem */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* QueryList */])
    ], ChatPage.prototype, "matListItems", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1><ion-icon name="chatbubbles" md="md-chatbubbles"></ion-icon></ion-col>\n      <ion-col col-11><ion-input type="text" placeholder="Type" \n        maxlength="140"\n        [(ngModel)]="messageContent" \n        (keyup.enter)="sendMessage(messageContent)"></ion-input></ion-col>\n    </ion-row>\n  </ion-grid>   \n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="chat-container">\n    <mat-card class="main-card">\n      <mat-list class="chat-list">\n        <mat-list-item *ngFor="let message of messages" [ngClass]="[(message.action === undefined && message.from.id === user.id)? \'chat-list-item\': \'\']">\n          <img mat-list-avatar *ngIf="message.action === undefined" [src]="message.from.avatar">\n          <h4 mat-line *ngIf="message.action === undefined">\n            <b>{{message.from.name}}</b>\n          </h4>\n          <p mat-line *ngIf="message.action === undefined">\n            <span> {{message.content}} </span>\n          </p>\n          <p mat-line *ngIf="message.action === action.JOINED" class="chat-notification">\n            <span> <b>{{message.from.name}}</b> joined to the conversation. </span>\n          </p>\n          <p mat-line *ngIf="message.action === action.RENAME" class="chat-notification">\n            <span> <b>{{message.content.previousUsername}}</b> is now <b>{{message.content.username}}</b> </span>\n          </p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__shared_services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SERVER_URL = 'http://localhost:3000';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(SERVER_URL);
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], SocketService);
    return SocketService;
}());

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogUserComponent = /** @class */ (function () {
    function DialogUserComponent(dialogRef, params) {
        this.dialogRef = dialogRef;
        this.params = params;
        this.usernameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
        this.previousUsername = params.username ? params.username : undefined;
    }
    DialogUserComponent.prototype.ngOnInit = function () {
    };
    DialogUserComponent.prototype.onSave = function () {
        this.dialogRef.close({
            username: this.params.username,
            dialogType: this.params.dialogType,
            previousUsername: this.previousUsername
        });
    };
    DialogUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tcc-dialog-user',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\dialog-user\dialog-user.component.html"*/'<h2 mat-dialog-title>{{params.title}}</h2>\n\n\n\n<mat-dialog-content>\n\n  <mat-form-field>\n\n    <input matInput name="username" placeholder="Username" \n\n           [(ngModel)]="params.username" (keyup.enter)="onSave()" [formControl]="usernameFormControl" required>\n\n    <mat-error>This field is required</mat-error>\n\n    <mat-hint>Please type your username</mat-hint>\n\n  </mat-form-field>\n\n</mat-dialog-content>\n\n\n\n<mat-dialog-actions *ngIf="params?.typeDialog === \'new-user\'" [attr.align]="\'end\'">\n\n  <button mat-raised-button color="primary" mat-dialog-close (click)="onSave()" [disabled]="usernameFormControl.hasError(\'required\')">Chat!</button>\n\n</mat-dialog-actions>\n\n\n\n<mat-dialog-actions *ngIf="params?.typeDialog === \'edit-user\'" [attr.align]="\'end\'">\n\n  <button mat-button mat-dialog-close color="secondary">Close</button>\n\n  <button mat-raised-button color="primary" mat-dialog-close (click)="onSave()">Save</button>\n\n</mat-dialog-actions>'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\dialog-user\dialog-user.component.html"*/
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], DialogUserComponent);
    return DialogUserComponent;
}());

//# sourceMappingURL=dialog-user.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_register_events_register__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_join_events_join__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventsHomePage = /** @class */ (function () {
    function EventsHomePage(navCtrl, http, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.afAuth = afAuth;
        this.tap = 2;
        this.like = 11;
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.created_by = user.email;
            else
                _this.created_by = 'admin';
            _this.loadevents(_this.created_by);
        });
    }
    EventsHomePage.prototype.refresh = function () {
        this.loadevents(this.created_by);
    };
    EventsHomePage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_register_events_register__["a" /* EventsRegisterPage */]);
    };
    EventsHomePage.prototype.joinEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__events_join_events_join__["a" /* EventsJoinPage */]);
    };
    EventsHomePage.prototype.event = function (ID, sdate, adrsOne, zip) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */], {
            id: ID,
            sdate: sdate,
            adrsOne: adrsOne,
            zip: zip
        });
    };
    EventsHomePage.prototype.loadevents = function (name) {
        var _this = this;
        this.url = '/events/search/users?user=true&searchtext=' + name;
        this.http.get(this.url)
            .subscribe(function (res) {
            _this.result = res.data;
        });
    };
    EventsHomePage.prototype.deleteEvent = function (_id) {
        var _this = this;
        this.url = '/events/delete?id=' + _id;
        this.http.delete(this.url)
            .subscribe(function (res) {
            _this.loadevents(_this.created_by);
            alert(res.message);
        });
    };
    EventsHomePage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    EventsHomePage.prototype.likeEvent = function (e) {
        this.like++;
    };
    EventsHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-home',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\events-home\events-home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Events\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear icon-only (click)="refresh()">\n\n          <ion-icon name="addEvent" md="md-refresh"></ion-icon>\n\n        </button>\n\n      <button ion-button clear icon-only (click)="joinEvent()">\n\n        <ion-icon name="addEvent" md="md-add"></ion-icon> Join\n\n      </button>\n\n      <button ion-button clear icon-only (click)="addEvent()">\n\n        <ion-icon name="addEvent" md="md-add-circle"></ion-icon> Create\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page" padding>\n\n\n\n  <div *ngFor="let event_obj of result" style="width:100%">\n\n  <ion-card  >\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="https://www.aegon.co.uk/content/dam/ukpaw/advisers-login.svg">\n\n        </ion-avatar>\n\n        <h2>{{event_obj.eventName}}</h2>\n\n        <p>{{event_obj.eventStartDate | date:\'short\'}}</p>\n\n        <button *ngIf="created_by == event_obj.created_by" ion-button clear icon-only (click)="deleteEvent(event_obj.eventName)" item-end>\n\n          <ion-icon name="trash" md="md-trash"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <img (click)="event(event_obj.eventName,event_obj.eventStartDate,event_obj.address_city,event_obj.address_zipcode)" src="https://images.pexels.com/photos/415825/pexels-photo-415825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350">\n\n      <ion-card-content>\n\n        <p>\n\n        </p>\n\n      </ion-card-content>\n\n      <ion-row>\n\n        <ion-col >\n\n          <ion-item>\n\n            <button ion-button icon-start clear small >\n\n              <ion-icon name="chatbubbles"></ion-icon>\n\n              <div>chat</div>\n\n            </button>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col  >\n\n            <ion-item style="width:100%; float: right">\n\n              <button  ion-button icon-start clear small end>\n\n                <ion-icon name="more" ></ion-icon>\n\n                <p>details </p>\n\n              </button>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\events-home\events-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"]])
    ], EventsHomePage);
    return EventsHomePage;
}());

//# sourceMappingURL=events-home.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//firebase

var EventsRegisterPage = /** @class */ (function () {
    function EventsRegisterPage(navCtrl, http, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.created_by = user.email;
            else
                _this.created_by = 'admin';
            _this.userlist = [_this.created_by];
        });
    }
    EventsRegisterPage.prototype.createEvent = function () {
        var _this = this;
        this.url = '/event/create';
        this.http.post(this.url, {
            eventName: this.eventName,
            eventStartDate: this.eventStartDate,
            eventEndDate: this.eventEndDate,
            address_one: this.address_one,
            address_two: this.address_two,
            address_city: this.address_city,
            address_state: this.address_state,
            address_zipcode: this.address_zipcode,
            users_list: this.userlist,
            created_by: this.created_by
        })
            .subscribe(function (res) {
            _this.message = res.message;
            alert(_this.message);
            _this.navCtrl.pop();
            console.log(_this.message);
        });
    };
    EventsRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-register',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\events-register\events-register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Create an Event</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item>\n\n      <ion-label floating>Event Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="eventName"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Start Date</ion-label>\n\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="eventStartDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>End Date</ion-label>\n\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="eventEndDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Address 1</ion-label>\n\n      <ion-input type="text" [(ngModel)]="address_one"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Address 2</ion-label>\n\n      <ion-input type="text" [(ngModel)]="address_two"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>City</ion-label>\n\n      <ion-input type="text" [(ngModel)]="address_city"></ion-input>\n\n    </ion-item>\n\n\n\n     <ion-item>\n\n      <ion-label floating>State</ion-label>\n\n      <ion-input type="text" [(ngModel)]="address_state"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>ZIP</ion-label>\n\n      <ion-input type="number" [(ngModel)]="address_zipcode"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <br/>\n\n  <br/>\n\n  <div padding style="text-align: center">\n\n    <button ion-button (click)="createEvent()" round medium>Create</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\events-register\events-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], EventsRegisterPage);
    return EventsRegisterPage;
}());

//# sourceMappingURL=events-register.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsJoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//firebase


var EventsJoinPage = /** @class */ (function () {
    function EventsJoinPage(navCtrl, http, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.afAuth = afAuth;
        this.formSettings = {
            theme: 'ios'
        };
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.created_by = user.email;
            else
                _this.created_by = 'admin';
            _this.loadevents(_this.created_by);
        });
    }
    EventsJoinPage.prototype.closeAll = function () {
        this.r1.instance.hide();
        this.r2.instance.hide();
        this.r3.instance.hide();
    };
    EventsJoinPage.prototype.toggleFirst = function () {
        this.r1.instance.toggle();
    };
    EventsJoinPage.prototype.loadevents = function (name) {
        var _this = this;
        this.url = '/events/search/users?user=false&searchtext=' + name;
        this.http.get(this.url)
            .subscribe(function (res) {
            _this.result = res.data;
            console.log(_this.result);
        });
    };
    EventsJoinPage.prototype.joinTheEvent = function (name) {
        var _this = this;
        this.url = '/event/update/users';
        this.http.put(this.url, {
            event_name: name,
            user: this.created_by
        })
            .subscribe(function (res) {
            _this.message = res.message;
            _this.loadevents(_this.created_by);
            alert(_this.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('run1'),
        __metadata("design:type", Object)
    ], EventsJoinPage.prototype, "r1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('run2'),
        __metadata("design:type", Object)
    ], EventsJoinPage.prototype, "r2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('run3'),
        __metadata("design:type", Object)
    ], EventsJoinPage.prototype, "r3", void 0);
    EventsJoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-join',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\events-join\events-join.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Events Join</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n  <div *ngFor="let event_obj of result">\n\n\n\n    <ion-card>\n\n        <img style="height:300%" src="https://www.cticc.co.za/sites/default/files/static_images/feature-events1.jpg">\n\n        <div class="card-title" style="color: #6543ff; font-family: Cambria">\n\n            {{event_obj.eventName}}\n\n        </div>\n\n         <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                  <p style="font-size: 20px">When:</p>\n\n                  <p>{{event_obj.eventStartDate | date:\'short\'}}</p>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <p style="font-size:20px">Where:</p>\n\n                    <p>{{event_obj.address_one}}, {{event_obj.address_two}}</p>\n\n                    <p>{{event_obj.address_city}}, {{event_obj.address_state}}</p>\n\n                    <p>{{event_obj.address_zipcode}}</p>\n\n                </ion-item>\n\n              </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                  <button ion-button clear icon-only (click)="joinTheEvent(event_obj.eventName)">\n\n                      <ion-icon name="addEvent" md="md-add"></ion-icon> Join\n\n                    </button>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\events-join\events-join.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], EventsJoinPage);
    return EventsJoinPage;
}());

//# sourceMappingURL=events-join.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, alert, scanner, params, afAuth, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.scanner = scanner;
        this.params = params;
        this.afAuth = afAuth;
        this.http = http;
        this.encodeText = '';
        this.encodedData = {};
        this.scannedData = {};
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.created_by = user.email;
            else
                _this.created_by = 'admin';
        });
        this.eventId = params.get('id');
        this.eventDate = params.get('sdate');
        this.eventaddress = params.get('adrsOne');
        this.eventzipcode = params.get('zip');
        this.eventName = this.eventId;
    }
    EventPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EventPage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: 'scan your barcode'
        };
        this.scanner.scan(this.options).then(function (data) {
            _this.scannedData = data;
        }, function (err) {
            _this.showAlert(err);
        });
    };
    EventPage.prototype.showAlert = function (message) {
        var alert = this.alert.create({
            title: 'Error',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    EventPage.prototype.detect = function () {
        var _this = this;
        if (this.myInput != "") {
            this.url = '/drug/search?searchtext=' + this.myInput;
            this.http.get(this.url)
                .subscribe(function (res) {
                _this.result = res.data;
                console.log(_this.result);
                if (_this.result) {
                    _this.drugName = _this.result[0].name ? _this.result[0].name : '';
                    _this.drugDescription = _this.result[0].description ? _this.result[0].description : '';
                    _this.classificationClass = _this.result[0].classification ? (_this.result[0].classification.class ? _this.result[0].classification.class : '') : '';
                    _this.classificationSubclass = _this.result[0].classification ? (_this.result[0].classification.subclass ? _this.result[0].classification.subclass : '') : '';
                    _this.dosageForm = _this.result[0].dosages ? (_this.result[0].dosages.dosage.form ? _this.result[0].dosages.dosage.form : '') : '';
                    _this.strength = _this.result[0].dosages ? (_this.result[0].dosages.dosage.strength ? _this.result[0].dosages.dosage.strength : '') : '';
                    _this.absorption = _this.result[0].absorption ? _this.result[0].absorption : '';
                }
            });
        }
    };
    EventPage.prototype.drugData = function () {
        var _this = this;
        if (this.myInput != "" && this.drugName != "" && this.drugDescription != "") {
            this.url = '/product/create';
            this.http.post(this.url, {
                drugName: this.drugName,
                drugDescription: this.drugDescription,
                classificationClass: this.classificationClass,
                classificationSubclass: this.classificationSubclass,
                dosageForm: this.dosageForm,
                strength: this.strength,
                absorption: this.absorption,
                quantityWhenNew: this.quantityWhenNew,
                quantityCollected: this.quantityCollected,
                eventName: this.eventName,
                eventdate: this.eventDate,
                eventaddress: this.eventaddress,
                eventzipccode: this.eventzipcode
            }).subscribe(function (res) {
                _this.message = res.message;
                alert(_this.message);
            });
        }
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\event\event.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Event</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n<!--\n\n    <img src="https://share.kaiserpermanente.org/wp-content/uploads/2017/10/drug-take-back-day-feature-548x336.jpg" style="width: 300px;height: 250px;"/><br/><br/>\n\n    <button  ion-button color="tertiary" (click)="Capture()">Take Picture</button>\n\n-->\n\n<ion-navbar>\n\n\n\n<!--\n\n    <ion-buttons end>\n\n    <button  ion-button color="tertiary" (click)="detect()">Search</button>\n\n         \n\n      </ion-buttons>\n\n-->\n\n    \n\n<div style="background-color: black">\n\n    <ion-grid >\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button   ion-button style="background-color: black"> <ion-icon style="font-size: 20px" ios="ios-barcode" md="md-barcode"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col-7 style="width:100%">\n\n                <ion-searchbar [(ngModel)]="myInput"></ion-searchbar>        \n\n            </ion-col>\n\n            <ion-col col-2 style="width: 90%">\n\n                    <button ion-button (click)="detect()" style="background-color: black"><p style="font-size: 15px" >Search</p></button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</div>\n\n<br/>\n\n<div *ngIf="scannedData.text">\n\n        <label>Your barcode is</label>\n\n        <br/>\n\n        <span>{{scannedData.text}}</span>\n\n      </div>\n\n<br/>\n\n<h2 ion-text color="primary" align="center">Event Loaction Details</h2>\n\n<form (ngSubmit)="eventDetails()" text-wrap>\n\n      <ion-grid>\n\n        <ion-row>\n\n        <ion-col col-6>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Event Name</ion-label>\n\n                <ion-input type="text" [(ngModel)] = "eventName" name="eventName" [readonly]="isReadonly()"></ion-input>\n\n            </ion-item>\n\n        </ion-col>           \n\n        <ion-col col-6>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Event Date</ion-label>\n\n                <ion-input [(ngModel)]="eventDate" name="eventDate"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n        <ion-grid>\n\n        <ion-row>\n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Event Address</ion-label>\n\n                <ion-input type="text" [(ngModel)]="eventaddress" name="eventaddress"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            \n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Zipcode</ion-label>\n\n                <ion-input [(ngModel)]="eventzipcode" name="eventzipcode"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n    \n\n    </ion-grid>\n\n    </form><br><br>\n\n<!--     Autofiling the drug details form-->\n\n    <h2 ion-text color="primary" align ="center">Drug Information Form</h2>    \n\n     <form (ngSubmit)="drugData()" text-wrap >\n\n      <ion-grid><ion-row>\n\n        <ion-col col-12><ion-item>\n\n        <ion-label floating style="font-size: 20px">Name of the Drug or Product</ion-label>\n\n        <ion-input type="text" [(ngModel)]="drugName" name="drugname"></ion-input>\n\n      </ion-item></ion-col>\n\n      </ion-row></ion-grid>\n\n      <ion-grid><ion-row>\n\n        <ion-col col-12><ion-item>\n\n        <ion-label floating style="font-size: 20px">Description</ion-label>\n\n        <ion-textarea [(ngModel)]="drugDescription" name="description"></ion-textarea>\n\n        </ion-item></ion-col>\n\n      </ion-row></ion-grid>\n\n        <ion-grid><ion-row>\n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Classification</ion-label>\n\n                <ion-input type="text" [(ngModel)]="classificationClass" name="class"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n            \n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Subclass</ion-label>\n\n                <ion-input [(ngModel)]="classificationSubclass" name="subclass"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n        </ion-row></ion-grid>  \n\n         \n\n        <ion-grid><ion-row>\n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Dosage Form</ion-label>\n\n                <ion-input type="text" [(ngModel)]="dosageForm" name="dosageform"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n            \n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Strength</ion-label>\n\n                <ion-input type="text" [(ngModel)]="strength" name="strength"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n        </ion-row></ion-grid>  \n\n         \n\n        <ion-grid><ion-row>\n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Absorption</ion-label>\n\n                <ion-input type="text" [(ngModel)]="absorption" name="absorption"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n       </ion-row></ion-grid>  \n\n         \n\n         <ion-grid><ion-row>\n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Quantity when container was new</ion-label>\n\n                <ion-input type="text" [(ngModel)]="quantityWhenNew" name="quantityWhenNew"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <ion-item >\n\n                <ion-label floating style="font-size: 20px">Quantity Collected</ion-label>\n\n                <ion-input type="text" [(ngModel)]="quantityCollected" name="quantityCollected"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n       </ion-row></ion-grid>  \n\n         \n\n       <div style="text-align: center">  \n\n      <button ion-button type="submit" round>Save</button>\n\n    </div>\n\n    </form>\n\n         \n\n</ion-navbar>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(495);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dialog_user_dialog_user_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_events_home_events_home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_events_register_events_register__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_events_join_events_join__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_event_event__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_barcode_scanner__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_material_material_module__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_services_socket_service__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//firebase



//barcodescanner



// Initialize Firebase
var firebaseConfig = {
    // insert config here
    apiKey: "AIzaSyAzZT0RI1MQf--tTBp_AQ7qwr0wcMuXJG8",
    authDomain: "myapp-ceed1.firebaseapp.com",
    databaseURL: "https://myapp-ceed1.firebaseio.com",
    projectId: "myapp-ceed1",
    storageBucket: "myapp-ceed1.appspot.com",
    messagingSenderId: "822624922951"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dialog_user_dialog_user_component__["a" /* DialogUserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_home_events_home__["a" /* EventsHomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_events_register_events_register__["a" /* EventsRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_events_join_events_join__["a" /* EventsJoinPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__shared_material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dialog_user_dialog_user_component__["a" /* DialogUserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_home_events_home__["a" /* EventsHomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_events_register_events_register__["a" /* EventsRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_events_join_events_join__["a" /* EventsJoinPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_27__shared_services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
    Action[Action["RENAME"] = 2] = "RENAME";
})(Action || (Action = {}));
//# sourceMappingURL=action.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event;
(function (Event) {
    Event["CONNECT"] = "connect";
    Event["DISCONNECT"] = "disconnect";
})(Event || (Event = {}));
//# sourceMappingURL=event.js.map

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUserType; });
var DialogUserType;
(function (DialogUserType) {
    DialogUserType[DialogUserType["NEW"] = 0] = "NEW";
    DialogUserType[DialogUserType["EDIT"] = 1] = "EDIT";
})(DialogUserType || (DialogUserType = {}));
//# sourceMappingURL=dialog-user-type.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\app\app.html"*/'<ion-menu [content]="content" side="right">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatToolbarModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatToolbarModule */],
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//authDomain

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, firebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        var validate = true;
        if (this.uname.value == "" || this.pwd.value == "") {
            alert("Please enter the credentials");
            validate = false;
        }
        if (validate == true) {
            this.firebase.auth.signInWithEmailAndPassword(this.uname.value, this.pwd.value).then(function (data) {
                console.log("Sign in successful");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                console.log("error in authentication : ", error);
                console.log(error.message);
            });
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "pwd", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style="text-align: center">\n\n    <ion-title>Medication Logger</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <br/><br/><br/><br/>\n\n    <ion-row class="logo-row">\n\n    <ion-col col-3></ion-col>\n\n    <ion-col col-6 style="text-align: center">\n\n      <img src="assets/imgs/login.png"/>\n\n    </ion-col>\n\n    <ion-col col-3></ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n     \n\n          <ion-list >\n\n            <ion-item>\n\n              <ion-label floating>Username</ion-label>\n\n              <ion-input  type="text" #username required></ion-input>\n\n            </ion-item>\n\n            <ion-item>             \n\n              <ion-label floating>Password</ion-label>\n\n              <ion-input  type="password" #password required></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n          <div style="text-align: center">\n\n          <button ion-button medium type="submit" (click)="signIn()" round>Login</button>\n\n        </div>\n\n          <button ion-button block clear (click)="register()">Create New Account</button>\n\n       \n\n      \n\n  </div>\n\n\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\Repository\CS5551_WebKrakers_LabAssignments\LabAssignment_3\client\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map