var main = function () {
	"use strict";

	window.alert("hello world!");
};

$(document).ready(main);

/*

* defines a global function called `main`
* Uses jQuery to set up the execution of the `main` function once the HTML doc is fully loaded and ready
* Global variables can be assigned and accessed anywhere in the program
* *strict* mode: disallows certain JavaScript actions (always used in the `main` function)

*/