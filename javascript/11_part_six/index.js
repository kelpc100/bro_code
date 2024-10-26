// function expressions = a way to define functions as
//                                           values or variables
//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners
const hello = function(){
    console.log("Hello");
};
hello();

//setTimeout(function(){
//    console.log("Goodbye");
//}, 1000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(ele){
    return Math.pow(ele, 2);
});
const evenNums = numbers.filter(function(ele){
    return ele % 2 === 0;
});
console.log(squares);
console.log(evenNums);
console.log(numbers.reduce(function(acc, ele){
    return acc + ele;
}));




// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code
// ---------- EXAMPLE 1 ----------
const hola = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};
   
hola("Bro", 25);
  
// ---------- EXAMPLE 2 ----------
setTimeout(() => {console.log("Hello"); 
                  console.log("Goodbye");}, 2000);


// ---------- EXAMPLE 3 ----------               
const nums = [1, 2, 3, 4, 5, 6];
const squared = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(squared);
console.log(cubes);
console.log(evenNumbers);
console.log(oddNums);
console.log(total);