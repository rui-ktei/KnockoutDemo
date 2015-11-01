ko.bindingHandlers.bulk = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var value = valueAccessor();
    var bulk = ko.unwrap(value);
    var canAdd = bulk.canAdd;
    var addNew = bulk.addNew;

    var entries = allBindings.get('foreach');

    var vm = bindingContext.$data;
    vm.lastCanAdd = ko.computed(function() {
      var lastEntry = entries()[entries().length - 1];
      return ko.unwrap(lastEntry[canAdd]);
    });
    vm.lastCanAdd.subscribe(function(newValue) {
      if (newValue) {
        var newEntry = addNew();
        entries.push(newEntry);
      }
    });
  }
};
