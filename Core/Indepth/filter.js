// Filters
// filter is used to get an array by filtering out the present array
// example: to get the list of array that only contains even numbers or odd numbers or anything else

const arr = [2, 12, 23, 21, 224, 22];

// get the even numbers from the given list of array
console.log("Using functions");

function isEven(x) {
  return x % 2 === 0;
}

// get the odd numbers from the given list of array
function isOdd(x) {
  return x % 2;
}

function validate(values, logic) {
  const output = [];
  for (var i = 0; i <= values.length; i++) {
    if (logic(values[i])) {
      output.push(values[i]);
    }
  }
  return output;
}

console.log(validate(arr, isEven));
console.log(validate(arr, isOdd));

// Using map
console.log("Using Map");

const even = arr.filter(isEven);
console.log(even);

// using arrow
console.log("Using Arrow");
console.log(arr.filter((x) => x % 2 === 0));

// real world problem
const details = [
  { firstname: "Seshu", lastname: "Yaswanth", age: 24 },
  { firstname: "Deepika", lastname: "Reddy", age: 20 },
  { firstname: "Rama", lastname: "Devi", age: 42 },
  { firstname: "Yaswanth", lastname: "Reddy", age: 24 },
];

// find all the persons below 30 get only firstname
// using functions
console.log("Using functions");
function greaterthan(x) {
  const output = [];
  for (var i = 0; i < x.length; i++) {
    if (x[i].age < 30) {
      output.push(x[i].firstname);
    }
  }
  return output;
}

console.log(greaterthan(details));

//using filter Method
console.log("Using Filter Method");
const greater = details.filter((x) => x.age < 30); // it return entire object
console.log(greater);

// to only get the firstname
console.log(details.filter((x) => x.age < 30).map((x) => x.firstname));

// using reduce
console.log("using reduce");
const reduce = details.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);

console.log(reduce);
