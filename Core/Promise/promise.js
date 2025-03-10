// Promise - a placeholder which filled later with the value.
// promise - container for future value
// promise - is an object representing the eventual completion or failure of a asynchronous operation.

// promise returns an object with 2 keys : 1 is promise state, 2 is promise result
// promise state has 3 states i.e. pending, fulfilled, and rejected
// promise result has the data which we requested for
// below is the code for the same

const api = 'https://api.github.com/users/seshu-yaswanth-2001';

const user = fetch(api);
console.log(user);
user.then(function(data) {
  console.log(data);
});

// the above return promise<pendingstate> {...} at first
// javascript doesn't wait for anything it just executes line by line
// when it first executes the line number 10 it is in "pending state"
// when all the lines are executed then the eventloop runs and then microtaskqueue is executed because it is a promise so that it is pushed into microtaskqueue/
// if it is normal settimeout or something else expect promise javascript pushes into callback queue();
// promise only calls one time when it executes

// promise chaining
// promise chaining is when another promise is attached to a promise already exists it takes values from previous promises

// example

//one way of writing
// const createOrder = function (arr){};
// createOrder(cart)
// .then(function (orderID) {
//   return proceedToPayment(orderID);
// })
// .then(function (paymentInfo) {
//   return showOrderSummary(paymentInfo);
// })
// .then(function (update) {
//   return updateWallet(update)
// });

// 2nd way of writing the same code
// createorder(cart)
// .then((orderId) => proceedToPayment(orderID))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((update) => updateWallet(update));
