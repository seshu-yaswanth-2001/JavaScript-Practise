/*
attributes()
getAttribute()
setAttribute()
hasAttribute()
removeAttribute()
*/


// to get all the attributes which are available
// we need to use element.attributes();

const element = document.getElementById("att");
console.log(element.attributes);

//getAttribute() - get the value of the attributes
console.log(element.getAttribute("placeholder"));
console.log(element.getAttribute("type"));

//setAttribute(attributeName, value) - will accept the two values 1) attributeName 2) value of the attribute
let inputBox = document.getElementById("att2");

inputBox.setAttribute("class", "zero");
console.log(inputBox);

// hasAttribute() - returns true or false if it is available
console.log(inputBox.hasAttribute("name"));

// removeAttribute() -  removes the attribute
inputBox.removeAttribute("class");
console.log(inputBox);
