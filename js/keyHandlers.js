import calculate from "./calculate.js";

const allowedKeys = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  "0",
  ".",
  "%",
  "+",
  "C",
  "(",
  ")",
  "=",
];

const displayInput = document.getElementById("displayInp");

export function handleButtonPress(ev) {
  const key = ev.currentTarget;
  displayInput.value += key.dataset.value;
}

export function handleClearButton() {
  displayInput.value = "";
  displayInput.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();

  if (allowedKeys.includes(ev.key)) {
    displayInput.value += ev.key;
    return;
  }

  switch (ev.key) {
    case "Backspace":
      displayInput.value = displayInput.value.slice(0, -1);
      break;
    case "Enter":
      calculate();
      break;
    case "Delete":
      displayInput.value = "";
      break;
    default:
      break;
  }
}
