var main = function () {
	"use strict";

	$(".comment-input button").on("click", function (event) {
		console.log("Hello, World!");
	});
};

$(document).ready(main);

/* 
Interactivity - Handling click events

* action: attaching an **event listener** to the DOM element (.comment-input button) referenced in the call to the function
* Jquery: target elements in the DOM using CSS selectors
* JavaScript: manipulate elements in the DOM
* **When the user clicks the +, print "Hello, World!" to the console**
* When the user [event for which we are listening on], then [function] occurs. event then function
* the user does something and the page reacts: inter**activity**

Things:
event listener
$ function
appends
*/