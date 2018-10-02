(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fale_conosco_fale_conosco_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fale-conosco/fale-conosco.component */ "./src/app/fale-conosco/fale-conosco.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'sobre', component: _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_1__["SobreComponent"] },
    { path: 'faleConosco', component: _fale_conosco_fale_conosco_component__WEBPACK_IMPORTED_MODULE_5__["FaleConoscoComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark\" >\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <a class=\"navbar-brand\" href=\"#\">Nome/Logo</a>\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"sobre\">Sobre</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link disabled\" routerLink=\"faleConosco\">Fale Conosco</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Buscar</button>\n    </form>\n  </div>\n</nav>\n\n    <router-outlet></router-outlet>\n\n    \n\n<!-- Footer -->\n<footer class=\"page-footer font-small indigo\">\n\n    <!-- Footer Links -->\n    <div class=\"container text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mx-auto\">\n\n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Links</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Very long link 1</a>\n            </li>\n            <li>\n              <a href=\"#!\">Very long link 2</a>\n            </li>\n            <li>\n              <a href=\"#!\">Very long link 3</a>\n            </li>\n            <li>\n              <a href=\"#!\">Very long link 4</a>\n            </li>\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mx-auto\">\n\n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Links</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Link 1</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 2</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 3</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 4</a>\n            </li>\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mx-auto\">\n\n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Links</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Link 1</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 2</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 3</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 4</a>\n            </li>\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mx-auto\">\n\n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Links</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Link 1</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 2</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 3</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 4</a>\n            </li>\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"https://fernandogreco.github.io/\"> Fernando Greco</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _fale_conosco_fale_conosco_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fale-conosco/fale-conosco.component */ "./src/app/fale-conosco/fale-conosco.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__["SobreComponent"],
                _fale_conosco_fale_conosco_component__WEBPACK_IMPORTED_MODULE_5__["FaleConoscoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fale-conosco/fale-conosco.component.html":
/*!**********************************************************!*\
  !*** ./src/app/fale-conosco/fale-conosco.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <BR>\n<form>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlInput1\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"nome@exemplo.com.br\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea><br>\n    <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/fale-conosco/fale-conosco.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/fale-conosco/fale-conosco.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fale-conosco/fale-conosco.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fale-conosco/fale-conosco.component.ts ***!
  \********************************************************/
/*! exports provided: FaleConoscoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaleConoscoComponent", function() { return FaleConoscoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaleConoscoComponent = /** @class */ (function () {
    function FaleConoscoComponent() {
    }
    FaleConoscoComponent.prototype.ngOnInit = function () {
    };
    FaleConoscoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fale-conosco',
            template: __webpack_require__(/*! ./fale-conosco.component.html */ "./src/app/fale-conosco/fale-conosco.component.html"),
            styles: [__webpack_require__(/*! ./fale-conosco.component.scss */ "./src/app/fale-conosco/fale-conosco.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaleConoscoComponent);
    return FaleConoscoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"container-fluid\">\n    <p style=\"font-size:4vw; color: green;\"><b>Título com fonte responsiva</b></p><hr>\n    <i><h5>Layout feito utilizando Bootstrap 4 e Angular 2,3... Rotas para navegação de páginas (single Page)</h5></i>\n    <div class=\"grid-container\">\n        <div class=\"item2\">\n          \n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                <ol class=\"carousel-indicators\">\n                  <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                  <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                  <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                </ol>\n                <div class=\"carousel-inner\">\n                  <div class=\"carousel-item active\">\n                    <img class=\"d-block w-100\" src=\"assets/images/girassol.jpg\" width=\"100%\" height=\"100%\" alt=\"First slide\">\n                    <div class=\"carousel-caption d-none d-md-block\">\n                      <h5>Aqui um título para a imagem</h5>\n                      <p>Aqui uma descrição da mesma</p>\n                    </div>\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img class=\"d-block w-100\" src=\"assets/images/predios.jpg\" width=\"100%\" height=\"100%\" alt=\"Second slide\">\n                    <div class=\"carousel-caption d-none d-md-block\">\n                      <h5>Aqui um título para a imagem</h5>\n                      <p>Aqui uma descrição da mesma</p>\n                    </div>\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img class=\"d-block w-100\" src=\"assets/images/girassol.jpg\" width=\"100%\" height=\"100%\" alt=\"Third slide\">\n                    <div class=\"carousel-caption d-none d-md-block\">\n                      <h5>Aqui um título para a imagem</h5>\n                      <p>Aqui uma descrição da mesma</p>\n                    </div>\n                  \n                  </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n                </div>\n        </div>\n        <div class=\"item3\"><img src=\"assets/images/natureza.jpg\" width=\"100%\" height=\"100%\"/></div>  \n        <div class=\"item4\">\n          \n            <blockquote class=\"blockquote mb-0 card-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n              <footer class=\"blockquote-footer\">\n                <small class=\"text-muted\">\n                  Alguém famoso em <cite title=\"Título da fonte\">Título da fonte</cite>\n                </small>\n              </footer>\n            </blockquote>\n\n        </div>\n        <div class=\"item1\"><img src=\"assets/images/city.jpg\" width=\"100%\" height=\"100%\"/></div>\n        <div class=\"item5\"> <div class=\"card-body\">\n          <h5 class=\"card-title\">Título da Notícia</h5>\n          <h6>Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</h6>\n          <h6><small class=\"text-muted\">Atualizados 3 minutos atrás</small></h6>\n        </div></div>\n      </div>\n\n\n\n    <div class=\"card-columns\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"assets/images/predios.jpg\" alt=\"Imagem de capa do card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Título do card que quebra em uma nova linha</h5>\n            <p class=\"card-text\">Este é um card mais longo com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior.</p>\n          </div>\n        </div>\n        <div class=\"card p-3\">\n          <blockquote class=\"blockquote mb-0 card-body\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                Alguém famoso em <cite title=\"Título da fonte\">Título da fonte</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"assets/images/mar.jpg\" alt=\"Imagem de capa do card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Título do card</h5>\n            <p class=\"card-text\">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n          </div>\n        </div>\n        <div  class=\"card text-white bg-info mb-3 p-3\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\n            <footer class=\"blockquote-footer text-white\">\n              <small>\n                Alguém famoso em <cite title=\"Título da fonte\">Título da fonte</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n        <div class=\"card text-center\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Título do card</h5>\n            <p class=\"card-text\">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img class=\"card-img\" src=\"assets/images/city.jpg\" alt=\"Imagem do card\">\n        </div>\n        <div class=\"card p-3 text-right\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                Alguém famoso em <cite title=\"Título da fonte\">Título da fonte</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Título do card</h5>\n            <p class=\"card-text\">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este card tem o conteúdo ainda maior que o primeiro, para mostrar a altura igual, em ação.</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n            <img class=\"card-img-top\" src=\"assets/images/girassol.jpg\" alt=\"Imagem de capa do card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Título do card</h5>\n              <p class=\"card-text\">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>\n              <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n            </div>\n          </div>\n\n\n          <div class=\"card text-white bg-dark mb-3\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Título do card</h5>\n                <p class=\"card-text\">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este card tem o conteúdo ainda maior que o primeiro, para mostrar a altura igual, em ação.</p>\n                <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n              </div>\n            </div>\n\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"assets/images/nuvem.jpg\" alt=\"Imagem de capa do card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Título do card</h5>\n                  <p class=\"card-text\">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>\n                  <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n                </div>\n              </div>\n\n              <div class=\"card\">\n                  <img class=\"card-img-top\" src=\"assets/images/predios.jpg\" alt=\"Imagem de capa do card\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">Título do card</h5>\n                    <p class=\"card-text\">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n                  </div>\n                </div>\n\n\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"assets/images/por.jpg\" alt=\"Imagem de capa do card\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Título do card</h5>\n                      <p class=\"card-text\">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>\n                      <p class=\"card-text\"><small class=\"text-muted\">Atualizados 3 minutos atrás</small></p>\n                    </div>\n                  </div>\n\n      </div>\n\n     \n      \n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.component.html":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sobre works!\n</p>\n"

/***/ }),

/***/ "./src/app/sobre/sobre.component.scss":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/sobre/sobre.component.html"),
            styles: [__webpack_require__(/*! ./sobre.component.scss */ "./src/app/sobre/sobre.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Folha Oeste\Desktop\sites\angular\SinglePageAngular2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map