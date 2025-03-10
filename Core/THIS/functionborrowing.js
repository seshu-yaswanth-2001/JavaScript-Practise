const student1 = {
  firstname: "seshu",
  secondname: "Yaswanth",
};

const student2 = {
  firstname: "Deepika",
  secondname: "Rama",
};

const printname = function (city, state) {
  console.log(
    this.firstname + " " + this.secondname + " from " + city + ", " + state
  );
};

//call() - Invokes a function with a specified this value and arguments passed individually.
printname.call(student1, "Hyderabad", "Telangana");
printname.call(student2, "Kadapa", "Andhra Pradesh");

//apply() - same as call but it take arguments as an array
printname.apply(student1, ["Hyd", "TS"]);
printname.apply(student2, ["Kdp", "AP"]);

//bind() - Returns a new function with this bound to a specific value, allowing later execution.
const later = printname.bind(student1, "Hyd", "TS");
later();
console.log(later);
