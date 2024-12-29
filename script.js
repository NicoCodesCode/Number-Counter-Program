const decreaseButton = document.getElementById("decreasing-button");
const resetButton = document.getElementById("reset-button");
const increaseButton = document.getElementById("increasing-button");
const numberText = document.getElementById("number-text");
let currentNumber = 0;

function decreaseNumber() {
  numberText.innerText = currentNumber -= 1;
}

function increaseNumber() {
  numberText.innerText = currentNumber += 1;
}

function resetNumber() {
  currentNumber = 0;
  numberText.innerText = currentNumber;
}

decreaseButton.onclick = decreaseNumber;
increaseButton.onclick = increaseNumber;
resetButton.onclick = resetNumber;
