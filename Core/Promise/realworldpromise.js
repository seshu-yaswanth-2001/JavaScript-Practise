const cart = ["Jeans", "Shirt", "Kurta"];
// const cart = [];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return proceedPayment(orderId).then((info) => {
      console.log(info);
      return orderId;
    });
  })
  .then(function (order) {
    return showSummary(order).then((suminfo) => {
      console.log(suminfo);
      return order;
    });
  })
  .then(function (id) {
    return showbalance(id).then((balanceinfo) => {
      console.log(balanceinfo);
    });
  })
  .catch(function (err) {
    console.error("Error: " + err.message);
  });

function validateCart(arr) {
  return arr.length > 0;
}

function createOrder(arr) {
  const promise = new Promise(function (resolve, reject) {
    const orderId = 12345;
    if (!validateCart(arr)) {
      const err = new Error("Invalid Cart! Please check.");
      reject(err);
    } else {
      resolve(orderId);
    }
  });
  return promise;
}
function proceedPayment(id) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
function showSummary(prevID) {
  return new Promise((resolve) =>
    resolve("Your Order has been placed and this is your Order ID: " + prevID)
  );
}
function showbalance(mainId) {
  const balance = 10000;
  return new Promise((resolve) =>
    resolve(
      "Your remaining balance is: " + balance + ", after order: " + mainId
    )
  );
}
