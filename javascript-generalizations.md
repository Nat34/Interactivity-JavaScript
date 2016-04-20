## JavaScript Generalizations

Client-Side Topic: JavaScript

### Project: 
To learn basic aspects of the language and interact with Firefox Developer Tools

### Drivers:
To build complex web applications

### Technology: 
JavaScript, Web Browser, Developer Tools, text editor, Markdown, Web 

### Resources: 
[Learning Web App Development](https://github.com/semmypurewal/LearningWebAppDev), Firefox Developer Tools

#### Variables and Types
* variables can hold any data of any type `integers, strings, floats (#s with decimals)`
* variables do not have to be declared to hold specific types
* variable declaration/defitions can be defined as a single statement separated by commas
* variable declarations/definitions should be put at the top of your function definitions

#### Functions
* functions are first-class citizens
* can assign functions to variables
* send in functions as parameters to other functions
* define anonymous functions (functions without names)

```
var turbo = function () {
	console.log("Ozone");
}

turbo();

```
###### What's goin on up there?
* define a function and store it in a variable called `turbo`
* execute the function in the `turbo` variable `turbo();`

##### inputs and outputs
* inputs are referred to as arguments or parameters
* inputs are specified inside the parentheses of the function definition
* outputs are often referred to as the return value and always preceded by the keyword *return*

```
var add = function (num1, num2) {
	var sum = num1 + num2;
	return sum;
}
add(5,2);
```
###### What's goin on up there?
* define a function called `add` which accepts two inputs: num1 and num2 and one output: the sum of the two numbers
* define sum which adds the inputs
* return the sum
* execute the add function with 5 and 2 as inputs

```
var main = function () {}

$(document).ready(main);
```
###### What's goin on up there?
* we can use other functions as inputs to functions
* we can write functions that take other functions as parameters
* helpful when doing asynchronous programming

#### Selection
* `if` statement: block of code should only be executed if some condition is `true`
* `else` statement: allows us to do something different if the condition is `false`
* `if-else-if` pattern to do multiple mutually exclusive things depending on different conditions
* use the `&& AND` `|| OR` `! NOT` operators
* single `=` represents an assignment statement
* triple `===` represents a comparison that returns `true` or `false` if the left and right sides of the expression are equivalent

```
var count = 101;
if (count > 100) {
console.log("the count is bigger than 100);
}
```
#### Iteration
* Iterative structures are used to shorten lines of repetative code into more compact, but equivalent expressions.
* doing things multiple times with the `for` loop
* looping structure: `initiat
* for (int; test; update) {
	statements
}

###### original code

```
// print the first 100 numbers
console.log(0);
console.log(1);
//...
console.log(99);
console.log(100);
```
###### code expressed using a for loop

```
var num;
	for (num = 0; num <= 100; num = num + 1) {
	console.log(num);
}
```

###### remainder operator %
* yields the remainder from integer division
`5%2` evaluates to `1` because `5/2` is `2` with a remainder of `1`
* `%` operator can check for divisibility by 2 (which tells us the number is even)

**FizzBuzz Problem**

```
var i;
	for (i = 0; i < 10; i = i + 2) {
	if (i%2 === 0){
		console.log(i);
	}
}
```
```
var num;
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";

for (num = 0; num <= 100; num = num + 1) {
	if (num%3 === 0) {
		console.log(fizz);
	} else if (num%5 === 0) {
		console.log(buzz);
	} else if (num%3 === 0 && num%5 === 0) {
		console.log(fizzbuzz);
	} else {
		console.log(num);
	}
}
```
```
var num;
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";

for (num = 0; num <= 100; num = num + 1) {
	if (num%3 === 0) {
		console.log(fizz);
	} else if (num%5 === 0) {
		console.log(buzz);
	} else if (num = num%3 || num%5) {
		console.log(fizzbuzz);
	} else {
		console.log(num);
	}
}
```
```
var num;
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";

for (num = 1; num <= 100; num = num + 1) {
	if (num%3 === 0 && num%5 === 0) {
	   console.log(fizzbuzz);
	} else {
           console.log(num);
        }
}
```
###### Solution
```
var num;
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";

for (num = 1; num <= 100; num = num + 1) {
	if (num%3 === 0 && num%5 === 0) {
		console.log(fizzbuzz);
	} else if (num%3 === 0) {
		console.log (fizz);
	} else if (num%5 === 0) {
		console.log(buzz);
	} else {
		console.log(num);
	}
}
```
#### Arrays
* indexed collection of JavaScript entities
* single variable that can hold multiple values

``` var greetings = ["hello", "namaste", "hola", "salut", "aloha"];```

1. declare array literal by using the square brackets `[]`
2. list elements separated by commas

* array elements can be strings, integers..
* index into the arrays to get elements `console.log(greetings[1]);`
* indexing for arrays starts at 0 and ends at one less than the length of the array
* one can set individual elements of the array by using the same indexing method `greetings[3] = "bonjour";` changes `salut` to `bonjour`
* arrays can grow and shrink dynamically using the `push` function

```
var fruit = [];

fruit.push("apple");
fruit.push("orange");
console.log(fruit);

//=> ["apple", "orange"]
```

* print elements of the array using the `length` property of the array to build a continuation condition for a `for` loop

```
var greetings = ["hello", "namaste", "hola", "salut", "aloha"];
var index;

for (index = 0; index < greetings.length; index = index + 1) {
	console.log(greetings[index]);
}
```

* `forEach` loop attached to each array, which takes in a function accepting each element

```
greetings.forEach(function (element) {
	console.log(element);
}
```

* this removes the need to maintain an extra variable such as `index` 
* removing a variable declaration will make code less error prone


