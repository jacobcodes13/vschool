const input = require("readline-sync");

let num1 = input.question("Please enter the first number: ");
let num2 = input.question("Please enter the second number: ");
const operations = ["add", "subtract", "multiply", "divide"];
let selectOperation = input.keyInSelect(
  operations,
  "What operator would you like to use? "
);

function addNumbers(num1, num2) {
  console.log("The result is : " + (Number(num1) + Number(num2)));
};

function subtractNumbers(num1, num2) {
  console.log("The result is : " + (Number(num1) - Number(num2)));
};

function multiplyNumbers(num1, num2) {
  console.log("The result is : " + Number(num1) * Number(num2));
};

function divideNumbers(num1, num2) {
  console.log("The result is : " + Number(num1) / Number(num2));
};

if (selectOperation === 0) {
  addNumbers(num1, num2);
} else if (selectOperation === 1) {
  subtractNumbers(num1, num2);
} else if (selectOperation === 2) {
  multiplyNumbers(num1, num2);
} else {
  divideNumbers(num1, num2);
};
