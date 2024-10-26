// array = a variable like structure that can 
//         hold more than 1 value

let fruits = ["apple", "orange", "banana"];
fruits.push("coconut");  //add an element
//fruits.pop();            //removes last element
fruits.unshift("mango"); //add element to beginning
fruits.shift();          //removes element from beginning
console.log(fruits)

let numOfFruits = fruits.length;
let index = fruits.indexOf("coconut");
console.log(numOfFruits);
console.log(index);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.sort();
console.log(fruits)
fruits.sort().reverse();
console.log(fruits)

/*
for(let fruit of fruits){
    console.log(fruit);
}
*/




// 2D array = multi-dimensional array that stores a matrix
//                    of data in rows and columns.
//                    Useful for games, spreadsheets, or representing images 
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';

matrix[2][0] = 'X';
matrix[2][1] = 'O';
matrix[2][2] = 'X';
*/

for(let row of matrix){
    console.log(row)
    const rowString = row.join(' ');
    console.log(rowString);
}




// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)
// ------------ EXAMPLE 1 ------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

// ------------ EXAMPLE 2 ------------
let username = "Bro Code";
let letters = [...username]; 
console.log(letters);

// ------------ EXAMPLE 3 ------------
fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);




// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                  spread = expands an array into separate elements
//                                  rest = bundles separate elements into an array
// ------- EXAMPLE 1 -------
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
openFridge(food1, food2, food3, food4, food5);
foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

// ------- EXAMPLE 2 -------
function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const average = getAverage(75, 100, 85, 90, 50);
console.log(average);

// ------- EXAMPLE 3 -------
function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);




