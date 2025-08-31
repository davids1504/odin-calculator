let firstOperand = 0;
let secondOperand = 0;
let currentOperator = "+";
let isOperatorOnScreen = false;

const operations = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function operate(a, b, operator) {
  switch (operator) {
    case "addition":
      return operations.add(a, b);
    case "subtraction":
      return operations.subtract(a, b);
    case "multiplication":
      return operations.multiply(a, b);
    case "division":
      return operations.divide(a, b);
  }
}

let screen = document.querySelector("#calculator-screen");
screen.textContent = "0";

// Operator buttons
let operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    firstOperand = parseInt(screen.textContent);
    screen.textContent = button.textContent;
    isOperatorOnScreen = true;

    function getCurrentOperator() {
      switch (screen.textContent) {
        case "+":
          return "addition";
        case "-":
          return "subtraction";
        case "*":
          return "multiplication";
        case "/":
          return "division";
        default:
          return "";
      }
    }

    currentOperator = getCurrentOperator();
  });
});

// Digit buttons
let digitButtons = document.querySelectorAll(".digit-num");
digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isOperatorOnScreen) {
      screen.textContent = parseInt(button.textContent);
      isOperatorOnScreen = false;
    } else {
      screen.textContent = parseInt(screen.textContent + button.textContent);
    }
  });
});

// Execute operation (=)
let execute = document.querySelector("#execute");
execute.addEventListener("click", () => {
  secondOperand = parseInt(screen.textContent);
  screen.textContent = operate(firstOperand, secondOperand, currentOperator);
});

// Clear
let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  screen.textContent = "0";
});
