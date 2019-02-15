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
  /* eslint-enable */

  var prompt = document.createElement('div');
  prompt.innerHTML = html;
  document.body.appendChild(prompt);
  var producthuntModal = document.getElementById(id);
  var producthuntCloseButton = document.getElementById("".concat(id, "-close"));
  producthuntCloseButton.addEventListener('click', function () {
    producthuntModal.parentNode.removeChild(producthuntModal);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3Byb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvLi9zcmMvZmxvYXRpbmdQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImZsb2F0aW5nUHJvbXB0IiwibmFtZSIsInVybCIsInRleHQiLCJidXR0b25UZXh0IiwiY29sb3JPbmUiLCJjb2xvclR3byIsImlkIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaHRtbCIsInByb21wdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInByb2R1Y3RodW50TW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInByb2R1Y3RodW50Q2xvc2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwid2luZG93IiwiRmxvYXRpbmdQcm9tcHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZSxTQUFTQSxjQUFULENBQXdCQyxJQUF4QixFQUNiQyxHQURhLEVBTWI7QUFBQSxNQUpBQyxJQUlBLGlHQUowQkYsSUFJMUI7QUFBQSxNQUhBRyxVQUdBLGlGQUhnQkgsSUFHaEI7QUFBQSxNQUZBSSxRQUVBLHVFQUZXLFNBRVg7QUFBQSxNQURBQyxRQUNBLHVFQURXLFNBQ1g7O0FBQ0E7QUFDQSxNQUFNQyxFQUFFLDBCQUFtQk4sSUFBSSxDQUFDTyxXQUFMLEdBQW1CQyxPQUFuQixDQUEyQixhQUEzQixFQUEwQyxHQUExQyxDQUFuQixDQUFSO0FBQ0EsTUFBTUMsSUFBSSw2Q0FBbUNILEVBQW5DLHlEQUFnRkEsRUFBaEYsZ0VBQWtJSixJQUFsSSw0QkFBdUpELEdBQXZKLHVFQUFrTkUsVUFBbE4sZUFBVjtBQUNBOztBQUVBLE1BQU1PLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFFQUYsUUFBTSxDQUFDRyxTQUFQLEdBQW1CSixJQUFuQjtBQUNBRSxVQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsTUFBMUI7QUFFQSxNQUFNTSxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDTSxjQUFULENBQXdCWCxFQUF4QixDQUF6QjtBQUNBLE1BQU1ZLHNCQUFzQixHQUFHUCxRQUFRLENBQUNNLGNBQVQsV0FBMkJYLEVBQTNCLFlBQS9CO0FBRUFZLHdCQUFzQixDQUFDQyxnQkFBdkIsQ0FBd0MsT0FBeEMsRUFBaUQsWUFBTTtBQUNyREgsb0JBQWdCLENBQUNJLFVBQWpCLENBQTRCQyxXQUE1QixDQUF3Q0wsZ0JBQXhDO0FBQ0QsR0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7Ozs7O0FBR0E7Ozs7QUFDQSxDQUFDLFVBQVNNLE1BQVQsRUFBZ0I7QUFDZEEsUUFBTSxDQUFDQyxjQUFQO0FBQ0QsQ0FGRixFQUVJRCxNQUZKO0FBR0MiLCJmaWxlIjoicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInByb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsb2F0aW5nUHJvbXB0KG5hbWUsXHJcbiAgdXJsLFxyXG4gIHRleHQgPSBgSGksIGRvIHlvdSBsaWtlICR7bmFtZX0gPyBEb24ndCBmb3JnZXQgdG8gc2hvdyB5b3VyIGxvdmUgb24gUHJvZHVjdCBIdW50IPCfmoBgLFxyXG4gIGJ1dHRvblRleHQgPSBgJHtuYW1lfSBvbiBQcm9kdWN0IEh1bnRgLFxyXG4gIGNvbG9yT25lID0gJyNkYTU1MmYnLFxyXG4gIGNvbG9yVHdvID0gJyNlYThlMzknXHJcbikge1xyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgY29uc3QgaWQgPSBgcHJvZHVjdC1odW50LSR7bmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aXSsvZywgXCItXCIpfWA7XHJcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwicHJvZHVjdGh1bnRcIiBpZD1cIiR7aWR9XCI+IDxzcGFuIGNsYXNzPVwicHJvZHVjdGh1bnRfX2Nsb3NlXCIgaWQ9XCIke2lkfS1jbG9zZVwiPsOXPC9zcGFuPjxwIGNsYXNzPVwicHJvZHVjdGh1bnRfX3RleHRcIj4ke3RleHR9PC9wPiA8YSBocmVmPVwiJHt1cmx9XCIgY2xhc3M9XCJidXR0b24gcHJvZHVjdGh1bnRfX2J1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiPiR7YnV0dG9uVGV4dH08L2E+PC9kaXY+YDtcclxuICAvKiBlc2xpbnQtZW5hYmxlICovXHJcblxyXG4gIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBwcm9tcHQuaW5uZXJIVE1MID0gaHRtbDtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb21wdCk7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RodW50TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgY29uc3QgcHJvZHVjdGh1bnRDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfS1jbG9zZWApO1xyXG5cclxuICBwcm9kdWN0aHVudENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvZHVjdGh1bnRNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2R1Y3RodW50TW9kYWwpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgRmxvYXRpbmdQcm9tcHQgZnJvbSAnLi9mbG9hdGluZ1Byb21wdC5qcyc7XG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ1Byb21wdDtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbihmdW5jdGlvbih3aW5kb3cpe1xuICAgd2luZG93LkZsb2F0aW5nUHJvbXB0ID0gRmxvYXRpbmdQcm9tcHQ7XG4gfSkod2luZG93KVxuIC8qIGVzbGludC1lbmFibGUgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=