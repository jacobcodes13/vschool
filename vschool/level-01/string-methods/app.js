// function myFunction(text) {
//   // Change to uppercase
//   let upperCaseText = text.toUpperCase();

//   // Change back to lowercase
//   let lowerCaseText = upperCaseText.toLowerCase();
//   console.log(lowerCaseText)
// }

// myFunction("hello");


// function secondFunction(text) {
//   // Find the index of the letter "a"
//   let middleIndex = text.indexOf("a");
//   console.log(Math.floor(middleIndex))
// }

// secondFunction("Hello my name is Jacob!");


// function thirdFunction(text) {
//   // Split the sentence in half  
//   splitText = text.slice(0, 5);
//   console.log(splitText)
// }

// thirdFunction("Hello World");


// function fourthFunction(text) {
//   // Convert string to array
//   text = text.split("");

//   // Get array length and split in half
//   let textLength = text.length / 2;
//   let newLength = Math.floor(textLength);

//   // Split into 2 halves, capitalize the first half
//   let firstArr = text.slice(0, (newLength - 1)).toString().replaceAll(",", "").toUpperCase();
//   let secArr = text.slice(newLength - 1).toString().replaceAll(",", "");

//   // Combine the two halves together
//   let newArr = firstArr + secArr;

//   // return new word
//   console.log(newArr)
// }

// fourthFunction("youbhavebfailed!!!");