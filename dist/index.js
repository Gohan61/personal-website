"use strict";
(self["webpackChunkpersonal_website"] = self["webpackChunkpersonal_website"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Nunito/static/Nunito-Regular.ttf */ "./src/assets/Nunito/static/Nunito-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Abel/Abel-Regular.ttf */ "./src/assets/Abel/Abel-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background-color: rgb(0, 38, 77);
}

@font-face {
  font-family: nunito-body;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: abel-header;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  font-family: nunito-body, Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}

h1,
h2 {
  font-family: abel-header, Arial, Helvetica, sans-serif;
}

header,
main,
footer {
  padding: 20px max(2rem, 50vw - 1156px /2);
}

/* Header styles */

header {
  display: flex;
  justify-content: center;
  z-index: 1;
  position: relative;
}

.angledBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 360vw;
  height: 178vh;
  background-color: var(--background-color);
  transform: translateX(-20%) translateY(-97%) rotate(-5deg);
  z-index: 0;
}

.headerContent {
  display: flex;
  padding: 20px;
  z-index: 1;
  height: 350px;
}

.profilePicture img {
  width: 280px;
  object-fit: contain;
}

.headerAbout {
  padding: 50px;
  height: 140px;
  background-color: white;
  margin-top: 15px;
  box-shadow: 0 2px 2px 2px rgb(128, 128, 128, 0.2);
}

.headerIcons {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.socialIcon {
  width: 20px;
}

.socialIcon:hover {
  cursor: pointer;
}

/* Main styles */

main h2 {
  margin-left: 73px;
}

.projectsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
}

.projectsContainer > [class^="project"] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 250px;
}

.projectsContainer > [class^="project"]:hover {
  box-shadow: 1px 1px 10px inset rgba(11, 4, 87, 0.1);
}

.projectScreenshot {
  width: 250px;
  height: 250px;
  object-fit: fill;
}

.projectDescription {
  box-shadow: 1px 1px 2px 0 rgb(82, 72, 72, 0.2);
  height: 200px;
  padding: 10px;
}

.subContainer {
  display: flex;
  justify-content: space-between;
}

.projectIcons {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.projectIcons img:hover {
  cursor: pointer;
}

.projectIcons img {
  width: 20px;
}

/* Footer styles */

footer {
  background-color: rgb(0, 38, 77, 0.9);
  color: aliceblue;
}

.footerContainer {
  padding: 10px;
}

.emailContact {
  margin-bottom: 10px;
}

.emailContact,
.contactIcons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.emailContact a {
  text-decoration: none;
  color: aliceblue;
}

.emailContact img {
  width: 20px;
}

/* Mobile view */

@media (max-width: 935px) {
  .headerContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .headerAbout {
    height: auto;
  }

  main h2 {
    text-align: center;
    padding: 0;
    margin: 0;
  }

  footer {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .footerContainer {
    padding: 40px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/index.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,4CAAoD;AACtD;;AAEA;EACE,wBAAwB;EACxB,4CAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,sDAAsD;EACtD,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,sDAAsD;AACxD;;AAEA;;;EAGE,yCAAyC;AAC3C;;AAEA,kBAAkB;;AAElB;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,0DAA0D;EAC1D,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,aAAa;EACb,UAAU;EACV,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA,gBAAgB;;AAEhB;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;EAC9C,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA,kBAAkB;;AAElB;EACE,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA,gBAAgB;;AAEhB;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,aAAa;EACf;AACF","sourcesContent":[":root {\n  --background-color: rgb(0, 38, 77);\n}\n\n@font-face {\n  font-family: nunito-body;\n  src: url(../assets/Nunito/static/Nunito-Regular.ttf);\n}\n\n@font-face {\n  font-family: abel-header;\n  src: url(../assets/Abel/Abel-Regular.ttf);\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  font-family: nunito-body, Arial, Helvetica, sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\nh1,\nh2 {\n  font-family: abel-header, Arial, Helvetica, sans-serif;\n}\n\nheader,\nmain,\nfooter {\n  padding: 20px max(2rem, 50vw - 1156px /2);\n}\n\n/* Header styles */\n\nheader {\n  display: flex;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n\n.angledBackground {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 360vw;\n  height: 178vh;\n  background-color: var(--background-color);\n  transform: translateX(-20%) translateY(-97%) rotate(-5deg);\n  z-index: 0;\n}\n\n.headerContent {\n  display: flex;\n  padding: 20px;\n  z-index: 1;\n  height: 350px;\n}\n\n.profilePicture img {\n  width: 280px;\n  object-fit: contain;\n}\n\n.headerAbout {\n  padding: 50px;\n  height: 140px;\n  background-color: white;\n  margin-top: 15px;\n  box-shadow: 0 2px 2px 2px rgb(128, 128, 128, 0.2);\n}\n\n.headerIcons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 20px;\n}\n\n.socialIcon {\n  width: 20px;\n}\n\n.socialIcon:hover {\n  cursor: pointer;\n}\n\n/* Main styles */\n\nmain h2 {\n  margin-left: 73px;\n}\n\n.projectsContainer {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  justify-items: center;\n}\n\n.projectsContainer > [class^=\"project\"] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  width: 250px;\n}\n\n.projectsContainer > [class^=\"project\"]:hover {\n  box-shadow: 1px 1px 10px inset rgba(11, 4, 87, 0.1);\n}\n\n.projectScreenshot {\n  width: 250px;\n  height: 250px;\n  object-fit: fill;\n}\n\n.projectDescription {\n  box-shadow: 1px 1px 2px 0 rgb(82, 72, 72, 0.2);\n  height: 200px;\n  padding: 10px;\n}\n\n.subContainer {\n  display: flex;\n  justify-content: space-between;\n}\n\n.projectIcons {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.projectIcons img:hover {\n  cursor: pointer;\n}\n\n.projectIcons img {\n  width: 20px;\n}\n\n/* Footer styles */\n\nfooter {\n  background-color: rgb(0, 38, 77, 0.9);\n  color: aliceblue;\n}\n\n.footerContainer {\n  padding: 10px;\n}\n\n.emailContact {\n  margin-bottom: 10px;\n}\n\n.emailContact,\n.contactIcons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.emailContact a {\n  text-decoration: none;\n  color: aliceblue;\n}\n\n.emailContact img {\n  width: 20px;\n}\n\n/* Mobile view */\n\n@media (max-width: 935px) {\n  .headerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n  }\n\n  .headerAbout {\n    height: auto;\n  }\n\n  main h2 {\n    text-align: center;\n    padding: 0;\n    margin: 0;\n  }\n\n  footer {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n  }\n\n  .footerContainer {\n    padding: 40px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheets/index.css":
/*!***********************************!*\
  !*** ./src/stylesheets/index.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/index.css */ "./src/stylesheets/index.css");
/* harmony import */ var _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/github-original.svg */ "./src/assets/github-original.svg");
/* harmony import */ var _assets_linkedin_plain_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/linkedin-plain.svg */ "./src/assets/linkedin-plain.svg");
/* harmony import */ var _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/share-outline.svg */ "./src/assets/share-outline.svg");
/* harmony import */ var _assets_Profile_picture_Gokhan_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/Profile-picture-Gokhan.jpg */ "./src/assets/Profile-picture-Gokhan.jpg");
/* harmony import */ var _assets_Nahebook_desktop_feed_Phone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Nahebook-desktop-feed (Phone).png */ "./src/assets/Nahebook-desktop-feed (Phone).png");
/* harmony import */ var _assets_Messaging_app_display_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Messaging-app-display.png */ "./src/assets/Messaging-app-display.png");
/* harmony import */ var _assets_battleship_display_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/battleship-display.png */ "./src/assets/battleship-display.png");
/* harmony import */ var _assets_Shopping_cart_display_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/Shopping-cart-display.png */ "./src/assets/Shopping-cart-display.png");
/* harmony import */ var _assets_Binary_search_tree_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/Binary_search_tree.svg */ "./src/assets/Binary_search_tree.svg");
/* harmony import */ var _assets_Phototag_display_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/Phototag-display.png */ "./src/assets/Phototag-display.png");
/* harmony import */ var _assets_email_outline_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/email-outline.svg */ "./src/assets/email-outline.svg");













function addLinkListener(link, element) {
  element.addEventListener("click", () => (location.href = link));
}

(function addListeners() {
  const gitIcon = document.querySelector(".gitIcon");
  const linkedInIcon = document.querySelector(".linkedInIcon");

  const nahebookGit = document.querySelector(".nahebook-git");
  const nahebookLink = document.querySelector(".nahebook-link");

  const messageGit = document.querySelector(".message-git");
  const messageLink = document.querySelector(".message-link");

  const dataGit = document.querySelector(".data-git");
  const dataLink = document.querySelector(".data-link");

  const battleshipGit = document.querySelector(".battleship-git");
  const battleshipLink = document.querySelector(".battleship-link");

  const shoppingGit = document.querySelector(".shopping-git");
  const shoppingLink = document.querySelector(".shopping-link");

  const photoGit = document.querySelector(".photo-git");
  const photoLink = document.querySelector(".photo-link");

  const contactGit = document.querySelector(".contactIcons .gitIcon");
  const contactLinkedin = document.querySelector(".contactIcons .linkedInIcon");

  const linksAndElements = [
    [gitIcon, "https://github.com/Gohan61"],
    [linkedInIcon, "https://www.linkedin.com/in/gokhan-sancak/"],
    [nahebookGit, "https://github.com/Gohan61/nahebook"],
    [nahebookLink, "https://nahebook-odin-frontend.netlify.app/"],
    [messageGit, "https://github.com/Gohan61/messaging-app"],
    [messageLink, "https://github.com/Gohan61/messaging-app"],
    [dataGit, "https://github.com/Gohan61/computer-science-odin"],
    [dataLink, "https://github.com/Gohan61/computer-science-odin"],
    [battleshipGit, "https://github.com/Gohan61/testing-javascript"],
    [battleshipLink, "https://gohan61.github.io/testing-javascript/"],
    [shoppingGit, "https://github.com/Gohan61/shopping-cart"],
    [shoppingLink, "https://main--odin-react-shoppingcart.netlify.app/"],
    [photoGit, "https://github.com/Gohan61/phototaggingapp"],
    [photoLink, "https://github.com/Gohan61/phototaggingapp"],
    [contactGit, "https://github.com/Gohan61"],
    [contactLinkedin, "https://www.linkedin.com/in/gokhan-sancak/"],
  ];

  gitIcon.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  nahebookGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  messageGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  messageGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  dataGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  battleshipGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  shoppingGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  photoGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  contactGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;

  linkedInIcon.src = _assets_linkedin_plain_svg__WEBPACK_IMPORTED_MODULE_2__;
  contactLinkedin.src = _assets_linkedin_plain_svg__WEBPACK_IMPORTED_MODULE_2__;

  nahebookLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  messageLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  dataLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  battleshipLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  shoppingLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  photoLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;

  linksAndElements.forEach((item) => addLinkListener(item[1], item[0]));

  const encEmail = "Zy5zYW5jYWtAdHV0YW5vdGEuY29t";
  const email = document.querySelector(".email");
  email.setAttribute("href", "mailto:".concat(atob(encEmail)));

  const emailIcon = document.querySelector(".emailContact img ");
  emailIcon.src = _assets_email_outline_svg__WEBPACK_IMPORTED_MODULE_11__;
})();

(function setImages() {
  const profilePicture = document.querySelector(".profilePicture img");
  profilePicture.src = _assets_Profile_picture_Gokhan_jpg__WEBPACK_IMPORTED_MODULE_4__;

  const nahebookImage = document.querySelector(".project1 img");
  nahebookImage.src = _assets_Nahebook_desktop_feed_Phone_png__WEBPACK_IMPORTED_MODULE_5__;

  const messageImage = document.querySelector(".project2 img");
  messageImage.src = _assets_Messaging_app_display_png__WEBPACK_IMPORTED_MODULE_6__;

  const bstImage = document.querySelector(".project3 img");
  bstImage.src = _assets_Binary_search_tree_svg__WEBPACK_IMPORTED_MODULE_9__;

  const battleshipImage = document.querySelector(".project4 img");
  battleshipImage.src = _assets_battleship_display_png__WEBPACK_IMPORTED_MODULE_7__;

  const shoppingImage = document.querySelector(".project5 img");
  shoppingImage.src = _assets_Shopping_cart_display_png__WEBPACK_IMPORTED_MODULE_8__;

  const photoTagImage = document.querySelector(".project6 img");
  photoTagImage.src = _assets_Phototag_display_png__WEBPACK_IMPORTED_MODULE_10__;
})();


/***/ }),

/***/ "./src/assets/Abel/Abel-Regular.ttf":
/*!******************************************!*\
  !*** ./src/assets/Abel/Abel-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3843f456cf56d275baf6.ttf";

/***/ }),

/***/ "./src/assets/Binary_search_tree.svg":
/*!*******************************************!*\
  !*** ./src/assets/Binary_search_tree.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0665f792e13a57d123c.svg";

/***/ }),

/***/ "./src/assets/Messaging-app-display.png":
/*!**********************************************!*\
  !*** ./src/assets/Messaging-app-display.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de3d12bf6fa436639d6b.png";

/***/ }),

/***/ "./src/assets/Nahebook-desktop-feed (Phone).png":
/*!******************************************************!*\
  !*** ./src/assets/Nahebook-desktop-feed (Phone).png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "290b206593bee50d6158.png";

/***/ }),

/***/ "./src/assets/Nunito/static/Nunito-Regular.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/Nunito/static/Nunito-Regular.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d7a6e03c6e3ed49c7ac.ttf";

/***/ }),

/***/ "./src/assets/Phototag-display.png":
/*!*****************************************!*\
  !*** ./src/assets/Phototag-display.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d01017a18f4d04e1cb.png";

/***/ }),

/***/ "./src/assets/Profile-picture-Gokhan.jpg":
/*!***********************************************!*\
  !*** ./src/assets/Profile-picture-Gokhan.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f5810b0c4ab88aad6a3.jpg";

/***/ }),

/***/ "./src/assets/Shopping-cart-display.png":
/*!**********************************************!*\
  !*** ./src/assets/Shopping-cart-display.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb7d3e3f1ce3640cf62f.png";

/***/ }),

/***/ "./src/assets/battleship-display.png":
/*!*******************************************!*\
  !*** ./src/assets/battleship-display.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f14250007a79705d8e04.png";

/***/ }),

/***/ "./src/assets/email-outline.svg":
/*!**************************************!*\
  !*** ./src/assets/email-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffe24abaeb56c6af70c1.svg";

/***/ }),

/***/ "./src/assets/github-original.svg":
/*!****************************************!*\
  !*** ./src/assets/github-original.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c903c66b2c5334c8c0b.svg";

/***/ }),

/***/ "./src/assets/linkedin-plain.svg":
/*!***************************************!*\
  !*** ./src/assets/linkedin-plain.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4e41ebf9944039eda77.svg";

/***/ }),

/***/ "./src/assets/share-outline.svg":
/*!**************************************!*\
  !*** ./src/assets/share-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50f379c2047d40a45300.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdLQUE2RDtBQUN6Ryw0Q0FBNEMsMElBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEZBQTRGLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLGdDQUFnQyx1Q0FBdUMsR0FBRyxnQkFBZ0IsNkJBQTZCLHlEQUF5RCxHQUFHLGdCQUFnQiw2QkFBNkIsOENBQThDLEdBQUcsVUFBVSxrQkFBa0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDJEQUEyRCxlQUFlLGNBQWMsR0FBRyxhQUFhLDJEQUEyRCxHQUFHLDRCQUE0Qiw4Q0FBOEMsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0QixlQUFlLHVCQUF1QixHQUFHLHVCQUF1Qix1QkFBdUIsV0FBVyxZQUFZLGlCQUFpQixrQkFBa0IsOENBQThDLCtEQUErRCxlQUFlLEdBQUcsb0JBQW9CLGtCQUFrQixrQkFBa0IsZUFBZSxrQkFBa0IsR0FBRyx5QkFBeUIsaUJBQWlCLHdCQUF3QixHQUFHLGtCQUFrQixrQkFBa0Isa0JBQWtCLDRCQUE0QixxQkFBcUIsc0RBQXNELEdBQUcsa0JBQWtCLGtCQUFrQiw4QkFBOEIsY0FBYyxHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsa0NBQWtDLHNCQUFzQixHQUFHLHdCQUF3QixrQkFBa0IsZ0VBQWdFLDBCQUEwQixHQUFHLCtDQUErQyxrQkFBa0IsMkJBQTJCLHdCQUF3QixrQkFBa0IsaUJBQWlCLEdBQUcscURBQXFELHdEQUF3RCxHQUFHLHdCQUF3QixpQkFBaUIsa0JBQWtCLHFCQUFxQixHQUFHLHlCQUF5QixtREFBbUQsa0JBQWtCLGtCQUFrQixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsbUJBQW1CLGtCQUFrQixjQUFjLDhCQUE4QixHQUFHLDZCQUE2QixvQkFBb0IsR0FBRyx1QkFBdUIsZ0JBQWdCLEdBQUcsbUNBQW1DLDBDQUEwQyxxQkFBcUIsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLG1DQUFtQyxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxxQkFBcUIsMEJBQTBCLHFCQUFxQixHQUFHLHVCQUF1QixnQkFBZ0IsR0FBRyxvREFBb0Qsb0JBQW9CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG1CQUFtQixLQUFLLG9CQUFvQixtQkFBbUIsS0FBSyxlQUFlLHlCQUF5QixpQkFBaUIsZ0JBQWdCLEtBQUssY0FBYyxtQkFBbUIsb0JBQW9CLDhCQUE4QixLQUFLLHdCQUF3QixvQkFBb0IsS0FBSyxHQUFHLHFCQUFxQjtBQUN2cUo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxTjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmlDO0FBQ2tCO0FBQ0k7QUFDTDtBQUNlO0FBQ007QUFDVDtBQUNBO0FBQ0M7QUFDUjtBQUNHO0FBQ1A7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHdEQUFPO0FBQ3ZCLG9CQUFvQix3REFBTztBQUMzQixtQkFBbUIsd0RBQU87QUFDMUIsbUJBQW1CLHdEQUFPO0FBQzFCLGdCQUFnQix3REFBTztBQUN2QixzQkFBc0Isd0RBQU87QUFDN0Isb0JBQW9CLHdEQUFPO0FBQzNCLGlCQUFpQix3REFBTztBQUN4QixtQkFBbUIsd0RBQU87O0FBRTFCLHFCQUFxQix1REFBWTtBQUNqQyx3QkFBd0IsdURBQVk7O0FBRXBDLHFCQUFxQixzREFBUTtBQUM3QixvQkFBb0Isc0RBQVE7QUFDNUIsaUJBQWlCLHNEQUFRO0FBQ3pCLHVCQUF1QixzREFBUTtBQUMvQixxQkFBcUIsc0RBQVE7QUFDN0Isa0JBQWtCLHNEQUFROztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsdURBQVM7QUFDM0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsdUJBQXVCLCtEQUFjOztBQUVyQztBQUNBLHNCQUFzQixvRUFBYTs7QUFFbkM7QUFDQSxxQkFBcUIsOERBQVk7O0FBRWpDO0FBQ0EsaUJBQWlCLDJEQUFROztBQUV6QjtBQUNBLHdCQUF3QiwyREFBZTs7QUFFdkM7QUFDQSxzQkFBc0IsOERBQWE7O0FBRW5DO0FBQ0Esc0JBQXNCLDBEQUFhO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5jc3M/MjdmNiIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9OdW5pdG8vc3RhdGljL051bml0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9BYmVsL0FiZWwtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDM4LCA3Nyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbnVuaXRvLWJvZHk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGFiZWwtaGVhZGVyO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LWZhbWlseTogbnVuaXRvLWJvZHksIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEsXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBhYmVsLWhlYWRlciwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyLFxubWFpbixcbmZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggbWF4KDJyZW0sIDUwdncgLSAxMTU2cHggLzIpO1xufVxuXG4vKiBIZWFkZXIgc3R5bGVzICovXG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbmdsZWRCYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzNjB2dztcbiAgaGVpZ2h0OiAxNzh2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKSB0cmFuc2xhdGVZKC05NyUpIHJvdGF0ZSgtNWRlZyk7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5oZWFkZXJDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLnByb2ZpbGVQaWN0dXJlIGltZyB7XG4gIHdpZHRoOiAyODBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmhlYWRlckFib3V0IHtcbiAgcGFkZGluZzogNTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggcmdiKDEyOCwgMTI4LCAxMjgsIDAuMik7XG59XG5cbi5oZWFkZXJJY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMjBweDtcbn1cblxuLnNvY2lhbEljb24ge1xuICB3aWR0aDogMjBweDtcbn1cblxuLnNvY2lhbEljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE1haW4gc3R5bGVzICovXG5cbm1haW4gaDIge1xuICBtYXJnaW4tbGVmdDogNzNweDtcbn1cblxuLnByb2plY3RzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3RzQ29udGFpbmVyID4gW2NsYXNzXj1cInByb2plY3RcIl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5wcm9qZWN0c0NvbnRhaW5lciA+IFtjbGFzc149XCJwcm9qZWN0XCJdOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGluc2V0IHJnYmEoMTEsIDQsIDg3LCAwLjEpO1xufVxuXG4ucHJvamVjdFNjcmVlbnNob3Qge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG59XG5cbi5wcm9qZWN0RGVzY3JpcHRpb24ge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYig4MiwgNzIsIDcyLCAwLjIpO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3ViQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdEljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucHJvamVjdEljb25zIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RJY29ucyBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cblxuLyogRm9vdGVyIHN0eWxlcyAqL1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMzgsIDc3LCAwLjkpO1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4uZm9vdGVyQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmVtYWlsQ29udGFjdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5lbWFpbENvbnRhY3QsXG4uY29udGFjdEljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZW1haWxDb250YWN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5lbWFpbENvbnRhY3QgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi8qIE1vYmlsZSB2aWV3ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzVweCkge1xuICAuaGVhZGVyQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmhlYWRlckFib3V0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBtYWluIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmZvb3RlckNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNEQUFzRDtFQUN0RCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTs7O0VBR0UseUNBQXlDO0FBQzNDOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztFQUN6QywwREFBMEQ7RUFDMUQsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMzgsIDc3KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbnVuaXRvLWJvZHk7XFxuICBzcmM6IHVybCguLi9hc3NldHMvTnVuaXRvL3N0YXRpYy9OdW5pdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhYmVsLWhlYWRlcjtcXG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9BYmVsL0FiZWwtUmVndWxhci50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBudW5pdG8tYm9keSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBhYmVsLWhlYWRlciwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyLFxcbm1haW4sXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDIwcHggbWF4KDJyZW0sIDUwdncgLSAxMTU2cHggLzIpO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGVzICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hbmdsZWRCYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMzYwdnc7XFxuICBoZWlnaHQ6IDE3OHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSkgdHJhbnNsYXRlWSgtOTclKSByb3RhdGUoLTVkZWcpO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmhlYWRlckNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuLnByb2ZpbGVQaWN0dXJlIGltZyB7XFxuICB3aWR0aDogMjgwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaGVhZGVyQWJvdXQge1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHJnYigxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbn1cXG5cXG4uaGVhZGVySWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zb2NpYWxJY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uc29jaWFsSWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1haW4gc3R5bGVzICovXFxuXFxubWFpbiBoMiB7XFxuICBtYXJnaW4tbGVmdDogNzNweDtcXG59XFxuXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzQ29udGFpbmVyID4gW2NsYXNzXj1cXFwicHJvamVjdFxcXCJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciA+IFtjbGFzc149XFxcInByb2plY3RcXFwiXTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggaW5zZXQgcmdiYSgxMSwgNCwgODcsIDAuMSk7XFxufVxcblxcbi5wcm9qZWN0U2NyZWVuc2hvdCB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgb2JqZWN0LWZpdDogZmlsbDtcXG59XFxuXFxuLnByb2plY3REZXNjcmlwdGlvbiB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYig4MiwgNzIsIDcyLCAwLjIpO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zdWJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3RJY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3RJY29ucyBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdEljb25zIGltZyB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLyogRm9vdGVyIHN0eWxlcyAqL1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMzgsIDc3LCAwLjkpO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZW1haWxDb250YWN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5lbWFpbENvbnRhY3QsXFxuLmNvbnRhY3RJY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmVtYWlsQ29udGFjdCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5lbWFpbENvbnRhY3QgaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4vKiBNb2JpbGUgdmlldyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzVweCkge1xcbiAgLmhlYWRlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuaGVhZGVyQWJvdXQge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICBtYWluIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzaGVldHMvaW5kZXguY3NzXCI7XG5pbXBvcnQgR2l0SWNvbiBmcm9tIFwiLi9hc3NldHMvZ2l0aHViLW9yaWdpbmFsLnN2Z1wiO1xuaW1wb3J0IExpbmtlZGluSWNvbiBmcm9tIFwiLi9hc3NldHMvbGlua2VkaW4tcGxhaW4uc3ZnXCI7XG5pbXBvcnQgTGlua0ljb24gZnJvbSBcIi4vYXNzZXRzL3NoYXJlLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSBcIi4vYXNzZXRzL1Byb2ZpbGUtcGljdHVyZS1Hb2toYW4uanBnXCI7XG5pbXBvcnQgTmFoZWJvb2tJbWFnZSBmcm9tIFwiLi9hc3NldHMvTmFoZWJvb2stZGVza3RvcC1mZWVkIChQaG9uZSkucG5nXCI7XG5pbXBvcnQgTWVzc2FnZUltYWdlIGZyb20gXCIuL2Fzc2V0cy9NZXNzYWdpbmctYXBwLWRpc3BsYXkucG5nXCI7XG5pbXBvcnQgQmF0dGxlc2hpcEltYWdlIGZyb20gXCIuL2Fzc2V0cy9iYXR0bGVzaGlwLWRpc3BsYXkucG5nXCI7XG5pbXBvcnQgU2hvcHBpbmdJbWFnZSBmcm9tIFwiLi9hc3NldHMvU2hvcHBpbmctY2FydC1kaXNwbGF5LnBuZ1wiO1xuaW1wb3J0IEJzdEltYWdlIGZyb20gXCIuL2Fzc2V0cy9CaW5hcnlfc2VhcmNoX3RyZWUuc3ZnXCI7XG5pbXBvcnQgUGhvdG9UYWdJbWFnZSBmcm9tIFwiLi9hc3NldHMvUGhvdG90YWctZGlzcGxheS5wbmdcIjtcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIi4vYXNzZXRzL2VtYWlsLW91dGxpbmUuc3ZnXCI7XG5cbmZ1bmN0aW9uIGFkZExpbmtMaXN0ZW5lcihsaW5rLCBlbGVtZW50KSB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IChsb2NhdGlvbi5ocmVmID0gbGluaykpO1xufVxuXG4oZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICBjb25zdCBnaXRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naXRJY29uXCIpO1xuICBjb25zdCBsaW5rZWRJbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtlZEluSWNvblwiKTtcblxuICBjb25zdCBuYWhlYm9va0dpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFoZWJvb2stZ2l0XCIpO1xuICBjb25zdCBuYWhlYm9va0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5haGVib29rLWxpbmtcIik7XG5cbiAgY29uc3QgbWVzc2FnZUdpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZS1naXRcIik7XG4gIGNvbnN0IG1lc3NhZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWxpbmtcIik7XG5cbiAgY29uc3QgZGF0YUdpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1naXRcIik7XG4gIGNvbnN0IGRhdGFMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWxpbmtcIik7XG5cbiAgY29uc3QgYmF0dGxlc2hpcEdpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcC1naXRcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXBMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWxpbmtcIik7XG5cbiAgY29uc3Qgc2hvcHBpbmdHaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3BwaW5nLWdpdFwiKTtcbiAgY29uc3Qgc2hvcHBpbmdMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG9wcGluZy1saW5rXCIpO1xuXG4gIGNvbnN0IHBob3RvR2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1naXRcIik7XG4gIGNvbnN0IHBob3RvTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tbGlua1wiKTtcblxuICBjb25zdCBjb250YWN0R2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0SWNvbnMgLmdpdEljb25cIik7XG4gIGNvbnN0IGNvbnRhY3RMaW5rZWRpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdEljb25zIC5saW5rZWRJbkljb25cIik7XG5cbiAgY29uc3QgbGlua3NBbmRFbGVtZW50cyA9IFtcbiAgICBbZ2l0SWNvbiwgXCJodHRwczovL2dpdGh1Yi5jb20vR29oYW42MVwiXSxcbiAgICBbbGlua2VkSW5JY29uLCBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9nb2toYW4tc2FuY2FrL1wiXSxcbiAgICBbbmFoZWJvb2tHaXQsIFwiaHR0cHM6Ly9naXRodWIuY29tL0dvaGFuNjEvbmFoZWJvb2tcIl0sXG4gICAgW25haGVib29rTGluaywgXCJodHRwczovL25haGVib29rLW9kaW4tZnJvbnRlbmQubmV0bGlmeS5hcHAvXCJdLFxuICAgIFttZXNzYWdlR2l0LCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Hb2hhbjYxL21lc3NhZ2luZy1hcHBcIl0sXG4gICAgW21lc3NhZ2VMaW5rLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Hb2hhbjYxL21lc3NhZ2luZy1hcHBcIl0sXG4gICAgW2RhdGFHaXQsIFwiaHR0cHM6Ly9naXRodWIuY29tL0dvaGFuNjEvY29tcHV0ZXItc2NpZW5jZS1vZGluXCJdLFxuICAgIFtkYXRhTGluaywgXCJodHRwczovL2dpdGh1Yi5jb20vR29oYW42MS9jb21wdXRlci1zY2llbmNlLW9kaW5cIl0sXG4gICAgW2JhdHRsZXNoaXBHaXQsIFwiaHR0cHM6Ly9naXRodWIuY29tL0dvaGFuNjEvdGVzdGluZy1qYXZhc2NyaXB0XCJdLFxuICAgIFtiYXR0bGVzaGlwTGluaywgXCJodHRwczovL2dvaGFuNjEuZ2l0aHViLmlvL3Rlc3RpbmctamF2YXNjcmlwdC9cIl0sXG4gICAgW3Nob3BwaW5nR2l0LCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Hb2hhbjYxL3Nob3BwaW5nLWNhcnRcIl0sXG4gICAgW3Nob3BwaW5nTGluaywgXCJodHRwczovL21haW4tLW9kaW4tcmVhY3Qtc2hvcHBpbmdjYXJ0Lm5ldGxpZnkuYXBwL1wiXSxcbiAgICBbcGhvdG9HaXQsIFwiaHR0cHM6Ly9naXRodWIuY29tL0dvaGFuNjEvcGhvdG90YWdnaW5nYXBwXCJdLFxuICAgIFtwaG90b0xpbmssIFwiaHR0cHM6Ly9naXRodWIuY29tL0dvaGFuNjEvcGhvdG90YWdnaW5nYXBwXCJdLFxuICAgIFtjb250YWN0R2l0LCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Hb2hhbjYxXCJdLFxuICAgIFtjb250YWN0TGlua2VkaW4sIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dva2hhbi1zYW5jYWsvXCJdLFxuICBdO1xuXG4gIGdpdEljb24uc3JjID0gR2l0SWNvbjtcbiAgbmFoZWJvb2tHaXQuc3JjID0gR2l0SWNvbjtcbiAgbWVzc2FnZUdpdC5zcmMgPSBHaXRJY29uO1xuICBtZXNzYWdlR2l0LnNyYyA9IEdpdEljb247XG4gIGRhdGFHaXQuc3JjID0gR2l0SWNvbjtcbiAgYmF0dGxlc2hpcEdpdC5zcmMgPSBHaXRJY29uO1xuICBzaG9wcGluZ0dpdC5zcmMgPSBHaXRJY29uO1xuICBwaG90b0dpdC5zcmMgPSBHaXRJY29uO1xuICBjb250YWN0R2l0LnNyYyA9IEdpdEljb247XG5cbiAgbGlua2VkSW5JY29uLnNyYyA9IExpbmtlZGluSWNvbjtcbiAgY29udGFjdExpbmtlZGluLnNyYyA9IExpbmtlZGluSWNvbjtcblxuICBuYWhlYm9va0xpbmsuc3JjID0gTGlua0ljb247XG4gIG1lc3NhZ2VMaW5rLnNyYyA9IExpbmtJY29uO1xuICBkYXRhTGluay5zcmMgPSBMaW5rSWNvbjtcbiAgYmF0dGxlc2hpcExpbmsuc3JjID0gTGlua0ljb247XG4gIHNob3BwaW5nTGluay5zcmMgPSBMaW5rSWNvbjtcbiAgcGhvdG9MaW5rLnNyYyA9IExpbmtJY29uO1xuXG4gIGxpbmtzQW5kRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gYWRkTGlua0xpc3RlbmVyKGl0ZW1bMV0sIGl0ZW1bMF0pKTtcblxuICBjb25zdCBlbmNFbWFpbCA9IFwiWnk1ellXNWpZV3RBZEhWMFlXNXZkR0V1WTI5dFwiO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1haWxcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJtYWlsdG86XCIuY29uY2F0KGF0b2IoZW5jRW1haWwpKSk7XG5cbiAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbWFpbENvbnRhY3QgaW1nIFwiKTtcbiAgZW1haWxJY29uLnNyYyA9IEVtYWlsSWNvbjtcbn0pKCk7XG5cbihmdW5jdGlvbiBzZXRJbWFnZXMoKSB7XG4gIGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlUGljdHVyZSBpbWdcIik7XG4gIHByb2ZpbGVQaWN0dXJlLnNyYyA9IFByb2ZpbGVQaWN0dXJlO1xuXG4gIGNvbnN0IG5haGVib29rSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QxIGltZ1wiKTtcbiAgbmFoZWJvb2tJbWFnZS5zcmMgPSBOYWhlYm9va0ltYWdlO1xuXG4gIGNvbnN0IG1lc3NhZ2VJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdDIgaW1nXCIpO1xuICBtZXNzYWdlSW1hZ2Uuc3JjID0gTWVzc2FnZUltYWdlO1xuXG4gIGNvbnN0IGJzdEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0MyBpbWdcIik7XG4gIGJzdEltYWdlLnNyYyA9IEJzdEltYWdlO1xuXG4gIGNvbnN0IGJhdHRsZXNoaXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdDQgaW1nXCIpO1xuICBiYXR0bGVzaGlwSW1hZ2Uuc3JjID0gQmF0dGxlc2hpcEltYWdlO1xuXG4gIGNvbnN0IHNob3BwaW5nSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Q1IGltZ1wiKTtcbiAgc2hvcHBpbmdJbWFnZS5zcmMgPSBTaG9wcGluZ0ltYWdlO1xuXG4gIGNvbnN0IHBob3RvVGFnSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Q2IGltZ1wiKTtcbiAgcGhvdG9UYWdJbWFnZS5zcmMgPSBQaG90b1RhZ0ltYWdlO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==