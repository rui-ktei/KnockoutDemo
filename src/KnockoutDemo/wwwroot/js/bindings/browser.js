ko.bindingHandlers.browser = {
  update: function(element, valueAccessor) {
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
