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

/***/ "./src/components/cardMusic/cardMusic.ts":
/*!***********************************************!*\
  !*** ./src/components/cardMusic/cardMusic.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppMusicCard),\n/* harmony export */   \"musicCardAtt\": () => (/* binding */ musicCardAtt)\n/* harmony export */ });\nvar musicCardAtt;\n(function (musicCardAtt) {\n    musicCardAtt[\"thumbnail1\"] = \"thumbnail1\";\n    musicCardAtt[\"mtitle1\"] = \"mtitle1\";\n    musicCardAtt[\"thumbnail2\"] = \"thumbnail2\";\n    musicCardAtt[\"mtitle2\"] = \"mtitle2\";\n    musicCardAtt[\"thumbnail3\"] = \"thumbnail3\";\n    musicCardAtt[\"mtitle3\"] = \"mtitle3\";\n})(musicCardAtt || (musicCardAtt = {}));\nclass AppMusicCard extends HTMLElement {\n    static get observedAttributes() {\n        const musicAtt = {\n            thumbnail1: null,\n            mtitle1: null,\n            thumbnail2: null,\n            mtitle2: null,\n            thumbnail3: null,\n            mtitle3: null,\n        };\n        return Object.keys(musicAtt);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/cardMusic/cardMusic.css\">\r\n        <div>\r\n            <div class=\"music-card\" style='background-image: url(\"${this.thumbnail1}\");'></div>\r\n            <p>${this.mtitle1}</p>\r\n        </div>\r\n        <div>\r\n            <div class=\"music-card\" style='background-image: url(\"${this.thumbnail2}\");'></div>\r\n            <p>${this.mtitle2}</p>\r\n        </div>\r\n        <div>\r\n            <div class=\"music-card\" style='background-image: url(\"${this.thumbnail3}\");'></div>\r\n            <p>${this.mtitle3}</p>\r\n        </div>\r\n        `;\n    }\n}\ncustomElements.define(\"music-card\", AppMusicCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/cardMusic/cardMusic.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppMusicCard\": () => (/* reexport safe */ _cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"AppTag\": () => (/* reexport safe */ _tag_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"mainCard\": () => (/* reexport safe */ _mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _tag_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/tag */ \"./src/components/tag/tag.ts\");\n/* harmony import */ var _cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardMusic/cardMusic */ \"./src/components/cardMusic/cardMusic.ts\");\n/* harmony import */ var _mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainCard/mainCard */ \"./src/components/mainCard/mainCard.ts\");\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/mainCard/mainCard.ts":
/*!*********************************************!*\
  !*** ./src/components/mainCard/mainCard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainCard),\n/* harmony export */   \"mainCardAttributes\": () => (/* binding */ mainCardAttributes)\n/* harmony export */ });\n/* harmony import */ var _tag_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/tag */ \"./src/components/tag/tag.ts\");\n/* harmony import */ var _cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardMusic/cardMusic */ \"./src/components/cardMusic/cardMusic.ts\");\n\n\nvar mainCardAttributes;\n(function (mainCardAttributes) {\n    mainCardAttributes[\"tag1\"] = \"tag1\";\n    mainCardAttributes[\"tag2\"] = \"tag2\";\n    mainCardAttributes[\"tag3\"] = \"tag3\";\n    mainCardAttributes[\"tag4\"] = \"tag4\";\n    mainCardAttributes[\"tag5\"] = \"tag5\";\n    mainCardAttributes[\"thumbnail1\"] = \"thumbnail1\";\n    mainCardAttributes[\"mtitle1\"] = \"mtitle1\";\n    mainCardAttributes[\"thumbnail2\"] = \"thumbnail2\";\n    mainCardAttributes[\"mtitle2\"] = \"mtitle2\";\n    mainCardAttributes[\"thumbnail3\"] = \"thumbnail3\";\n    mainCardAttributes[\"mtitle3\"] = \"mtitle3\";\n})(mainCardAttributes || (mainCardAttributes = {}));\nclass MainCard extends HTMLElement {\n    static get observedAttributes() {\n        const atts = {\n            tag1: null,\n            tag2: null,\n            tag3: null,\n            tag4: null,\n            tag5: null,\n            thumbnail1: null,\n            mtitle1: null,\n            thumbnail2: null,\n            mtitle2: null,\n            thumbnail3: null,\n            mtitle3: null,\n        };\n        return Object.keys(atts);\n    }\n    constructor() {\n        super();\n        this.tag1 = mainCardAttributes.tag1;\n        this.tag2 = mainCardAttributes.tag2;\n        this.tag3 = mainCardAttributes.tag3;\n        this.tag4 = mainCardAttributes.tag4;\n        this.tag5 = mainCardAttributes.tag5;\n        this.thumbnail1 = mainCardAttributes.thumbnail1;\n        this.mtitle1 = mainCardAttributes.mtitle1;\n        this.thumbnail2 = mainCardAttributes.thumbnail2;\n        this.mtitle2 = mainCardAttributes.mtitle2;\n        this.thumbnail3 = mainCardAttributes.thumbnail3;\n        this.mtitle3 = mainCardAttributes.mtitle3;\n        this.attachShadow({ mode: \"open\" });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const mainCardSection = this.ownerDocument.createElement('section');\n        const tagSection = this.ownerDocument.createElement(\"section\");\n        const tag = this.ownerDocument.createElement(\"app-tag\");\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag1, this.tag1);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag2, this.tag2);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag3, this.tag3);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag4, this.tag4);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag5, this.tag5);\n        tagSection.appendChild(tag);\n        const musicCardSec = this.ownerDocument.createElement(\"section\");\n        const musicCard = this.ownerDocument.createElement(\"music-card\");\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.thumbnail1, this.thumbnail1);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.mtitle1, this.mtitle1);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.thumbnail2, this.thumbnail2);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.mtitle2, this.mtitle2);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.thumbnail3, this.thumbnail3);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.mtitle3, this.mtitle3);\n        musicCardSec.appendChild(musicCard);\n        mainCardSection.appendChild(tagSection);\n        mainCardSection.appendChild(musicCardSec);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainCardSection);\n    }\n}\ncustomElements.define(\"app-maincard\", MainCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/mainCard/mainCard.ts?");

/***/ }),

/***/ "./src/components/tag/tag.ts":
/*!***********************************!*\
  !*** ./src/components/tag/tag.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppTag),\n/* harmony export */   \"tagAttributes\": () => (/* binding */ tagAttributes)\n/* harmony export */ });\nvar tagAttributes;\n(function (tagAttributes) {\n    tagAttributes[\"tag1\"] = \"tag1\";\n    tagAttributes[\"tag2\"] = \"tag2\";\n    tagAttributes[\"tag3\"] = \"tag3\";\n    tagAttributes[\"tag4\"] = \"tag4\";\n    tagAttributes[\"tag5\"] = \"tag5\";\n})(tagAttributes || (tagAttributes = {}));\nclass AppTag extends HTMLElement {\n    static get observedAttributes() {\n        const tagAtt = {\n            tag1: null,\n            tag2: null,\n            tag3: null,\n            tag4: null,\n            tag5: null,\n        };\n        return Object.keys(tagAtt);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/tag/tag.css\">\r\n        <div class=\"tag-section\">\r\n            <div><p>${this.tag1}</p></div>          \r\n        </div>\r\n        <div class=\"tag-section\">     \r\n            <div><p>${this.tag2}</p></div>              \r\n        </div>\r\n        <div class=\"tag-section\">     \r\n            <div><p>${this.tag3}</p></div>          \r\n        </div>\r\n        <div class=\"tag-section\">     \r\n            <div><p>${this.tag4}</p></div>          \r\n        </div>\r\n        <div class=\"tag-section\">    \r\n            <div><p>${this.tag5}</p></div>     \r\n        </div>\r\n        `;\n    }\n}\ncustomElements.define(\"app-tag\", AppTag);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/tag/tag.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/mainCard/mainCard */ \"./src/components/mainCard/mainCard.ts\");\n/* harmony import */ var _service_data_dataMainCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/dataMainCard */ \"./src/service/data/dataMainCard.ts\");\n\n\n\nclass Main extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        _service_data_dataMainCard__WEBPACK_IMPORTED_MODULE_2__.dataMainCard.forEach((tagA) => {\n            var _a;\n            const maincard = this.ownerDocument.createElement(\"app-maincard\");\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.tag1, tagA.inter.tag1);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.tag2, tagA.inter.tag2);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.tag3, tagA.inter.tag3);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.tag4, tagA.inter.tag4);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.tag5, tagA.inter.tag5);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.thumbnail1, tagA.music.thumbnail1);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.mtitle1, tagA.music.artist1);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.thumbnail2, tagA.music.thumbnail2);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.mtitle2, tagA.music.artist2);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.thumbnail3, tagA.music.thumbnail3);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_1__.mainCardAttributes.mtitle3, tagA.music.artist3);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(maincard);\n        });\n        // musicData.forEach((musicC) => {\n        //     const maincard = this.ownerDocument.createElement(\"app-maincard\")\n        //     maincard.setAttribute(mainCardAttributes.thumbnail, musicC.thumbnail)\n        //     maincard.setAttribute(mainCardAttributes.mtitle, musicC.mtitle)\n        //     this.shadowRoot?.appendChild(maincard)\n        //     })\n    }\n}\ncustomElements.define(\"app-main\", Main);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/main.ts?");

/***/ }),

/***/ "./src/service/data/dataMainCard.ts":
/*!******************************************!*\
  !*** ./src/service/data/dataMainCard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataMainCard\": () => (/* binding */ dataMainCard)\n/* harmony export */ });\nconst dataMainCard = [\n    {\n        inter: {\n            tag1: \"Soccer\",\n            tag2: \"Movies\",\n            tag3: \"Joggin\",\n            tag4: \"Travelling\",\n            tag5: \"Photos\",\n        },\n        music: {\n            thumbnail1: \"https://media.discordapp.net/attachments/1010976865424506900/1088893190922322001/image_46.png?width=240&height=237\",\n            artist1: \"Michael Jackson\",\n            thumbnail2: \"https://media.discordapp.net/attachments/1010976865424506900/1088893191320772618/image_48.png?width=240&height=240\",\n            artist2: \"Beyoncé\",\n            thumbnail3: \"https://media.discordapp.net/attachments/1010976865424506900/1088893191702458388/image_50.png?width=240&height=240\",\n            artist3: \"J Balvin\",\n        }\n    }\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/service/data/dataMainCard.ts?");

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