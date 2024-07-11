export { switchStyleTheme };

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

const content = document.querySelector(".content");
const rootElement = document.querySelector(":root");
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
