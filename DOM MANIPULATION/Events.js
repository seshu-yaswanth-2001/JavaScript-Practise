const click = document.getElementById("btn");

click.addEventListener("click", () => {
  console.log("Clicked through JS");
})

const input = document.getElementById("box");
const log = document.getElementById("value");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
  console.log(e);
}


const formname = document.getElementById("form");

formname.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = document.querySelector("#form input").value;
  if (!inputName) {
    alert("Please enter valid name:")
  } else {
    alert(inputName)
  }
})

formname.addEventListener("reset", (event) => {
  event.target.querySelector("input").value = "";
})

const btn = document.getElementById("submitBtn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let name = document.getElementById('solo').value;
  if (!name) {
    alert("please enter valid name");
  } else {
    alert(name);
  }
})
