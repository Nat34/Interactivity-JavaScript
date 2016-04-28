###### JQuery Generalizations

* DOM Manipulations: adding and removing an element
* CSS selectors as JQuery selectors: `$("h1");`
* * Use `$` operator to create an element `var $newUL = $("<p>");` for example
* Instead of sending in a selector `$("h1);`, use tag: `$("<p>")`
* Use a function`.text` for example to add text to the `<p>` element

```
var main = function () { 
	"use strict";

	var $newUL = $("<ul>"); 
	var $newParagraphElement = $("<p>");
	
	$newParagraphElement.text("this is a paragraph");
	$("footer").append($newParagraphElement);
```
###### What's goin on up there?
* `var main = function () {` //  entry point for the execution
* `var $newUL = $("<ul>");` //create a new ul element
* `var $newParagraphElement = $("<p>");` //create a new element
* `$newParagraphElement.text("this is a paragraph");` //add text to `<p>` element

###### These new elements are alllll flooooatttting in space right now until!
* `$("footer").append($newParagraphElement);` //poetic!
* We can add it `<p>` to the page `index.html` by selecting the element to which we want to append it `footer`
and then calling the append function `.append` on the JQuery object `$newParagraphElement` :blush:

###### Manipulating Content
* use the `parent` function to select the parent of a JQuery object
* use the `is` function to test a selector against the current JQuery object

```
// test whether the parents of the $me JQuery object
// is the first child of its parent
if ($me.parent().is(":first-child")) {
	console.log("MY PARENT IS A FIRST CHILD!!");
} else {
	console.log("my parent is a not a first child")
}
```

