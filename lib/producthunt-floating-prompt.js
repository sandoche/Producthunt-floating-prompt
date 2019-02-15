(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("producthunt-floating-prompt", [], factory);
	else if(typeof exports === 'object')
		exports["producthunt-floating-prompt"] = factory();
	else
		root["producthunt-floating-prompt"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/floatingPrompt.js":
/*!*******************************!*\
  !*** ./src/floatingPrompt.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = floatingPrompt;

function floatingPrompt(name, url) {
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Hi, do you like ".concat(name, " ? Don't forget to show your love on Product Hunt \uD83D\uDE80");
  var buttonText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "".concat(name, " on Product Hunt");
  var colorOne = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#da552f';
  var colorTwo = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#ea8e39';

  /* eslint-disable */
  var id = "product-hunt-".concat(name.toLowerCase().replace(/[^a-zA-Z]+/g, "-"));
  var html = "<div class=\"producthunt\" id=\"".concat(id, "\"> <span class=\"producthunt__close\" id=\"").concat(id, "-close\">\xD7</span><p class=\"producthunt__text\">").concat(text, "</p> <a href=\"").concat(url, "\" class=\"button producthunt__button\" target=\"_blank\">").concat(buttonText, "</a></div>");
  var css = "\n  .button {\n    display: -ms-flexbox;\n    display: flex;\n    background: linear-gradient(65deg,".concat(colorOne, ",").concat(colorTwo, ");\n    font-family: Heebo,sans-serif;\n    color: #fff;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    font-size: var(--font-xxs);\n    letter-spacing: 0;\n    font-weight: 700;\n    line-height: 16px;\n    text-transform: uppercase;\n    text-decoration: none!important;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 16px 32px;\n    text-align: center;\n    white-space: nowrap;\n    box-shadow: 0 8px 24px rgba(32,43,54,.12);\n    mix-blend-mode: multiply;\n    transition: all .15s ease;\n  }\n  .producthunt {\n    position: fixed;\n    bottom: 64px;\n    right: 16px;\n    background-color: #fff;\n    padding: 24px;\n    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);\n    z-index: 10;\n    max-width: 300px;\n    font-size: 16px;\n    color: #65638f;\n  }\n  .producthunt__close {\n    position: absolute;\n    right: 16px;\n    top: 8px;\n    cursor: pointer;\n  }\n  .producthunt__text {\n    margin: 0;\n  }\n  .producthunt__button {\n    margin-top: 16px;\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    font-size: 14px;\n  }\n  @media (max-width: 768px) {\n    .producthunt {\n      max-width: 100%;\n      bottom: 0;\n      right: 0;\n      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16);\n    }\n  }");
  createModal(html);
  addClosingEvent(id);
  addStyle(css);
  /* eslint-enable */
}

function createModal(html) {
  var prompt = document.createElement('div');
  prompt.innerHTML = html;
  document.body.appendChild(prompt);
}

function addClosingEvent(id) {
  var producthuntModal = document.getElementById(id);
  var producthuntCloseButton = document.getElementById("".concat(id, "-close"));
  producthuntCloseButton.addEventListener('click', function () {
    producthuntModal.parentNode.removeChild(producthuntModal);
  });
}

function addStyle(css) {
  var linkElement = document.createElement('link');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
  document.head.appendChild(linkElement);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _floatingPrompt = _interopRequireDefault(__webpack_require__(/*! ./floatingPrompt.js */ "./src/floatingPrompt.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _floatingPrompt.default;
/* eslint-disable */

exports.default = _default;

(function (window) {
  window.FloatingPrompt = _floatingPrompt.default;
})(window);
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3Byb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvLi9zcmMvZmxvYXRpbmdQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImZsb2F0aW5nUHJvbXB0IiwibmFtZSIsInVybCIsInRleHQiLCJidXR0b25UZXh0IiwiY29sb3JPbmUiLCJjb2xvclR3byIsImlkIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaHRtbCIsImNzcyIsImNyZWF0ZU1vZGFsIiwiYWRkQ2xvc2luZ0V2ZW50IiwiYWRkU3R5bGUiLCJwcm9tcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJwcm9kdWN0aHVudE1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9kdWN0aHVudENsb3NlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImxpbmtFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVhZCIsIndpbmRvdyIsIkZsb2F0aW5nUHJvbXB0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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dGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInByb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmbG9hdGluZ1Byb21wdChuYW1lLFxyXG4gIHVybCxcclxuICB0ZXh0ID0gYEhpLCBkbyB5b3UgbGlrZSAke25hbWV9ID8gRG9uJ3QgZm9yZ2V0IHRvIHNob3cgeW91ciBsb3ZlIG9uIFByb2R1Y3QgSHVudCDwn5qAYCxcclxuICBidXR0b25UZXh0ID0gYCR7bmFtZX0gb24gUHJvZHVjdCBIdW50YCxcclxuICBjb2xvck9uZSA9ICcjZGE1NTJmJyxcclxuICBjb2xvclR3byA9ICcjZWE4ZTM5J1xyXG4pIHtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gIGNvbnN0IGlkID0gYHByb2R1Y3QtaHVudC0ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWl0rL2csIFwiLVwiKX1gO1xyXG4gIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInByb2R1Y3RodW50XCIgaWQ9XCIke2lkfVwiPiA8c3BhbiBjbGFzcz1cInByb2R1Y3RodW50X19jbG9zZVwiIGlkPVwiJHtpZH0tY2xvc2VcIj7Dlzwvc3Bhbj48cCBjbGFzcz1cInByb2R1Y3RodW50X190ZXh0XCI+JHt0ZXh0fTwvcD4gPGEgaHJlZj1cIiR7dXJsfVwiIGNsYXNzPVwiYnV0dG9uIHByb2R1Y3RodW50X19idXR0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke2J1dHRvblRleHR9PC9hPjwvZGl2PmA7XHJcbiAgY29uc3QgY3NzID0gYFxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDY1ZGVnLCR7Y29sb3JPbmV9LCR7Y29sb3JUd299KTtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWVibyxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC14eHMpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgzMiw0Myw1NCwuMTIpO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcclxuICB9XHJcbiAgLnByb2R1Y3RodW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjRweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTYsIDMxLCA1OSwgMC4xNik7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzY1NjM4ZjtcclxuICB9XHJcbiAgLnByb2R1Y3RodW50X19jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAucHJvZHVjdGh1bnRfX3RleHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAucHJvZHVjdGh1bnRfX2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9kdWN0aHVudCB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAtNHB4IDE2cHggcmdiYSgxNiwgMzEsIDU5LCAwLjE2KTtcclxuICAgIH1cclxuICB9YDtcclxuICBcclxuICBjcmVhdGVNb2RhbChodG1sKTtcclxuICBhZGRDbG9zaW5nRXZlbnQoaWQpO1xyXG4gIGFkZFN0eWxlKGNzcyk7XHJcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb2RhbChodG1sKSB7XHJcbiAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHByb21wdC5pbm5lckhUTUwgPSBodG1sO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvbXB0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xvc2luZ0V2ZW50KGlkKSB7XHJcbiAgY29uc3QgcHJvZHVjdGh1bnRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICBjb25zdCBwcm9kdWN0aHVudENsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9LWNsb3NlYCk7XHJcblxyXG4gIHByb2R1Y3RodW50Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9kdWN0aHVudE1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvZHVjdGh1bnRNb2RhbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKGNzcykge1xyXG4gIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5cclxuICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XHJcbiAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9jc3M7Y2hhcnNldD1VVEYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNzcykpO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xyXG59XHJcbiIsImltcG9ydCBGbG9hdGluZ1Byb21wdCBmcm9tICcuL2Zsb2F0aW5nUHJvbXB0LmpzJztcbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nUHJvbXB0O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuKGZ1bmN0aW9uKHdpbmRvdyl7XG4gICB3aW5kb3cuRmxvYXRpbmdQcm9tcHQgPSBGbG9hdGluZ1Byb21wdDtcbiB9KSh3aW5kb3cpXG4gLyogZXNsaW50LWVuYWJsZSAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==