ko.bindingHandlers.datepicker = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // This will be called when the binding is first applied to an element
    // Set up any initial state, event handlers, etc. here
    
    var value = valueAccessor();
    // Whether or not the supplied model property is observable, get its current value
    var valueUnwrapped = ko.unwrap(value);
    // Set initial value
    $(element).datepicker().val(valueUnwrapped);
  },

  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // This will be called once when the binding is first applied to an element,
    // and again whenever any observables/computeds that are accessed change
    // Update the DOM element based on the supplied values here.
  }
};

ko.components.register('date-picker', {
  viewModel(params) {
    this.value = params.value;
  },

  template: require('html!templates/date-picker.html')
});
