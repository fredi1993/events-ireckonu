webpackJsonp([1],{

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-details/event-details.module": [
		683,
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
webpackAsyncContext.id = 203;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, apiProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.toastCtrl = toastCtrl;
        this.groupedEvents = [];
        this.eventFilter = { title: '' };
        this.updateSearchResult$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        //this.events = this.apiProvider.getEvents();
        this.showLoader = true;
        this.apiProvider.getEvents().subscribe(function (data) {
            console.log('events: ', data);
            _this.events = data;
            console.log(_this.events);
            _this.groupEvents(_this.events);
        }, function (error) {
            _this.showLoader = false;
            var toast = _this.toastCtrl.create({
                message: 'Error occurred ' + JSON.stringify(error),
                duration: 5000
            });
            toast.present();
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.scrollAndSearch$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].merge(this.container.ionScroll, this.updateSearchResult$);
    };
    HomePage.prototype.triggerLazyLoad = function () {
        this.updateSearchResult$.next();
    };
    HomePage.prototype.groupEvents = function (events) {
        var todayArr = {
            groupName: 'today',
            events: []
        };
        var thisWeekArr = {
            groupName: 'This Week',
            events: []
        };
        var othersArr = {
            groupName: 'Others',
            events: []
        };
        var today = new Date();
        var d = new Date();
        var first = d.getDate() - d.getDay();
        var last = first + 6;
        var weekStart = new Date(d.setDate(first));
        var weekEnd = new Date(d.setDate(last));
        var testVar = {
            "dateTime": "27-03-2018 21:22:48",
            "description": "TSH A'dam City invited you to this party ",
            "id": "909",
            "image": "http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg",
            "members": [
                {
                    "id": 1,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 2,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 3,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 4,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 5,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 6,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                }
            ],
            "status": "ignore",
            "title": "Amsterdam bike tour"
        };
        var testVar2 = {
            "dateTime": "29-03-2018 21:22:48",
            "description": "TSH A'dam City invited you to this party ",
            "id": "909",
            "image": "http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg",
            "members": [
                {
                    "id": 1,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 2,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 3,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 4,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 5,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                },
                {
                    "id": 6,
                    "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
                }
            ],
            "status": "ignore",
            "title": "Amsterdam bike tour"
        };
        events.push(testVar);
        events.push(testVar2);
        events.forEach(function (value, index) {
            var tempDate = value.dateTime.split(" ")[0].split("-");
            tempDate = new Date(tempDate[2], tempDate[1] - 1, tempDate[0]);
            // the date that will be displayed in the thumbnail image as a string
            var tempDisplayDate = tempDate.toString().split(" ");
            value.dateDisplay = tempDisplayDate[2] + '\n' + tempDisplayDate[1];
            if (tempDate.getFullYear() == today.getFullYear() && tempDate.getMonth() == today.getMonth() && tempDate.getDate() == today.getDate()) {
                todayArr.events.push(value);
            }
            else if (tempDate >= weekStart && tempDate <= weekEnd) {
                thisWeekArr.events.push(value);
            }
            else {
                othersArr.events.push(value);
            }
        });
        this.groupedEvents.push(todayArr, thisWeekArr, othersArr);
        this.showLoader = false;
    };
    HomePage.prototype.setDecision = function (status, eventID) {
        this.groupedEvents.map(function (group) {
            group.events.map(function (event) {
                if (event.id == eventID) {
                    event.status = status;
                }
            });
        });
        // TODO: update the database with the updated values
    };
    HomePage.prototype.openDetails = function (event) {
        this.selectedEvent = event.id;
        this.navCtrl.push('EventDetailsPage', { event: event });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]) === "function" && _a || Object)
    ], HomePage.prototype, "container", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\admin\Desktop\ireckonu\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title text-center>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding #container>\n  <!-- Loading spinner -->\n  <spinner-component [spinnerShow]="showLoader"></spinner-component>\n\n\n  <ion-grid no-padding>\n\n    <!-- Searchbar  -->\n    <ion-row padding-horizontal class="search-bar-container">\n      <ion-col col-12>\n        <ion-searchbar no-border class="search-bar" (ionInput)="triggerLazyLoad()" [(ngModel)]="eventFilter.title" placeholder="Search events">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <!-- All events -->\n    <ion-row no-padding class="events-container">\n      <ion-col col-12>\n        <!-- Group name loop -->\n        <ion-item-group *ngFor="let group of groupedEvents">\n\n          <ion-item-divider class="date-group" light> {{group.groupName}} </ion-item-divider>\n\n          <h6 *ngIf="(group.events | filterBy: eventFilter).length === 0" padding-left>No events</h6>\n          <!-- event loop -->\n          <ion-item class="event-details" *ngFor="let event of group.events | filterBy: eventFilter; let i = index; let length = count "\n            [class.active]="event.id == selectedEvent">\n\n            <!-- event image -->\n            <ion-avatar item-start class="event-image-container" (click)="openDetails(event)">\n              <div class="event-image" [defaultImage]="\'https://cdn.dribbble.com/users/24447/screenshots/1201310/inkling_spinner.gif\'"\n                [lazyLoad]="event.image" [scrollObservable]="scrollAndSearch$">{{event.dateDisplay}}</div>\n            </ion-avatar>\n\n            <h2 class="event-name" (click)="openDetails(event)">{{event.title}}</h2>\n            <h3 class="event-dateTime">{{event.dateTime}}</h3>\n\n            <!-- attendees image -->\n            <ion-row>\n              <span *ngFor="let image of event.members; let in = index; let length = count;let first = first;" [ngClass]="{\'move-left\': in==1 || in==2}">\n                <ion-avatar *ngIf="in<3">\n                  <img class="event-attendees" [defaultImage]="\'https://cdn.dribbble.com/users/24447/screenshots/1201310/inkling_spinner.gif\'"\n                    [lazyLoad]="image.photo" [scrollObservable]="scrollAndSearch$">\n                </ion-avatar>\n              </span>\n              <h2 class="other-attendees" *ngIf="event.members?.length >=3">+{{event.members?.length-3}} others</h2>\n            </ion-row>\n\n            <!-- decision section -->\n            <ion-row>\n              <button *ngIf="event.status == \'going\' || event.status == \'none\'" class="attendees-btn " [ngClass]="{\'going\': event.status == \'going\' && event.status != \'none\'}"\n                ion-button icon-right color="light" small no-border (click)="setDecision(\'going\',event.id)">\n                <ion-icon name="checkmark"> </ion-icon>\n                <span class="btn-text">Going</span>\n              </button>\n              <button *ngIf="event.status == \'ignore\' || event.status == \'none\'" class="attendees-btn " [ngClass]="{\'ignore\': event.status == \'ignore\' && event.status != \'none\'}"\n                ion-button icon-right color="light" small (click)="setDecision(\'ignore\',event.id)">\n                <ion-icon name="close"> </ion-icon>\n                <span class="btn-text">Ignored</span>\n              </button>\n            </ion-row>\n\n          </ion-item>\n\n        </ion-item-group>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\admin\Desktop\ireckonu\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.getEvents = function () {
        //console.log("called");
        return this.http.get('https://tsh-app.firebaseio.com/events.json');
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_component_spinner__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_component_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_component_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_lazyload_image__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_filter_pipe__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_component_spinner__["SpinnerComponentModule"],
                __WEBPACK_IMPORTED_MODULE_11_ngx_filter_pipe__["a" /* FilterPipeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(275);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\admin\Desktop\ireckonu\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\admin\Desktop\ireckonu\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map