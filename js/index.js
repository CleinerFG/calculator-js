import themeSwitcher from "./themeSwitcher.js";
import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import {
  handleButtonPress,
  handleClearButton,
  handleTyping,
} from "./keyHandlers.js";

document.getElementById("switchTheme").addEventListener("click", themeSwitcher);
document.getElementById("displayInp").addEventListener("keydown", handleTyping);

document.querySelectorAll(".charkey").forEach((key) => {
  key.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearButton);

document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);
