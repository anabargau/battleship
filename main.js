/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Sacramento-Regular.ttf */ \"./src/Sacramento-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./paper */ \"./src/paper\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./dot.png */ \"./src/dot.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./cross.png */ \"./src/cross.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: handwrite;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n:root {\\n  --color-blue: #013883;\\n  --color-medium-grey: #9ca3af;\\n}\\n\\nbody {\\n  height: 100vh;\\n  width: 100vw;\\n  box-sizing: border-box;\\n  margin: 0;\\n  border: none;\\n  font-family: handwrite, sans-serif;\\n  color: var(--color-blue);\\n}\\n\\n#content {\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: cover;\\n  filter: brightness(120%);\\n  gap: 20px;\\n}\\n\\n#win-message {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 50px;\\n  gap: 15px;\\n}\\n\\n.title {\\n  display: flex;\\n  height: 20%;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 60px;\\n  font-weight: 600;\\n  text-decoration: underline wavy;\\n  text-decoration-color: var(--color-blue);\\n  text-decoration-thickness: 3px;\\n  text-underline-offset: 3px;\\n}\\n\\n#game-message {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 50px;\\n  min-height: 73px;\\n}\\n\\n.boards-area {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.board-area {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.board-title {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 45px;\\n  text-decoration: underline;\\n  text-decoration-color: var(--color-blue);\\n  text-underline-offset: 3px;\\n  text-decoration-thickness: 1px;\\n}\\n\\n\\n\\n.board {\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n  border: 2px solid var(--color-blue);\\n}\\n\\n.computer-cell, \\n.player-cell {\\n  border: 1px solid var(--color-medium-grey);\\n  width: 30px;\\n  height: 30px;\\n  cursor: pointer;\\n  box-sizing: border-box;\\n}\\n\\n.player-cell.hover {\\n  background-color: var(--color-medium-grey);\\n}\\n\\n.player-cell.occupied {\\n  background-color: var(--color-medium-grey);\\n}\\n\\n.missed {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: cover;\\n}\\n\\n.player-cell.hit,\\n.computer-cell.hit {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: cover;\\n\\n}\\n\\n.hit.sunk {\\n  border: 3px solid var(--color-blue);\\n}\\n\\n.btn-container {\\n  display: flex;\\n  gap: 50px;\\n}\\n\\n.computer-cell:hover {\\n  background-color: var(--color-medium-grey);\\n}\\n\\n#yes-btn,\\n#no-btn {\\n  font-size: 25px;\\n  font-family: handwrite, sans-serif;\\n  color: var(--color-blue);\\n  background: inherit;\\n  border-radius: 3px;\\n  border: 1px solid  var(--color-blue);\\n  width: 5em;\\n  height: 2em;\\n}\\n\\n#yes-btn:hover,\\n#no-btn:hover {\\n  background-color: var(--color-blue);\\n  color: white;\\n  transition: all .3s;\\n}\\n\\n#yes-btn:active,\\n#no-btn:active {\\n  transform: (translateY(2px));\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst Game = () => {\n  const player = Player(false);\n  const computer = Player();\n\n  return { player, computer };\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst Gameboard = () => {\n  const occupiedCells = [];\n  const placedShips = [];\n  const missedAttacks = [];\n  const hitPositions = [];\n  const sunkShipsCoord = [];\n\n  const buildBoard = () => {\n    const board = [];\n    for (let i = 0; i < 10; i++) {\n      const gameboardRow = [];\n      for (let j = 0; j < 10; j++) {\n        gameboardRow[j] = '';\n      }\n      board[i] = gameboardRow;\n    }\n    return board;\n  };\n\n  const gameboard = buildBoard();\n\n  const checkIfAvailablePosition = (x, y, length, orientation) => {\n    if (orientation === 'vertical') {\n      if (x + length > 10) {\n        return false;\n      }\n    } else if (y + length > 10) {\n      return false;\n    }\n    if (orientation === 'vertical') {\n      for (let i = x; i < x + length; i++) {\n        if (arrayIncludesCoord(occupiedCells, [i, y]) || i > 10) {\n          return false;\n        }\n      }\n    } else {\n      for (let i = y; i < y + length; i++) {\n        if (arrayIncludesCoord(occupiedCells, [x, i]) || i > 10) {\n          return false;\n        }\n      }\n    }\n    return true;\n  };\n\n  const placeShip = (coordX, coordY, length, orientation) => {\n    if (checkIfAvailablePosition(coordX, coordY, length, orientation)) {\n      const newShip = {};\n      newShip.ship = Ship(length);\n      newShip.coord = [];\n      for (let i = 0; i < length; i++) {\n        if (orientation === 'vertical') {\n          occupiedCells.push([coordX + i, coordY]);\n          newShip.coord.push([coordX + i, coordY]);\n        } else {\n          occupiedCells.push([coordX, coordY + i]);\n          newShip.coord.push([coordX, coordY + i]);\n        }\n      }\n      placedShips.push(newShip);\n      return true;\n    }\n    return false;\n  };\n\n  const findIndexInArray = (array, coord) => {\n    const x = coord[0];\n    const y = coord[1];\n    for (let i = 0; i < array.length; i++) {\n      if (array[i][0] === x && array[i][1] === y) {\n        return i;\n      }\n    }\n    return -1;\n  };\n\n  const arrayIncludesCoord = (array, coord) => {\n    const x = coord[0];\n    const y = coord[1];\n    for (let i = 0; i < array.length; i++) {\n      if (array[i][0] === x && array[i][1] === y) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  const hitShip = (x, y) => {\n    for (let i = 0; i < placedShips.length; i++) {\n      if (arrayIncludesCoord(placedShips[i].coord, [x, y])) {\n        const index = findIndexInArray(placedShips[i].coord, [x, y]);\n        placedShips[i].ship.hit(index);\n        if (placedShips[i].ship.isSunk()) {\n          sunkShipsCoord.push(placedShips[i].coord);\n        }\n        return;\n      }\n    }\n  };\n\n  const allShipsSunk = () => {\n    let sunkShips = 0;\n    for (let i = 0; i < placedShips.length; i++) {\n      if (placedShips[i].ship.isSunk()) {\n        sunkShips++;\n      }\n    }\n    if (sunkShips === placedShips.length) {\n      return true;\n    }\n    return false;\n  };\n\n  const showOccupiedCells = () => occupiedCells;\n\n  const showMissedAttacks = () => missedAttacks;\n\n  const showHitPositions = () => hitPositions;\n\n  const showSunkShipsCoord = () => sunkShipsCoord;\n\n  const receiveAttack = (coordX, coordY) => {\n    if (arrayIncludesCoord(hitPositions, [coordX, coordY])) {\n      return false;\n    } if (arrayIncludesCoord(occupiedCells, [coordX, coordY])) {\n      hitShip(coordX, coordY);\n      hitPositions.push([coordX, coordY]);\n    } else {\n      missedAttacks.push([coordX, coordY]);\n      hitPositions.push([coordX, coordY]);\n    }\n    return true;\n  };\n\n  return {\n    gameboard, buildBoard, placeShip, showOccupiedCells, receiveAttack, placedShips, findIndexInArray, showMissedAttacks, allShipsSunk, arrayIncludesCoord, checkIfAvailablePosition, showHitPositions, showSunkShipsCoord,\n  };\n};\n\nmodule.exports = Gameboard;\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst manageDOM = __webpack_require__(/*! ./manageDOM */ \"./src/manageDOM.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst newGame = Game();\nfor (let i = 0; i < 5; i++) {\n  newGame.computer.placeShipRandomly(i + 1);\n}\nmanageDOM.displayUI(newGame.player, newGame.computer);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/manageDOM.js":
/*!**************************!*\
  !*** ./src/manageDOM.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst manageDOM = (() => {\n  const content = document.getElementById('content');\n\n  const displayBoard = (player) => {\n    const displayedBoard = document.createElement('div');\n    displayedBoard.classList.add('board');\n    const board = player.gameboard;\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const cell = document.createElement('div');\n        displayedBoard.appendChild(cell);\n        if (player.computer === true) {\n          cell.id = `${i.toString()}${j.toString()}computer`;\n          cell.classList.add('computer-cell');\n        } else {\n          cell.id = `${i.toString()}${j.toString()}player`;\n          cell.classList.add('player-cell');\n        }\n        if (board.arrayIncludesCoord(board.showMissedAttacks(), [i, j])) {\n          cell.classList.add('missed');\n        }\n        if (board.arrayIncludesCoord(board.showOccupiedCells(), [i, j])) {\n          if (board.arrayIncludesCoord(board.showHitPositions(), [i, j])) {\n            cell.classList.add('hit');\n          }\n          cell.classList.add('occupied');\n        }\n        for (let k = 0; k < board.showSunkShipsCoord().length; k++) {\n          if (board.arrayIncludesCoord(board.showSunkShipsCoord()[k], [i, j])) {\n            cell.classList.add('sunk');\n          }\n        }\n      }\n    }\n    return displayedBoard;\n  };\n\n  const createBoardArea = (player) => {\n    const boardArea = document.createElement('div');\n    const boardTitle = document.createElement('div');\n    const board = displayBoard(player);\n    boardArea.appendChild(boardTitle);\n    boardArea.appendChild(board);\n    if (player.computer) {\n      boardTitle.textContent = 'Enemy\\'s board';\n    } else {\n      boardTitle.textContent = 'Your board';\n    }\n    boardArea.classList.add('board-area');\n    boardTitle.classList.add('board-title');\n    return boardArea;\n  };\n\n  const setHitListeners = (player, computer) => {\n    const cells = document.getElementsByClassName('computer-cell');\n    for (let i = 0; i < cells.length; i++) {\n      cells[i].addEventListener('click', () => {\n        if (player.gameboard.placedShips.length === 5) {\n          computer.gameboard.receiveAttack(parseInt(cells[i].id[0]), parseInt(cells[i].id[1]), computer.randomAttack(player));\n          displayUI(player, computer);\n        }\n      });\n    }\n  };\n\n  const playAgain = () => {\n    const newGame = Game();\n    for (let i = 0; i < 5; i++) {\n      newGame.computer.placeShipRandomly(i + 1);\n    }\n    manageDOM.displayUI(newGame.player, newGame.computer);\n  };\n\n  const showFinishedGamewinMsg = (winner) => {\n    const winMsg = document.createElement('div');\n    winMsg.id = 'win-message';\n    const winnerMessage = document.getElementById('game-message');\n    winnerMessage.textContent = `${winner} won!`;\n    const playAgainMessage = document.createElement('div');\n    playAgainMessage.textContent = 'Do you want to play again?';\n    playAgainMessage.classList.add('play-again-message');\n    const yesBtn = document.createElement('button');\n    yesBtn.textContent = 'Yes';\n    yesBtn.id = 'yes-btn';\n    const noBtn = document.createElement('button');\n    noBtn.textContent = 'No';\n    noBtn.id = 'no-btn';\n    const btnContainer = document.createElement('div');\n    btnContainer.classList.add('btn-container');\n    btnContainer.appendChild(yesBtn);\n    btnContainer.appendChild(noBtn);\n    winMsg.appendChild(playAgainMessage);\n    winMsg.appendChild(btnContainer);\n    content.appendChild(winMsg);\n    yesBtn.addEventListener('click', playAgain);\n    noBtn.addEventListener('click', () => winMsg.style.display = 'none');\n  };\n\n  const checkIfAllShipsSunk = (player, computer) => {\n    let winner = '';\n    if (player.gameboard.allShipsSunk()) {\n      winner = computer;\n    }\n    if (computer.gameboard.allShipsSunk()) {\n      winner = player;\n    }\n    return winner.name;\n  };\n\n  const createTitleDiv = () => {\n    const title = document.createElement('div');\n    title.classList.add('title');\n    title.textContent = 'Battleship';\n    return title;\n  };\n\n  const createMessageDiv = () => {\n    const gameMessage = document.createElement('div');\n    gameMessage.id = 'game-message';\n    return gameMessage;\n  };\n\n  const createBoardsDiv = (player, computer) => {\n    const boardsDiv = document.createElement('div');\n    boardsDiv.classList.add('boards-area');\n    boardsDiv.appendChild(createBoardArea(player));\n    boardsDiv.appendChild(createBoardArea(computer));\n    return boardsDiv;\n  };\n\n  const checkIfFinishedGame = (player, computer) => {\n    if (player.gameboard.placedShips.length === 5) {\n      const winner = checkIfAllShipsSunk(player, computer);\n      if (winner) {\n        showFinishedGamewinMsg(winner);\n        return true;\n      }\n    }\n    return false;\n  };\n\n  const changeMessage = (placedShips, hitPositions) => {\n    const message = document.getElementById('game-message');\n    clearMessage();\n    if (placedShips < 5) {\n      message.textContent = showPlaceShipMessage();\n    } else if (placedShips === 5 && hitPositions === 0) {\n      message.textContent = showStartGameMessage();\n    }\n  };\n\n  const showHover = (cell, length, orientation) => {\n    const x = parseInt(cell.id[0]);\n    const y = parseInt(cell.id[1]);\n    let i = 0;\n    if (orientation === 'horizontal') {\n      while (y + i < 10 && i < length) {\n        const hover = document.getElementById(`${x}${y + i}player`);\n        if (!hover.classList.contains('occupied')) {\n          hover.classList.add('hover');\n        }\n        i++;\n      }\n    } else {\n      while (x + i < 10 && i < length) {\n        const hover = document.getElementById(`${x + i}${y}player`);\n        if (!hover.classList.contains('occupied')) {\n          hover.classList.add('hover');\n        }\n        i++;\n      }\n    }\n  };\n\n  const removeHover = () => {\n    const cells = document.getElementsByClassName('player-cell');\n    for (let i = 0; i < cells.length; i++) {\n      cells[i].classList.remove('hover');\n    }\n  };\n\n  const shiftKeyPressed = (e) => {\n    if (e.shiftKey) {\n      return 'vertical';\n    }\n    return 'horizontal';\n  };\n\n  const hoverShip = (player, computer, size = 5) => {\n    let orientation;\n    let length = size;\n    const board = player.gameboard;\n    const cells = document.getElementsByClassName('player-cell');\n    for (let i = 0; i < cells.length; i++) {\n      cells[i].addEventListener('mouseover', (e) => {\n        orientation = shiftKeyPressed(e);\n        showHover(cells[i], length, orientation);\n      });\n      cells[i].addEventListener('mouseout', removeHover);\n      cells[i].addEventListener('click', (e) => {\n        orientation = shiftKeyPressed(e);\n        if (board.placeShip(parseInt(cells[i].id[0]), parseInt(cells[i].id[1]), length, orientation)) {\n          length--;\n        }\n        displayUI(player, computer);\n      });\n    }\n  };\n\n  const clearMessage = () => {\n    const message = document.getElementById('game-message');\n    message.textContent = '';\n  };\n\n  const showStartGameMessage = () => 'Let\\'s start the game! You make the first attack!';\n\n  const showPlaceShipMessage = () => 'Place all your ships!';\n\n  const displayUI = (player, computer) => {\n    content.textContent = '';\n    const title = createTitleDiv();\n    content.appendChild(title);\n    const gameMessage = createMessageDiv();\n    content.appendChild(gameMessage);\n    const boardsDiv = createBoardsDiv(player, computer);\n    content.appendChild(boardsDiv);\n    changeMessage(player.gameboard.placedShips.length, computer.gameboard.showHitPositions().length);\n    if (checkIfFinishedGame(player, computer)) {\n      return;\n    }\n    setHitListeners(player, computer);\n    if (player.gameboard.placedShips.length < 5) {\n      hoverShip(player, computer, 5 - player.gameboard.placedShips.length);\n    }\n  };\n\n  return {\n    displayUI, hoverShip, setHitListeners, showStartGameMessage,\n  };\n})();\n\nmodule.exports = manageDOM;\n\n\n//# sourceURL=webpack://battleship/./src/manageDOM.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nconst Player = (cpu = true) => {\n  const computer = cpu;\n  const gameboard = Gameboard();\n  let name = '';\n  if (computer) {\n    name = 'Computer';\n  } else {\n    name = 'You';\n  }\n\n  const getRandomNum = () => Math.floor(Math.random() * 10);\n\n  const getRandomOrientation = () => {\n    const randomOr = Math.floor(Math.random() * 2);\n    if (randomOr === 0) {\n      return 'horizontal';\n    }\n    return 'vertical';\n  };\n\n  const placeShipRandomly = (length) => {\n    const x = getRandomNum();\n    const y = getRandomNum();\n    const orientation = getRandomOrientation();\n    if (gameboard.checkIfAvailablePosition(x, y, length, orientation)) {\n      gameboard.placeShip(x, y, length, orientation);\n    } else {\n      placeShipRandomly(length);\n    }\n  };\n\n  const randomAttack = (player) => {\n    const x = getRandomNum();\n    const y = getRandomNum();\n    const attack = player.gameboard.receiveAttack(x, y);\n    if (!attack) {\n      randomAttack(player);\n    }\n  };\n\n  return {\n    gameboard, placeShipRandomly, randomAttack, computer, name,\n  };\n};\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const Ship = (size) => {\n  const length = size;\n\n  const makeArea = () => {\n    const area = [];\n    for (let i = 0; i < size; i++) {\n      area.push(0);\n    }\n    return area;\n  };\n\n  const shipArea = makeArea();\n\n  const hit = (position) => {\n    if (shipArea[position] === 0) {\n      shipArea[position] = 1;\n    }\n  };\n\n  const isSunk = () => {\n    for (let i = 0; i < length; i++) {\n      if (shipArea[i] === 0) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const getShipLength = () => length;\n\n  return {\n    getShipLength, makeArea, hit, isSunk, shipArea,\n  };\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/Sacramento-Regular.ttf":
/*!************************************!*\
  !*** ./src/Sacramento-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5bd7d5208f7a9c18fe22.ttf\";\n\n//# sourceURL=webpack://battleship/./src/Sacramento-Regular.ttf?");

/***/ }),

/***/ "./src/cross.png":
/*!***********************!*\
  !*** ./src/cross.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1d67342d5f666f4ca2f0.png\";\n\n//# sourceURL=webpack://battleship/./src/cross.png?");

/***/ }),

/***/ "./src/dot.png":
/*!*********************!*\
  !*** ./src/dot.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ddf8efce43242f26fba6.png\";\n\n//# sourceURL=webpack://battleship/./src/dot.png?");

/***/ }),

/***/ "./src/paper":
/*!*******************!*\
  !*** ./src/paper ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fee80db4d820476ebd8c\";\n\n//# sourceURL=webpack://battleship/./src/paper?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;