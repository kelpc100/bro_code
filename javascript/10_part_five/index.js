// callback = a function that is passed as an argument
//                    to another function.
//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases
//                    "Hey, when you're done, call this next."
hello(goodbye);
goodbye();
hello(test);

function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye!");
}
function test(){
    console.log(`i dont get this`)
}

sum(displayConsole, 1, 2);
sum(minus, 4, 7);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function minus(x){
    console.log(x-1);
}




// forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element
//                     array.forEach(callback)
//                     element, index, array are provided
// -------------- EXAMPLE 1 --------------
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.forEach(cube);
console.log(numbers);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}
function display(element){
    console.log(element);
}

// -------------- EXAMPLE 2 --------------
let fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(upperCase);
fruits.forEach(display);

fruits.forEach(lowercase);
fruits.forEach(display);

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

/*
function display(element){
    console.log(element);
}
*/




// .map() = accepts a callback and applies that function 
//                 to each element of an array, then return a new array
// ------------ EXAMPLE 1 ------------
const numberz = [1, 2, 3, 4, 5];
const squared = numberz.map(square);
const cubed = numberz.map(cube);
console.log(cubed);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}

// ------------ EXAMPLE 2 ------------
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}

// ------------ EXAMPLE 3 ------------
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}




// .filter() = creates a new array by filtering out
//                 elements with a callback
let nums = [1, 2, 3, 4, 5, 6, 7];
let evenNums = nums.filter(isEven);
let oddNums = nums.filter(isOdd);
console.log(evenNums);
console.log(nums % 2 === 0);
nums.forEach(num => {console.log(num % 2 === 0);});
console.log(nums.map(num => num % 2 === 0));
console.log(nums.filter(num => num % 2 === 0));

console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 18, 19, 20, 21];
const adults = ages.filter(isAdult);
console.log(adults);
console.log(ages >= 18);
console.log(ages.filter(ele => ele >= 18));

function isAdult(element){
    return element >= 18;

};

fruits = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
console.log(fruits.filter(ele => ele.length <= 6));




// .reduce() = reduce the elements of an array
//                     to a single value    
// ---------- EXAMPLE 1 ----------
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(total);
console.log(typeof total);
console.log(`$${total.toFixed(2)}`);
console.log(typeof total.toFixed(2));

function sum(accumulator, element){
    console.log(accumulator);
    return accumulator + element;
}

// ---------- EXAMPLE 2 ----------
const scores = [75, 50, 90, 80, 65, 95, 80];
const maximum = scores.reduce(getMax);
const minimum = scores.reduce(getMin);
console.log(maximum);
console.log(minimum);
console.log(scores.filter(getMax));
console.log(scores.map(getMax));

function getMax(accumulator, element){
    console.log(accumulator);
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
