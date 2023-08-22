// ES6 Practice Lessons

// const button = document.getElementById('button')
// const output = document.getElementById('output')
// const input = document.getElementById('input')
// // change this function to be an arrow function
// button.addEventListener('click', () => {
//     output.innerText = "You've submitted: " + input.value
// })

// //-------------------------------------------------------------------------------------------
// // Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// function collectAnimals(...animals) {  
//     return animals
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// //-------------------------------------------------------------------------------------------
// // Use destructuring to use the property names as variables:

// const vacation = {  
//   location: "Burly Idaho",
//   duration: "2 weeks"
// };

// function parseSentence({location, duration}){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

// // console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter

// //-------------------------------------------------------------------------------------------
// // Make the following function more ES6xy. Use at least both the rest and spread operators:
// // this function should add as many items to the front of the returned array as the caller of the function wants
// function unshift(array, ...letters) {  
//   return [...letters, ...array];
// }

// //-------------------------------------------------------------------------------------------
// // make "greeting" default to "hello"
// function greet(name, greeting = "hello"){
//     return greeting + ", " + name
// }

// console.log(greet('Emily', 'heyyyooo'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ES6 PRACTICE

// // Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

// // John is the pet owner, and his name should be stored differently than the other names.

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//////////////////////////////////////////////////////////////

// [1]
// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrots) {
        return { type: "carrot", name: carrots }
    })
}

// function mapVegetables(arr) {
//   return arr.map(carrots => ({ type: "carrot", name: carrots }))
// }

// console.log(mapVegetables(carrots))

///////////////////////////////////////////////////////////////

// [2]
// Re-write this .filter() ’s callback function using an arrow function:

const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

function filterForFriendly(arr) {
  return arr.filter(function(person) {
    return person.friendly
  })
}

//   function filterForFriendly(arr) {
//     return arr.filter((person) => person.friendly)
//   }

// console.log(filterForFriendly(people))

/////////////////////////////////////////////////////////////////

// [3]
// Re-write the following functions to be arrow functions:

function doMathSum(a, b) {
  return a + b
}

// (a, b) => a + b

var produceProduct = function(a, b) {
  return a * b
}

// let produceProduct = (a, b) => a * b

//////////////////////////////////////////////////////////////////

// [4]
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// firstName should default to "Jane" lastName should default to "Doe" age should default to 100

"Hi Kat Stark, how does it feel to be 40?"

function printString(firstName, lastName, age) {
  return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

console.log(printString("Jane", "Doe", 100))