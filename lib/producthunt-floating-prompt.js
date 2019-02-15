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

function floatingPrompt(options) {
  /* eslint-disable */
  var name = options.name;
  var url = options.url;
  var text = options.text ? options.text : "Hi, do you like ".concat(name, " ? Don't forget to show your love on Product Hunt \uD83D\uDE80");
  var buttonText = options.buttonText ? options.buttonText : "".concat(name, " on Product Hunt");
  var width = options.width ? options.width : '300px';
  var bottom = options.bottom ? options.bottom : '32px';
  var right = options.right ? options.right : '32px';
  var left = options.left ? options.left : 'unset';
  var colorOne = options.colorOne ? options.colorOne : '#da552f';
  var colorTwo = options.colorTwo ? options.colorTwo : '#ea8e39';
  var saveInCookies = options.saveInCookies ? options.saveInCookies : true;
  var id = "product-hunt-".concat(name.toLowerCase().replace(/[^a-zA-Z]+/g, "-"));
  var html = "<div class=\"producthunt\" id=\"".concat(id, "\"> <span class=\"producthunt__close\" id=\"").concat(id, "-close\">\xD7</span><p class=\"producthunt__text\">").concat(text, "</p> <a href=\"").concat(url, "\" class=\"ph-button\" target=\"_blank\">").concat(buttonText, "</a></div>");
  var css = "\n  .ph-button {\n    background: linear-gradient(65deg,".concat(colorOne, ",").concat(colorTwo, ");\n    font-family: sans-serif;\n    color: #fff;\n    display: block;\n    letter-spacing: 0;\n    font-weight: 700;\n    line-height: 16px;\n    font-size: 14px;\n    text-transform: uppercase;\n    text-decoration: none!important;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    justify-content: center;\n    padding: 16px 16px;\n    text-align: center;\n    white-space: nowrap;\n    box-shadow: 0 8px 24px rgba(32,43,54,.12);\n    transition: all .3s ease;\n    margin-top: 16px;\n    font-size: 14px;\n  }\n  .ph-button:hover {\n    box-shadow: 0 6px 24px rgba(32,43,54,.4);\n  }\n  .producthunt {\n    position: fixed;\n    bottom: ").concat(bottom, ";\n    right: ").concat(right, ";\n    left: ").concat(left, ";\n    background-color: #fff;\n    padding: 24px;\n    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);\n    z-index: 10;\n    width: ").concat(width, ";\n    font-size: 16px;\n    color: #65638f;\n    font-family: sans-serif;\n    opacity: 1;\n    transition: all .3s ease;\n  }\n  .producthunt__close {\n    position: absolute;\n    right: 16px;\n    top: 8px;\n    cursor: pointer;\n  }\n  .producthunt__text {\n    margin: 0;\n  }\n  @media (max-width: 768px) {\n    .producthunt {\n      max-width: 100%;\n      bottom: 0;\n      right: 0;\n      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16);\n    }\n  }");

  if (!window.localStorage.getItem(id) || saveInCookies == false) {
    createModal(html);
    addClosingEvent(id);
    addStyle(css);
  }
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
    producthuntModal.style.opacity = 0;
    setTimeout(function () {
      producthuntModal.parentNode.removeChild(producthuntModal);
      window.localStorage.setItem(id, true);
    }, 300);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3Byb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvLi9zcmMvZmxvYXRpbmdQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImZsb2F0aW5nUHJvbXB0Iiwib3B0aW9ucyIsIm5hbWUiLCJ1cmwiLCJ0ZXh0IiwiYnV0dG9uVGV4dCIsIndpZHRoIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwiY29sb3JPbmUiLCJjb2xvclR3byIsInNhdmVJbkNvb2tpZXMiLCJpZCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImh0bWwiLCJjc3MiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3JlYXRlTW9kYWwiLCJhZGRDbG9zaW5nRXZlbnQiLCJhZGRTdHlsZSIsInByb21wdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInByb2R1Y3RodW50TW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInByb2R1Y3RodW50Q2xvc2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEl0ZW0iLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJGbG9hdGluZ1Byb21wdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEQ7Ozs7O0FBR0E7Ozs7QUFDQSxDQUFDLFVBQVN0QixNQUFULEVBQWdCO0FBQ2RBLFFBQU0sQ0FBQzBCLGNBQVA7QUFDRCxDQUZGLEVBRUkxQixNQUZKO0FBR0MiLCJmaWxlIjoicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInByb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsb2F0aW5nUHJvbXB0KG9wdGlvbnMpIHtcclxuXHJcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICBjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gIGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG4gIGNvbnN0IHRleHQgPSBvcHRpb25zLnRleHQgPyBvcHRpb25zLnRleHQgOiBgSGksIGRvIHlvdSBsaWtlICR7bmFtZX0gPyBEb24ndCBmb3JnZXQgdG8gc2hvdyB5b3VyIGxvdmUgb24gUHJvZHVjdCBIdW50IPCfmoBgO1xyXG4gIGNvbnN0IGJ1dHRvblRleHQgPSBvcHRpb25zLmJ1dHRvblRleHQgPyBvcHRpb25zLmJ1dHRvblRleHQgOiBgJHtuYW1lfSBvbiBQcm9kdWN0IEh1bnRgO1xyXG4gIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IG9wdGlvbnMud2lkdGggOiAnMzAwcHgnO1xyXG4gIGNvbnN0IGJvdHRvbSA9IG9wdGlvbnMuYm90dG9tID8gb3B0aW9ucy5ib3R0b20gOiAnMzJweCc7XHJcbiAgY29uc3QgcmlnaHQgPSBvcHRpb25zLnJpZ2h0ID8gb3B0aW9ucy5yaWdodCA6ICczMnB4JztcclxuICBjb25zdCBsZWZ0ID0gb3B0aW9ucy5sZWZ0ID8gb3B0aW9ucy5sZWZ0IDogJ3Vuc2V0JztcclxuICBjb25zdCBjb2xvck9uZSA9IG9wdGlvbnMuY29sb3JPbmUgPyBvcHRpb25zLmNvbG9yT25lIDogJyNkYTU1MmYnO1xyXG4gIGNvbnN0IGNvbG9yVHdvID0gb3B0aW9ucy5jb2xvclR3byA/IG9wdGlvbnMuY29sb3JUd28gOiAnI2VhOGUzOSc7XHJcbiAgY29uc3Qgc2F2ZUluQ29va2llcyA9IG9wdGlvbnMuc2F2ZUluQ29va2llcyA/IG9wdGlvbnMuc2F2ZUluQ29va2llcyA6IHRydWU7XHJcbiAgY29uc3QgaWQgPSBgcHJvZHVjdC1odW50LSR7bmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aXSsvZywgXCItXCIpfWA7XHJcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwicHJvZHVjdGh1bnRcIiBpZD1cIiR7aWR9XCI+IDxzcGFuIGNsYXNzPVwicHJvZHVjdGh1bnRfX2Nsb3NlXCIgaWQ9XCIke2lkfS1jbG9zZVwiPsOXPC9zcGFuPjxwIGNsYXNzPVwicHJvZHVjdGh1bnRfX3RleHRcIj4ke3RleHR9PC9wPiA8YSBocmVmPVwiJHt1cmx9XCIgY2xhc3M9XCJwaC1idXR0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke2J1dHRvblRleHR9PC9hPjwvZGl2PmA7XHJcbiAgY29uc3QgY3NzID0gYFxyXG4gIC5waC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDY1ZGVnLCR7Y29sb3JPbmV9LCR7Y29sb3JUd299KTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMzIsNDMsNTQsLjEyKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5waC1idXR0b246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjRweCByZ2JhKDMyLDQzLDU0LC40KTtcclxuICB9XHJcbiAgLnByb2R1Y3RodW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogJHtib3R0b219O1xyXG4gICAgcmlnaHQ6ICR7cmlnaHR9O1xyXG4gICAgbGVmdDogJHtsZWZ0fTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE2LCAzMSwgNTksIDAuMTYpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogJHt3aWR0aH07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzY1NjM4ZjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICB9XHJcbiAgLnByb2R1Y3RodW50X19jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAucHJvZHVjdGh1bnRfX3RleHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9kdWN0aHVudCB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAtNHB4IDE2cHggcmdiYSgxNiwgMzEsIDU5LCAwLjE2KTtcclxuICAgIH1cclxuICB9YDtcclxuICBcclxuICBcclxuICBpZighd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKSB8fCBzYXZlSW5Db29raWVzID09IGZhbHNlKSB7XHJcbiAgICBjcmVhdGVNb2RhbChodG1sKTtcclxuICAgIGFkZENsb3NpbmdFdmVudChpZCk7XHJcbiAgICBhZGRTdHlsZShjc3MpO1xyXG4gIH1cclxuICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKGh0bWwpIHtcclxuICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgcHJvbXB0LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9tcHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbG9zaW5nRXZlbnQoaWQpIHtcclxuICBjb25zdCBwcm9kdWN0aHVudE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGNvbnN0IHByb2R1Y3RodW50Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH0tY2xvc2VgKTtcclxuXHJcbiAgcHJvZHVjdGh1bnRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHByb2R1Y3RodW50TW9kYWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJvZHVjdGh1bnRNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2R1Y3RodW50TW9kYWwpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIHRydWUpO1xyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUoY3NzKSB7XHJcbiAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcblxyXG4gIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcclxuICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKSk7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XHJcbn1cclxuIiwiaW1wb3J0IEZsb2F0aW5nUHJvbXB0IGZyb20gJy4vZmxvYXRpbmdQcm9tcHQuanMnO1xuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdQcm9tcHQ7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4oZnVuY3Rpb24od2luZG93KXtcbiAgIHdpbmRvdy5GbG9hdGluZ1Byb21wdCA9IEZsb2F0aW5nUHJvbXB0O1xuIH0pKHdpbmRvdylcbiAvKiBlc2xpbnQtZW5hYmxlICovXG4iXSwic291cmNlUm9vdCI6IiJ9