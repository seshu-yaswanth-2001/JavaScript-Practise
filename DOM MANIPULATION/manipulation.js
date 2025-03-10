/*
CreateElement() - accepts a html tag name and returns a new node with Element Type
*/

let div = document.createElement("div");
console.log(div); // it creates a new div
// to append anything in this
div.innerHTML = "<h1>Welcome to HYD.</h1>"
// to show in the web page
// document.body.appendChild(div);
// to add id
div.id = "text";
// to add class
div.className = "text"


/*
appendchild() - // it will add element to the end of the list to the particular parent
*/

let menu = document.getElementById("menu");
let item = document.createElement("li");
item.innerHTML = "Contact"
menu.appendChild(item) // it will append child to the existing list


/*
textContent() - to get the text content of a node and its descendants, we can use the textContent property
*/

console.log(menu.textContent); // it will get all the text for selected parent
console.log(menu.innerText); // it will get only visible element for selected Parent
//  we can change the text also
// console.log(menu.textContent = "Helllo");

// InnerHTML - we can add the content of the text by using this
// console.log(menu.innerHTML = "Hello");


// insertAdjacentHTML(positonName, text) => can insert an element afterbegin, beforebegin, afterend or beforeend
menu.insertAdjacentHTML("afterbegin", "<li>first</li>")
menu.insertAdjacentHTML("beforeend", "<li>Last</li>")

// cloneNode(true or false by default it is true) - will clone the node
const copied = menu.cloneNode(true);
console.log(copied);


// removeChild() - will remove the child from the HTML
menu.removeChild(menu.firstElementChild)

// insertBefore(newnode, existingnode) - it will insert the node before the specified node
const insertBefore= document.createElement("li");
insertBefore.innerHTML = "Just";
menu.insertBefore(insertBefore, menu.firstElementChild)



// className()
const name = document.getElementById("text");
console.log(name.className); // to get the classNames

// to set the classNames
// name.className = "New"; // it will overwrite the class names and add this to add this also or existing one we can concatinate
name.className += " new";
console.log(name);


// classList() - returns the collection of  css classes
console.log(name.classList);
// to set the new class list
name.classList.add("new2", "new3", "new4");
console.log(name.classList);
// to remove the class List
name.classList.remove("new2", "new3");
console.log(name.classList);
// to replace the classname
name.classList.replace("new4", "what")
console.log(name.classList);
// to know if class is present or not
console.log(name.classList.contains("main"));
console.log(name.classList.contains("mai"));

// toggle - if it is having the classname before it removes or else it appends the classname
name.classList.toggle("main"); // it should remove - because it is available
console.log(name.classList);
name.classList.toggle("main"); // it should add - because it is not available
console.log(name.classList);
