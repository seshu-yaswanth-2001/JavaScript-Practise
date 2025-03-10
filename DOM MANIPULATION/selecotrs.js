/*
getElementById - this method is used to get all the elements which has ID as mentioned in the arguments to this method that too 1st occured
that means if html document has 2 same ids in different html tags then it gets the 1st occured element.
*/

const value = document.getElementById("button");
console.log(value);
value.addEventListener("click", () => console.log("I have clicked"));


/*
getElementsbyClassName() - this method is same as the id but it gets all the elements which is sharing same class name
returns HTMLCollection
*/
const classValue = document.getElementsByClassName("clicked");
console.log(classValue); // returns HTMLCollection

/*
getElementsByTagName() - this method is used to get all the elements which is specified
return HTMLCollection
*/

const tagValue = document.getElementsByTagName("h1");
console.log(tagValue);


/*
getElementsByName() - returns all the elements which sharing same name in the html
returns NodeList
*/

const nameValue = document.getElementsByName("just");
console.log(nameValue);


/*
Queryselector() - return 1st occured query from html document
value
*/

const queryName = document.querySelector(".class");
console.log(queryName);
const query = document.querySelector("div, h1");
console.log(query);


/*
QueryselectorAll() - Sameas querySelector but it returns all
returns HTMLCollection
*/

const allValue = document.querySelectorAll("div h1");
console.log(allValue);
const all = document.querySelectorAll("div, h1"); // gets both tags because we used "," Separator
console.log(all);



// to get parent Elements from HTML Document
console.log("Getting Parent Node");
const child = document.querySelector(".text");
console.log(child.parentNode);


// to get child Elements from Parent node
const parent = document.querySelector(".title")
console.log(parent.childNodes); // to get all the child Nodes from the parent Node
console.log(parent.firstElementChild); // to get firstElementChild
console.log(parent.lastElementChild); // to get lastElementChild

// to get previous and next siblings
console.log("sibling");
const sibling = document.querySelector(".second");
console.log(sibling.previousElementSibling);
console.log(sibling.nextElementSibling);
