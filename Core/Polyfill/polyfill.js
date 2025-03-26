let name = {
  firstName: "Seshu",
  lastName: "Yaswanth",
};

let printName = function (city, country) {
  console.log(
    this.firstName + " " + this.lastName + "," + city + "-" + country
  );
};

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName = printName.myBind(name, "HYD", "Telangana");
printMyName();
