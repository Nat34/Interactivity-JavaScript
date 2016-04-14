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
