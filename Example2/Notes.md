###### Interactivity - Basic JavaScript App Skelton

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

```
* action: attaching an *event listener* to the DOM element (.comment-input button) referenced in the call to the function
* Jquery: target elements in the DOM using CSS selectors
* JavaScript: manipulate elements in the DOM
* When the user clicks the +, print "Hello, World!" to the console
* When the user [event for which we are listening on], then [function] occurs. event then function
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
- C in keyCode is capitalized. if variable name has multiple words, capitalize each word after the first
`+` sign concatentates: ie `"this is the keyCode" + event.keyCode`

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

