let name = {
  firstname: "Seshu",
  lastname: "Yaswanth",
};

let printName = function (city, country) {
  console.log(this.firstname + this.lastname + ", " + city + ", " + country);
};

let printMyName = printName.bind(name, "Hyd", "India");
printMyName();
