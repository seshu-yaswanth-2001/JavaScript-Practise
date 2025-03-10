const radius = [3, 1, 2, 4]

const calculatearea = function (arr) {
  const output = [];
  for (var i = 0; i < arr.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}

console.log(calculatearea(radius));

const calculatediameter = function  (arr) {
  const output = [];
  for(var i = 0; i < arr.length; i++){
    output.push(radius[i] * radius[i]);
  }
  return output;
}

console.log(calculatediameter(radius));

const circumfernece = function (arr) {
  const output = [];
  for (var i = 0; i < arr.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
}

console.log(circumfernece(radius));


// in the above code there is a problem called we are repeating the functions and we are only changing the logic of it
// to optimize it we can use higher order functions

// 1.First class functions
// The ability of functions, where the functions can be treated as variables, that is we can pass functions as arguments,
// return function and even assign function to another variables
//
// 2.Higher order function
// Functions that takes one or more functions as argument
//
// 3.Call back function
// Functions that can be passed as an argument to another function

// If we use Array.property.function-name. This function is accessible to any array in your code.


// to optimize above code we can rewrite code in various functions and pass that functions as the parameters

console.log("Higher order functions");

const area = function (number) {
  return (Math.PI * number * number);
}

const circumfernecee = function (number) {
  return (2 * Math.PI * number);
}

const diameter = function (number) {
  return (number * number);
}

const calculate = function (arr, logic) {
  const output = [];
  for (var i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumfernecee));


// now we are passing functions as the parameters into the another function is called callback Functions

// we can also use MAP function and easily write the above code with line
console.log("Using Map function");
console.log(radius.map(area));
console.log(radius.map(circumfernecee));
console.log(radius.map(diameter));

// we can also create our own map function

console.log("using prototype");

Array.prototype.mapcalculate = function (logic) {
  const output = [];
  for (var i = 0; i < this.length; i++) {
    output.push(logic(this[i]))
  }
  return output;
}

console.log(radius.mapcalculate(area));
