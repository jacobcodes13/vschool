// ES6 Part 1


// const and let

// var name = "steve"

// const firstName = "joe"
// firstName = "steve"
// let age = 12
// age = 13

// Global, Local, Bracket
// function someFunc(){
//    let a
//    if(2 === 2){
//        a = "hello"
//    }
//    console.log(a)
// }

// someFunc()

// spread and rest (gather)
    // Syntax:  ...
// function maxNumber(...nums){
//     console.log(nums)
// }

// maxNumber(0, 3, 58, 20, 200, 30)

// objects and arrays
// const colors1 = ["red", "blue"]
// const colors2 = ["yellow", "green"]

// const allColors = [...colors1, ...colors2]

// console.log(allColors)

// const person = {
//     name: "rick",
//     age: 50
// }

// const personCopy = { ...person }
// console.log(personCopy)


// template literals
// const name = "joe"
// // "hi " + name
// const greeting = `hi ${name}`
// console.log(greeting)

// import & export
// require()
// module.exports


// ES6 part 2

// fat arrow functions
// function sum(){
    
// }

// const sum2 = function(){
    
// }

// const sum2ES6 = word => {
//     console.log(`ES6 is ${word}!`)
//     return word
// }

// addEventListener("click", () => {
    
// })


// object literals
// const blue = "blue"
// const green = "green"
// const red = "red"

// const colors = { red, green, blue }

// console.log(colors)

// object destructuring
// const user = {
//     username: "joe123",
//     age: 20,
//     _id: "f892jf2jf98j39fj"
// }

// const { _id, username, age } = user

// const names = ["john", "betty", "nick"]

// const [john, betty, nick] = names
// console.log(item2)


// default parameters

// function sum(a = 5, b = 10){
//     return a + b
// }

// console.log(sum(7, 5))


// ESCAPE ROOM

// Setting up the readline-sync
const readline = require("readline-sync");
optionOne = ["S", "O"];
optionTwo = ["L", "G", "C"];
let isAlive = true;

const name = readline.question("What is your name? \n");


while (isAlive === true) {
  const startGame = readline.keyInSelect(optionOne, "You can either: [S]tick your arm through a hole and open the door [O]r look for a key?");
  
  if (optionOne[startGame] === "S") {
    console.log(name + " You stick your arm in and DIE!")
    isAlive = false;
    
  } else if (optionOne[startGame] === "O") {
    const findKey = readline.keyInSelect(optionTwo, "[L]ook through the room, [G]o to another room, [C]rawl into a passage");

    console.log(name + " goes looking for the key!")
    if (optionTwo[findKey] === "L") {
      console.log("You look through the room and find the key in a hidden box!")
      const escape = readline.keyInYN("Do you want to escape?")
      if (escape === true) {
        console.log("You use the key to open the door and escape!");
        break
      } else {
        console.log("You run out of air and DIE!")
        isAlive = false;
      }
    } else if (optionTwo[findKey] === "G") {
      console.log(name + " goes into another room but the walls cave in and DIES!")
      isAlive = false;
    } else {
      console.log(name + " crawls into a small passage and gets lost!")
      isAlive = false;
    }
  }
}


// Simple Solution with Yes or No answers

// while (isAlive === true) {
//   if (readline.keyInYN("Do you want to put your arm through a hole to open the door?")) {
//     console.log(name + " you stick your arm in and DIE!")
//     isAlive = false;
//     break
//   } else if (readline.keyInYN("Do you want to look for the key?")) {
//     console.log(name + " goes looking for the key!")
//     if (readline.keyInYN("Look in the first room?")) {
//       console.log(name + " looks through the room and finds the key in a hidden box!")
//       readline.keyInYN("Do you want to escape?")
//       console.log("You escaped!");
//       break
//     } else if (readline.keyInYN("Do you want to look in the other room?")) {
//       console.log(name + " goes into another room but the walls cave in and DIES!")
//       isAlive = false;
//       break
//     } else if (readline.keyInYN(name + " crawls into a passage?")) {
//       console.log(name + " crawls into a small passage and gets lost!")
//       isAlive = false;
//       break
//     }
//   }
//   break
// }