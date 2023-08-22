// // Higher Order Functions
// // callback is a function passed into another function

// function doMath(num1, num2, callback){
//   return callback(num1, num2)
// }


// function sum(num1, num2){
//   return num1 + num2
// }

// function subtract(num1, num2){
//   return num1 - num2
// }


// console.log(doMath(5, 10, subtract)) 


// // Higher order array methods
// // .map()

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const result = arr.map(function(num){ // arr[i]
//     return num + 10
// })

// const result = arr.map(num => num + 10)


// const users = [
//   { name: "joe" },
//   { name: "steve" },
//   { name: "lisa" }
// ]

// const result = users.map(function(user){
//   return user.name
// })

// console.log(result)


// ARRAY MAP EXERCISE

// // [1]
// const arr = [2, 5, 100];

// const result = arr.map((num) => {
//   return num * 2
// })

// console.log(result); // [4, 10, 200]


// //[2]
// const arr = [2, 5, 100];

// const result = arr.map((numArr) => {
//   return numArr.toString();
// })

// console.log(result); // ["2", "5", "100"]


// //[3]
// function capitalizeNames(arr){
//   return arr.map(names => {
//     // Make all the strings lowercase
//     let newNames = names.toLowerCase();
//     // Set the first letter to uppercase
//     let fLetter = newNames.charAt(0).toUpperCase();
//     // Grab the rest of the string
//     let restOfName = newNames.slice(1, newNames.length);
//     // Combine them together
//     return fLetter + restOfName;
//   })
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// // Output:
// // ["John", "Jacob", "Jingleheimer", "Schmidt"]


// // [4]
// function namesOnly(arr){
//   return arr.map(names => {
//     // Grab their names
//     let personsName = names.name;
//     // Return their names
//     return personsName;
//   })
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// // [5]
// function makeStrings(arr){
//   return arr.map(names => {
//     // Grab their name & age
//     let personsName = names.name;
//     let personsAge = names.age;

//     // If they are under age then return they are under age!
//     if (personsAge < 18) {
//       return personsName + " is under age!";
//     } else {
//       return personsName + " can go to the Matrix";
//     }
//   })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// // ["Angelina Jolie can go to The Matrix",
// // "Eric Jones is under age!!",
// // "Paris Hilton is under age!!",
// // "Kayne West is under age!!",
// // "Bob Ziroll can go to The Matrix"]


// // [6]
function readyToPutInTheDOM(arr){
  return arr.map(names => {
    return `<h1>${names.name}</h1><h2>${names.age}</h2>`
  })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// // ["<h1>Angelina Jolie</h1><h2>80</h2>",
// // "<h1>Eric Jones</h1><h2>2</h2>",
// // "<h1>Paris Hilton</h1><h2>5</h2>",
// // "<h1>Kayne West</h1><h2>16</h2>",
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]