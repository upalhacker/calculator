document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentInput = "";
  
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      if (button.classList.contains("calculate")) {
        try {
          currentInput = eval(currentInput);
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
      } else if (button.classList.contains("clear")) {
        currentInput = "";
        display.value = "";
      } else {
        currentInput += button.textContent;
        display.value = currentInput;
      }
    });
  });
});
