// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update
import {PI, getCircumference, getArea, getVolume, getVolumeCyl} from './mathutil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);

console.log(`${getCircumference(5).toFixed(2)} cm`);
console.log(`${getVolumeCyl(5, 10).toFixed(2)} cm^3`);





// synchronous  = Executes line by line consecutively in a sequential manner 
//                             Code that waits for an operation to complete.
// asynchronous = Allows multiple operations to be performed 
//                               concurrently without waiting. Doesn't block the execution 
//                               flow and allows the program to continue.
//                               (I/O operations, network requests, fetching data)
//                               Handled with: Callbacks, Promises, Async/Await
// ASYNCHRONOUS
/*
function func1(callback){
    setTimeout(() => {console.log("Task 1");
                                    callback()}, 3000);
}

// SYNCHRONOUS
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);
func2();
*/



// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection
// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}

console.log("You have reached the end!");