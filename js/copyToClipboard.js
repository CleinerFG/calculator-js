const displayInput = document.getElementById("displayInp");
export default function copyToClipboard(ev) {
  navigator.clipboard.writeText(displayInput.value);
  const toolsContainer = document.querySelector(".tools-btns");
  const span = document.createElement("span");

  span.classList = "copied";
  span.innerText = "Copied!";
  toolsContainer.appendChild(span);

  setTimeout(() => {
    toolsContainer.removeChild(span);
  }, 2000);
}
