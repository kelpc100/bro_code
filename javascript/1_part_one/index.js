console.log(`back ticks`);
console.log(`second line of text`);

//window.alert(`this is an alert`);
//window.alert(`i like pizza`);

//comment line
/*
multi line comment
*/

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `Hello`;



// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

let a;
a = 100;
console.log(a);

let fullName = "Bro Code";
let age = 25;
let isStudent = false;
let price = 10.99;

console.log(`The price is $${price}`);
console.log(typeof price)

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;



// arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/



/*
let username;
username = window.prompt(`Username`);
console.log(username);
*/

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
};



/*
age = window.prompt(`Age?`)
age = Number(age);
age+=1;
console.log(age, typeof age);
*/

let x = `pizza`;
let y = `pizza`;
let z = `pizza`;

x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



const pi = 3.14159;
let radius;
let circumference;
//radius =  window.prompt('Enter the radius');
//radius = Number(radius);
//console.log(circumference);

document.getElementById("mySubmit1").onclick = function(){
    radius = document.getElementById("myText1").value;
    radius = Number(radius);
    circumference = 2*pi*radius;
    document.getElementById("myH3").textContent = circumference + ` cm`;
};

