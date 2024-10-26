// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser 
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//            JavaScript can access the DOM to dynamically 
//            change the content, structure, and style of a web page.
console.log(document);
console.dir(document);
console.log(document.title);
document.title = "my website";
console.log(document.title);
document.body.style.backgroundColor = "grey";

const username = "test";
const hello = document.getElementById("hello");
hello.textContent += username === "" ? 'Guest' : username;




// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)
// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST
// ---------- getElementById() ----------
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// ---------- getElementsByClassName() ----------
const fruits = document.getElementsByClassName("fruits");
//fruits[2].style.backgroundColor = "red"
//for(let fruit of fruits){
//  fruit.style.backgroundColor = "red";
//}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

// ---------- getElementsByTagName() ----------
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "lightblue";
});
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});

// ---------- querySelector() ----------
const element = document.querySelector("li");
element.style.fontFamily = "Arial";

// ---------- querySelectorAll() ----------
const veggies = document.querySelectorAll("li");
veggies.forEach(veggie => {
    veggie.style.fontSize = "20px"; 
});