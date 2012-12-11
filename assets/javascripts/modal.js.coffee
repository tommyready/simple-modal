modal = (->
  method = {}
  $overlay = $('<div id="overlay"></div')
  $modal =  $('<div id="modal"></div>')
  $content = $('<div id="modal-content"></div>')
  $close = $('<a id="close" href="#">Close</a>')

  method.center = ->
    top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2
    left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2

    $modal.css
      top: top + $(window).scrollTop()
      left: left + $(window).scrollTop()

  method.open = (settings) ->
    $content.empty().append(settings.content)
    $modal.css
      width: settings.width or 'auto'
      height: settings.height or 'auto'
    method.center()
    $(window).bind 'resize.modal', method.center
    $modal.show()
    $overlay.show()

  method.close = ->
    $modal.hide()
    $overlay.hide()
    $content.empty()
    $(window).unbind('resize.modal')

  $modal.hide()
  $overlay.hide()
  $modal.append($content, $close)

  $(document).ready ->
    $('body').append($overlay, $modal)

  $close.on 'click', (e) ->
    e.preventDefault()
    method.close()

  $overlay.on 'click', (e) ->
    e.preventDefault()
    modal.close()

  $(document).keyup (e) ->
    modal.close() if e.keyCode is 27

  method
)
