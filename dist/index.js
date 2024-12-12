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
  align-items: center;
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
`, "",{"version":3,"sources":["webpack://./src/stylesheets/index.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,4CAAoD;AACtD;;AAEA;EACE,wBAAwB;EACxB,4CAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,sDAAsD;EACtD,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,sDAAsD;AACxD;;AAEA;;;EAGE,yCAAyC;AAC3C;;AAEA,kBAAkB;;AAElB;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,0DAA0D;EAC1D,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,aAAa;EACb,UAAU;EACV,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA,gBAAgB;;AAEhB;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;EAC9C,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA,kBAAkB;;AAElB;EACE,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA,gBAAgB;;AAEhB;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,aAAa;EACf;AACF","sourcesContent":[":root {\n  --background-color: rgb(0, 38, 77);\n}\n\n@font-face {\n  font-family: nunito-body;\n  src: url(../assets/Nunito/static/Nunito-Regular.ttf);\n}\n\n@font-face {\n  font-family: abel-header;\n  src: url(../assets/Abel/Abel-Regular.ttf);\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  font-family: nunito-body, Arial, Helvetica, sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\nh1,\nh2 {\n  font-family: abel-header, Arial, Helvetica, sans-serif;\n}\n\nheader,\nmain,\nfooter {\n  padding: 20px max(2rem, 50vw - 1156px /2);\n}\n\n/* Header styles */\n\nheader {\n  display: flex;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n\n.angledBackground {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 360vw;\n  height: 178vh;\n  background-color: var(--background-color);\n  transform: translateX(-20%) translateY(-97%) rotate(-5deg);\n  z-index: 0;\n}\n\n.headerContent {\n  display: flex;\n  padding: 20px;\n  z-index: 1;\n  height: 350px;\n}\n\n.profilePicture img {\n  width: 280px;\n  object-fit: contain;\n}\n\n.headerAbout {\n  padding: 50px;\n  height: 140px;\n  background-color: white;\n  margin-top: 15px;\n  box-shadow: 0 2px 2px 2px rgb(128, 128, 128, 0.2);\n}\n\n.headerIcons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 20px;\n}\n\n.socialIcon {\n  width: 20px;\n}\n\n.socialIcon:hover {\n  cursor: pointer;\n}\n\n/* Main styles */\n\nmain h2 {\n  margin-left: 73px;\n}\n\n.projectsContainer {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  justify-items: center;\n}\n\n.projectsContainer > [class^=\"project\"] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  width: 250px;\n}\n\n.projectsContainer > [class^=\"project\"]:hover {\n  box-shadow: 1px 1px 10px inset rgba(11, 4, 87, 0.1);\n}\n\n.projectScreenshot {\n  width: 250px;\n  height: 250px;\n  object-fit: fill;\n}\n\n.projectDescription {\n  box-shadow: 1px 1px 2px 0 rgb(82, 72, 72, 0.2);\n  height: 200px;\n  padding: 10px;\n}\n\n.subContainer {\n  display: flex;\n  justify-content: space-between;\n}\n\n.projectIcons {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.projectIcons img:hover {\n  cursor: pointer;\n}\n\n.projectIcons img {\n  width: 20px;\n}\n\n/* Footer styles */\n\nfooter {\n  background-color: rgb(0, 38, 77, 0.9);\n  color: aliceblue;\n}\n\n.footerContainer {\n  padding: 10px;\n}\n\n.emailContact {\n  margin-bottom: 10px;\n}\n\n.emailContact,\n.contactIcons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.emailContact a {\n  text-decoration: none;\n  color: aliceblue;\n}\n\n.emailContact img {\n  width: 20px;\n}\n\n/* Mobile view */\n\n@media (max-width: 935px) {\n  .headerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n  }\n\n  .headerAbout {\n    height: auto;\n  }\n\n  main h2 {\n    text-align: center;\n    padding: 0;\n    margin: 0;\n  }\n\n  footer {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n  }\n\n  .footerContainer {\n    padding: 40px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_fake_store_example_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/fake-store-example.png */ "./src/assets/fake-store-example.png");
/* harmony import */ var _assets_Binary_search_tree_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/Binary_search_tree.svg */ "./src/assets/Binary_search_tree.svg");
/* harmony import */ var _assets_file_uploader_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/file-uploader.png */ "./src/assets/file-uploader.png");
/* harmony import */ var _assets_email_outline_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/email-outline.svg */ "./src/assets/email-outline.svg");













(function addListeners() {
  const gitIcon = document.querySelector(".gitIcon");
  const linkedInIcon = document.querySelector(".linkedInIcon");

  const nahebookGit = document.querySelector(".nahebook-git");
  const nahebookLink = document.querySelector(".nahebook-link");

  const messageGit = document.querySelector(".message-git");

  const dataGit = document.querySelector(".data-git");

  const battleshipGit = document.querySelector(".battleship-git");
  const battleshipLink = document.querySelector(".battleship-link");

  const shoppingGit = document.querySelector(".shopping-git");
  const shoppingLink = document.querySelector(".shopping-link");

  const fileUploadGit = document.querySelector(".photo-git");

  const contactGit = document.querySelector(".contactIcons .gitIcon");
  const contactLinkedin = document.querySelector(".contactIcons .linkedInIcon");

  gitIcon.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  nahebookGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  messageGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  dataGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  battleshipGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  shoppingGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  fileUploadGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;
  contactGit.src = _assets_github_original_svg__WEBPACK_IMPORTED_MODULE_1__;

  linkedInIcon.src = _assets_linkedin_plain_svg__WEBPACK_IMPORTED_MODULE_2__;
  contactLinkedin.src = _assets_linkedin_plain_svg__WEBPACK_IMPORTED_MODULE_2__;

  nahebookLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  battleshipLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  shoppingLink.src = _assets_share_outline_svg__WEBPACK_IMPORTED_MODULE_3__;

  const encEmail = "Zy5zYW5jYWtAcHJvdG9uLm1l";
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
  shoppingImage.src = _assets_fake_store_example_png__WEBPACK_IMPORTED_MODULE_8__;

  const fileUploadImage = document.querySelector(".project6 img");
  fileUploadImage.src = _assets_file_uploader_png__WEBPACK_IMPORTED_MODULE_10__;
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

/***/ "./src/assets/Profile-picture-Gokhan.jpg":
/*!***********************************************!*\
  !*** ./src/assets/Profile-picture-Gokhan.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f5810b0c4ab88aad6a3.jpg";

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

/***/ "./src/assets/fake-store-example.png":
/*!*******************************************!*\
  !*** ./src/assets/fake-store-example.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6621a48e925509c62e2.png";

/***/ }),

/***/ "./src/assets/file-uploader.png":
/*!**************************************!*\
  !*** ./src/assets/file-uploader.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe427edcddf738e1fa42.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdLQUE2RDtBQUN6Ryw0Q0FBNEMsMElBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFB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Ozs7QUNiaUM7QUFDa0I7QUFDSTtBQUNMO0FBQ2U7QUFDTTtBQUNUO0FBQ0E7QUFDRjtBQUNMO0FBQ0k7QUFDUjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLHdEQUFPO0FBQ3ZCLG9CQUFvQix3REFBTztBQUMzQixtQkFBbUIsd0RBQU87QUFDMUIsZ0JBQWdCLHdEQUFPO0FBQ3ZCLHNCQUFzQix3REFBTztBQUM3QixvQkFBb0Isd0RBQU87QUFDM0Isc0JBQXNCLHdEQUFPO0FBQzdCLG1CQUFtQix3REFBTzs7QUFFMUIscUJBQXFCLHVEQUFZO0FBQ2pDLHdCQUF3Qix1REFBWTs7QUFFcEMscUJBQXFCLHNEQUFRO0FBQzdCLHVCQUF1QixzREFBUTtBQUMvQixxQkFBcUIsc0RBQVE7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1REFBUztBQUMzQixDQUFDOztBQUVEO0FBQ0E7QUFDQSx1QkFBdUIsK0RBQWM7O0FBRXJDO0FBQ0Esc0JBQXNCLG9FQUFhOztBQUVuQztBQUNBLHFCQUFxQiw4REFBWTs7QUFFakM7QUFDQSxpQkFBaUIsMkRBQVE7O0FBRXpCO0FBQ0Esd0JBQXdCLDJEQUFlOztBQUV2QztBQUNBLHNCQUFzQiwyREFBYTs7QUFFbkM7QUFDQSx3QkFBd0IsdURBQWlCO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5jc3M/MjdmNiIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9OdW5pdG8vc3RhdGljL051bml0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9BYmVsL0FiZWwtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDM4LCA3Nyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbnVuaXRvLWJvZHk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGFiZWwtaGVhZGVyO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LWZhbWlseTogbnVuaXRvLWJvZHksIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEsXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBhYmVsLWhlYWRlciwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyLFxubWFpbixcbmZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggbWF4KDJyZW0sIDUwdncgLSAxMTU2cHggLzIpO1xufVxuXG4vKiBIZWFkZXIgc3R5bGVzICovXG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbmdsZWRCYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzNjB2dztcbiAgaGVpZ2h0OiAxNzh2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKSB0cmFuc2xhdGVZKC05NyUpIHJvdGF0ZSgtNWRlZyk7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5oZWFkZXJDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLnByb2ZpbGVQaWN0dXJlIGltZyB7XG4gIHdpZHRoOiAyODBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmhlYWRlckFib3V0IHtcbiAgcGFkZGluZzogNTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggcmdiKDEyOCwgMTI4LCAxMjgsIDAuMik7XG59XG5cbi5oZWFkZXJJY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMjBweDtcbn1cblxuLnNvY2lhbEljb24ge1xuICB3aWR0aDogMjBweDtcbn1cblxuLnNvY2lhbEljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE1haW4gc3R5bGVzICovXG5cbm1haW4gaDIge1xuICBtYXJnaW4tbGVmdDogNzNweDtcbn1cblxuLnByb2plY3RzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3RzQ29udGFpbmVyID4gW2NsYXNzXj1cInByb2plY3RcIl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5wcm9qZWN0c0NvbnRhaW5lciA+IFtjbGFzc149XCJwcm9qZWN0XCJdOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGluc2V0IHJnYmEoMTEsIDQsIDg3LCAwLjEpO1xufVxuXG4ucHJvamVjdFNjcmVlbnNob3Qge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG59XG5cbi5wcm9qZWN0RGVzY3JpcHRpb24ge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYig4MiwgNzIsIDcyLCAwLjIpO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3ViQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdEljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdEljb25zIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RJY29ucyBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cblxuLyogRm9vdGVyIHN0eWxlcyAqL1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMzgsIDc3LCAwLjkpO1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4uZm9vdGVyQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmVtYWlsQ29udGFjdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5lbWFpbENvbnRhY3QsXG4uY29udGFjdEljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZW1haWxDb250YWN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5lbWFpbENvbnRhY3QgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi8qIE1vYmlsZSB2aWV3ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzVweCkge1xuICAuaGVhZGVyQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmhlYWRlckFib3V0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBtYWluIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmZvb3RlckNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNEQUFzRDtFQUN0RCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTs7O0VBR0UseUNBQXlDO0FBQzNDOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztFQUN6QywwREFBMEQ7RUFDMUQsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDM4LCA3Nyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG51bml0by1ib2R5O1xcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL051bml0by9zdGF0aWMvTnVuaXRvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYWJlbC1oZWFkZXI7XFxuICBzcmM6IHVybCguLi9hc3NldHMvQWJlbC9BYmVsLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogbnVuaXRvLWJvZHksIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBmb250LWZhbWlseTogYWJlbC1oZWFkZXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlcixcXG5tYWluLFxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAyMHB4IG1heCgycmVtLCA1MHZ3IC0gMTE1NnB4IC8yKTtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYW5nbGVkQmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDM2MHZ3O1xcbiAgaGVpZ2h0OiAxNzh2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpIHRyYW5zbGF0ZVkoLTk3JSkgcm90YXRlKC01ZGVnKTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5oZWFkZXJDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcblxcbi5wcm9maWxlUGljdHVyZSBpbWcge1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmhlYWRlckFib3V0IHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDJweCByZ2IoMTI4LCAxMjgsIDEyOCwgMC4yKTtcXG59XFxuXFxuLmhlYWRlckljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc29jaWFsSWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnNvY2lhbEljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNYWluIHN0eWxlcyAqL1xcblxcbm1haW4gaDIge1xcbiAgbWFyZ2luLWxlZnQ6IDczcHg7XFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciA+IFtjbGFzc149XFxcInByb2plY3RcXFwiXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ucHJvamVjdHNDb250YWluZXIgPiBbY2xhc3NePVxcXCJwcm9qZWN0XFxcIl06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGluc2V0IHJnYmEoMTEsIDQsIDg3LCAwLjEpO1xcbn1cXG5cXG4ucHJvamVjdFNjcmVlbnNob3Qge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG9iamVjdC1maXQ6IGZpbGw7XFxufVxcblxcbi5wcm9qZWN0RGVzY3JpcHRpb24ge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCByZ2IoODIsIDcyLCA3MiwgMC4yKTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc3ViQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0SWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdEljb25zIGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0SWNvbnMgaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgc3R5bGVzICovXFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAzOCwgNzcsIDAuOSk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5lbWFpbENvbnRhY3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmVtYWlsQ29udGFjdCxcXG4uY29udGFjdEljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZW1haWxDb250YWN0IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLmVtYWlsQ29udGFjdCBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi8qIE1vYmlsZSB2aWV3ICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkzNXB4KSB7XFxuICAuaGVhZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5oZWFkZXJBYm91dCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIG1haW4gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9pbmRleC5jc3NcIjtcbmltcG9ydCBHaXRJY29uIGZyb20gXCIuL2Fzc2V0cy9naXRodWItb3JpZ2luYWwuc3ZnXCI7XG5pbXBvcnQgTGlua2VkaW5JY29uIGZyb20gXCIuL2Fzc2V0cy9saW5rZWRpbi1wbGFpbi5zdmdcIjtcbmltcG9ydCBMaW5rSWNvbiBmcm9tIFwiLi9hc3NldHMvc2hhcmUtb3V0bGluZS5zdmdcIjtcbmltcG9ydCBQcm9maWxlUGljdHVyZSBmcm9tIFwiLi9hc3NldHMvUHJvZmlsZS1waWN0dXJlLUdva2hhbi5qcGdcIjtcbmltcG9ydCBOYWhlYm9va0ltYWdlIGZyb20gXCIuL2Fzc2V0cy9OYWhlYm9vay1kZXNrdG9wLWZlZWQgKFBob25lKS5wbmdcIjtcbmltcG9ydCBNZXNzYWdlSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL01lc3NhZ2luZy1hcHAtZGlzcGxheS5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL2JhdHRsZXNoaXAtZGlzcGxheS5wbmdcIjtcbmltcG9ydCBTaG9wcGluZ0ltYWdlIGZyb20gXCIuL2Fzc2V0cy9mYWtlLXN0b3JlLWV4YW1wbGUucG5nXCI7XG5pbXBvcnQgQnN0SW1hZ2UgZnJvbSBcIi4vYXNzZXRzL0JpbmFyeV9zZWFyY2hfdHJlZS5zdmdcIjtcbmltcG9ydCBGaWxlVXBsb2FkZXJJbWFnZSBmcm9tIFwiLi9hc3NldHMvZmlsZS11cGxvYWRlci5wbmdcIjtcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIi4vYXNzZXRzL2VtYWlsLW91dGxpbmUuc3ZnXCI7XG5cbihmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGdpdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdpdEljb25cIik7XG4gIGNvbnN0IGxpbmtlZEluSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua2VkSW5JY29uXCIpO1xuXG4gIGNvbnN0IG5haGVib29rR2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYWhlYm9vay1naXRcIik7XG4gIGNvbnN0IG5haGVib29rTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFoZWJvb2stbGlua1wiKTtcblxuICBjb25zdCBtZXNzYWdlR2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWdpdFwiKTtcblxuICBjb25zdCBkYXRhR2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWdpdFwiKTtcblxuICBjb25zdCBiYXR0bGVzaGlwR2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWdpdFwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXAtbGlua1wiKTtcblxuICBjb25zdCBzaG9wcGluZ0dpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvcHBpbmctZ2l0XCIpO1xuICBjb25zdCBzaG9wcGluZ0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3BwaW5nLWxpbmtcIik7XG5cbiAgY29uc3QgZmlsZVVwbG9hZEdpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ2l0XCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RHaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RJY29ucyAuZ2l0SWNvblwiKTtcbiAgY29uc3QgY29udGFjdExpbmtlZGluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0SWNvbnMgLmxpbmtlZEluSWNvblwiKTtcblxuICBnaXRJY29uLnNyYyA9IEdpdEljb247XG4gIG5haGVib29rR2l0LnNyYyA9IEdpdEljb247XG4gIG1lc3NhZ2VHaXQuc3JjID0gR2l0SWNvbjtcbiAgZGF0YUdpdC5zcmMgPSBHaXRJY29uO1xuICBiYXR0bGVzaGlwR2l0LnNyYyA9IEdpdEljb247XG4gIHNob3BwaW5nR2l0LnNyYyA9IEdpdEljb247XG4gIGZpbGVVcGxvYWRHaXQuc3JjID0gR2l0SWNvbjtcbiAgY29udGFjdEdpdC5zcmMgPSBHaXRJY29uO1xuXG4gIGxpbmtlZEluSWNvbi5zcmMgPSBMaW5rZWRpbkljb247XG4gIGNvbnRhY3RMaW5rZWRpbi5zcmMgPSBMaW5rZWRpbkljb247XG5cbiAgbmFoZWJvb2tMaW5rLnNyYyA9IExpbmtJY29uO1xuICBiYXR0bGVzaGlwTGluay5zcmMgPSBMaW5rSWNvbjtcbiAgc2hvcHBpbmdMaW5rLnNyYyA9IExpbmtJY29uO1xuXG4gIGNvbnN0IGVuY0VtYWlsID0gXCJaeTV6WVc1allXdEFjSEp2ZEc5dUxtMWxcIjtcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwibWFpbHRvOlwiLmNvbmNhdChhdG9iKGVuY0VtYWlsKSkpO1xuXG4gIGNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1haWxDb250YWN0IGltZyBcIik7XG4gIGVtYWlsSWNvbi5zcmMgPSBFbWFpbEljb247XG59KSgpO1xuXG4oZnVuY3Rpb24gc2V0SW1hZ2VzKCkge1xuICBjb25zdCBwcm9maWxlUGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZVBpY3R1cmUgaW1nXCIpO1xuICBwcm9maWxlUGljdHVyZS5zcmMgPSBQcm9maWxlUGljdHVyZTtcblxuICBjb25zdCBuYWhlYm9va0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0MSBpbWdcIik7XG4gIG5haGVib29rSW1hZ2Uuc3JjID0gTmFoZWJvb2tJbWFnZTtcblxuICBjb25zdCBtZXNzYWdlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QyIGltZ1wiKTtcbiAgbWVzc2FnZUltYWdlLnNyYyA9IE1lc3NhZ2VJbWFnZTtcblxuICBjb25zdCBic3RJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdDMgaW1nXCIpO1xuICBic3RJbWFnZS5zcmMgPSBCc3RJbWFnZTtcblxuICBjb25zdCBiYXR0bGVzaGlwSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Q0IGltZ1wiKTtcbiAgYmF0dGxlc2hpcEltYWdlLnNyYyA9IEJhdHRsZXNoaXBJbWFnZTtcblxuICBjb25zdCBzaG9wcGluZ0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0NSBpbWdcIik7XG4gIHNob3BwaW5nSW1hZ2Uuc3JjID0gU2hvcHBpbmdJbWFnZTtcblxuICBjb25zdCBmaWxlVXBsb2FkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Q2IGltZ1wiKTtcbiAgZmlsZVVwbG9hZEltYWdlLnNyYyA9IEZpbGVVcGxvYWRlckltYWdlO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==