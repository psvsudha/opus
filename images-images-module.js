(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["images-images-module"],{

/***/ "./src/app/images/images-viewer/images-viewer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/images/images-viewer/images-viewer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/images/images-viewer/images-viewer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/images/images-viewer/images-viewer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=5>\n  <mat-grid-tile (click)=viewImage(collection.category,image) *ngFor=\"let image of images\">\n    <mat-card class=\"image-card\">\n      <mat-card-content class=\"dashboard-card-content\">\n        <img src=\"{{image.thumbnailLink}}\" alt=\"\">\n      </mat-card-content>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/images/images-viewer/images-viewer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/images/images-viewer/images-viewer.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImagesViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesViewerComponent", function() { return ImagesViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_google_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/google-api */ "./src/app/core/google-api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagesViewerComponent = /** @class */ (function () {
    function ImagesViewerComponent(router, activatedRoute, googleAPIService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.googleAPIService = googleAPIService;
        this.images = [];
    }
    ImagesViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params$ = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params['id']; }));
        var googleAPIReady$ = this.googleAPIService.googleAPIReady;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(params$, googleAPIReady$).subscribe(function (result) { return _this.getImages(result); });
    };
    ImagesViewerComponent.prototype.getImages = function (_a) {
        var _this = this;
        var folderID = _a[0], isAPIReady = _a[1];
        if (folderID && isAPIReady) {
            this.googleAPIService.getImagesFromFolder(folderID).subscribe(function (responses) {
                _this.images = responses.files;
            });
        }
    };
    ImagesViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images-viewer',
            template: __webpack_require__(/*! ./images-viewer.component.html */ "./src/app/images/images-viewer/images-viewer.component.html"),
            styles: [__webpack_require__(/*! ./images-viewer.component.css */ "./src/app/images/images-viewer/images-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_google_api__WEBPACK_IMPORTED_MODULE_4__["GoogleAPIService"]])
    ], ImagesViewerComponent);
    return ImagesViewerComponent;
}());



/***/ }),

/***/ "./src/app/images/images.module.ts":
/*!*****************************************!*\
  !*** ./src/app/images/images.module.ts ***!
  \*****************************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-import */ "./src/app/material-import.ts");
/* harmony import */ var _images_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.routing.module */ "./src/app/images/images.routing.module.ts");
/* harmony import */ var _images_viewer_images_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images-viewer/images-viewer.component */ "./src/app/images/images-viewer/images-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ImagesModule = /** @class */ (function () {
    function ImagesModule() {
    }
    ImagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _images_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImagesRoutingModule"],
                _material_import__WEBPACK_IMPORTED_MODULE_2__["materialImports"]
            ],
            declarations: [_images_viewer_images_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ImagesViewerComponent"]]
        })
    ], ImagesModule);
    return ImagesModule;
}());



/***/ }),

/***/ "./src/app/images/images.routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/images/images.routing.module.ts ***!
  \*************************************************/
/*! exports provided: ImagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesRoutingModule", function() { return ImagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _images_viewer_images_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images-viewer/images-viewer.component */ "./src/app/images/images-viewer/images-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _images_viewer_images_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ImagesViewerComponent"]
    }];
var ImagesRoutingModule = /** @class */ (function () {
    function ImagesRoutingModule() {
    }
    ImagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ImagesRoutingModule);
    return ImagesRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=images-images-module.js.map