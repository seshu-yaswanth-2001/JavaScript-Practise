"use strict";

// in global space "this" keyword returns "Window Object" depends on where the code is executed
console.log(this);

function a() {
  console.log(this);
  // when "this" keyword is used inside a function the value of "this" depends on 2 modes i.e. "Strict Mode" & "non-strict mode"
  // when it is in strict mode it returns "Undefined"
  // when it is in "Non-strict mode" it returns "Window Object"
}
a(); // Undefined

// this keyword value depends on how the function is called
// window.a(); // window obj

// in pov of Method
const student1 = {
  name: "Seshu",
  printName: function () {
    console.log(this); // prints whole "object"
    console.log(this.name); //prints "Seshu"
  },
};

student1.printName();

// call(), Apply(), bind()
const student2 = {
  name: "Deepika Rama",
};

student1.printName.call(student2);

// Arrow Function or methods

const student = {
  name: "Seshu",
  printname: () => {
    console.log(this); // it returns now "Window" becoz the function is referring to "enclosing Lexical environment"
  },
};

student.printname();

// in pov of DOM => it return HTML Tag
