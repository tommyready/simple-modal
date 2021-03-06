var modal = (function() {
  var method = {},
    $overlay,
    $modal,
    $content,
    $close;

method.center = function(){
  var top, left;
  top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
  left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

  $modal.css({
    top: top + $(window).scrollTop(),
    left: left + $(window).scrollLeft()
  });
};

method.open = function(settings){
  $content.empty().append(settings.content);
  $modal.css({
    width: settings.width || 'auto',
    height: settings.height || 'auto'
  });

  $content.css({
    width: settings.width - 40 || 'auto',
    height: settings.height - 40 || 'auto'
  });

  method.center();
  $(window).bind('resize.modal', method.center);
  $modal.fadeIn();
  $overlay.fadeIn();
};

method.close = function(){
  $modal.fadeOut();
  $overlay.fadeOut();
  $content.empty();
  $(window).unbind('resize.modal');
};

$overlay = $('<div id="overlay"></div>');
$modal = $('<div id="modal"></div>');
$content = $('<div id="modal-content"></div>');
$close = $('<a id="close" href="#">&times;</a>');

$modal.hide();
$overlay.hide();
$modal.append($content, $close);

$(document).ready(function(){
  $('body').append($overlay, $modal);
});

$close.on('click',function(e){
  e.preventDefault();
  method.close();
});

$overlay.on('click', function(e) {
  e.preventDefault();
  modal.close()
});

$(document).keyup(function(e) {
  if (e.keyCode == 27)
    modal.close();
});

return method;
}());
