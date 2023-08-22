// var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// push - adds item(s) to the end of the array
// arrOfFoods.push("cereal")
// console.log(arrOfFoods)

// ["pancake", "egg", "ice cream", "pizza", "hamburger", "cereal"]

// pop - removes item from the end of the array
// arrOfFoods.pop()
// console.log(arrOfFoods)

// ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// unshift - adds item(s) to the beginning of the array
// arrOfFoods.unshift("cereal")

// ["cereal", "pancake", "egg", "ice cream", "pizza", "hamburger"]

// shift - removes item from the beginning of the array
// arrOfFoods.shift()
// console.log(arrOfFoods)

// ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// concat
// var colors1 = ["blue", "green"]
// var colors2 = ["purple", "red"]
// var newArr = colors1.concat(colors2)
// console.log(newArr)

// ["blue", "green", "purple", "red"]

// indexOf
// var pizzaIndex = arrOfFoods.indexOf("popsicle")
// console.log(pizzaIndex)

// -1

// slice
// var newArr = arrOfFoods.slice(1, 3)
// console.log(arrOfFoods)

// ["egg", "ice cream"]

// join - Turns an array into a string
// var name = "steve"
// var splitName = name.split("")
// var joinedName = splitName.join("-")
// console.log(joinedName)

// s-t-e-v-e

// reverse
// var name = "rick" // kcir
// var splitName = name.split("")
// var reversedArr = splitName.reverse()
// var reversedName = reversedArr.join("")

// var allAtOnce = name.split("").reverse().join("")
// console.log(allAtOnce)

// kcir

// splice - change the orignal array

// arrOfFoods.splice(2, 2, "bacon", "ice cream")
// console.log(arrOfFoods)

// ["pancake", "egg", "bacon", "ice cream", "hamburger"]


// FORCEPTION

const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception() {
  let newArr = [];

  for (let i = 0; i < people.length; i++) {
    let modifiedPeople = people[i] + ":";
    newArr.push(modifiedPeople);
    for (let j = 0; j < alphabet.length; j++) {
      let modifiedAlphabet = alphabet[j].toUpperCase();
      newArr.push(modifiedAlphabet);
    }
  }
  console.log(newArr);
}

forception();

// Output:
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
