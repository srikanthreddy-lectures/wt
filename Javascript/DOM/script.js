const element = document.getElementById("message");
console.log(element);

//element.textContent="CSE A Class";
console.log(element.innerHTML);
element.innerHTML = "<i>Its fine</i>";

//const list = document.querySelector("ul");
const list = document.querySelector("#list");
console.log(list);

const list1 = document.querySelectorAll("li");
console.log(list1);

element.style.color="red";
element.style.backgroundColor="black";

list1[1].style.color="green";