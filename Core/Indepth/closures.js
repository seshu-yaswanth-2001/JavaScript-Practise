// // closures
// // A Function bind together with its lexical environment forms a closure.
// // Function along with its lexical scope forms a closure.
// // example 1
// console.log("Closures");
//
// function closures() {
//   var x = 10;
//   function inner_closures() {
//     console.log(x);
//   }
//   return inner_closures;
// }
//
// var closure = closures();
// console.log(closure);
//
// closure();
//
// // // explanation: in the above example, the function closures() is called and then when it returns inner_closure function,
// // // the closures is terminated and it was now stored in the closure variable. that means the inner_closure function is stored in the closure variable.
// // // the beauty of closure is it remembers the lexical environment of its parent function.
// //
// // // example2
// console.log("Counter");
// function createCounter() {
//   var count = 0;
//   return {
//     increment: () => {
//       count++;
//       console.log(count);
//     },
//     decrement: () => {
//       count--;
//       console.log(count);
//     },
//     reset: () => {
//       count = 0;
//       console.log(count);
//     },
//     current: () => {
//       console.log(count);
//     },
//   };
// }
//
// var counter = createCounter();
// counter.current();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.reset();
// //
// // // example 3
// console.log("Second Calculator")
// var counts;
// function customCounter(counts) {
//   return {
//     increment: () => {
//       counts++;
//       console.log(counts);
//     },
//     decrement: () => {
//       counts--;
//       console.log(counts);
//     },
//     reset: () => {
//       counts = 0;
//       console.log(counts);
//     },
//     current: () => {
//       console.log(counts);
//     },
//   };
// }
//
// var counterr = customCounter(4);
// counterr.current();
// counterr.increment();
// counterr.increment();
// counterr.increment();
// counterr.decrement();
// counterr.reset();
// //
// //
// //
// // closure with set time out
// // javascript will never wait for anything first it prints the executable content and it prints the timeout functions
// console.log("increser")
// function a() {
//   for(var i = 0; i<=5; i++){   // here "i" is created in global level so it will print "6" 6 times
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
//   console.log("Namaste Javascript"); // here first "Namasate Javascript" will print and then it prints loops
// }
// a();
//
//
// // solution to print the 1 2 3 4 5 .... number sequencly as expected
//
// // we can use let function
// console.log("First way - Let")
// function b() {
//   for(let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
// }
// b();
//
//
// // we can use another function so that it i variable is passed as new variable everytime
// console.log("Second Way - by functions")
//
// function c() {
//   for(var i = 1; i <= 5; i++) {
//     function d(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000)
//     }
//     d(i);
//   }
// }
//
//
// c();

//1. An inner function can be directly called using two parenthesis ()().
// 2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
// 3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
// 4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
// 5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.
console.log("Examples of Closures");
// Examples of Closures
// Basic closure example
function fun_1() {
  var var1 = 10;
  function fun_2() {
    console.log(var1);
  }
  fun_2();
}
fun_1();

// second Examples
// how closure behave when inner function returns
function fun_3() {
  var var2 = 100;
  return () => {
    console.log("Please"  + var2);
  };
}
// var var3 = fun_3();
// var3();
// the above and below is same
var var3 = fun_3()();

// third example
// will closure works when variable is declared after inner function in the parent lexical environment? Ans: Yes
function fun_4() {
  function fun_5() {
    console.log(var4);
  }
  var var4 = 1000;
  return fun_5;
}
var var5 = fun_4()();

// fourth example
// what if block scope variable is declared again in the global scope the inner block takes which variable? ans: nearest variable

function fun_6() {
  function fun_7() {
    console.log(var6);
  }
  var6 = 10000;
  return fun_7;
}
var6 = 1;
var7 = fun_6()();

// fifth example
// will it work same when it have another function outest? ans: Yes
function outest() {
  var outest_var = "Outest";
  function outer(outer_var) {
    function inner() {
      console.log(outer_var, outest_var, innest_var);
    }
    var innest_var = "Innest";
    return inner;
  }
  return outer;
}

// var fun_var = outest();
// var funn_var = fun_var("Outer");
// funn_var();

// above line can be simply by this
var fun_var = outest()("Outer")();

// advantages of closures
// data security and can be used in various places
// example of data encapsulation

var var_counter = 0;
function fun_incre() {
  var_counter++;
  console.log(var_counter);
}

fun_incre();

// in the above example var_counter can be accessed by anyone and can manipulate to hide that and give data privacy we use Closures
console.log("Example");
function fun_counter() {
  var count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
}

// console.log(count);// can't access any one

var real_counter = fun_counter()();

// in this situation if fun_counter is called from new variable then it is completly new call and counter is set to its default value again
var real_counter1 = fun_counter()();

// optimized code

function counter() {
  let count = 0;
  // this is called "constructor functions"
  this.increment = () => {
    count++;
    console.log(count, "Incremented");
  };
  this.decrement = () => {
    count--;
    console.log(count, "Decremented");
  };
}

var counter1 = new counter();
counter1.increment();
counter1.increment();
counter1.decrement();
