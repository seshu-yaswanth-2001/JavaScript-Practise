// MAP
// map is used to take the present array and get the another array based on the present array
// example doubling the array, combining firstname and lastname to get the full name

const arr = [3, 4, 2, 12, 14, 10];
// MAP
function double(x) {
  return x * 2;
};

function cal(values, logic) {
  const output = [];
  for (var i = 0; i < values.length; i++) {
    output.push(logic(values[i]));
  };
  return output;
};

console.log(cal(arr, double));


// using MAP
console.log("Using Map");

// 1st method
const output = arr.map(double);
console.log(output);

console.log("Second Method");
// 2nd Method - using anonymous function
console.log(arr.map(function (x) {
  return x * 2;
}));

console.log("third method");
// 3rd Method - using arrow method
console.log(arr.map((x) => x * 2));



// Real World example
const details = [
  {firstname: "Seshu", lastname: "Yaswanth", age: 24},
  {firstname: "Deepika", lastname: "Reddy", age: 20},
  {firstname: "Rama", lastname: "Devi", age: 42}
]


// get all the names by combining firstname and lastname
console.log("using functions");
function combine(x) {
  var name = []
  for (var i = 0; i < x.length; i++) {
    name.push(x[i].firstname + " " + x[i].lastname);
  }
  return name;
}
console.log(combine(details));


// Using Map function by arrow Method
console.log("Using Map logic");
const values = details.map(x => x.firstname + " " + x.lastname);
console.log(values);
