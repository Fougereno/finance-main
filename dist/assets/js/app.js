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

/***/ "./src/assets/js/graph.js":
/*!********************************!*\
  !*** ./src/assets/js/graph.js ***!
  \********************************/
/***/ (function() {

eval("//chart.js\r\nconst ctx = document.getElementById('myChart');\r\n\r\nnew Chart(ctx, {\r\n    type: 'line',\r\n    data: {\r\n    labels: ['', '', '', '', '', '', ''],\r\n    datasets: [{\r\n        data: [0, 9, 32, 64, 114, 188, 372],\r\n        borderWidth: 2,\r\n        borderColor: '#0000DE', \r\n        backgroundColor: 'rgba(0, 0, 222, 0.1)',\r\n        pointBackgroundColor: '#fff',\r\n        fill: true,\r\n    }]\r\n    },\r\n    options: {\r\n        scales: {\r\n              y: {\r\n                grid: {\r\n                  display: false\r\n                }\r\n              }\r\n        }\r\n      }\r\n});\r\n\n\n//# sourceURL=webpack://finance-main/./src/assets/js/graph.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function() {

eval("let burger = document.querySelector(\".nav__burger\");\r\nlet radiowrap = document.querySelector(\".main__count__radiowrap\"); \r\nlet radio = document.querySelectorAll(\".main__count__radio\"); \r\nlet checkel = document.getElementsByClassName(\"main__count_checked\");\r\nconst rangeInputs = document.querySelectorAll('input[type=\"range\"]'); \r\nlet burgermenu = document.querySelector(\".nav_green\");\r\nlet footer = document.querySelectorAll(\".footer__navitem\");\r\nlet info = document.querySelectorAll(\".main__info__item\");\r\n\r\nradio.forEach(function(element) {\r\n    element.addEventListener('change', changeradio)\r\n})\r\nrangeInputs.forEach(input => {\r\n  input.addEventListener('input', handleInputChange)\r\n});\r\nburger.addEventListener('click', animateburger);\r\nfooter.forEach(function(element) {\r\n  element.addEventListener('click', addfootermenu)\r\n});\r\ninfo.forEach(function(element) {\r\n  element.addEventListener('click', addinfoblock)\r\n});\r\n\r\nfunction animateburger() {\r\n    if(this.classList.contains(\"nav_open\")) {\r\n        this.classList.remove (\"nav_open\");\r\n    } else {\r\n        this.classList.add (\"nav_open\");\r\n    }; \r\n    if(burgermenu.classList.contains(\"nav_visible\")) {\r\n      burgermenu.classList.remove (\"nav_visible\");\r\n    } else {\r\n      burgermenu.classList.add (\"nav_visible\");\r\n    };\r\n}\r\nfunction changeradio() {\r\n    for (let i = 0; i < checkel.length; i++) {\r\n        checkel[i].classList.remove('main__count_checked');\r\n    }\r\n    if (this.checked) {\r\n      this.parentNode.classList.add('main__count_checked');\r\n    } else {\r\n      this.parentNode.classList.remove('main__count_checked');\r\n    }\r\n}\r\nfunction handleInputChange(e) {\r\n  let target = e.target   \r\n  const min = target.min\r\n  const max = target.max\r\n  const val = target.value\r\n\r\n  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'  \r\n}\r\nfunction addfootermenu() {\r\n  if(this.classList.contains(\"footer__visible\")) {\r\n      this.classList.remove (\"footer__visible\");\r\n  } else {\r\n      this.classList.add (\"footer__visible\");\r\n  }; \r\n}\r\nfunction addinfoblock() {\r\n  if(this.classList.contains(\"main__info_visible\")) {\r\n      this.classList.remove (\"main__info_visible\");\r\n  } else {\r\n      this.classList.add (\"main__info_visible\");\r\n  }; \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://finance-main/./src/assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/graph.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/main.js"]();
/******/ 	
/******/ })()
;