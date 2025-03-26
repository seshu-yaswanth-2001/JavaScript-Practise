// Event Loop:
//
// The event loop continuously monitors the call stack and the task queues.
// It only picks tasks from the queues when the call stack is empty.
// Task Queues:
//
// There are two main task queues:
// Microtask Queue: Handles tasks from promises (via .then, .catch, .finally), queueMicrotask, and MutationObserver.
// Callback Queue (also called Macrotask Queue): Handles tasks from setTimeout, setInterval, setImmediate (Node.js), and certain events like I/O operations or DOM events.
// Microtask Queue has higher priority than the Callback Queue:
// Before processing tasks in the callback queue, the event loop clears all tasks in the microtask queue.
// Execution Order:
//
// If a microtask is added while executing another microtask, it will execute immediately after the current microtask finishes (before moving to the callback queue).
// Once the microtask queue is empty, the event loop picks the next task from the callback queue.



// Example 1
console.log("Start");

setTimeout(function cbt() {
  console.log("Timer, 2 seconds");
}, 2000)

console.log("End");

// Example 2
console.log("Start");

document.getElementById('clickme')
.addEventListener("click", function cb() {
  console.log("Clicked");
});

console.log("End");


// Example 3
console.log("Start");

setTimeout(function bajaj() {
  console.log("Timer, 3 seconds");
}, 3000)

fetch("www.google.com")
.then(function cbf() {
  console.log("Fetch completed");
})

console.log("End");
