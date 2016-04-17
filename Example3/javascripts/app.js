var main = function () { //  entry point for the execution
	"use strict";

var $newUL = $("<ul>"); //create a new ul element
var $newParagraphElement = $("<p>"); //create a new element
$newParagraphElement.text("this is a paragraph");
	$("footer").append($newParagraphElement); 
}
	
$(document).ready(main);

/*DOM Manipulation

###### Recap
* Used selectors to add elements to the DOM
* Use $ operator to create an element

###### Manipulation
* Use $ operator to create an element

`$("footer").append($newParagraphElement);`
* "we can add it to the page(index.html) by selecting the element to which we want to append it("footer")
and then calling the append function (.append) on the JQuery object ($newParagraphElement)" ..this is poetic
*/