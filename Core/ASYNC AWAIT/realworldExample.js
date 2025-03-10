// const api = "https://api.github.com/users/seshu-yaswanth-2001";
//
//
// //fetch api returns a promise then to convert promise into readable we need to convert to json()
//
// async function promise() {
//   const call = await fetch(api); // returns promise
//   const value = call.json(); // returns again a promise
//   // value.then(res => console.log(res));
//   console.log(await value);
// }
//
// promise();

// handline errors
const api = "https://api.github.com/users/seshu-yaswanth-2001";


//fetch api returns a promise then to convert promise into readable we need to convert to json()

async function promise() {
  try {
    const call = await fetch(api);
    const value = call.json();
    console.log(await value);
  }
  catch(err) {
    console.log(err);
  }
}

promise();
