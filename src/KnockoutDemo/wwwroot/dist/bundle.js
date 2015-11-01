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

	__webpack_require__(8);

	__webpack_require__(3);

	__webpack_require__(5);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	ko.bindingHandlers.browser = {
	  update: function update(element, valueAccessor) {
	    var value = valueAccessor();
	    // Whether or not the supplied model property is observable, get its current value
	    var browserName = ko.unwrap(value);
	
	    if (browserName == 'IE') {
	      $(element).text(browserName + ' sucks!');
	    } else {
	      $(element).text(browserName + ' rocks!');
	    }
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	ko.components.register('hello-world', {
	  template: __webpack_require__(4)
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello World!</h1>\r\n";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	ko.bindingHandlers.datepicker = {
	  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
	    // This will be called when the binding is first applied to an element
	    // Set up any initial state, event handlers, etc. here
	
	    var value = valueAccessor();
	    // Whether or not the supplied model property is observable, get its current value
	    var date = ko.unwrap(value);
	    // Set initial value
	    $(element).datepicker({ dateFormat: 'dd/mm/yy' }).val(date);
	  }
	};
	
	ko.components.register('date-picker', {
	  viewModel: function viewModel(params) {
	    this.value = params.value;
	  },
	
	  template: __webpack_require__(6)
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<input data-bind=\"datepicker: value\" />\r\n";

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	ko.bindingHandlers.bulk = {
	  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
	    var value = valueAccessor();
	    var bulk = ko.unwrap(value);
	    var canAdd = bulk.canAdd;
	    var addNew = bulk.addNew;
	
	    var entries = allBindings.get('foreach');
	
	    var vm = bindingContext.$data;
	    vm.lastCanAdd = ko.computed(function () {
	      var lastEntry = entries()[entries().length - 1];
	      return ko.unwrap(lastEntry[canAdd]);
	    });
	    vm.lastCanAdd.subscribe(function (newValue) {
	      if (newValue) {
	        var newEntry = addNew();
	        entries.push(newEntry);
	      }
	    });
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map