(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/hacker-news/hacker-news.module */ "./src/app/hacker-news/hacker-news.module.ts")).then(m => m.HackerNewsModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");




class AppComponent {
    constructor() {
        this.title = 'publicis-sapient';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "square-loader", "fullScreen", "true"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-spinner", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hacker_news_hacker_news_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hacker-news/hacker-news.module */ "./src/app/hacker-news/hacker-news.module.ts");
/* harmony import */ var _services_hacker_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/hacker-news.service */ "./src/app/services/hacker-news.service.ts");
/* harmony import */ var _services_dataPassing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/dataPassing.service */ "./src/app/services/dataPassing.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/httpconfig.interceptor */ "./src/app/interceptor/httpconfig.interceptor.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_hacker_news_service__WEBPACK_IMPORTED_MODULE_5__["HackerNewsService"], _services_dataPassing_service__WEBPACK_IMPORTED_MODULE_6__["DataPassingService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptor"], multi: true }], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _hacker_news_hacker_news_module__WEBPACK_IMPORTED_MODULE_4__["HackerNewsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _hacker_news_hacker_news_module__WEBPACK_IMPORTED_MODULE_4__["HackerNewsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _hacker_news_hacker_news_module__WEBPACK_IMPORTED_MODULE_4__["HackerNewsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [_services_hacker_news_service__WEBPACK_IMPORTED_MODULE_5__["HackerNewsService"], _services_dataPassing_service__WEBPACK_IMPORTED_MODULE_6__["DataPassingService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/enums/data.enums.ts":
/*!*************************************!*\
  !*** ./src/app/enums/data.enums.ts ***!
  \*************************************/
/*! exports provided: StoryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryType", function() { return StoryType; });
var StoryType;
(function (StoryType) {
    StoryType[StoryType["Collecion"] = 1] = "Collecion";
    StoryType[StoryType["Update"] = 2] = "Update";
    StoryType[StoryType["Hide"] = 3] = "Hide";
})(StoryType || (StoryType = {}));


/***/ }),

/***/ "./src/app/hacker-news/hacker-news-chart/hacker-news-chart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/hacker-news/hacker-news-chart/hacker-news-chart.component.ts ***!
  \******************************************************************************/
/*! exports provided: HackerNewsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerNewsChartComponent", function() { return HackerNewsChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/data.enums */ "./src/app/enums/data.enums.ts");
/* harmony import */ var src_app_services_dataPassing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dataPassing.service */ "./src/app/services/dataPassing.service.ts");
/* harmony import */ var node_modules_ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");





;
class HackerNewsChartComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.data = [];
    }
    ngOnInit() {
        this.loadChart();
        this.dataService.currentMessage.subscribe(message => {
            if (message != null) {
                this.dataProcessor(message);
            }
        });
    }
    dataProcessor(message) {
        switch (message.typeOfData) {
            case src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_1__["StoryType"].Update:
                var x = message.data;
                var story = this.data.find(x => x.objectID == x.objectID);
                if (story != null && story != undefined) {
                    story = x;
                    this.loadChartData();
                }
                break;
            case src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_1__["StoryType"].Collecion:
                this.data = message.data;
                this.loadCategory();
                this.loadChartData();
                break;
            case src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_1__["StoryType"].Hide:
                var x = message.data;
                this.data.splice(this.data.indexOf(x), 1);
                this.loadCategory();
                this.loadChartData();
                break;
            default:
                break;
        }
    }
    loadChartData() {
        this.chartOptions.series = [{
                data: this.data.map(a => a.points)
            }];
    }
    loadCategory() {
        this.chartOptions.xaxis = {
            categories: this.data.map(a => a.objectID)
        };
    }
    loadChart() {
        this.chartOptions = {
            series: [
                {
                    name: "votes-story",
                    data: []
                },
            ],
            chart: {
                height: 350,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors: ["#77B6EA"],
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: "smooth"
            },
            title: {
                text: "Hacker-News-Chart",
                align: "left"
            },
            grid: {
                borderColor: "#e7e7e7",
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5
                }
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: [],
                title: {
                    text: "Id"
                }
            },
            yaxis: {
                title: {
                    text: "Votes"
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        };
    }
}
HackerNewsChartComponent.ɵfac = function HackerNewsChartComponent_Factory(t) { return new (t || HackerNewsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dataPassing_service__WEBPACK_IMPORTED_MODULE_2__["DataPassingService"])); };
HackerNewsChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HackerNewsChartComponent, selectors: [["app-hacker-news-chart"]], decls: 2, vars: 10, consts: [["id", "chart"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid"]], template: function HackerNewsChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("stroke", ctx.chartOptions.stroke)("colors", ctx.chartOptions.colors)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("markers", ctx.chartOptions.markers)("grid", ctx.chartOptions.grid);
    } }, directives: [node_modules_ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhY2tlci1uZXdzL2hhY2tlci1uZXdzLWNoYXJ0L2hhY2tlci1uZXdzLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HackerNewsChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hacker-news-chart',
                templateUrl: './hacker-news-chart.component.html',
                styleUrls: ['./hacker-news-chart.component.css']
            }]
    }], function () { return [{ type: src_app_services_dataPassing_service__WEBPACK_IMPORTED_MODULE_2__["DataPassingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hacker-news/hacker-news-dash-board/hacker-news-dash-board.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/hacker-news/hacker-news-dash-board/hacker-news-dash-board.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HackerNewsDashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerNewsDashBoardComponent", function() { return HackerNewsDashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_story_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/story.model */ "./src/app/models/story.model.ts");
/* harmony import */ var src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/data.enums */ "./src/app/enums/data.enums.ts");
/* harmony import */ var src_app_services_hacker_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/hacker-news.service */ "./src/app/services/hacker-news.service.ts");
/* harmony import */ var src_app_services_dataPassing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dataPassing.service */ "./src/app/services/dataPassing.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hacker_news_chart_hacker_news_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hacker-news-chart/hacker-news-chart.component */ "./src/app/hacker-news/hacker-news-chart/hacker-news-chart.component.ts");
/* harmony import */ var src_app_hacker_news_pipes_hostFromUrl_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/hacker-news/pipes/hostFromUrl.pipe */ "./src/app/hacker-news/pipes/hostFromUrl.pipe.ts");
/* harmony import */ var src_app_hacker_news_pipes_hoursFromDate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/hacker-news/pipes/hoursFromDate.pipe */ "./src/app/hacker-news/pipes/hoursFromDate.pipe.ts");










function HackerNewsDashBoardComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HackerNewsDashBoardComponent_tr_20_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const story_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.UpVote(story_r1.objectID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "getHostFromUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "getHoursFromDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HackerNewsDashBoardComponent_tr_20_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const story_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.Hide(story_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Hide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " ] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", story_r1.num_comments, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](story_r1.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", story_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", story_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", story_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, story_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", story_r1.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 10, story_r1.created_at), " [ ");
} }
class HackerNewsDashBoardComponent {
    constructor(service, dataService) {
        this.service = service;
        this.dataService = dataService;
        this.stories = [];
        this.pageNumber = 1;
        this.pageSize = 10;
        this.pagination = new src_app_models_story_model__WEBPACK_IMPORTED_MODULE_1__["Pagination"]();
        this.IsPrevDisable = true;
        this.IsNextDisable = false;
        this.dataSender = new src_app_models_story_model__WEBPACK_IMPORTED_MODULE_1__["DataSender"]();
    }
    ngOnInit() {
        this.getAllStories();
    }
    getAllStories() {
        this.service.getStory(this.pageNumber, this.pageSize).subscribe(x => {
            var storyOutput = x[0];
            var voteData = x[1];
            var hiddenStories = x[2];
            this.stories = [];
            this.stories = storyOutput.hits;
            this.pagination.page = storyOutput.page;
            this.pagination.nbPages = storyOutput.nbPages;
            this.pagination.hitsPerPage = storyOutput.hitsPerPage;
            this.stories.map(x => {
                var val = voteData.get(x.objectID);
                if (isNaN(val)) {
                    val = 0;
                }
                x.points += val;
                return !hiddenStories.includes(x.objectID);
            });
            this.updateSourceCollection();
        });
    }
    updateSourceCollection() {
        this.dataSender.data = this.stories;
        this.dataSender.typeOfData = src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_2__["StoryType"].Collecion;
        this.dataService.changeMessage(this.dataSender);
    }
    getPrev() {
        if (this.pageNumber == 1) {
            this.IsPrevDisable = true;
        }
        else {
            this.IsPrevDisable = false;
            this.pageNumber -= 1;
            if (this.pageNumber == 1) {
                this.IsPrevDisable = true;
            }
        }
        this.getAllStories();
    }
    getNext() {
        if (this.pagination.nbPages == this.pageNumber) {
            this.IsNextDisable = true;
        }
        else {
            this.IsNextDisable = false;
            this.IsPrevDisable = false;
            this.pageNumber += 1;
        }
        this.getAllStories();
    }
    UpVote(id) {
        this.service.saveVotesData(id, 1);
        var story = this.getStoryById(id);
        if (story != null && story != undefined) {
            story.points += 1;
            //this.updatedStory = story;
            this.dataSender.data = story;
            this.dataSender.typeOfData = src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_2__["StoryType"].Update;
            this.dataService.changeMessage(this.dataSender);
        }
    }
    Hide(story) {
        this.service.HideStory(story.objectID);
        this.stories.splice(this.stories.indexOf(story), 1);
        this.dataSender.data = story;
        this.dataSender.typeOfData = src_app_enums_data_enums__WEBPACK_IMPORTED_MODULE_2__["StoryType"].Hide;
        this.dataService.changeMessage(this.dataSender);
    }
    getStoryById(id) {
        return this.stories.find(x => x.objectID == id);
    }
}
HackerNewsDashBoardComponent.ɵfac = function HackerNewsDashBoardComponent_Factory(t) { return new (t || HackerNewsDashBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hacker_news_service__WEBPACK_IMPORTED_MODULE_3__["HackerNewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dataPassing_service__WEBPACK_IMPORTED_MODULE_4__["DataPassingService"])); };
HackerNewsDashBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HackerNewsDashBoardComponent, selectors: [["app-hacker-news-dash-board"]], decls: 41, vars: 4, consts: [[1, "container"], [1, "panel-group"], [1, "panel", "panel-default"], [1, "panel-header"], [1, "h3"], [1, "panel-body"], [1, "table-responsive"], [1, "table", "table-striped", "table-sm"], [1, "headerTr"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-link", 3, "disabled", "click"], ["type", "button", 1, "btn"], ["href", "#", 1, "title"], [1, "title"], ["href", "#", 3, "click"], [1, "triangle-up"], ["target", "_blank", 1, "title", 3, "href"], [1, "siteLink"], ["target", "_blank", 3, "href"], [1, "sitestr"], ["href", "#", 1, "author"], ["href", "#", 1, "author", 3, "click"]], template: function HackerNewsDashBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hacker-News Story Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Vote Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "UpVote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "News Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HackerNewsDashBoardComponent_tr_20_Template, 29, 12, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HackerNewsDashBoardComponent_Template_button_click_24_listener() { return ctx.getPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Prev ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HackerNewsDashBoardComponent_Template_button_click_32_listener() { return ctx.getNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Hacker-News Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-hacker-news-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.IsPrevDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Page Number : ", ctx.pageNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.IsNextDisable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _hacker_news_chart_hacker_news_chart_component__WEBPACK_IMPORTED_MODULE_6__["HackerNewsChartComponent"]], pipes: [src_app_hacker_news_pipes_hostFromUrl_pipe__WEBPACK_IMPORTED_MODULE_7__["GetHostFromUrl"], src_app_hacker_news_pipes_hoursFromDate_pipe__WEBPACK_IMPORTED_MODULE_8__["GetHoursFromDate"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhY2tlci1uZXdzL2hhY2tlci1uZXdzLWRhc2gtYm9hcmQvaGFja2VyLW5ld3MtZGFzaC1ib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HackerNewsDashBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hacker-news-dash-board',
                templateUrl: './hacker-news-dash-board.component.html',
                styleUrls: ['./hacker-news-dash-board.component.css']
            }]
    }], function () { return [{ type: src_app_services_hacker_news_service__WEBPACK_IMPORTED_MODULE_3__["HackerNewsService"] }, { type: src_app_services_dataPassing_service__WEBPACK_IMPORTED_MODULE_4__["DataPassingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hacker-news/hacker-news.module.ts":
/*!***************************************************!*\
  !*** ./src/app/hacker-news/hacker-news.module.ts ***!
  \***************************************************/
/*! exports provided: HackerNewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerNewsModule", function() { return HackerNewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hacker_news_dash_board_hacker_news_dash_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hacker-news-dash-board/hacker-news-dash-board.component */ "./src/app/hacker-news/hacker-news-dash-board/hacker-news-dash-board.component.ts");
/* harmony import */ var src_app_hacker_news_pipes_hostFromUrl_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/hacker-news/pipes/hostFromUrl.pipe */ "./src/app/hacker-news/pipes/hostFromUrl.pipe.ts");
/* harmony import */ var src_app_hacker_news_pipes_hoursFromDate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/hacker-news/pipes/hoursFromDate.pipe */ "./src/app/hacker-news/pipes/hoursFromDate.pipe.ts");
/* harmony import */ var node_modules_ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node_modules/ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var _hacker_news_chart_hacker_news_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hacker-news-chart/hacker-news-chart.component */ "./src/app/hacker-news/hacker-news-chart/hacker-news-chart.component.ts");








class HackerNewsModule {
}
HackerNewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HackerNewsModule });
HackerNewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HackerNewsModule_Factory(t) { return new (t || HackerNewsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            node_modules_ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HackerNewsModule, { declarations: [_hacker_news_dash_board_hacker_news_dash_board_component__WEBPACK_IMPORTED_MODULE_2__["HackerNewsDashBoardComponent"], src_app_hacker_news_pipes_hostFromUrl_pipe__WEBPACK_IMPORTED_MODULE_3__["GetHostFromUrl"], src_app_hacker_news_pipes_hoursFromDate_pipe__WEBPACK_IMPORTED_MODULE_4__["GetHoursFromDate"], _hacker_news_chart_hacker_news_chart_component__WEBPACK_IMPORTED_MODULE_6__["HackerNewsChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        node_modules_ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]], exports: [_hacker_news_dash_board_hacker_news_dash_board_component__WEBPACK_IMPORTED_MODULE_2__["HackerNewsDashBoardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HackerNewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_hacker_news_dash_board_hacker_news_dash_board_component__WEBPACK_IMPORTED_MODULE_2__["HackerNewsDashBoardComponent"], src_app_hacker_news_pipes_hostFromUrl_pipe__WEBPACK_IMPORTED_MODULE_3__["GetHostFromUrl"], src_app_hacker_news_pipes_hoursFromDate_pipe__WEBPACK_IMPORTED_MODULE_4__["GetHoursFromDate"], _hacker_news_chart_hacker_news_chart_component__WEBPACK_IMPORTED_MODULE_6__["HackerNewsChartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    node_modules_ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]
                ],
                exports: [_hacker_news_dash_board_hacker_news_dash_board_component__WEBPACK_IMPORTED_MODULE_2__["HackerNewsDashBoardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hacker-news/pipes/hostFromUrl.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/hacker-news/pipes/hostFromUrl.pipe.ts ***!
  \*******************************************************/
/*! exports provided: GetHostFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetHostFromUrl", function() { return GetHostFromUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
class GetHostFromUrl {
    transform(value) {
        if (value != null) {
            var url = new URL(value);
            return url.host;
        }
        return "";
    }
}
GetHostFromUrl.ɵfac = function GetHostFromUrl_Factory(t) { return new (t || GetHostFromUrl)(); };
GetHostFromUrl.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getHostFromUrl", type: GetHostFromUrl, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetHostFromUrl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'getHostFromUrl' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hacker-news/pipes/hoursFromDate.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/hacker-news/pipes/hoursFromDate.pipe.ts ***!
  \*********************************************************/
/*! exports provided: GetHoursFromDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetHoursFromDate", function() { return GetHoursFromDate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
class GetHoursFromDate {
    transform(value) {
        var today = new Date();
        var input = new Date(value);
        var diffMs = (today.getTime() - input.getTime()); // milliseconds between now & Christmas
        var diffDays = Math.floor(diffMs / 86400000); // days
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        var years = Math.floor(diffDays / 365);
        var months = Math.floor(diffDays / 12);
        if (years > 0) {
            return years + " Years ago";
        }
        if (months > 0) {
            return months + " Months ago";
        }
        if (diffDays > 0) {
            return diffDays + " Days ago";
        }
        if (diffHrs > 0) {
            return diffHrs + " Hours ago";
        }
        if (diffMins > 0) {
            return diffMins + " Mins ago";
        }
    }
}
GetHoursFromDate.ɵfac = function GetHoursFromDate_Factory(t) { return new (t || GetHoursFromDate)(); };
GetHoursFromDate.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getHoursFromDate", type: GetHoursFromDate, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetHoursFromDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'getHoursFromDate' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/interceptor/httpconfig.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/interceptor/httpconfig.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");




class HttpConfigInterceptor {
    constructor(spinner) {
        this.spinner = spinner;
    }
    intercept(req, next) {
        this.spinner.show();
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
        //            event => console.log(event),
        error => console.log(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.spinner.hide();
        }));
    }
}
HttpConfigInterceptor.ɵfac = function HttpConfigInterceptor_Factory(t) { return new (t || HttpConfigInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
HttpConfigInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpConfigInterceptor, factory: HttpConfigInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/story.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/story.model.ts ***!
  \***************************************/
/*! exports provided: StoryDetails, Pagination, StoryOutput, UserDetails, CommentDetails, CommentOutput, DataSender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryDetails", function() { return StoryDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryOutput", function() { return StoryOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDetails", function() { return CommentDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentOutput", function() { return CommentOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSender", function() { return DataSender; });
class StoryDetails {
}
class Pagination {
}
class StoryOutput extends Pagination {
}
class UserDetails {
}
class CommentDetails {
}
class CommentOutput extends Pagination {
}
class DataSender {
}


/***/ }),

/***/ "./src/app/services/dataPassing.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dataPassing.service.ts ***!
  \*************************************************/
/*! exports provided: DataPassingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPassingService", function() { return DataPassingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class DataPassingService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
}
DataPassingService.ɵfac = function DataPassingService_Factory(t) { return new (t || DataPassingService)(); };
DataPassingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataPassingService, factory: DataPassingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataPassingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/hacker-news.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/hacker-news.service.ts ***!
  \*************************************************/
/*! exports provided: HackerNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerNewsService", function() { return HackerNewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HackerNewsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://hn.algolia.com/api/v1/';
        this.getStoryUrl = 'search?tags=story&page=#pageNum&hitsPerPage=#pageSize';
        this.getCommentUrl = 'search?tags=comment,story_#story&page=#pageNum&hitsPerPage=#pageSize';
        this.mapData = this.getVoteDataFromStorage();
        this.hiddenStories = this.getHiddenStoriesFromStorage();
        if (this.hiddenStories == null) {
            this.hiddenStories = [];
        }
    }
    getStory(pageNum, pageSize) {
        var url = this.apiUrl + this.getStoryUrl
            .replace("#pageNum", pageNum.toString())
            .replace("#pageSize", pageSize.toString());
        var storyData = this.httpClient.get(url);
        var voteData = this.getVoteDetails();
        var hiddenStory = this.getHiddenStories();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(storyData, voteData, hiddenStory);
    }
    saveVotesData(storyId, voteCount) {
        if (this.mapData != null && this.mapData != undefined) {
            this.setVoteCount(storyId);
        }
        else {
            this.mapData = this.getVoteDataFromStorage();
            this.setVoteCount(storyId);
        }
        this.saveDataIntoLocal('UpVotes', JSON.stringify(Array.from(this.mapData.entries())));
    }
    setVoteCount(storyId) {
        var val = this.getVoteCount(storyId);
        val += 1;
        this.mapData.set(storyId, val);
    }
    getVoteCount(storyId) {
        var val = this.mapData.get(storyId);
        if (isNaN(val)) {
            val = 0;
        }
        return val;
    }
    getVoteDetails() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mapData);
    }
    getHiddenStories() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.hiddenStories);
    }
    getVoteDataFromStorage() {
        var voteDetails = window.localStorage.getItem('UpVotes');
        var map = new Map();
        if (voteDetails != null && voteDetails != undefined) {
            map = new Map(JSON.parse(voteDetails));
        }
        return map;
    }
    getHiddenStoriesFromStorage() {
        var data = window.localStorage.getItem('HiddenStories');
        if (data != null && data != undefined && data != "") {
            return JSON.parse(data);
        }
        return null;
    }
    HideStory(storyId) {
        if (this.hiddenStories == null || this.hiddenStories == undefined) {
            this.hiddenStories = this.getHiddenStoriesFromStorage();
        }
        if (this.hiddenStories.indexOf(storyId) == -1) {
            this.hiddenStories.push(storyId);
        }
        this.saveDataIntoLocal('HiddenStories', JSON.stringify(this.hiddenStories));
    }
    saveDataIntoLocal(key, value) {
        window.localStorage.setItem(key, value);
    }
}
HackerNewsService.ɵfac = function HackerNewsService_Factory(t) { return new (t || HackerNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HackerNewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HackerNewsService, factory: HackerNewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HackerNewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Kunal\Project\git\publicissapient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map