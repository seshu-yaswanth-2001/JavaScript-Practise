const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
});

// What if all promises where rejected
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P1 Fails"), 3000);
// });
//
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P2 Fails"), 1000);
// });
//
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P3 Fails"), 2000);
// });

Promise.any([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((err) => {
    console.error(err);
    // console.error(err.errors);
  });
