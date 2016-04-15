var main = function () { /* entry point for the execution */
	"use strict";

	$(".comment-input button").on("click", function (event) { /*interactivity: when the user 'clicks' something happens*/
		var $new_comment;

		if ($(".comment-input input").val() !== "") {
		 	$new_comment = $("<p>").text($(".comment-input input").val()); /* creates <p> as a JQuery object */
			$(".comments").append($new_comment);
			$(".comment-input input").val(""); /*call the val method of the JQuery object with an explicit value, ie. send empty string ("") to the val method*/	
		}
	});

	$(".comment-input input").on("keypress", function (event) {
				console.log("hello, world!");
	});
};

$(document).ready(main);

/*

Interactivity - Basic JavaScript App Skelton

var main = function () {
	"use strict";

1. Defines a global function called `main` -entry point for the execution
2. uses JQuery to set up the execution of the `main` function once the HTML document is fully loaded and ready



Interactivity - Handling click events

## What's happening here?
When the user clicks the +, print "Hello, World!" to the console

```

$(".comment-input button").on("click", function (event) {

```

* action: attaching an **event listener** to the DOM element (.comment-input button) referenced in the call to the function
* Jquery: target elements in the DOM using CSS selectors
* JavaScript: manipulate elements in the DOM
* When the user [event for which we are listening on], then [function] occurs. event then function
* the user does something and the page reacts: inter**activity**

New things:
event (event handler that listens) listener
$ function
appends
.on
.append
.text
refactor
.val() function, i.e.value
user experience problems: clearing the input box, making the Enter key work *as expected*

Removed:
console.log("Hello, World!");
$(".comments").append("<p>this is a new comment</p>");

Interactivity - Dynamically manipulating the DOM 

* create a variable
* variable declartion and assignment
* variable name: *$new_comment* can be anything; but if the variable will hold a Jquery object use the `$` as the first character
* 
 

# Review: What is happening?
* variable declaration and assignment
* variable name $new_comment
* <p> paragraph element as JQuery object

# Review: What is happening?
* New paragraph element created then text content of the <p> is being changed to "this is a new comment")

# Next: Get the content out! 
* Store content of the input box in the new variable using a JQuery function that returns the content of an input box
* val function, short for value
* Review: what are we doing? We're going to make the content of the input box the text value of our new paragraph element.



Squashing the bug

bug: JQuery program adds an empty p element to the DOM
squash: insert a check to see if the content of the input box is empty before doing anything with it.
* `if` statement: `if ($(".comment-input input").val() !== "") {`
if: confirms the content of the input box does *not* equal the empty string
* NOTICE: variable declaration moved above the if statement. keep variables declared at the top of your function definitions.

 Clearing out the inbox 
send the empty string to val method

Making the Enter key work as expected
add an additional event handler that listens for the keypress event on the input element itself

```
$(".comment-input input").on("keypress", function (event) {

This is the `input` element: `$(".comment-input input")`
This is the event: `on("keypress"`
Listener is setup to listen for the keypress event
*/