var main = function (){
	"use strict";

	$(".tabs a:nth-child(1)").on("click", function () {
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(1) span").addClass("active");
		$("main. content").empty();
		return false;
	});

	$(".tabs a:nth-child(2)").on("click", function () {
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(2) span").addClass("active");
		$("main. content").empty();
		return false;
	});

	$(".tabs a:nth-child(3)").on("click", function () {
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(3) span").addClass("active");
		$("main. content").empty();
		return false;
	});
};

$(document).ready(main);

//DRY principle violation
/*
1. abtract the duplicate code as a reusable function
2. call the function in each of the event listens, in this case the tab number
3. do this by declaring a variable to store the function and then defining the function



*/