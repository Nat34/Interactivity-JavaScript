var main = function () {
	"use strict";

	$(".comment-input button").on("click", function (event) {
		var $new_comment = $("<p>");
			comment_text = $(".comment-input input").val();

		$new_comment.text(comment text);
		
	});
};

$(document).ready(main);

/* 

* variable declaration and assignment
* variable name $new_comment
* <p> paragraph element as JQuery object 
* Review: new paragraph element created then text content of the <p> is being changed to "this is a new comment")

*/

/* 
Interactivity - Handling click events

* action: attaching an **event listener** to the DOM element (.comment-input button) referenced in the call to the function
* Jquery: target elements in the DOM using CSS selectors
* JavaScript: manipulate elements in the DOM
* **When the user clicks the +, print "Hello, World!" to the console**
* When the user [event for which we are listening on], then [function] occurs. event then function
* the user does something and the page reacts: inter**activity**

New things:
event listener
$ function
appends
.on
.append
.text
refactor

Removed:
console.log("Hello, World!");
$(".comments").append("<p>this is a new comment</p>");
*/

/* Interactivity - Dynamically manipulating the DOM 

* create a variable
* variable declartion and assignment
* variable name: *$new_comment* can be anything; but if the variable will hold a Jquery object use the `$` as the first character
* 
*/

