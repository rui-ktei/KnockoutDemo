ko.bindingHandlers.datepicker = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // This will be called when the binding is first applied to an element
    // Set up any initial state, event handlers, etc. here
    
    var value = valueAccessor();
    // Whether or not the supplied model property is observable, get its current value
    var date = ko.unwrap(value);
    // Set initial value
    $(element)
      .datepicker({ dateFormat: 'dd/mm/yy' })
      .val(date);
  }
};

ko.components.register('date-picker', {
  viewModel(params) {
    this.value = params.value;
  },

  template: require('html!templates/date-picker.html')
});
