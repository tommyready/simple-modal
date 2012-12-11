### Simple Modal Demo

To use just call an element with jQuery, e.g.
a click event to open a modal window:

```javascript
$('a#modal').on('click', function(e){
  e.preventDefault();
  modal.open({
    content: "Content inside the modal"
  });
});
```
The modal.open() function takes an optional
settings object that can have the following properties:
- content: the content inside the modal, it can be text or a HTML element
- width: the width of the modal container, its an integer
- height: the height of the modal containes, its also an integer

Clicking the X button, pressing the ESC key and clicking outside the modal window closes it.

Credits go to [Jack Moore](http://www.jacklmoore.com/notes/jquery-modal-tutorial)
