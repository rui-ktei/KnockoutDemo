import { Converter } from 'showdown';

ko.bindingHandlers.markdown = {
  update: function(element, valueAccessor) {
    var value = valueAccessor();
    var markdown = ko.unwrap(value);

    var converter = new Converter();
    var html = converter.makeHtml(markdown);

    $(element).html(html);
  }
};
