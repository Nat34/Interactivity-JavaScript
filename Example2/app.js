var main = function () { //  entry point for the execution
	"use strict";

	var addCommentFromInputBox = function () { // declaring a variable to store the function and then define the function
		var $new_comment;

		if ($(".comment-input input").val() !== "") {
		 	$new_comment = $("<p>").text($(".comment-input input").val()); // creates <p> as a JQuery object
		 	$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val(""); 	
		}
	};

	$(".comment-input button").on("click", function (event) { //  interactivity..when the user 'clicks' something happens
		addCommentFromInputBox(); // call the function in each of the event listens

	});

	$(".comment-input input").on("keypress", function (event) { 
		if (event.keyCode === 13) {
			addCommentFromInputBox(); 
		}
	});
};

$(document).ready(main);

/*


Selectors

*Think of JQuery selectors as CSS selectors that return DOM elements we can manipulate in our JavaScript
* We can use any CSS selector as a JQuery selector 
* `$("h1");`  //selects all of the h1 elements
* Not all JQuery selectors are identical to CSS selectors
* JQuery has many pseudoclasses and pseudoelements not available in CSS
* Certain CSS identifiers have to be represented differently when used in JQuery
*/