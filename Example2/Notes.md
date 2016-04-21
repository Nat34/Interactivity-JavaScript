###### Interactivity - Basic JavaScript App SkelEton

```
var main = function () {
	"use strict";
```

1. Defines a global function called `main` -entry point for the execution
2. uses JQuery to set up the execution of the `main` function once the HTML document is fully loaded and ready

###### Interactivity - Handling click events

- What's happening here?
When the user clicks the +, print "Hello, World!" to the console

```
$(".comment-input button").on("click", function (event) {
	console.log("Hello, World!");
	});
};
```
* action: attaching an *event listener* to the DOM element (.comment-input button) referenced in the call to the function
* Jquery: target elements in the DOM using CSS selectors
* JavaScript: manipulate elements in the DOM
* When the user clicks the +, print "Hello, World!" to the console
* When [event for which we are listening on] first, then [function] occurs. event then function
* the user does something and the page reacts: inter*activity*

###### New things:
- event listener
- $ function
- appends
- .on
- .append
- .text
- refactor
- `.val()` function, i.e.value
- user experience problems: clearing the input box, making the Enter key work *as expected*
- C in keyCode is capitalized. if variable name has multiple words, capitalize each word after the first word
- `+` sign concatentates: ie `"this is the keyCode" + event.keyCode`

###### Interactivity - Dynamically manipulating the DOM 

* create a variable
* variable declartion and assignment
* variable name: *$new_comment* can be anything; but if the variable will hold a Jquery object use the `$` as the first character

```
var main = function () {
	"use strict";

	$(".comment-input button").on("click", function (event) {
		var $new_comment = $("<p>");
			comment_text = $(".comment-input input").val();

		$new_comment.text(comment text);

		$(".comments").append($new_comments);
		
	});
};

$(document).ready(main);
```
###### Review: What is happening?
* variable declaration and assignment
* variable name `$new_comment`
* `<p>` paragraph element as JQuery object

###### Review: What is happening?
* New paragraph element created then text content of the `<p>` is being changed to `("this is a new comment")`

###### Next: Get out the content out! 
* Store content of the input box in the new variable using a JQuery function that returns the content of an input box
* `val` function, short for value

###### Review: what are we doing? 
* We're going to make the content of the input box the text value of our new paragraph element.

```
var $new_comment = $("<p>").text($(".comment-input input").val());
```
###### Squashing the bug

* bug: JQuery program adds an empty p element to the DOM
* squash: insert a check to see if the content of the input box is empty before doing anything with it.
* `if` statement: 
`if ($(".comment-input input").val() !== "") {`
* if: confirms the content of the input box does *not* equal the empty string
* NOTICE: variable declaration moved above the if statement. keep variables declared at the top of your function definitions.

###### Clearing out the inbox 
* send the empty string to val method

###### Making the Enter key work as expected
* add an additional event handler that listens for the keypress event on the input element itself

```
$(".comment-input input").on("keypress", function (event) {
```

* This is the `input` element: `$(".comment-input input")`
* This is the event: `on("keypress"`
* Listener is setup to listen for the keypress event

```
var main = function () { /* entry point for the execution
	"use strict";

	$(".comment-input button").on("click", function (event) { 
		var $new_comment;

		if ($(".comment-input input").val() !== "") {
		 	$new_comment = $("<p>").text($(".comment-input input").val()); 
			$(".comments").append($new_comment);
			$(".comment-input input").val("");	
		}
	});

	$(".comment-input input").on("keypress", function (event) {
		console.log("this is the keyCode" + event.keyCode);
	});
};

$(document).ready(main)
```
###### What's going up there: review
* interactivity: when the user 'clicks' something happens
* creates `<p>` as a JQuery object
* call the `val` method of the JQuery object with an explicit value, ie. send empty string ("") to the `val` method
* listen for the keypress event
* use the event local variable (keycode)

###### Fading in our new comment

* Every JQuery element has a `fadeIn` method built in
* `hide` method on the element before appending to DOM, place before `$(".comments").append($new_comment);`
* `$new_comment.hide();` this is the `hide` method
* `fadeIn` method on the element, remember, first letter of second word in multiple word variable name is Capitalized
* `$new_comment.fadeIn();` 

###### Refactoring for simplicity

* DRY (Dont Repeat Yourself) principle
* If cutting and pasting RED FLAG
* abtract the duplicate code as a reusable function
* call the function in each of the event listens
* do this by declaring a variable to store the function and then defining the function 
* pulling it all together: [app.js](https://github.com/Nat34/Interactivity-JavaScript/blob/master/Example2/app.js)






