async function getData() {
  return "Hello World";
}

// async returns a promise

const dataPromise = getData();

dataPromise.then((resolve) => console.log(resolve));

// what if Promise is returned inside the promise function
const promise = new Promise((resolve) => resolve("Promise is resolved"));

async function getPromise() {
  return promise; // it returns the promise which we passed
}

getPromise().then((res) => console.log(res));
