const colorsThemes = {
  dark: [
    ["--bg-color", "#141332"],
    ["--primary-color", "#2b2a42"],
    ["--primary-color-hover", "#434268"],
    ["--font-color", "#f5f5f5"],
  ],
  light: [
    ["--bg-color", "#f5f5f5"],
    ["--primary-color", "#ddd"],
    ["--primary-color-hover", "#bbb"],
    ["--font-color", "#070707"],
  ],
};

const rootElement = document.querySelector(":root");
const body = document.querySelector("body");
const content = document.querySelector(".content");
const switchBtn = document.getElementById("switchTheme");
const copyBtn = document.getElementById("copyToClipboard");

// Switch theme style functions
function switchStyleTheme(theme) {
  // param theme: should be the string "dark" or "light"

  content.dataset.theme = theme;
  const arrColors = colorsThemes[theme];

  arrColors.forEach(function (color) {
    rootElement.style.setProperty(color[0], color[1]);
  });

  // Switch color SVG
  const copyBtnPath = copyBtn.querySelector("path");
  copyBtnPath.setAttribute("fill", arrColors[3][1]);
}

switchBtn.addEventListener("click", function () {
  if (switchBtn.checked) {
    switchStyleTheme("light");
    return;
  }
  switchStyleTheme("dark");
});

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

function calculate() {
  const expression = displayInput.value;
  if (expression === "") {
    displayInput.value = 0;
    return;
  }
  try {
    displayInput.value = eval(expression);
  } catch (error) {
    displayInput.value = "Error!";
  }
}

const displayInput = document.getElementById("displayInp");

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
