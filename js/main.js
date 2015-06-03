var $ = require('jquery');

$(document).ready(function() {
  $('[contenteditable]').on('keyup', function() {
    $('pre code').html($(this).html());
    $('pre code').each(function() {
      hljs.highlightBlock(code);
    });
  });
});
