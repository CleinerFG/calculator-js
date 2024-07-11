export const displayInput = document.getElementById("displayInp");

export function calculate() {
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
