// Promises are used to handle ASYNC operations in Java SCRIPT

const cart = ["T-shirt", "Jeans", "Shorts", "Joggers"];

// by using functions we created "createorder" and then we just called the "createorder" function and passing the the callback function with proceedPayment
// function which was created earlier.

// here the problem with function proceedPayment function i.e. proceedPayment function is dependent on the "Create Order function".
// and we don't know how many times the proceedPayment function is exceuting
// for example: if a cart is filled with tshirt then proceedPayment is triggered if cart is delete one item then also it is again triggered (proceedPayment function)
// to avoid this kind of confusion we have an option to handle this with "Promises".

//createorder(cart, function(orderID) {
    // proceedPayment(orderID);
// })


// Same situation with promise object
// let count = 0;
//
// const promise = function(arr) {
//   let mycart = {
//     orderId: ++count,
//     orders: arr.map(x => x),
//   };
//   console.log(mycart);
// };
// promise(cart);
// // now we have promise object here now we can write then block with other function now it throws error because the above function is not a promise
// promise.then(function (orderID) {
//   console.log(orderID);
// });


// Real world problem explanation
const profile = "https://api.github.com/users/seshu-yaswanth-2001";

const user = fetch(profile); // here it returns response as object
user.then(function (x) { // here we are utilising it with then operator
  console.log(x);
})
console.log(user);
