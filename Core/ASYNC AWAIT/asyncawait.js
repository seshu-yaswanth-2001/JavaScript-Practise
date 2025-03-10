const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 has been resolved");
  }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 has been Resolved");
  }, 5000);
});

// using older fashion
function oldFashion() {
  promise.then((res) => console.log(res)); // 3nd this line will be printed
  console.log("Namaste Java Script"); // 1st this line will get printed
}
// oldFashion();
// Explanation: Firstly JS will execute line by line at line number 9 it registers the promise and move to line number 10 and prints the result. In the mean time
// event loop will be constantly checking the call stack to get free.
// when the timer has been finished because it returned promise it will be placed in Microtask queue.
// AS soon as call stack get free eventloop will place the Microtask queue into the call stack and the it will be printed

// Using ASYNC & AWAIT - JS works different little Bit
async function getData() {
  console.log("Hello World"); // 1st this prints
  const value = await promise; // Program will wait here until the promise is resolved
  console.log("Namaste JS"); // After that it prints
  console.log(value); // and then this
}

// getData();

// Another example - when a promise is called twice also JS will wait only for specified time and parllely it gives output
async function data() {
  const value = await promise;
  console.log("Namaste JS");
  console.log(value);

  const value2 = await promise;
  console.log("Namaste JS2");
  console.log(value2);
}

// data();

// Another example - try to understand this example (if not understand refer the below comment)
// at anycase if promise is encountered the 1st encountered promise will be resolved and then only it moves to another line
// when js engine encounters await keyword then it suspend the program until the promise is resolved and then it start executing where it left

async function promise1() {
  console.log("Hello World");

  const val1 = await promise2;
  console.log(val1);

  const val2 = await promise;
  console.log(val2);
}
// promise1();

async function promises2() {
  console.log("Hello World");

  const val1 = await promise;
  console.log(val1);

  const val2 = await promise2;
  console.log(val2);
}

promises2();
