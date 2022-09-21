/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function() {

eval("let burger = document.querySelector(\".burger\");\r\nlet radiowrap = document.querySelectorAll(\".main__count__radiowrap\"); \r\nlet radio = document.querySelectorAll(\".main__count__radio\"); \r\nlet checkel = document.getElementsByClassName(\"main__count_checked\");\r\nconst rangeInputs = document.querySelectorAll('input[type=\"range\"]'); \r\nlet burgermenu = document.querySelector(\".nav\");\r\nlet footer = document.querySelectorAll(\".footer__navitem\");\r\nlet info = document.querySelectorAll(\".main__info__item\");\r\n\r\nradiowrap.forEach(function(element) {\r\n  element.addEventListener('click', changeradio)\r\n})\r\nrangeInputs.forEach(input => {\r\n  input.addEventListener('input', handleInputChange)\r\n});\r\nburger.addEventListener('click', animateburger);\r\nfooter.forEach(function(element) {\r\n  element.addEventListener('click', addfootermenu)\r\n});\r\ninfo.forEach(function(element) {\r\n  element.addEventListener('click', addinfoblock)\r\n});\r\n\r\nfunction animateburger() {\r\n    if(this.classList.contains(\"nav_open\")) {\r\n        this.classList.remove (\"nav_open\");\r\n    } else {\r\n        this.classList.add (\"nav_open\");\r\n    }; \r\n    if(burgermenu.classList.contains(\"nav_visible\")) {\r\n      burgermenu.classList.remove (\"nav_visible\");\r\n    } else {\r\n      burgermenu.classList.add (\"nav_visible\");\r\n    };\r\n}\r\n\r\nfunction changeradio() {\r\n  radiowrap.forEach (element => {\r\n    element.classList.remove('main__count_checked'); \r\n  });\r\n  this.classList.add('main__count_checked');\r\n  for (let i = 0; i < this.childNodes.length; i++) {\r\n    if (this.childNodes[i].className == \"main__count__radio\") {\r\n      this.childNodes[i].checked = true;\r\n    } \r\n  }       \r\n}\r\nfunction handleInputChange(e) {\r\n  let target = e.target   \r\n  const min = target.min\r\n  const max = target.max\r\n  const val = target.value\r\n\r\n  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'  \r\n}\r\nfunction addfootermenu() {\r\n  if(this.classList.contains(\"footer__visible\")) {\r\n      this.classList.remove (\"footer__visible\");\r\n  } else {\r\n      this.classList.add (\"footer__visible\");\r\n  }; \r\n}\r\nfunction addinfoblock() {\r\n  if(this.classList.contains(\"main__info_visible\")) {\r\n      this.classList.remove (\"main__info_visible\");\r\n  } else {\r\n      this.classList.add (\"main__info_visible\");\r\n  }; \r\n}\n\n//# sourceURL=webpack://finance-main/./src/assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/main.js"]();
/******/ 	
/******/ })()
;