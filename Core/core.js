// concept of excution context
// contains two phase: memory creation phase and code execution phase
// memory creation phase: all the variables are stored in the memory
// code execution phase: all the functions are executed

// example 1
console.log("Execution Context");
console.log(a);
var a = 10;
console.log(a);
// output: undefined, 10
// explanation: in the memory creation phase, the variable a is not yet created, so it is undefined and
// in the code execution phase, the value of a is assigned to 10 and printed as 10 in the console.

// for every function call, a new execution context is created
// example 2
console.log("Execution Context");
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();

// output: 10
// explanation: when the outer function is called, a new execution context is created and the variable a is assigned to 10.
// when the inner function is called, a new execution context is created and the value of a is printed as 10 in the console.
// the inner execution context has access to the outer execution context's variables, so it can print the value of a as 10.
// the outer execution context is destroyed after the outer function.
// the inner execution context is also destroyed after the inner function.
// why execution context is deleted after the function call :
// because the memory is limited and the execution context is stored in the memory, so it is deleted after the function call ->
// to free up the memory.

// So, when every code is executed, the GEC(Global Execution Context) is created and the code is executed in the GEC(Global Execution Context).
// The GEC(Global Execution Context) is the parent of all the execution contexts.

// The concept of the call stack:
// The call stack is used to store the execution contexts.
// The call stack is a data structure that stores the execution contexts.
// The call stack follows the LIFO(Last In First Out) principle.
// Refer the notes for the call stack diagram.

// concept of hoisting
// hoisting is the process of moving the variables and functions to the top of the execution context.
// hoisting is done in the memory creation phase.
// hoisting is done only for the variables and functions.
// hoisting is not done for the function expressions.
// example 1
console.log("Hoisting");
console.log(b);
var b = 10;
console.log(b);
// output: undefined, 10
// explanation: first a is created in the memory and assigned to undefined and then the value of a is assigned to 10 and printed as 10 in the console.

// How function works

console.log("Functions");
var x = 1;
apple();
banana();
console.log(x);

function apple() {
  var x = 10;
  console.log(x);
}

function banana() {
  var x = 100;
  console.log(x);
}

// Answer:10, 100, 1

// first it creates a GEC - in GEC it allocates all the variables and functions first
// then again it goes to the code execution phase and executes the code line by line
// first when the variable x is created in the GEC, it is assigned to undefined
// when it goes to the code execution phase, then x is replaced by 1;
// first a() is copies all the function in the memory phase in the code execution phase it again creates a new execution context
// in the new execution context, the variable x is assigned to 10 and printed as 10 in the console. and terminated this execution context
// then b() is copies all the function in the memory phase in the code execution phase it again creates a new execution context
// in the new execution context, the variable x is assigned to 100 and printed as 100 in the console. and terminated this execution context
// then it prints the value of x as 1 in the console.
// output will be 10, 100, 1

// even though there is no code also it will create a GEC and execute the code
// then along with GEC. it will create global object and THIS keyword
// this keyword will be assigned to the global object
// this keyword is used to access the global object
var window_obj = 100;
console.log(window.window_obj);
console.log(this.window_obj);
console.log(window_obj);

// the above all is same if nothing is mentioned before the variable it will be assigned to the global object that is either window or this
// if we mention var before the variable then it will be assigned to the GEC
// output: 100, 100, 100

// undefined vs not defined
// undefined: a variable is declared but not assigned to any value
// not defined: a variable is not declared

// example 1
console.log("Undefined vs Not Defined");
var un_defined;
console.log(un_defined);
// output: undefined
// explanation: the variable "un_defined' in the above is declared but not assigned to any value, so it is undefined.

// example 2
// console.log(n);
// output: ReferenceError: n is not defined

// example 3
var undefined_variable;
console.log(undefined_variable);

if (undefined_variable === undefined) {
  console.log("undefined_variable is undefined");
} else {
  console.log("undefined_variable is not undefined");
}

// The Scope Chain
// in JavaScript, the scope chain is used to access the variables.
// the scope chain is used to access the variables in the nested functions.
// while any program is executed, the scope chain is created.
// when program is executed, JavaScript creates Callstack, Global Object, Global Execution Context, and lexical environment.
// the lexical environment is used to store the variables and functions of its parent execution context.
// the lexical environment is used to access the variables and functions of its parent execution context.

// example 1
console.log("Scope Chain");

function z() {
  var x = "Coming from parents function";
  y();
  function y() {
    console.log(x);
  }
}

z();

// in the above example, the y() function first check in the local env. if the variable is not available in its local env.
// then it check in the parent env. if the variable is not available in the parent env. then it check in the global env.

// lexical environment is used to store the variables and functions of its parent execution context.
// check diagramatic explanation in the notes

// console.log(seshu);
// console.log(deepika);
// let seshu = 10;
var deepika = 20;

// let and const are hoisted but not initialized
// let and const are created in separate memory space
// let and const are stored in separate memory space called the declarative environment record part of the lexical environment
// let and const are not initialized with undefined
// let and const are not accessible before the initialization - refers to reference error

// example 1
// console.log("Let and Const");
// console.log(seshuu);
// console.log(deepikaa);
// let seshuu = 10;
// var deepikaa = 20;

console.log("Block Scope");
{
  var var_a = 10;
  let let_b = 20;
  const const_c = 30;

  console.log(var_a);
  console.log(let_b);
  console.log(const_c);
}

console.log(var_a);

//example 2

var youtube = "youtube from global";
let instagram = "instagram from global";
const facebook = "facebook from global";
{
  var youtube = "youtube from block";
  let instagram = "instagram from block";
  const facebook = "facebook from block";

  console.log(youtube);
  console.log(instagram);
  console.log(facebook);
}

console.log(youtube);
console.log(instagram);
console.log(facebook);  

// if var is declared in global space and if it is declared in the block scope then it will be shadowed by the block scope variable
// i.e. youtube in the global scope is shadowed by the youtube in the block scope
// let and const are block scoped variables
// let and const are not shadowed by the block scope variables
// i.e. instagram and facebook in the global scope are not shadowed by the instagram and facebook in the block scope

// example 3
// let suv = "suv from global";
// {
//   var suv = "suv from block"; // this is wrong here because the variable suv is already declared in the global scope and trying to declare it again in the block scope
//   console.log(suv);
// }

// example 4
let suv = "suv from global";
{
  let suv = "suv from block"; // this is correct here because the variable suv is not declared in the global scope and trying to declare it in the block scope
  console.log(suv);
}
console.log(suv);

// it also follow the lexical scoping
// example 5
const bike = "bike from global";
{
  const bike = "bike from block";
  {
    const bike = "bike from inner block";
    console.log(bike); // bike from inner block
  }
  console.log(bike); // bike from block
}
console.log(bike); // bike from global

// it always searches for the variable nearest to it
// if the variable is not found in the nearest scope then it searches in the parent scope and so on until it reaches the global scope.
