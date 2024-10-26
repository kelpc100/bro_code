function rollDice(){
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const values = [];

    for(let i = 0; i < numDice; i++){
        const j = Math.ceil(Math.random() * 6);
        values.push(j);
    }

    diceResult.textContent = `Dice: ${values.join(`, `)}`;
}