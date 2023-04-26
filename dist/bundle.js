/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppTag\": () => (/* reexport safe */ _tag_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"mainCard\": () => (/* reexport safe */ _mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _tag_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/tag */ \"./src/components/tag/tag.ts\");\n/* harmony import */ var _mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainCard/mainCard */ \"./src/components/mainCard/mainCard.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/mainCard/mainCard.ts":
/*!*********************************************!*\
  !*** ./src/components/mainCard/mainCard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainCard),\n/* harmony export */   \"mainCardAttributes\": () => (/* binding */ mainCardAttributes)\n/* harmony export */ });\n/* harmony import */ var _tag_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/tag */ \"./src/components/tag/tag.ts\");\n\nvar mainCardAttributes;\n(function (mainCardAttributes) {\n    mainCardAttributes[\"tag\"] = \"tag\";\n})(mainCardAttributes || (mainCardAttributes = {}));\nclass MainCard extends HTMLElement {\n    static get observedAttributes() {\n        const atts = {\n            tag: null,\n        };\n        return Object.keys(atts);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const mainCardSection = this.ownerDocument.createElement('section');\n        const tag = this.ownerDocument.createElement(\"app-tag\");\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag, \"funciona\");\n        mainCardSection.appendChild(tag);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainCardSection);\n    }\n}\ncustomElements.define(\"app-maincard\", MainCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/mainCard/mainCard.ts?");

/***/ }),

/***/ "./src/components/tag/tag.ts":
/*!***********************************!*\
  !*** ./src/components/tag/tag.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppTag),\n/* harmony export */   \"tagAttributes\": () => (/* binding */ tagAttributes)\n/* harmony export */ });\nvar tagAttributes;\n(function (tagAttributes) {\n    tagAttributes[\"tag\"] = \"tag\";\n})(tagAttributes || (tagAttributes = {}));\nclass AppTag extends HTMLElement {\n    static get observedAttributes() {\n        const tagAtt = {\n            tag: null,\n        };\n        return Object.keys(tagAtt);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/tag/tag.css\">\r\n        <div class=\"tag-section\">\r\n            <div><p>${this.tag}</p></div>     \r\n        </div>\r\n        `;\n    }\n}\ncustomElements.define(\"app-tag\", AppTag);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/tag/tag.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/main */ \"./src/screens/main.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-main');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/main.ts":
/*!*****************************!*\
  !*** ./src/screens/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/mainCard/mainCard */ \"./src/components/mainCard/mainCard.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _service_data_dataTag_dataTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/dataTag/dataTag */ \"./src/service/data/dataTag/dataTag.ts\");\n\n\n\nclass Main extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        _service_data_dataTag_dataTag__WEBPACK_IMPORTED_MODULE_2__.dataTag.forEach((tagA) => {\n            var _a;\n            const maincard = this.ownerDocument.createElement(\"app-maincard\");\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_0__.mainCardAttributes.tag, tagA.tag);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(maincard);\n        });\n    }\n}\ncustomElements.define(\"app-main\", Main);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/main.ts?");

/***/ }),

/***/ "./src/service/data/dataTag/dataTag.ts":
/*!*********************************************!*\
  !*** ./src/service/data/dataTag/dataTag.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataTag\": () => (/* binding */ dataTag)\n/* harmony export */ });\nconst dataTag = [\n    {\n        tag: \"Soccer\",\n    },\n    {\n        tag: \"Movies\",\n    },\n    {\n        tag: \"Joggin\",\n    },\n    {\n        tag: \"Travelling\",\n    },\n    {\n        tag: \"Photos\",\n    },\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/service/data/dataTag/dataTag.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;