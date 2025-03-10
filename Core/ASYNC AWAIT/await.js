const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved!!");
  }, 5000);
});

async function getData() {
  const value = await promise;
  console.log(value);
}

getData();
