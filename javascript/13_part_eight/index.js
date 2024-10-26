// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property
// ---------- EXAMPLE 1 ----------
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }


    get width(){
        return `${this._width.toFixed(2)}cm`;
    }
   
    get height(){
        return `${this._height.toFixed(2)}cm`;
    }


    get area(){
        return `${(this._width * this._height).toFixed(2)}cm`;
    }
}

const rectangle = new Rectangle(2, 3);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

rectangle.width = 5;
rectangle.height = 10;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ---------- EXAMPLE 2 ----------
class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }
    
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

person.firstName = 'Patrick';
person.lastName = 'Star';
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

/*const person2 = new Person("Spongebob", "Squarepants", 30);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);
console.log(person2.age);
*/




// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring
// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY
const colors = ['red', 'green', 'blue', 'black', 'white'];
[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(colors);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS
const person1 = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  job: "Fry cook",
};
displayPerson(person1);

const person2 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 34
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.job);

const {firstName, lastName, age, job="Unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job)

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS
function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
