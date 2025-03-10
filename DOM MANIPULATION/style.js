// style is used to set or get the css from the css documents

const inputBox = document.getElementById("input");
console.log(inputBox);
console.log(inputBox.style); // return the available style

// to set the style
inputBox.style.padding = "10px";
console.log(inputBox);

// another way
// inputBox.style.cssText = "width: 20px; color: white"; // but it will rewrite the whole CSS code
inputBox.style.cssText += "width: 20px; color: white";
// but to avoid we can concatinate
console.log(inputBox);
