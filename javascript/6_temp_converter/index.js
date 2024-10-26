const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const ftoKelvin = document.getElementById("ftoKelvin");
const toKelvin = document.getElementById("toKelvin");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " °C";
    }
    else if(ftoKelvin.checked){
        temp = Number(textBox.value);
        temp = ((temp - 32) * (5/9)) + 273.15;
        result.textContent = temp.toFixed(1) + " °K";
    }
    else if(toKelvin.checked){
        temp = Number(textBox.value);
        temp = temp + 273.15;
        result.textContent = temp.toFixed(1) + " °K";
    }
    else{
        result.textContent = "Select a unit"; 
    }
}