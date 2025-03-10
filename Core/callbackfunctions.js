// call back functions are nothing but the first class functions
// it makes JS easy that with making it asynchronous language - actually JS is Single threaded language
// when a function is passed in another function as an arguments is called the callback functions.
// It has 2 main issues -
// 1) CallBack Hell - When we pass a function in the parameters of another function then it is called as CallBack, when it continues inside the another and inside the
// other function and inside the other function is called "Call Back Hell".
// 2) Inversion of Control - when a function lost is control and it dependent on the outter function to execute is called the inversion of control.
// example: Inner function will only executes when the outter function is executed and the inner function is dependent on the outter function to execute its own.

// example
// setTimeout(function xyz() {
//   console.log("Timer"); // xyz is the callback function
// }, 5000);
//

function a(c) {
  console.log("A called");
  c();
}

a(function b() {
  console.log("B called");
})

// output will be A called prints B Called Prints and Then "Timer" Prints
// because JS will never wait for anything
// it all happend only because of callstack
// setTimeout is place in callstack until the timer is finished and then it executes in the call stack

// let count = 0
// document.getElementById("clickme").addEventListener("click", function () {
//   console.log("Clicked", ++count);
//   console.log("data Leak happens here");
// })

// to overcome that we wrap entire code into one function
function attachEventListener() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function () {
    console.log("Clicked", ++count);
  })
}

attachEventListener();
// console.log(count);// print 0
// count = 3; // because of accessing we declare that local scope
// console.log(count); //prints 3
