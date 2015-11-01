ko.bindingHandlers.datepicker = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // This will be called when the binding is first applied to an element
    // Set up any initial state, event handlers, etc. here
    
    var value = valueAccessor();
    // Whether or not the supplied model property is observable, get its current value
    var props = ko.unwrap(value);
    var format = props.format || 'dd/mm/yy';
    var value = ko.unwrap(props.value);
    // Set initial value
    $(element)
      .datepicker({ dateFormat: format })
      .val(value);
  }
};

ko.components.register('date-picker', {
  viewModel(params) {
    this.props = {
      value: params.value,
      format: params.format
    }
    this.attr = params.attr;
  },

  template: require('html!templates/date-picker.html')
});
