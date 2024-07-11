import { switchStyleTheme } from "./theme.js";
import { calculate, displayInput } from "./calculate.js";
import { allowedKeys } from "./suport.js";

const switchBtn = document.getElementById("switchTheme");

switchBtn.addEventListener("click", function () {
  if (switchBtn.checked) {
    switchStyleTheme("light");
    return;
  }
  switchStyleTheme("dark");
});

displayInput.addEventListener("keydown", function (ev) {
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
});

document.querySelectorAll(".charkey").forEach(function (key) {
  key.addEventListener("click", function () {
    displayInput.value += key.dataset.value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  displayInput.value = "";
  displayInput.focus();
});

document.getElementById("equal").addEventListener("click", function () {
  calculate();
});

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    navigator.clipboard.writeText(displayInput.value);
    const toolsContainer = document.querySelector(".tools-btns");
    const span = document.createElement("span");

    span.classList = "copied";
    span.innerText = "Copied!";
    toolsContainer.appendChild(span);

    setTimeout(function () {
      toolsContainer.removeChild(span);
    }, 2000);
  });
