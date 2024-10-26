// DOM Navigation = The process of navigating through the structure 
//                                  of an HTML document using JavaScript.
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children
// ---------- .firstElementChild ----------
document.body.style.backgroundColor = "grey";
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// ---------- .lastElementChild ----------
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "red";
});

// ---------- .nextElementSibling ----------
const element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "lightblue";

// ---------- .previousElementSibling ----------
const des_element = document.getElementById("desserts");
const prevSibling = des_element.previousElementSibling;
prevSibling.style.backgroundColor = "green";

// ---------- .parentElement ----------
const ice_element = document.getElementById("apple");
const parent = ice_element.parentElement;
parent.style.fontFamily = 'Arial, sans-serif';

// ---------- .children ----------
const fruit_element = document.getElementById("fruits");
const children = fruit_element.children;
Array.from(children).forEach(child => {
    child.style.fontSize= '15px';
});