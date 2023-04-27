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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppMusicCard\": () => (/* reexport safe */ _cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"AppTag\": () => (/* reexport safe */ _tag_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Header\": () => (/* reexport safe */ _header_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"Logo\": () => (/* reexport safe */ _header_Logo_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"MainIcon\": () => (/* reexport safe */ _sideSection_menu_mainIcon_mainIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Menu\": () => (/* reexport safe */ _sideSection_menu_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"SideSection\": () => (/* reexport safe */ _sideSection_sideSection__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"mainCard\": () => (/* reexport safe */ _mainCard_mainCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _tag_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/tag */ \"./src/components/tag/tag.ts\");\n/* harmony import */ var _cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardMusic/cardMusic */ \"./src/components/cardMusic/cardMusic.ts\");\n/* harmony import */ var _header_Logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/Logo/logo */ \"./src/components/header/Logo/logo.ts\");\n/* harmony import */ var _sideSection_menu_mainIcon_mainIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideSection/menu/mainIcon/mainIcon */ \"./src/components/sideSection/menu/mainIcon/mainIcon.ts\");\n/* harmony import */ var _sideSection_menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideSection/menu/menu */ \"./src/components/sideSection/menu/menu.ts\");\n/* harmony import */ var _mainCard_mainCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainCard/mainCard */ \"./src/components/mainCard/mainCard.ts\");\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header */ \"./src/components/header/header.ts\");\n/* harmony import */ var _sideSection_sideSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sideSection/sideSection */ \"./src/components/sideSection/sideSection.ts\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/header/Logo/logo.ts":
/*!********************************************!*\
  !*** ./src/components/header/Logo/logo.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LogoAtt\": () => (/* binding */ LogoAtt),\n/* harmony export */   \"default\": () => (/* binding */ Logo)\n/* harmony export */ });\nvar LogoAtt;\n(function (LogoAtt) {\n    LogoAtt[\"logo\"] = \"logo\";\n})(LogoAtt || (LogoAtt = {}));\nclass Logo extends HTMLElement {\n    static get observedAttributes() {\n        const logoatt = {\n            logo: null\n        };\n        return Object.keys(logoatt);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        ;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <svg>\r\n            <path d=\"${this.logo}\"></path>\r\n        </svg>\r\n        `;\n    }\n}\ncustomElements.define(\"app-logo\", Logo);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/header/Logo/logo.ts?");

/***/ }),

/***/ "./src/components/header/accountImage/accountImage.ts":
/*!************************************************************!*\
  !*** ./src/components/header/accountImage/accountImage.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountImgAtt\": () => (/* binding */ AccountImgAtt),\n/* harmony export */   \"default\": () => (/* binding */ AccountImg)\n/* harmony export */ });\nvar AccountImgAtt;\n(function (AccountImgAtt) {\n    AccountImgAtt[\"img\"] = \"img\";\n})(AccountImgAtt || (AccountImgAtt = {}));\nclass AccountImg extends HTMLElement {\n    static get observedAttributes() {\n        const logoatt = {\n            img: null\n        };\n        return Object.keys(logoatt);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        ;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <img src=\"${this.img}\">\r\n        `;\n    }\n}\ncustomElements.define(\"acc-img\", AccountImg);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/header/accountImage/accountImage.ts?");

/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderAtt\": () => (/* binding */ HeaderAtt),\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _Logo_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo/logo */ \"./src/components/header/Logo/logo.ts\");\n/* harmony import */ var _accountImage_accountImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountImage/accountImage */ \"./src/components/header/accountImage/accountImage.ts\");\n\n\nvar HeaderAtt;\n(function (HeaderAtt) {\n    HeaderAtt[\"logo\"] = \"logo\";\n    HeaderAtt[\"img\"] = \"img\";\n})(HeaderAtt || (HeaderAtt = {}));\nclass Header extends HTMLElement {\n    static get observedAttributes() {\n        const headeratt = {\n            logo: null,\n            img: null,\n        };\n        return Object.keys(headeratt);\n    }\n    ;\n    constructor() {\n        super();\n        this.logo = HeaderAtt.logo;\n        this.img = HeaderAtt.img;\n        this.attachShadow({ mode: \"open\" });\n    }\n    ;\n    connectedCallback() {\n        this.render();\n    }\n    ;\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    ;\n    render() {\n        var _a, _b, _c;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `<link rel=\"stylesheet\" href=\"../src/components/header/header.css\">`;\n        const headerSection = this.ownerDocument.createElement(\"header\");\n        const logoSection = this.ownerDocument.createElement(\"app-logo\");\n        logoSection.setAttribute(_Logo_logo__WEBPACK_IMPORTED_MODULE_0__.LogoAtt.logo, (_a = this.logo) !== null && _a !== void 0 ? _a : \"\");\n        const AccImgSection = this.ownerDocument.createElement(\"acc-img\");\n        AccImgSection.setAttribute(_accountImage_accountImage__WEBPACK_IMPORTED_MODULE_1__.AccountImgAtt.img, (_b = this.img) !== null && _b !== void 0 ? _b : \"\");\n        headerSection.appendChild(logoSection);\n        headerSection.appendChild(AccImgSection);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(headerSection);\n    }\n}\ncustomElements.define(\"app-header\", Header);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/header/header.ts?");

/***/ }),

/***/ "./src/components/mainCard/mainCard.ts":
/*!*********************************************!*\
  !*** ./src/components/mainCard/mainCard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainCard),\n/* harmony export */   \"mainCardAttributes\": () => (/* binding */ mainCardAttributes)\n/* harmony export */ });\n/* harmony import */ var _tag_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/tag */ \"./src/components/tag/tag.ts\");\n/* harmony import */ var _cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardMusic/cardMusic */ \"./src/components/cardMusic/cardMusic.ts\");\n\n\nvar mainCardAttributes;\n(function (mainCardAttributes) {\n    mainCardAttributes[\"tag1\"] = \"tag1\";\n    mainCardAttributes[\"tag2\"] = \"tag2\";\n    mainCardAttributes[\"tag3\"] = \"tag3\";\n    mainCardAttributes[\"tag4\"] = \"tag4\";\n    mainCardAttributes[\"tag5\"] = \"tag5\";\n    mainCardAttributes[\"thumbnail1\"] = \"thumbnail1\";\n    mainCardAttributes[\"mtitle1\"] = \"mtitle1\";\n    mainCardAttributes[\"thumbnail2\"] = \"thumbnail2\";\n    mainCardAttributes[\"mtitle2\"] = \"mtitle2\";\n    mainCardAttributes[\"thumbnail3\"] = \"thumbnail3\";\n    mainCardAttributes[\"mtitle3\"] = \"mtitle3\";\n})(mainCardAttributes || (mainCardAttributes = {}));\nclass MainCard extends HTMLElement {\n    static get observedAttributes() {\n        const atts = {\n            tag1: null,\n            tag2: null,\n            tag3: null,\n            tag4: null,\n            tag5: null,\n            thumbnail1: null,\n            mtitle1: null,\n            thumbnail2: null,\n            mtitle2: null,\n            thumbnail3: null,\n            mtitle3: null,\n        };\n        return Object.keys(atts);\n    }\n    constructor() {\n        super();\n        this.tag1 = mainCardAttributes.tag1;\n        this.tag2 = mainCardAttributes.tag2;\n        this.tag3 = mainCardAttributes.tag3;\n        this.tag4 = mainCardAttributes.tag4;\n        this.tag5 = mainCardAttributes.tag5;\n        this.thumbnail1 = mainCardAttributes.thumbnail1;\n        this.mtitle1 = mainCardAttributes.mtitle1;\n        this.thumbnail2 = mainCardAttributes.thumbnail2;\n        this.mtitle2 = mainCardAttributes.mtitle2;\n        this.thumbnail3 = mainCardAttributes.thumbnail3;\n        this.mtitle3 = mainCardAttributes.mtitle3;\n        this.attachShadow({ mode: \"open\" });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const mainCardSection = this.ownerDocument.createElement('section');\n        const tagSection = this.ownerDocument.createElement(\"section\");\n        const tag = this.ownerDocument.createElement(\"app-tag\");\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag1, this.tag1);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag2, this.tag2);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag3, this.tag3);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag4, this.tag4);\n        tag.setAttribute(_tag_tag__WEBPACK_IMPORTED_MODULE_0__.tagAttributes.tag5, this.tag5);\n        tagSection.appendChild(tag);\n        const musicCardSec = this.ownerDocument.createElement(\"section\");\n        const musicCard = this.ownerDocument.createElement(\"music-card\");\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.thumbnail1, this.thumbnail1);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.mtitle1, this.mtitle1);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.thumbnail2, this.thumbnail2);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.mtitle2, this.mtitle2);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.thumbnail3, this.thumbnail3);\n        musicCard.setAttribute(_cardMusic_cardMusic__WEBPACK_IMPORTED_MODULE_1__.musicCardAtt.mtitle3, this.mtitle3);\n        musicCardSec.appendChild(musicCard);\n        mainCardSection.appendChild(tagSection);\n        mainCardSection.appendChild(musicCardSec);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainCardSection);\n    }\n}\ncustomElements.define(\"app-maincard\", MainCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/mainCard/mainCard.ts?");

/***/ }),

/***/ "./src/components/sideSection/menu/mainIcon/mainIcon.ts":
/*!**************************************************************!*\
  !*** ./src/components/sideSection/menu/mainIcon/mainIcon.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainIconAtt\": () => (/* binding */ MainIconAtt),\n/* harmony export */   \"default\": () => (/* binding */ MainIcon)\n/* harmony export */ });\nvar MainIconAtt;\n(function (MainIconAtt) {\n    MainIconAtt[\"mainicon\"] = \"mainicon\";\n})(MainIconAtt || (MainIconAtt = {}));\n;\nclass MainIcon extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            mainicon: null\n        };\n        return Object.keys(attrs);\n    }\n    ;\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        ;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <div class=\"main-selec\">\r\n            <svg width=\"17\" height=\"22\" viewBox=\"0 0 17 22\"><path d=\"${this.mainicon}\" fill=\"#816CAD\"></path></svg>\r\n            <span>Main</span>\r\n        </div>\r\n        `;\n    }\n}\ncustomElements.define(\"main-icon\", MainIcon);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/sideSection/menu/mainIcon/mainIcon.ts?");

/***/ }),

/***/ "./src/components/sideSection/menu/menu.ts":
/*!*************************************************!*\
  !*** ./src/components/sideSection/menu/menu.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuAtt\": () => (/* binding */ MenuAtt),\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _mainIcon_mainIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainIcon/mainIcon */ \"./src/components/sideSection/menu/mainIcon/mainIcon.ts\");\n\nvar MenuAtt;\n(function (MenuAtt) {\n    MenuAtt[\"mainicon\"] = \"mainicon\";\n})(MenuAtt || (MenuAtt = {}));\nclass Menu extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            mainicon: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.mainicon = MenuAtt.mainicon;\n        this.attachShadow({ mode: \"open\" });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const menuSection = this.ownerDocument.createElement(\"nav\");\n        const mainIconSection = this.ownerDocument.createElement(\"main-icon\");\n        mainIconSection.setAttribute(_mainIcon_mainIcon__WEBPACK_IMPORTED_MODULE_0__.MainIconAtt.mainicon, (_a = this.mainicon) !== null && _a !== void 0 ? _a : \"\");\n        menuSection.appendChild(mainIconSection);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(menuSection);\n    }\n}\ncustomElements.define(\"app-menu\", Menu);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/sideSection/menu/menu.ts?");

/***/ }),

/***/ "./src/components/sideSection/sideSection.ts":
/*!***************************************************!*\
  !*** ./src/components/sideSection/sideSection.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideSectionAtt\": () => (/* binding */ SideSectionAtt),\n/* harmony export */   \"default\": () => (/* binding */ SideSection)\n/* harmony export */ });\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu */ \"./src/components/sideSection/menu/menu.ts\");\n\nvar SideSectionAtt;\n(function (SideSectionAtt) {\n    SideSectionAtt[\"mainicon\"] = \"mainicon\";\n})(SideSectionAtt || (SideSectionAtt = {}));\nclass SideSection extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            mainicon: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.mainicon = SideSectionAtt.mainicon;\n        this.attachShadow({ mode: \"open\" });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const SideSection = this.ownerDocument.createElement(\"section\");\n        const menuSection = this.ownerDocument.createElement(\"app-menu\");\n        menuSection.setAttribute(_menu_menu__WEBPACK_IMPORTED_MODULE_0__.MenuAtt.mainicon, (_a = this.mainicon) !== null && _a !== void 0 ? _a : \"\");\n        SideSection.appendChild(menuSection);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(SideSection);\n    }\n}\ncustomElements.define(\"side-section\", SideSection);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/sideSection/sideSection.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ \"./src/components/header/header.ts\");\n/* harmony import */ var _components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/mainCard/mainCard */ \"./src/components/mainCard/mainCard.ts\");\n/* harmony import */ var _components_sideSection_sideSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sideSection/sideSection */ \"./src/components/sideSection/sideSection.ts\");\n/* harmony import */ var _service_data_dataMainCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/data/dataMainCard */ \"./src/service/data/dataMainCard.ts\");\n\n\n\n\n\nclass Main extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const mainScreen = this.ownerDocument.createElement(\"div\");\n        const header = this.ownerDocument.createElement(\"app-header\");\n        header.setAttribute(_components_header_header__WEBPACK_IMPORTED_MODULE_1__.HeaderAtt.logo, \"m30.2944 24.4737c0 .1133 0 .2256-.0074.3379-.1223 3.9223-1.7979 7.6403-4.6661 10.3538-2.8683 2.7134-6.6999 4.2053-10.6701 4.1545-3.9701-.0508-7.7614-1.6403-10.5576-4.4263-2.7962-2.786-4.3738-6.5457-4.3932-10.4698 0-.0322 0-.0644 0-.0967 0-.9927.399-1.9446 1.1091-2.6464.7102-.7019 1.6733-1.0962 2.6777-1.0962 1.0043 0 1.9675.3943 2.6777 1.0962.7102.7019 1.1091 1.6538 1.1091 2.6464-.0151 1.9852.7685 3.895 2.1781 5.3093 1.4097 1.4143 3.33 2.2172 5.3387 2.2321 2.0086.0149 3.941-.7595 5.3719-2.1527 1.431-1.3932 2.2434-3.2912 2.2584-5.2764-.1115-5.143-7.0013-9.4605-15.1472-9.4605-1.0043 0-1.9675-.3944-2.6776-1.0962-.7102-.7019-1.1091-1.6538-1.1091-2.6464 0-.9927.399-1.9446 1.1091-2.6464.7102-.7019 1.6733-1.0962 2.6776-1.0962 5.838 0 11.3731 1.6332 15.5858 4.5993 2.1701 1.5293 3.892 3.3382 5.1164 5.3759 1.297 2.1593 1.9754 4.4704 2.0164 6.8667.0022.0405.0022.0894.0022.1383zm-7.5736-16.9884c2.0914 0 3.7868-1.6757 3.7868-3.7426 0-2.067-1.6954-3.7426-3.7868-3.7426-2.0914 0-3.7868 1.6756-3.7868 3.7426 0 2.067 1.6954 3.7426 3.7868 3.7426zm8.6771 20.0543c0-3.1979 1.1472-5.9307 3.4418-8.1985 2.2945-2.2677 5.0449-3.4017 8.251-3.4017 3.2665 0 6.0613 1.1339 8.3846 3.4017 2.3233 2.2677 3.4853 5.0151 3.486 8.2421 0 3.1701-1.1546 5.9034-3.4638 8.1995-2.3093 2.2962-5.082 3.4446-8.3184 3.4453-3.265 0-6.0448-1.1411-8.3394-3.4235-2.2945-2.2823-3.4418-5.0373-3.4418-8.265zm6.4859.0218c-.0018.6867.1341 1.367.3998 2.0016.2657.6345.6561 1.2108 1.1484 1.6954.4924.4846 1.077.868 1.7201 1.1279.6432.26 1.3321.3915 2.0268.3868 1.4411 0 2.6841-.5136 3.729-1.5407 1.0449-1.0272 1.567-2.2508 1.5663-3.6709 0-1.4181-.5294-2.6337-1.5883-3.647-1.0589-1.0133-2.3093-1.5202-3.751-1.521-1.3877.0035-2.718.5485-3.7013 1.5162-.9834.9678-1.5403 2.2802-1.5497 3.6517zm28.727-21.3476v6.3656h-2.6475c-.1768 0-.3682.1015-.5743.3046-.2062.2031-.3093.3763-.3093.5198v2.3547h3.1775v6.455h-3.1775v17.0082h-6.5302v-25.768c0-1.4832.4632-2.8573 1.3896-4.1221.8818-1.2281 2.1207-2.1622 3.5522-2.6781.7938-.2897 1.4705-.4349 2.0301-.4356l3.0894-.0042zm17.287 31.7501c-1.7651.8427-3.5453 1.2641-5.3399 1.2641-3.2368 0-6.0021-1.1453-8.2951-3.4359-2.293-2.2907-3.4405-5.0415-3.4418-8.2525 0-3.2395 1.1547-5.9899 3.4641-8.2515 2.3094-2.2615 5.0963-3.3923 8.3612-3.3923 2.4417 0 4.6862.7049 6.7323 2.1146 2.0461 1.4097 3.4805 3.2488 4.3031 5.5173.4709 1.3085.706 2.3987.706 3.2706v12.4297h-6.49v-1.2641zm-10.5907-10.4243c0 1.4257.522 2.6542 1.566 3.6855 1.0447 1.0313 2.2871 1.5473 3.7293 1.548 1.4409 0 2.684-.516 3.7287-1.548 1.0447-1.032 1.5673-2.2605 1.5667-3.6855 0-1.3952-.5148-2.6081-1.5444-3.6387-1.0296-1.0306-2.2649-1.547-3.7071-1.549-.6949-.0077-1.3846.1212-2.0284.3793-.6445.2581-1.23.6402-1.7239 1.124-.5115.4693-.9176 1.04-1.1907 1.6749-.2738.6349-.4087 1.3196-.3963 2.0096z\");\n        header.setAttribute(_components_header_header__WEBPACK_IMPORTED_MODULE_1__.HeaderAtt.img, \"https://cdn.discordapp.com/attachments/1010976865424506900/1088783125137604648/image.png\");\n        mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.appendChild(header);\n        const lowContainer = this.ownerDocument.createElement(\"div\");\n        const SideSection = this.ownerDocument.createElement(\"side-section\");\n        SideSection.setAttribute(_components_sideSection_sideSection__WEBPACK_IMPORTED_MODULE_3__.SideSectionAtt.mainicon, \"M11.7187 13.0625C13.1467 12.2375 14.1667 10.4844 14.1667 6.875C14.1667 0.859375 11.3333 0 8.5 0C5.66667 0 2.83333 0.859375 2.83333 6.875C2.83333 10.4844 3.85334 12.2375 5.28134 13.0625C6.23334 13.6125 7.36667 13.75 8.5 13.75C9.63333 13.75 10.7667 13.6125 11.7187 13.0625ZM4.25 15.125C1.90279 15.125 0 16.9718 0 19.25C0 20.7688 1.26853 22 2.83333 22H14.1667C15.7315 22 17 20.7688 17 19.25C17 16.9718 15.0972 15.125 12.75 15.125H4.25Z\");\n        lowContainer.appendChild(SideSection);\n        _service_data_dataMainCard__WEBPACK_IMPORTED_MODULE_4__.dataMainCard.forEach((tagA) => {\n            const maincard = this.ownerDocument.createElement(\"app-maincard\");\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.tag1, tagA.inter.tag1);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.tag2, tagA.inter.tag2);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.tag3, tagA.inter.tag3);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.tag4, tagA.inter.tag4);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.tag5, tagA.inter.tag5);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.thumbnail1, tagA.music.thumbnail1);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.mtitle1, tagA.music.artist1);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.thumbnail2, tagA.music.thumbnail2);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.mtitle2, tagA.music.artist2);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.thumbnail3, tagA.music.thumbnail3);\n            maincard.setAttribute(_components_mainCard_mainCard__WEBPACK_IMPORTED_MODULE_2__.mainCardAttributes.mtitle3, tagA.music.artist3);\n            lowContainer === null || lowContainer === void 0 ? void 0 : lowContainer.appendChild(maincard);\n        });\n        mainScreen.appendChild(lowContainer);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainScreen);\n        // musicData.forEach((musicC) => {\n        //     const maincard = this.ownerDocument.createElement(\"app-maincard\")\n        //     maincard.setAttribute(mainCardAttributes.thumbnail, musicC.thumbnail)\n        //     maincard.setAttribute(mainCardAttributes.mtitle, musicC.mtitle)\n        //     this.shadowRoot?.appendChild(maincard)\n        //     })\n    }\n}\ncustomElements.define(\"app-main\", Main);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/main.ts?");

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