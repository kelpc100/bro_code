// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  
class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person2 = new Person("Patrick", 37,   "128 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

console.log(person1.name);
console.log(person1.age); 
console.log(person1.address);                                   
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

const person = {
    fullName: `Spongebob Squarepants`,
    age: 30,
    hobbies: [`karate`, `jellyfishing`],
    address: {
        street: "126 Conch St.",
        city: "Bikini Bottom", 
        country: "Int. Waters"
    }
}
console.log(person)
console.log(person.fullName);
console.log(person.age); 
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);





// Arrays of Objects
const fruits = [ {name: "apple", color: "red", calories: 95}, 
    {name: "orange", color: "orange", calories: 45}, 
    {name: "banana", color: "yellow", calories: 105}, 
    {name: "coconut", color: "white", calories: 159}, 
    {name: "pineapple", color: "yellow", calories: 37}];

// Access properties of a fruit object
console.log(fruits)
console.log(fruits[0].calories);

// Add a new fruit object
fruits.push({ name: "grapes", color: "purple", calories: 62});
fruits.forEach(fruit => console.log(fruit));
//console.log(fruits[5].calories);


// Remove the last fruit object
fruits.pop();
fruits.forEach(fruit => console.log(fruit));

// Remove fruit objects by indices
fruits.splice(1, 2);
fruits.forEach(fruit => console.log(fruit));

// ---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

// ---------- map() ----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------- filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ---------- reduce() ----------
const maxFruit = fruits.reduce( (max, fruit) =>
                                                        fruit.calories > max.calories ?
                                                        fruit : max);

const minFruit = fruits.reduce( (min, fruit) =>
                                                       fruit.calories < min.calories ?
                                                       fruit : min);

console.log(maxFruit);
console.log(minFruit);



// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings
// ---------- EXAMPLE 1 ----------
const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort();
numbers.forEach(numbers => console.log(numbers));
numbers.sort((a, b) => a - b); //FORWARD
numbers.forEach(numbers => console.log(numbers));
numbers.sort((a, b) => b - a); //REVERSE
numbers.forEach(numbers => console.log(numbers));

// ---------- EXAMPLE 2 ----------
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                            {name: "Patrick", age: 37, gpa: 1.5},
                            {name: "Squidward", age: 51, gpa: 2.5},
                            {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); //FORWARD
people.forEach(people => console.log(people));
people.sort((a, b) => b.age - a.age); //REVERSE
people.forEach(people => console.log(people));

people.sort((a, b) => a.gpa - b.gpa); //FORWARD
people.forEach(people => console.log(people));
people.sort((a, b) => b.gpa - a.gpa); //REVERSE
people.forEach(people => console.log(people));

people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD
people.forEach(people => console.log(people));
people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE
people.forEach(people => console.log(people));




// Fisher-Yates algorithm
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        
        console.log(cards);
        console.log(i, random);        
        console.log(array[i], array[random]);
        [array[i], array[random]] = [array[random], array[i]];
    }
}




// Date(year, month, day, hour, minute, second, ms)
const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getUTCDate());

const date2 = new Date("2024-10-10");
console.log(date2);
console.log(date2.getDate());
console.log(date2.getMonth());
console.log(date2.getDay());
console.log(date2.getFullYear());
console.log(date2.getHours());

const date3 = new Date("2024-01-01");
console.log(date3);
console.log(date3.getDate());
console.log(date3.getMonth());
console.log(date3.getDay());
console.log(date3.getFullYear());
console.log(date3.getHours());

const date4 = new Date(0);
console.log(date4);
console.log(date4.getDate());
console.log(date4.getMonth());
console.log(date4.getDay());
console.log(date4.getFullYear());
console.log(date4.getHours());

const date5 = new Date("2024-02-01");
console.log(date5);
console.log(date5.getDate());
console.log(date5.getMonth());
console.log(date5.getDay());
console.log(date5.getFullYear());
console.log(date5.getHours());

const date6 = new Date("2024-01-02");
console.log(date6);
console.log(date6.getDate());
console.log(date6.getMonth());
console.log(date6.getDay());
console.log(date6.getFullYear());
console.log(date6.getHours());

const date7 = new Date("2024-10-16");
console.log(date7);
console.log(date7.getDate());
console.log(date7.getMonth());
console.log(date7.getDay());
console.log(date7.getFullYear());
console.log(date7.getHours());

const date8 = new Date(2024, 0, 1);
console.log(date8);
console.log(date8.getDate());
console.log(date8.getMonth());
console.log(date8.getDay());
console.log(date8.getFullYear());
console.log(date8.getHours());

const date9 = new Date(2023, 9, 16, 21);
console.log(date9);
console.log(date9.getDate());
console.log(date9.getMonth());
console.log(date9.getDay());
console.log(date9.getFullYear());
console.log(date9.getHours());




// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular
// --------- EXAMPLE 1 ---------
function outer(){
    const message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}
message = "Goodbye";
outer();

// --------- EXAMPLE 2 ---------
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(`Current count: ${counter.getCount()}`);

// --------- EXAMPLE 3 ---------
function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);




// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);
setTimeout(game.increaseScore(5), 1000);
setTimeout(game.increaseScore(5), 1500);
setTimeout(console.log(`The current score is ${game.getScore()}pts`), 2000);
setTimeout(game.decreaseScore(3), 2000);
setTimeout(game.decreaseScore(3), 2500);
setTimeout(console.log(`The final score is ${game.getScore()}pts`), 3000);

setTimeout(outer(), 500);




// console.time() = tool that allows you to measure the time it takes
//                              for a section of code or process to execute
//                              Great for identifying performance "bottlenecks"
function loadData(){
    console.time("loadData");

    for(let i = 0; i < 1000000000; i++){
        //pretend to load some data
    }

    console.timeEnd("loadData");
}
function processData(){
    console.time("processData");

    for(let i = 0; i < 1000000; i++){
        //pretend to process some data
    }
    
    console.timeEnd("processData");
}
loadData();
processData();

console.time("test");
for(let i = 0; i < 50000; i++){

}
console.timeEnd("test");




// .toLocaleString() = returns a string with a language 
//                                  sensitive representation of a number
//                                 .toLocaleString("locale", {options});
let number = 12345678.91;
//number = number.toLocaleString("en-US");
//number = number.toLocaleString("hi-IN");
//number = number.toLocaleString("de-DE");
console.log(number);

//number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
//number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(number);
