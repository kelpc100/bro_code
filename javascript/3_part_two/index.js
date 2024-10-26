/*
console.log(Math.PI);
console.log(Math.E);

let x = -3.21
let y = 2;
let z;
z = Math.round(x);
console.log(z);
z = Math.floor(x);
console.log(z);
z = Math.ceil(x);
console.log(z);
z = Math.trunc(x);
console.log(z);
z = Math.pow(x,y);
console.log(z);
z = Math.sqrt(x);
console.log(z);
z = Math.log(x);
console.log(z);
z = Math.sin(x);
console.log(z);
z = Math.cos(x);
console.log(z);
z = Math.tan(x);
console.log(z);
z = Math.abs(x);
console.log(z);
z = Math.sign(x);
console.log(z);
let max = Math.max(x,y,z);
console.log(max);
let min = Math.min(x,y,z);
console.log(min);
*/




// let randomNum = Math.ceil(Math.random() * 100);
// console.log(randomNum);

const buttonOne = document.getElementById(`buttonOne`);
const labelOne = document.getElementById(`labelOne`);
const min = 1;
const max = 6;
let randomNum;
buttonOne.onclick = function(){
    let randomNum = Math.ceil(Math.random() * 6);
    labelOne.textContent = randomNum;
}




/*
let age = 13;
if(age >= 13){
    console.log(`teen`);
}
else{
    console.log(`not teen`);
}

let age = 16;
let hasLicense = true;
if(age >= 16){
    console.log(`can have license`);

    if(hasLicense){
        console.log(`has license`)
    }
    else{
        console.log(`doesn't have license`)
    }
}
else if(age > 0){
    console.log(`cannot have license`);
}
else{
    console.log(`age can't be below 0`);
}
*/



// .checked = property that determines the checked state of an 
//                     HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
        
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
};




/*
let age = 21;
let message = age >= 18 ? `You're an adult`: `You're a minor`;
console.log(message);
*/

let time = new Date();
let greeting = time.getHours() < 12 ? `Good morning` : `Good afternoon`;
console.log(greeting);

let purchase = 125;
let discount = purchase >= 100 ? .1 : 0;
console.log(`Total is $${purchase * (1 - discount)}`);




/*
let day = 4;
switch(day){
    case 1:
        console.log(`Monday`);
        break;

    case 2:
        console.log(`Tuesday`);
        break;
    
    case 3:
        console.log(`Wednesday`);
        break;

    case 4:
        console.log(`Thursday`);
        break;
    
    case 5:
        console.log(`Friday`);
        break;
    
    case 6:
        console.log(`Saturday`);
        break;

    case 7:
        console.log(`Sunday`);
        break;
    
    default:
        console.log(`${day} is not a day`)

};
*/

let testScore = 55;
let letterGrade;
switch(true){
    case testScore >= 90:
        letterGrade = `A`;
        break;

    case testScore >= 80:
        letterGrade = `B`;
        break;

    case testScore >= 70:
        letterGrade = `C`;
        break;

    case testScore >= 60:
        letterGrade = `D`;
        break;

    default:
        letterGrade = `F`;
};
console.log(letterGrade);




// string methods = allow you to manipulate and work with text (strings)
let userName = "Bro Code";
let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));

//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();
//userName = userName.repeat(3);
//console.log(userName)

//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
//let result = userName.includes(" ");
//console.log(result)

//phoneNumber = phoneNumber.replaceAll("-", "");
//phoneNumber = phoneNumber.padStart(15, "0");
//phoneNumber = phoneNumber.padEnd(15, "0");
//console.log(phoneNumber);




// string slicing = creating a substring 
//                            from a portion of another string
//                            string.slice(start, end)
const fullName = "Bro Code";
let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);
console.log(firstName);
console.log(lastName);

const email = "Bro1@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);




// Method Chaining = Calling one method after another
//                                    in one continuous line of code.
username = ` bRO `
console.log(username);
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);



// logical operators =  used to combine or manipulate boolean values 
//                                    (true or false)
// AND = &&
// OR  = ||
// NOT = !
// ---------- EXAMPLE 1 ----------
const temp = 250;
if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

// ---------- EXAMPLE 2 ----------
if(temp <= 0 || temp > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

// ---------- EXAMPLE 3 ----------
const isSunny = true;
if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}




//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator
const PI = `3.14`;
if(PI === 3.14){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}




// while loop = repeat some code WHILE some condition is true
/*
let loggedIn = false;
let password;
while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}

//does something first then checks the condition
do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)
*/




// for loop = repeat some code a LIMITED amount of times
// ------- INCREMENT -------
for(let i = 1; i <= 5; i+=2){
    console.log(i);
}
// ------- DECREMENT -------
for(let i = 2; i >= 0; i--){
    console.log(i);
}
