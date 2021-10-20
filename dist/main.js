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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = () => {\n  const main = document.querySelector(\"main\");\n  const section1 = document.createElement(\"section\");\n  const content1 = document.createElement(\"div\");\n  content1.classList.add(\"content\", \"cell\");\n  content1.innerHTML = `<img src=\"../src/opening-hours.png\" alt=\"\" />`;\n  section1.appendChild(content1);\n\n  const section2 = document.createElement(\"section\");\n  const content2 = document.createElement(\"div\");\n  content2.classList.add(\"content\", \"cell\");\n  content2.innerHTML = `            <p>\n              <h1>Philosophy</h1>\n              Our goal is to deliver the best meal for our customers. We belive\n              that every human being has a right to a delicious coffee paired\n              with chocolate cake every day.\n            </p>\n            <br />\n            <br />\n            <hr size=\"5px\" color=\"#f4decb\" />\n            <p>\n              You can find us at \n              <h3>\n              550 Plumb Branch Drive\nBronx, NY 10451\n              </h3>\n              <img src=\"../src/external-content.duckduckgo.com.png\" style=\"width: 50%;\">\n            </p>\n    `;\n  section2.appendChild(content2);\n\n  const section3 = document.createElement(\"section\");\n  section3.classList.add(\"media\");\n  section3.innerHTML = `<img\n            id=\"slideshow\"\n            class=\"cell\"\n            src=\"../src/pexels-victoria-borodinova-3745525.jpg\"\n            alt=\"\"\n          />`;\n\n  main.appendChild(section1);\n  main.appendChild(section2);\n  main.appendChild(section3);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nfunction clear() {\n  const main = document.querySelector(\"main\");\n  while (main.firstChild) {\n    main.removeChild(main.firstChild);\n  }\n}\n//\ndocument.getElementById(\"home\").addEventListener(\"click\", () => {\n  clear();\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;