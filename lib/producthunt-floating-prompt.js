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
  var width = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '300px';
  var bottom = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '32px';
  var right = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '32px';
  var left = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'unset';
  var colorOne = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '#da552f';
  var colorTwo = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '#ea8e39';
  var saveInCookies = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : true;

  /* eslint-disable */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3Byb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvLi9zcmMvZmxvYXRpbmdQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImZsb2F0aW5nUHJvbXB0IiwibmFtZSIsInVybCIsInRleHQiLCJidXR0b25UZXh0Iiwid2lkdGgiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJjb2xvck9uZSIsImNvbG9yVHdvIiwic2F2ZUluQ29va2llcyIsImlkIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaHRtbCIsImNzcyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjcmVhdGVNb2RhbCIsImFkZENsb3NpbmdFdmVudCIsImFkZFN0eWxlIiwicHJvbXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwicHJvZHVjdGh1bnRNb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicHJvZHVjdGh1bnRDbG9zZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic2V0SXRlbSIsImxpbmtFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVhZCIsIkZsb2F0aW5nUHJvbXB0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7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Q0FBb0JvQixPQUFwQixDQUE0QjFCLEVBQTVCLEVBQWdDLElBQWhDO0FBQ0QsS0FIUyxFQUdQLEdBSE8sQ0FBVjtBQUlELEdBTkQ7QUFPRDs7QUFFRCxTQUFTVSxRQUFULENBQWtCTixHQUFsQixFQUF1QjtBQUNyQixNQUFNdUIsV0FBVyxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7QUFFQWMsYUFBVyxDQUFDQyxZQUFaLENBQXlCLEtBQXpCLEVBQWdDLFlBQWhDO0FBQ0FELGFBQVcsQ0FBQ0MsWUFBWixDQUF5QixNQUF6QixFQUFpQyxVQUFqQztBQUNBRCxhQUFXLENBQUNDLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsaUNBQWlDQyxrQkFBa0IsQ0FBQ3pCLEdBQUQsQ0FBcEY7QUFDQVEsVUFBUSxDQUFDa0IsSUFBVCxDQUFjZCxXQUFkLENBQTBCVyxXQUExQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEQ7Ozs7O0FBR0E7Ozs7QUFDQSxDQUFDLFVBQVN0QixNQUFULEVBQWdCO0FBQ2RBLFFBQU0sQ0FBQzBCLGNBQVA7QUFDRCxDQUZGLEVBRUkxQixNQUZKO0FBR0MiLCJmaWxlIjoicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInByb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsb2F0aW5nUHJvbXB0KG5hbWUsXHJcbiAgdXJsLFxyXG4gIHRleHQgPSBgSGksIGRvIHlvdSBsaWtlICR7bmFtZX0gPyBEb24ndCBmb3JnZXQgdG8gc2hvdyB5b3VyIGxvdmUgb24gUHJvZHVjdCBIdW50IPCfmoBgLFxyXG4gIGJ1dHRvblRleHQgPSBgJHtuYW1lfSBvbiBQcm9kdWN0IEh1bnRgLFxyXG4gIHdpZHRoID0gJzMwMHB4JyxcclxuICBib3R0b20gPSAnMzJweCcsXHJcbiAgcmlnaHQgPSAnMzJweCcsXHJcbiAgbGVmdCA9ICd1bnNldCcsXHJcbiAgY29sb3JPbmUgPSAnI2RhNTUyZicsXHJcbiAgY29sb3JUd28gPSAnI2VhOGUzOScsXHJcbiAgc2F2ZUluQ29va2llcyA9IHRydWVcclxuKSB7XHJcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICBjb25zdCBpZCA9IGBwcm9kdWN0LWh1bnQtJHtuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVpdKy9nLCBcIi1cIil9YDtcclxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJwcm9kdWN0aHVudFwiIGlkPVwiJHtpZH1cIj4gPHNwYW4gY2xhc3M9XCJwcm9kdWN0aHVudF9fY2xvc2VcIiBpZD1cIiR7aWR9LWNsb3NlXCI+w5c8L3NwYW4+PHAgY2xhc3M9XCJwcm9kdWN0aHVudF9fdGV4dFwiPiR7dGV4dH08L3A+IDxhIGhyZWY9XCIke3VybH1cIiBjbGFzcz1cInBoLWJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiPiR7YnV0dG9uVGV4dH08L2E+PC9kaXY+YDtcclxuICBjb25zdCBjc3MgPSBgXHJcbiAgLnBoLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjVkZWcsJHtjb2xvck9uZX0sJHtjb2xvclR3b30pO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgzMiw0Myw1NCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLnBoLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyNHB4IHJnYmEoMzIsNDMsNTQsLjQpO1xyXG4gIH1cclxuICAucHJvZHVjdGh1bnQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAke2JvdHRvbX07XHJcbiAgICByaWdodDogJHtyaWdodH07XHJcbiAgICBsZWZ0OiAke2xlZnR9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTYsIDMxLCA1OSwgMC4xNik7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHdpZHRoOiAke3dpZHRofTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNjU2MzhmO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gIH1cclxuICAucHJvZHVjdGh1bnRfX2Nsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5wcm9kdWN0aHVudF9fdGV4dCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByb2R1Y3RodW50IHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIC00cHggMTZweCByZ2JhKDE2LCAzMSwgNTksIDAuMTYpO1xyXG4gICAgfVxyXG4gIH1gO1xyXG4gIFxyXG4gIFxyXG4gIGlmKCF3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpIHx8IHNhdmVJbkNvb2tpZXMgPT0gZmFsc2UpIHtcclxuICAgIGNyZWF0ZU1vZGFsKGh0bWwpO1xyXG4gICAgYWRkQ2xvc2luZ0V2ZW50KGlkKTtcclxuICAgIGFkZFN0eWxlKGNzcyk7XHJcbiAgfVxyXG4gIC8qIGVzbGludC1lbmFibGUgKi9cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoaHRtbCkge1xyXG4gIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBwcm9tcHQuaW5uZXJIVE1MID0gaHRtbDtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb21wdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsb3NpbmdFdmVudChpZCkge1xyXG4gIGNvbnN0IHByb2R1Y3RodW50TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgY29uc3QgcHJvZHVjdGh1bnRDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfS1jbG9zZWApO1xyXG5cclxuICBwcm9kdWN0aHVudENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvZHVjdGh1bnRNb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9kdWN0aHVudE1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvZHVjdGh1bnRNb2RhbCk7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgdHJ1ZSk7XHJcbiAgICB9LCAzMDApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShjc3MpIHtcclxuICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuXHJcbiAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xyXG4gIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xyXG4gIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQvY3NzO2NoYXJzZXQ9VVRGLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChjc3MpKTtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxufVxyXG4iLCJpbXBvcnQgRmxvYXRpbmdQcm9tcHQgZnJvbSAnLi9mbG9hdGluZ1Byb21wdC5qcyc7XG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ1Byb21wdDtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbihmdW5jdGlvbih3aW5kb3cpe1xuICAgd2luZG93LkZsb2F0aW5nUHJvbXB0ID0gRmxvYXRpbmdQcm9tcHQ7XG4gfSkod2luZG93KVxuIC8qIGVzbGludC1lbmFibGUgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=