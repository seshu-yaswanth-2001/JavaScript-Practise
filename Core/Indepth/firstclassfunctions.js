// function statements are also called as "Function Declarations"
function a() {
  console.log("a called");
}
a();

// Function Expressions - function Expressions are expressions which it was assigned as a value to a variable this value function is also called as anonymous function
var b = function () {
  console.log("b Called");
}
b();

// anonymous Function - A function with no name is called anonymous Function
// function () {
//   console.log("anonymous");  // gives syntax error
// }

// Named Function Expressions
// Named function Expressions are same as function Expressions but instead of anonymous expressionsn we can give a name to function like function statement
// but we cannot call the function with function name we can only call the function with variable
// but we can use the inner function name in inner function statements

// example
var c = function xyz() {
  console.log("c Called");
}
c();
// xyz(); //it gives referrence error

// example
var d = function yzx() {
  console.log(yzx);
}
d();




// Difference between parameters and arguments
// parameters are passed in function statement and arguments are passed when it is Called
function e(param1, param2) {
  console.log(param1 + param2);
}
e(10, 20);


// first class functions - an ability to pass, return, treated as value and passed on other functions
var f = function () {
  return function () {

  }
}

console.log(f());

// it will work with let and const

// example2
var g = function (para3) {
  console.log("G called");
  console.log(para3);
}

g(function () {

})


// Arrow function
