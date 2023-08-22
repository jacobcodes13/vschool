// // .filter()

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     if(num % 2 === 0){
//         return num + 10
//     }
// })

// const result = arr.filter(num => num % 2 === 0)

// console.log(result)



// const movies = [
//   { name: "movie1", genre: "horror" },
//   { name: "movie2", genre: "action" },
//   { name: "movie3", genre: "action" },
//   { name: "movie4", genre: "fantasy" }
// ]

// const actionMovies = movies.filter(movie => movie.genre === "action")

// console.log(actionMovies)

//////////////////////////////////////////////

// ARRAY FILTER

// // [1]
// function fiveAndGreaterOnly(arr) {
//   return arr.filter((num) => {
//     if (num >= 5) {
//       return num
//     }
//   })
// }

// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); 
// /// [6, 8]


// // [2]
// function evensOnly(arr) {
//   return arr.filter((num) => {
//     if (num % 2 === 0) {
//       return num
//     }
//   })
// }

// console.log(evensOnly([3, 6, 8, 2])); 
// /// [6, 8, 2]


// // [3]
// function fiveCharactersOrFewerOnly(arr) {
//   return arr.filter((word) => {
//     if (word.length <= 5) {
//       return word
//     }
//   })
// }

// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); 
// // ["by", "dog", "wolf", "eaten"]


// // [4]
// function peopleWhoBelongToTheIlluminati(arr){
//   return arr.filter((person) => {
//     if (person.member === true) {
//       return person
//     }
//   })
// }

// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));

// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },
// //  { name: 'Bob Ziroll', member: true } ]


// // [5]
// function ofAge(arr){
//   return arr.filter((oldEnough) => {
//     if (oldEnough.age >= 18) {
//       return oldEnough
//     }
//   })
// }

// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]));

// //[ { name: 'Angelina Jolie', age: 80 },
// //  { name: 'Bob Ziroll', age: 100 } ]