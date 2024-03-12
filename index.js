"use strict";

function rollDice() {
  const noOfDice = document.getElementById("number").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < noOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="img/${value}.png" alt="Dice ${value}"/>`);
  }
  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
