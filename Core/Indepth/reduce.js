// reduce
// reduce is used mainly to reduce the array and get the single value from the array
// reduce method expects 2 arguments reduce(function, current);

const arr = [12, 22, 23, 12, 432, 121];

// using functions
console.log("Using functions");

// sum all the number in the array
function sum(x) {
  let output = 0;
  for (var i = 0; i < x.length; i++) {
    output = output + x[i];
  }
  return output;
}

console.log(sum(arr));


// using filter Method
console.log("using filter method");

const reduce = arr.reduce((arr, curr) => {
  arr = arr + curr;
  return arr;
}, 0)

console.log(reduce);


// real World Problem
const details = [
  {firstname: "Seshu", lastname: "Yaswanth", age: 24},
  {firstname: "Deepika", lastname: "Reddy", age: 20},
  {firstname: "Rama", lastname: "Devi", age: 42},
  {firstname: "Yaswanth", lastname: "Reddy", age: 24}
]

// find how many members are in similar age
// example {24: 2, 20: 1, 42, 1}

console.log("Using functions");

function similarAge(x) {
  let agecount = {};
  for (var i = 0; i < x.length; i++) {
    const age = x[i].age;
    if (agecount[age]) {
      agecount[age] = ++agecount[age];
    }
    else {
      agecount[age] = 1;
    }
  }
  return agecount;
}

console.log(similarAge(details));


// using reduce

console.log("Using reduce");

console.log(details.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1
  }
  return acc;
}, {}));
