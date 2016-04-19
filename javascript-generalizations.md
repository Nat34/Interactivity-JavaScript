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
* use the `&& AND` `|| OR` `! NOT` operators: 

```
var count = 101;
if (count > 100) {
console.log("the count is bigger than 100);
}
```

