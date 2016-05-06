/*var main = function (){
	"use strict";

		//declare a variable to hold the function
	var makeTabActive = function (tabNumber) { 
		//construct the selector from the tab number
		var tabSelector = ".tab a:nth-child(" + tabNumber + ") span";  
		$(".tabs span").removeClass("active");
		$(tabSelector).addClass("active");
		$("main. content").empty();
	};

	$(".tabs a:nth-child(1)").on("click", function () {
		makeTabActive(1);
		return false;
	});

	$(".tabs a:nth-child(2)").on("click", function () {
		makeTabActive(2);
		return false;
	});

	$(".tabs a:nth-child(3)").on("click", function () {
		makeTabActive(3);
		return false;
	});
};

$(document).ready(main);*/

//DRY principle violation
/*
1. abtract the duplicate code as a reusable function
2. call the function in each of the event listens, in this case the tab number
3. do this by declaring a variable to store the function and then defining the function



*/
/* refactoring the code using a loop

var main = function () {
	"use strict";


var tabNumber;

	for (tabNumber = 1; tabNumber <=3; tabNumber++) {
		var tabSelector = ".tabs a:nth-child(" + tabNumber +") span";
		$(tabSelector).on("click", function (event){
			$(".tabs spans").removeClass("active");
			$(event.target).addClass("active");
			return false;
		});
	}
};

$(document).ready(main); */

/*refactoring using a forEach loop*/

var main = function () {
    "use strict";

    var toDos = [
    	"To do 4",
    	"To do 3",
    	"To do 2",
    	"To do 1"
    	];

    //forEach takes a function as an argument and calls it for each element of the array
	//create a click handler for this element

	    $(".tabs a span").toArray().forEach(function (element) { 
		    $(element).on("click", function () {
			var $element = $(element),
				$content;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				console.log("FIRST TAB CLICKED!");
			} else if ($element.parent().is(":nth-child(2)")) {
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("THIRD TAB CLICKED!");
			}

			return false;
		});
	});
};

$(document).ready(main);