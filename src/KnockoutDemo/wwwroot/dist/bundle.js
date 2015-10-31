/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(4);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	ko.components.register('hello-world', {
	  viewModel: function viewModel() {},
	
	  template: __webpack_require__(3)
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello World!</h1>\r\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	ko.bindingHandlers.datepicker = {
	  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
	    // This will be called when the binding is first applied to an element
	    // Set up any initial state, event handlers, etc. here
	
	    var value = valueAccessor();
	    // Whether or not the supplied model property is observable, get its current value
	    var valueUnwrapped = ko.unwrap(value);
	    // Set initial value
	    $(element).datepicker().val(valueUnwrapped);
	  },
	
	  update: function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
	    // This will be called once when the binding is first applied to an element,
	    // and again whenever any observables/computeds that are accessed change
	    // Update the DOM element based on the supplied values here.
	  }
	};
	
	ko.components.register('date-picker', {
	  viewModel: function viewModel(params) {
	    this.value = params.value;
	  },
	
	  template: __webpack_require__(5)
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<input data-bind=\"datepicker: value\" />\r\n";

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map