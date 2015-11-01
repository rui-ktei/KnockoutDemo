ko.bindingHandlers.datepicker = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // This will be called when the binding is first applied to an element
    // Set up any initial state, event handlers, etc. here
    
    var value = valueAccessor();
    // Whether or not the supplied model property is observable, get its current value
    var props = ko.unwrap(value);
    var format = ko.unwrap(props.format) || 'dd/mm/yy';
    var defaultDate = ko.unwrap(props.defaultDate) || new Date()
    var value = ko.unwrap(props.value);
    // Set initial values
    $(element)
      .datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: format,
        defaultDate: defaultDate
      })
      .val(value);
  }
};

ko.components.register('date-picker', {
  viewModel(params) {
    this.props = {
      value: params.value,
      format: params.format,
      defaultDate: params.defaultDate
    }
    this.attr = $.extend({
      placeholder: 'DD/MM/YYYY'
    }, params.attr);
  },

  template: require('html!templates/date-picker.html')
});
