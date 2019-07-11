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
  var saveInCookies = typeof options.saveInCookies === 'boolean' ? options.saveInCookies : true;
  var target = options.target ? options.target : '_blank';
  var id = "product-hunt-".concat(name.toLowerCase().replace(/[^a-zA-Z]+/g, "-"));
  var html = "<div class=\"producthunt\" id=\"".concat(id, "\"> <span class=\"producthunt__close\" id=\"").concat(id, "-close\">\xD7</span><p class=\"producthunt__text\">").concat(text, "</p> <a href=\"").concat(url, "\" class=\"ph-button\" target=\"").concat(target, "\">").concat(buttonText, "</a></div>");
  var css = "\n  .ph-button {\n    background: linear-gradient(65deg,".concat(colorOne, ",").concat(colorTwo, ");\n    font-family: sans-serif;\n    color: #fff !important;\n    display: block;\n    letter-spacing: 0;\n    font-weight: 700;\n    line-height: 16px;\n    font-size: 14px;\n    text-transform: uppercase;\n    text-decoration: none!important;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    justify-content: center;\n    padding: 16px 16px;\n    text-align: center;\n    white-space: nowrap;\n    box-shadow: 0 8px 24px rgba(32,43,54,.12);\n    transition: all .3s ease;\n    margin-top: 16px;\n    font-size: 14px;\n  }\n  .ph-button:hover {\n    box-shadow: 0 6px 24px rgba(32,43,54,.4);\n  }\n  .producthunt {\n    position: fixed;\n    background-color: #fff;\n    padding: 24px;\n    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);\n    z-index: 10;\n    font-size: 16px;\n    color: #65638f;\n    font-family: sans-serif;\n    opacity: 1;\n    transition: all .3s ease;\n  }\n  .producthunt__close {\n    position: absolute;\n    right: 16px;\n    top: 8px;\n    cursor: pointer;\n  }\n  .producthunt__text {\n    margin: 0;\n  }\n  @media (max-width: 768px) {\n    .producthunt {\n      width: calc(100% - 48px) !important;\n      bottom: 0 !important;\n      right: 0 !important;\n      left: 0 !important;\n      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16) !important;\n    }\n  }");

  if (!window.localStorage.getItem(id) || saveInCookies == false) {
    createModal(html);
    setStyle(id, bottom, left, right, width);
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

function setStyle(id, bottom, left, right, width) {
  var producthuntModal = document.getElementById(id);
  producthuntModal.style.bottom = bottom;
  producthuntModal.style.left = left ? left : 'unset';
  producthuntModal.style.right = right ? right : 'unset';
  producthuntModal.style.width = width;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3Byb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvLi9zcmMvZmxvYXRpbmdQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImZsb2F0aW5nUHJvbXB0Iiwib3B0aW9ucyIsIm5hbWUiLCJ1cmwiLCJ0ZXh0IiwiYnV0dG9uVGV4dCIsIndpZHRoIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwiY29sb3JPbmUiLCJjb2xvclR3byIsInNhdmVJbkNvb2tpZXMiLCJ0YXJnZXQiLCJpZCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImh0bWwiLCJjc3MiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3JlYXRlTW9kYWwiLCJzZXRTdHlsZSIsImFkZENsb3NpbmdFdmVudCIsImFkZFN0eWxlIiwicHJvbXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwicHJvZHVjdGh1bnRNb2RhbCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJwcm9kdWN0aHVudENsb3NlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic2V0SXRlbSIsImxpbmtFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVhZCIsIkZsb2F0aW5nUHJvbXB0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUF4QyxFQUFpRCxZQUFNO0FBQ3JESixvQkFBZ0IsQ0FBQ0UsS0FBakIsQ0FBdUJHLE9BQXZCLEdBQWlDLENBQWpDO0FBQ0FDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZOLHNCQUFnQixDQUFDTyxVQUFqQixDQUE0QkMsV0FBNUIsQ0FBd0NSLGdCQUF4QztBQUNBYixZQUFNLENBQUNDLFlBQVAsQ0FBb0JxQixPQUFwQixDQUE0QjNCLEVBQTVCLEVBQWdDLElBQWhDO0FBQ0QsS0FIUyxFQUdQLEdBSE8sQ0FBVjtBQUlELEdBTkQ7QUFPRDs7QUFFRCxTQUFTVyxRQUFULENBQWtCUCxHQUFsQixFQUF1QjtBQUNyQixNQUFNd0IsV0FBVyxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7QUFFQWMsYUFBVyxDQUFDQyxZQUFaLENBQXlCLEtBQXpCLEVBQWdDLFlBQWhDO0FBQ0FELGFBQVcsQ0FBQ0MsWUFBWixDQUF5QixNQUF6QixFQUFpQyxVQUFqQztBQUNBRCxhQUFXLENBQUNDLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsaUNBQWlDQyxrQkFBa0IsQ0FBQzFCLEdBQUQsQ0FBcEY7QUFDQVMsVUFBUSxDQUFDa0IsSUFBVCxDQUFjZCxXQUFkLENBQTBCVyxXQUExQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEQ7Ozs7O0FBR0E7Ozs7QUFDQSxDQUFDLFVBQVN2QixNQUFULEVBQWdCO0FBQ2RBLFFBQU0sQ0FBQzJCLGNBQVA7QUFDRCxDQUZGLEVBRUkzQixNQUZKO0FBR0MiLCJmaWxlIjoicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInByb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsb2F0aW5nUHJvbXB0KG9wdGlvbnMpIHtcclxuXHJcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICBjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gIGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG4gIGNvbnN0IHRleHQgPSBvcHRpb25zLnRleHQgPyBvcHRpb25zLnRleHQgOiBgSGksIGRvIHlvdSBsaWtlICR7bmFtZX0gPyBEb24ndCBmb3JnZXQgdG8gc2hvdyB5b3VyIGxvdmUgb24gUHJvZHVjdCBIdW50IPCfmoBgO1xyXG4gIGNvbnN0IGJ1dHRvblRleHQgPSBvcHRpb25zLmJ1dHRvblRleHQgPyBvcHRpb25zLmJ1dHRvblRleHQgOiBgJHtuYW1lfSBvbiBQcm9kdWN0IEh1bnRgO1xyXG4gIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IG9wdGlvbnMud2lkdGggOiAnMzAwcHgnO1xyXG4gIGNvbnN0IGJvdHRvbSA9IG9wdGlvbnMuYm90dG9tID8gb3B0aW9ucy5ib3R0b20gOiAnMzJweCc7XHJcbiAgY29uc3QgcmlnaHQgPSBvcHRpb25zLnJpZ2h0ID8gb3B0aW9ucy5yaWdodCA6ICczMnB4JztcclxuICBjb25zdCBsZWZ0ID0gb3B0aW9ucy5sZWZ0ID8gb3B0aW9ucy5sZWZ0IDogJ3Vuc2V0JztcclxuICBjb25zdCBjb2xvck9uZSA9IG9wdGlvbnMuY29sb3JPbmUgPyBvcHRpb25zLmNvbG9yT25lIDogJyNkYTU1MmYnO1xyXG4gIGNvbnN0IGNvbG9yVHdvID0gb3B0aW9ucy5jb2xvclR3byA/IG9wdGlvbnMuY29sb3JUd28gOiAnI2VhOGUzOSc7XHJcbiAgY29uc3Qgc2F2ZUluQ29va2llcyA9IHR5cGVvZiBvcHRpb25zLnNhdmVJbkNvb2tpZXMgID09PSAnYm9vbGVhbicgPyBvcHRpb25zLnNhdmVJbkNvb2tpZXMgOiB0cnVlO1xyXG4gIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0ID8gb3B0aW9ucy50YXJnZXQgOiAnX2JsYW5rJztcclxuICBjb25zdCBpZCA9IGBwcm9kdWN0LWh1bnQtJHtuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVpdKy9nLCBcIi1cIil9YDtcclxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJwcm9kdWN0aHVudFwiIGlkPVwiJHtpZH1cIj4gPHNwYW4gY2xhc3M9XCJwcm9kdWN0aHVudF9fY2xvc2VcIiBpZD1cIiR7aWR9LWNsb3NlXCI+w5c8L3NwYW4+PHAgY2xhc3M9XCJwcm9kdWN0aHVudF9fdGV4dFwiPiR7dGV4dH08L3A+IDxhIGhyZWY9XCIke3VybH1cIiBjbGFzcz1cInBoLWJ1dHRvblwiIHRhcmdldD1cIiR7dGFyZ2V0fVwiPiR7YnV0dG9uVGV4dH08L2E+PC9kaXY+YDtcclxuICBjb25zdCBjc3MgPSBgXHJcbiAgLnBoLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjVkZWcsJHtjb2xvck9uZX0sJHtjb2xvclR3b30pO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDMyLDQzLDU0LC4xMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAucGgtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggcmdiYSgzMiw0Myw1NCwuNCk7XHJcbiAgfVxyXG4gIC5wcm9kdWN0aHVudCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNiwgMzEsIDU5LCAwLjE2KTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2NTYzOGY7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5wcm9kdWN0aHVudF9fY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnByb2R1Y3RodW50X190ZXh0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucHJvZHVjdGh1bnQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCkgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogMCAtNHB4IDE2cHggcmdiYSgxNiwgMzEsIDU5LCAwLjE2KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1gO1xyXG4gIFxyXG4gIFxyXG4gIGlmKCF3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpIHx8IHNhdmVJbkNvb2tpZXMgPT0gZmFsc2UpIHtcclxuICAgIGNyZWF0ZU1vZGFsKGh0bWwpO1xyXG4gICAgc2V0U3R5bGUoaWQsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoKTtcclxuICAgIGFkZENsb3NpbmdFdmVudChpZCk7XHJcbiAgICBhZGRTdHlsZShjc3MpO1xyXG4gIH1cclxuICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKGh0bWwpIHtcclxuICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgcHJvbXB0LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9tcHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdHlsZShpZCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgpIHtcclxuICBjb25zdCBwcm9kdWN0aHVudE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cclxuICBwcm9kdWN0aHVudE1vZGFsLnN0eWxlLmJvdHRvbSA9IGJvdHRvbTtcclxuICBwcm9kdWN0aHVudE1vZGFsLnN0eWxlLmxlZnQgPSBsZWZ0ID8gbGVmdCA6ICd1bnNldCc7XHJcbiAgcHJvZHVjdGh1bnRNb2RhbC5zdHlsZS5yaWdodCA9IHJpZ2h0ID8gcmlnaHQgOiAndW5zZXQnO1xyXG4gIHByb2R1Y3RodW50TW9kYWwuc3R5bGUud2lkdGggPSB3aWR0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xvc2luZ0V2ZW50KGlkKSB7XHJcbiAgY29uc3QgcHJvZHVjdGh1bnRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICBjb25zdCBwcm9kdWN0aHVudENsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9LWNsb3NlYCk7XHJcblxyXG4gIHByb2R1Y3RodW50Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9kdWN0aHVudE1vZGFsLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb2R1Y3RodW50TW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9kdWN0aHVudE1vZGFsKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCB0cnVlKTtcclxuICAgIH0sIDMwMCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKGNzcykge1xyXG4gIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5cclxuICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XHJcbiAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9jc3M7Y2hhcnNldD1VVEYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNzcykpO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xyXG59XHJcbiIsImltcG9ydCBGbG9hdGluZ1Byb21wdCBmcm9tICcuL2Zsb2F0aW5nUHJvbXB0LmpzJztcbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nUHJvbXB0O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuKGZ1bmN0aW9uKHdpbmRvdyl7XG4gICB3aW5kb3cuRmxvYXRpbmdQcm9tcHQgPSBGbG9hdGluZ1Byb21wdDtcbiB9KSh3aW5kb3cpXG4gLyogZXNsaW50LWVuYWJsZSAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==