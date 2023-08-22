// Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)
function largestNumber(numbers) {
  let arr = numbers.split(" ").map(Number);
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNumber("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// Write a function that takes an array of words and a character and returns each word that has that character present
function returnCharacter(words) {
  let arr = words.split(" ")
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("!")) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(returnCharacter("$auce! #^@#$% !3valu3 l0v3 !!ll"));

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2
function divisibleNum(num1, num2) {
  let firstNumber = num1;
  let secondNumber = num2;
  if (firstNumber % secondNumber === 0) {
    console.log(firstNumber + " is divisible by " + secondNumber)
  } else {
    console.log(firstNumber + " is not divisible by " + secondNumber)
  }
}

console.log(divisibleNum(25, 5));