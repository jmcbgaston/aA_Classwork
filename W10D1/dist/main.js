/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(htmlEleArray) {\n        this.htmlEleArray = htmlEleArray;\n    }\n}\n\nDOMNodeCollection.prototype.html = function(stringArg) {\n    stringArg = stringArg || null;\n\n    if (stringArg === null) {\n        return this.htmlEleArray[0].innerHTML;\n    } else {\n        return this.htmlEleArray[0].innerHTML = stringArg;\n    }\n}\n\nDOMNodeCollection.prototype.empty = function() {\n    this.htmlEleArray[0].innerHTML = \"\";\n    return this;\n}\n\nDOMNodeCollection.prototype.append = function(arg) {\n    // arg === $l() / HTMLElement / 'string'\n    // if (arg instanceof $l || arg instanceof HTMLElement || arg instanceof String) {\n    if (typeof arg === 'string' || arg === 'function' || arg instanceof HTMLElement) {\n        this.htmlEleArray.push(arg);\n        return this;\n    }\n}\n\nDOMNodeCollection.prototype.attr = function() {\n// sets a kv pair on html element\n// input.attr() => type : submit\n}\n\nDOMNodeCollection.prototype.addClass = function(arg) {\n    this.htmlEleArray[0].classList.add(arg)\n\n}\n\nDOMNodeCollection.prototype.removeClass = function(arg) {\n    this.htmlEleArray[0].classList.remove(arg)\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n// console.log('hi');\n\nfunction $l(selector) {\n    if (selector instanceof HTMLElement) {\n        return new DOMNodeCollection([selector])\n    } else {\n        let nodeList = document.querySelectorAll(`${selector}`);\n        let arrList = Array.from(nodeList);\n        return arrList;\n    }\n}\n// selector is expected to be a css selector that we can use to identify nodes on a page\n\n// use\n// elementList = parentNode.querySelectorAll(selectors);\n// htmlList = document.querySelectorAll('html');\n// headList = document.querySelectorAll('head');\n// ulList = document.querySelectorAll('ul');\n// pList = document.querySelectorAll('p');\n// to get an array like object (specifically a NodeList) that matches the selector using the native JavaScript API.\n\nwindow.DOMNodeCollection = DOMNodeCollection;\nwindow.$l = $l;\n\n// Phase1\n// Create a a class to hold DOM nodes and offer convenient methods for traversal and manipulation.\n\n// empty\n// remove\n// attr\n// addClass\n// removeClass\n// html\n// find\n// children\n// parent\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });