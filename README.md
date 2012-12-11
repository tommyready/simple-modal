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
<<<<<<< HEAD
settings object that can have the following properties:
=======
settings object that has the following properties:
>>>>>>> f9097442be6c780e478afdbecca173560e8189d2
- content: the content inside the modal, it can be text or a HTML element
- width: the width of the modal container, its an integer
- height: the height of the modal containes, its also an integer
