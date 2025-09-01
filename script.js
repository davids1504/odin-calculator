let firstOperand = "EMPTY";
let secondOperand = "EMPTY";
let currentOperator = "EMPTY";
let isOperatorActive = false;

const operations = {
  add(a, b) {
    if (a + b > 99999999999) {
      return 99999999999;
    }
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    if (a * b > 99999999999) {
      return 99999999999;
    }
    return a * b;
  },
  divide(a, b) {
    if (b === 0) {
      alert("Error\nDivision by 0");
      clearAll();
      return 0;
    }
    let truncated = Math.trunc(a / b);
    let digitNumber = 1;
    while (truncated >= 10) {
      digitNumber++;
      truncated /= 10;
      console.log(truncated);
    }
    console.log(digitNumber);

    return parseFloat((a / b).toFixed(11 - digitNumber));
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
    function getCurrentOperator() {
      switch (button.textContent) {
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
    if (firstOperand === "EMPTY" && !isOperatorActive) {
      currentOperator = getCurrentOperator();
      firstOperand = parseInt(screen.textContent);
      isOperatorActive = true;
    } else {
      console.log("hi");
      secondOperand = parseInt(screen.textContent);
      screen.textContent = operate(firstOperand, secondOperand, currentOperator);
      firstOperand = operate(firstOperand, secondOperand, currentOperator);
      isOperatorActive = true;
      secondOperand = "EMPTY";
      currentOperator = getCurrentOperator();
    }
  });
});

// Digit buttons
let digitButtons = document.querySelectorAll(".digit-num");
digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isOperatorActive) {
      screen.textContent = parseInt(button.textContent);
      isOperatorActive = false;
    } else {
      if (screen.textContent.length >= 11) {
        return;
      }
      screen.textContent = parseInt(screen.textContent + button.textContent);
    }
  });
});

// Execute operation (=)
let execute = document.querySelector("#execute");
execute.addEventListener("click", () => {
  if (firstOperand === "EMPTY" || currentOperator === "EMPTY") {
    return;
  }
  secondOperand = parseInt(screen.textContent);
  screen.textContent = operate(firstOperand, secondOperand, currentOperator);
  clearAll();
});

// Clear
let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  screen.textContent = "0";
  clearAll();
});

// Helper functions
function clearAll() {
  firstOperand = "EMPTY";
  secondOperand = "EMPTY";
  currentOperator = "EMPTY";
}
