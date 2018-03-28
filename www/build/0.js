webpackJsonp([0],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPageModule", function() { return EventDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lazyload_image__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_lazyload_image__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventDetailsPageModule = /** @class */ (function () {
    function EventDetailsPageModule() {
    }
    EventDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_details__["a" /* EventDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_details__["a" /* EventDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_lazyload_image__["LazyLoadImageModule"],
            ],
        })
    ], EventDetailsPageModule);
    return EventDetailsPageModule;
}());

//# sourceMappingURL=event-details.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
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
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailsPage = /** @class */ (function () {
    function EventDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event');
    }
    EventDetailsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad EventDetailsPage');
    };
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-event-details',template:/*ion-inline-start:"C:\Users\admin\Desktop\ireckonu\src\pages\event-details\event-details.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen no-padding #container>\n\n  <ion-grid no-padding class="grey-background">\n\n    <!-- event main image -->\n    <ion-row>\n      <ion-col col-12>\n        <img class="event-image" [defaultImage]="\'https://cdn.dribbble.com/users/24447/screenshots/1201310/inkling_spinner.gif\'"\n          [lazyLoad]="event.image" [scrollObservable]="container.ionScroll">\n      </ion-col>\n    </ion-row>\n\n    <!-- event title & creators -->\n    <ion-row>\n      <ion-col col-12>\n        <h1 class="event-name">{{event.title}}</h1>\n      </ion-col>\n      <ion-col col-12>\n        <p class="event event-creator">Public event &nbsp;&nbsp;&nbsp; Hosted by TSh Amsterdam City</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- event details -->\n    <ion-row padding class="event-details">\n      <ion-col col-1>\n        <ion-icon name="md-time"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <p class="event event-date" color="dark">{{event.dateTime}}</p>\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon name="md-pin"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <p class="event event-location" color="dark">{{event.description}}</p>\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon name="md-speedometer"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <p class="event event-attendees" color="dark">{{event.members.length}} going</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- event attendees -->\n    <div padding-left class="white-background">\n      <span *ngFor="let image of event.members; let in = index; let length = count;let first = first;" [ngClass]="{\'move-left\':!first}">\n        <span *ngIf="in<7">\n          <img class="member-images" [defaultImage]="\'https://cdn.dribbble.com/users/24447/screenshots/1201310/inkling_spinner.gif\'"\n            [lazyLoad]="image.photo" [scrollObservable]="container.ionScroll">\n        </span>\n      </span>\n      <span class="remaining-attendees-container" padding-right>\n        <span *ngIf="event.members?.length >=7" class="member-images remaining-attendees">+{{event.members?.length-7}}</span>\n      </span>\n    </div>\n\n    <!-- event description -->\n    <ion-row>\n      <ion-col col-12>\n        <p padding class="event">In 1.5 hour we will explore Amsterdam on our bicycles, we\'ll show beautiful canala, hidden gems, and...\n          <span class="bold">Show more\n            <ion-icon name="ios-arrow-down"></ion-icon>\n          </span>\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <!-- event message -->\n    <ion-row margin-vertical>\n      <ion-col col-12>\n        <ion-item no-padding>\n          <ion-input type="text" placeholder="Leave a message"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- event social posts -->\n    <ion-row margin-vertical>\n      <ion-col col-12>\n        <ion-card class="social-card">\n\n          <ion-item>\n            <ion-avatar item-start class="post-details">\n              <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg">\n            </ion-avatar>\n            <h2>\n              <b>Lucifen van Geffen</b> shared a link</h2>\n            <p>\n              <ion-icon name="md-time"></ion-icon>\n              <span> 14 min ago</span>\n            </p>\n          </ion-item>\n\n          <ion-card-content>\n            <p>How to ride a bike like a real Dutchie!</p>\n          </ion-card-content>\n\n          <img src="http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg">\n\n          <button ion-button icon-left clear small color="comment" round>\n            <ion-icon class="high-five" name="hand"></ion-icon>\n            <div>14</div>\n          </button>\n\n          <ion-row class="social-buttons">\n            <ion-col>\n              <button ion-button icon-left clear small color="comment">\n                <ion-icon name="hand"></ion-icon>\n                <div>High five</div>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button icon-right clear small color="comment">\n                <ion-icon name="text"></ion-icon>\n                <div> Comment</div>\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row margin-vertical>\n      <ion-col col-12>\n        <ion-card class="social-card">\n\n          <ion-item>\n            <ion-avatar item-start class="post-details">\n              <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg">\n            </ion-avatar>\n            <h2>\n              <b>Bruno Dagestino</b>\n            </h2>\n            <p>\n              <ion-icon name="md-time"></ion-icon> 23 min ago</p>\n          </ion-item>\n\n          <ion-card-content>\n            <p>Is it possible to leave after an hour? I would love to join, but I have another appointment later that evening..</p>\n          </ion-card-content>\n\n          <button ion-button icon-left clear small color="comment" round>\n            <ion-icon class="comment" name="text"></ion-icon>\n            <div>1</div>\n          </button>\n\n          <ion-row class="social-buttons">\n            <ion-col>\n              <button ion-button icon-left clear small color="comment">\n                <ion-icon name="hand"></ion-icon>\n                <div>High five</div>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button icon-right clear small color="comment">\n                <ion-icon name="text"></ion-icon>\n                <div> Comment</div>\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\admin\Desktop\ireckonu\src\pages\event-details\event-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], EventDetailsPage);
    return EventDetailsPage;
    var _a, _b;
}());

//# sourceMappingURL=event-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map