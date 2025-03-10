const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
  // setTimeout(() => reject("P1 Fails"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
  // setTimeout(() => reject("P2 Fails"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
});

Promise.all([p1, p2, p3])
.then(function(values) {
  console.log(values);
})
.catch(function(err) {
  console.error(err);
})

// it will fail even one promise is failed
// it will not wait for other promises to execute
