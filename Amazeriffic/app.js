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
/* refactoring the code using a loop*/

var main = function
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

$(document).ready(main);