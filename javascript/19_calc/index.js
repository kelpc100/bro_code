// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    console.log(display);
    console.log(display.value);

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        console.log(display.value);
        display.value = eval(display.value);
        console.log(display.value);
    }
    catch(error){
        display.value = "Error";
        console.log(display);
    }
}