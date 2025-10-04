const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".button");

let expression = ""; // сюда будем собирать строку

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      expression = "";
      result.textContent = "";
    } else if (value === "=") {
      try {
        result.textContent = eval(expression);
      } catch {
        result.textContent = "Error";
      }
    } else {
      expression += value;
      result.textContent = expression;
    }
  });
});
