var main = function () { //  entry point for the execution
	"use strict";

var $newUL = $("<ul>"); //create a new ul element
var $newParagraphElement = $("<p>"); //create a new element
	
	$newParagraphElement.text("this is a paragraph");
	$("footer").append($newParagraphElement); //poetic...

var $listItemOne = $("<li>").text("this is the first list item"); // using the .text function call to add text
var $listItemTwo = $("<li>").text("second list item");
var $listItemThree = $("<li>").text("OMG third list item");

	$newUL.append($listItemOne); //append these elements to the ul element
	$newUL.append($listItemTwo);
	$newUL.append($listItemThree);
	$("main").append($newUL); //poetic...
	$("ul li:nth-child(2)").remove(); //use remove function on selector, removes second list item

}
	
$(document).ready(main);

/*DOM Manipulation

###### Recap
* CSS selectors as JQuery selectors: $("h1");

###### Manipulation: Adding elements to the DOM
* Use `$` operator to create an element `var $newUL = $("<p>");` for example
* Instead of sending in a selector `$("h1);`, use tag: `$("<p>")`
* Use a function (`.text` for example) to add text to the `<p>` element

`$("footer").append($newParagraphElement);`
* "we can add it (<p>) to the page(index.html) by selecting the element to which we want to append it("footer")
and then calling the append function (.append) on the JQuery object ($newParagraphElement)" ..this is poetic


*/