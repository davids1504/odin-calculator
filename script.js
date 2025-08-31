let firstOperand;
let secondOperand;
const operators = ["addition", "subtraction", "multiplication", "division"];
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
      operations.add(a, b);
      break;
    case "subtraction":
      operations.subtract(a, b);
      break;
    case "multiplication":
      operations.multiply(a, b);
      break;
    case "division":
      operations.divide(a, b);
      break;
  }
}
