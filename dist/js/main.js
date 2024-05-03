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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"30 april 2024\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menu = document.querySelector(\"menu\");\n\n  const toggleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n  const  handleMenu = (e) => {\n    if(e.target.classList.contains('close-btn')){\n      menu.classList.remove('active-menu') \n    }\n    if(e.target.closest('ul>li>a')){\n      menu.classList.remove('active-menu')  \n    }\n  };\n  \n  menuBtn.addEventListener(\"click\", toggleMenu);\n  menu.addEventListener(\"click\", handleMenu);\n  \n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modal = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const width = document.documentElement.clientWidth;\n  let opacity = 0;\n\n  const animateModal = () => {\n    if (opacity < 1) {\n      opacity += 0.1;\n      modal.style.opacity = opacity;\n      setTimeout(animateModal, 30);\n    }\n  };\n\n  buttons.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n      modal.style.display = \"block\";\n      if (width >= 768) {\n        animateModal();\n      }\n    });\n  });\n\n  modal.addEventListener(\"click\", (e) => {\n    if (\n      !e.target.closest(\".popup-content\") ||\n      e.target.classList.contains(\"popup-close\")\n    ) {\n      modal.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n  const tabPanel = document.querySelector(\".service-header\");\n  const tabs = document.querySelectorAll(\".service-header-tab\");\n  const tabContent = document.querySelectorAll(\".service-tab\");\n\n  tabPanel.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".service-header-tab\")) {\n      const tabBtn = e.target.closest(\".service-header-tab\");\n      tabs.forEach((tab, index) => {\n        if (tab === tabBtn) {\n          tab.classList.add(\"active\");\n          tabContent[index].classList.remove(\"d-none\");\n        } else {\n          tab.classList.remove(\"active\");\n          tabContent[index].classList.add(\"d-none\");\n        }\n      });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n  let timeInterval;\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    hours = String(hours).padStart(2, \"0\");\n    minutes = String(minutes).padStart(2, \"0\");\n    seconds = String(seconds).padStart(2, \"0\");\n\n    return { timeRemaining, hours, minutes, seconds };\n  };\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n\n    timerHours.textContent = getTime.hours;\n    timerMinutes.textContent = getTime.minutes;\n    timerSeconds.textContent = getTime.seconds;\n\n    if (getTime.timeRemaining <= 0) {\n      clearInterval(timeInterval);\n      timerHours.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n  };\n  updateClock();\n  timeInterval = setInterval(updateClock, 1000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validator = () => {\n  const squareNumber = document.querySelector(\".calc-square\");\n  const roomCount = document.querySelector(\".calc-count\");\n  const countDays = document.querySelector(\".calc-day\");\n  const users = document.querySelectorAll('[name=\"user_name\"]');\n  const emails = document.querySelectorAll('[name=\"user_email\"]');\n  const phones = document.querySelectorAll('[name=\"user_phone\"]');\n  const messages = document.querySelectorAll('[name=\"user_message\"]');\n\n  const allowNumber = (e) => {\n    e.target.value = e.target.value.replace(/\\D+/g, \"\");\n  };\n  squareNumber.addEventListener(\"input\", allowNumber);\n  roomCount.addEventListener(\"input\", allowNumber);\n  countDays.addEventListener(\"input\", allowNumber);\n\n  users.forEach((el) => {\n    el.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/, \"\");\n    });\n  });\n\n  emails.forEach((el) => {\n    el.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(\n        /[^a-zA-Z0-9\\@\\-\\_\\.\\!\\~\\*\\']+/,\n        \"\"\n      );\n    });\n  });\n\n  phones.forEach((el) => {\n    el.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^0-9()\\-]+/, \"\");\n    });\n  });\n\n  messages.forEach((el) => {\n    el.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/, \"\");\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n\n//# sourceURL=webpack:///./modules/validator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;