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
  var id = "product-hunt-".concat(name.toLowerCase().replace(/[^a-zA-Z]+/g, "-"));
  var html = "<div class=\"producthunt\" id=\"".concat(id, "\"> <span class=\"producthunt__close\" id=\"").concat(id, "-close\">\xD7</span><p class=\"producthunt__text\">").concat(text, "</p> <a href=\"").concat(url, "\" class=\"ph-button\" target=\"_blank\">").concat(buttonText, "</a></div>");
  var css = "\n  .ph-button {\n    background: linear-gradient(65deg,".concat(colorOne, ",").concat(colorTwo, ");\n    font-family: sans-serif;\n    color: #fff;\n    display: block;\n    letter-spacing: 0;\n    font-weight: 700;\n    line-height: 16px;\n    font-size: 14px;\n    text-transform: uppercase;\n    text-decoration: none!important;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    justify-content: center;\n    padding: 16px 16px;\n    text-align: center;\n    white-space: nowrap;\n    box-shadow: 0 8px 24px rgba(32,43,54,.12);\n    transition: all .3s ease;\n    margin-top: 16px;\n    font-size: 14px;\n  }\n  .ph-button:hover {\n    box-shadow: 0 6px 24px rgba(32,43,54,.4);\n  }\n  .producthunt {\n    position: fixed;\n    background-color: #fff;\n    padding: 24px;\n    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);\n    z-index: 10;\n    font-size: 16px;\n    color: #65638f;\n    font-family: sans-serif;\n    opacity: 1;\n    transition: all .3s ease;\n  }\n  .producthunt__close {\n    position: absolute;\n    right: 16px;\n    top: 8px;\n    cursor: pointer;\n  }\n  .producthunt__text {\n    margin: 0;\n  }\n  @media (max-width: 768px) {\n    .producthunt {\n      width: calc(100% - 48px) !important;\n      bottom: 0 !important;\n      right: 0 !important;\n      left: 0 !important;\n      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16) !important;\n    }\n  }");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3Byb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQvLi9zcmMvZmxvYXRpbmdQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImZsb2F0aW5nUHJvbXB0Iiwib3B0aW9ucyIsIm5hbWUiLCJ1cmwiLCJ0ZXh0IiwiYnV0dG9uVGV4dCIsIndpZHRoIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwiY29sb3JPbmUiLCJjb2xvclR3byIsInNhdmVJbkNvb2tpZXMiLCJpZCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImh0bWwiLCJjc3MiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3JlYXRlTW9kYWwiLCJzZXRTdHlsZSIsImFkZENsb3NpbmdFdmVudCIsImFkZFN0eWxlIiwicHJvbXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwicHJvZHVjdGh1bnRNb2RhbCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJwcm9kdWN0aHVudENsb3NlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic2V0SXRlbSIsImxpbmtFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVhZCIsIkZsb2F0aW5nUHJvbXB0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxD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QWdCLENBQUNPLFVBQWpCLENBQTRCQyxXQUE1QixDQUF3Q1IsZ0JBQXhDO0FBQ0FiLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQnFCLE9BQXBCLENBQTRCM0IsRUFBNUIsRUFBZ0MsSUFBaEM7QUFDRCxLQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQsR0FORDtBQU9EOztBQUVELFNBQVNXLFFBQVQsQ0FBa0JQLEdBQWxCLEVBQXVCO0FBQ3JCLE1BQU13QixXQUFXLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFwQjtBQUVBYyxhQUFXLENBQUNDLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0MsWUFBaEM7QUFDQUQsYUFBVyxDQUFDQyxZQUFaLENBQXlCLE1BQXpCLEVBQWlDLFVBQWpDO0FBQ0FELGFBQVcsQ0FBQ0MsWUFBWixDQUF5QixNQUF6QixFQUFpQyxpQ0FBaUNDLGtCQUFrQixDQUFDMUIsR0FBRCxDQUFwRjtBQUNBUyxVQUFRLENBQUNrQixJQUFULENBQWNkLFdBQWQsQ0FBMEJXLFdBQTFCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIRDs7Ozs7QUFHQTs7OztBQUNBLENBQUMsVUFBU3ZCLE1BQVQsRUFBZ0I7QUFDZEEsUUFBTSxDQUFDMkIsY0FBUDtBQUNELENBRkYsRUFFSTNCLE1BRko7QUFHQyIsImZpbGUiOiJwcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInByb2R1Y3RodW50LWZsb2F0aW5nLXByb21wdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwcm9kdWN0aHVudC1mbG9hdGluZy1wcm9tcHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicHJvZHVjdGh1bnQtZmxvYXRpbmctcHJvbXB0XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxvYXRpbmdQcm9tcHQob3B0aW9ucykge1xyXG5cclxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gIGNvbnN0IG5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbiAgY29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcbiAgY29uc3QgdGV4dCA9IG9wdGlvbnMudGV4dCA/IG9wdGlvbnMudGV4dCA6IGBIaSwgZG8geW91IGxpa2UgJHtuYW1lfSA/IERvbid0IGZvcmdldCB0byBzaG93IHlvdXIgbG92ZSBvbiBQcm9kdWN0IEh1bnQg8J+agGA7XHJcbiAgY29uc3QgYnV0dG9uVGV4dCA9IG9wdGlvbnMuYnV0dG9uVGV4dCA/IG9wdGlvbnMuYnV0dG9uVGV4dCA6IGAke25hbWV9IG9uIFByb2R1Y3QgSHVudGA7XHJcbiAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gb3B0aW9ucy53aWR0aCA6ICczMDBweCc7XHJcbiAgY29uc3QgYm90dG9tID0gb3B0aW9ucy5ib3R0b20gPyBvcHRpb25zLmJvdHRvbSA6ICczMnB4JztcclxuICBjb25zdCByaWdodCA9IG9wdGlvbnMucmlnaHQgPyBvcHRpb25zLnJpZ2h0IDogJzMycHgnO1xyXG4gIGNvbnN0IGxlZnQgPSBvcHRpb25zLmxlZnQgPyBvcHRpb25zLmxlZnQgOiAndW5zZXQnO1xyXG4gIGNvbnN0IGNvbG9yT25lID0gb3B0aW9ucy5jb2xvck9uZSA/IG9wdGlvbnMuY29sb3JPbmUgOiAnI2RhNTUyZic7XHJcbiAgY29uc3QgY29sb3JUd28gPSBvcHRpb25zLmNvbG9yVHdvID8gb3B0aW9ucy5jb2xvclR3byA6ICcjZWE4ZTM5JztcclxuICBjb25zdCBzYXZlSW5Db29raWVzID0gdHlwZW9mIG9wdGlvbnMuc2F2ZUluQ29va2llcyAgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuc2F2ZUluQ29va2llcyA6IHRydWU7XHJcbiAgY29uc3QgaWQgPSBgcHJvZHVjdC1odW50LSR7bmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aXSsvZywgXCItXCIpfWA7XHJcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwicHJvZHVjdGh1bnRcIiBpZD1cIiR7aWR9XCI+IDxzcGFuIGNsYXNzPVwicHJvZHVjdGh1bnRfX2Nsb3NlXCIgaWQ9XCIke2lkfS1jbG9zZVwiPsOXPC9zcGFuPjxwIGNsYXNzPVwicHJvZHVjdGh1bnRfX3RleHRcIj4ke3RleHR9PC9wPiA8YSBocmVmPVwiJHt1cmx9XCIgY2xhc3M9XCJwaC1idXR0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke2J1dHRvblRleHR9PC9hPjwvZGl2PmA7XHJcbiAgY29uc3QgY3NzID0gYFxyXG4gIC5waC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDY1ZGVnLCR7Y29sb3JPbmV9LCR7Y29sb3JUd299KTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMzIsNDMsNTQsLjEyKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5waC1idXR0b246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjRweCByZ2JhKDMyLDQzLDU0LC40KTtcclxuICB9XHJcbiAgLnByb2R1Y3RodW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE2LCAzMSwgNTksIDAuMTYpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzY1NjM4ZjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICB9XHJcbiAgLnByb2R1Y3RodW50X19jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAucHJvZHVjdGh1bnRfX3RleHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9kdWN0aHVudCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiAwIC00cHggMTZweCByZ2JhKDE2LCAzMSwgNTksIDAuMTYpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfWA7XHJcbiAgXHJcbiAgXHJcbiAgaWYoIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkgfHwgc2F2ZUluQ29va2llcyA9PSBmYWxzZSkge1xyXG4gICAgY3JlYXRlTW9kYWwoaHRtbCk7XHJcbiAgICBzZXRTdHlsZShpZCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgpO1xyXG4gICAgYWRkQ2xvc2luZ0V2ZW50KGlkKTtcclxuICAgIGFkZFN0eWxlKGNzcyk7XHJcbiAgfVxyXG4gIC8qIGVzbGludC1lbmFibGUgKi9cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoaHRtbCkge1xyXG4gIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBwcm9tcHQuaW5uZXJIVE1MID0gaHRtbDtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb21wdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0eWxlKGlkLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCkge1xyXG4gIGNvbnN0IHByb2R1Y3RodW50TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gIHByb2R1Y3RodW50TW9kYWwuc3R5bGUuYm90dG9tID0gYm90dG9tO1xyXG4gIHByb2R1Y3RodW50TW9kYWwuc3R5bGUubGVmdCA9IGxlZnQgPyBsZWZ0IDogJ3Vuc2V0JztcclxuICBwcm9kdWN0aHVudE1vZGFsLnN0eWxlLnJpZ2h0ID0gcmlnaHQgPyByaWdodCA6ICd1bnNldCc7XHJcbiAgcHJvZHVjdGh1bnRNb2RhbC5zdHlsZS53aWR0aCA9IHdpZHRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbG9zaW5nRXZlbnQoaWQpIHtcclxuICBjb25zdCBwcm9kdWN0aHVudE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGNvbnN0IHByb2R1Y3RodW50Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH0tY2xvc2VgKTtcclxuXHJcbiAgcHJvZHVjdGh1bnRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHByb2R1Y3RodW50TW9kYWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJvZHVjdGh1bnRNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2R1Y3RodW50TW9kYWwpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIHRydWUpO1xyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUoY3NzKSB7XHJcbiAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcblxyXG4gIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcclxuICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKSk7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XHJcbn1cclxuIiwiaW1wb3J0IEZsb2F0aW5nUHJvbXB0IGZyb20gJy4vZmxvYXRpbmdQcm9tcHQuanMnO1xuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdQcm9tcHQ7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4oZnVuY3Rpb24od2luZG93KXtcbiAgIHdpbmRvdy5GbG9hdGluZ1Byb21wdCA9IEZsb2F0aW5nUHJvbXB0O1xuIH0pKHdpbmRvdylcbiAvKiBlc2xpbnQtZW5hYmxlICovXG4iXSwic291cmNlUm9vdCI6IiJ9