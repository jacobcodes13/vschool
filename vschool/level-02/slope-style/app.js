// // [1]
// // Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

/*
function collectAnimals(/your code here/) {
    /and here/
  }

  collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
  // ["dog", "cat", "mouse", "jackolope", "platypus"]
  
*/

function collectAnimals(...animals) {
  console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

////////////////////////////////////////////////////////////////

// // [2]
// // Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

/*
function combineFruit(fruit, sweets, vegetables){
    return {}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
//=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/

function combineFruit(fruit, sweets, vegetables){
  console.log( { fruit, sweets, vegetables} )
}

combineFruit(["apple", "pear"],
           ["cake", "pie"],
           ["carrot"])
//=> {
  //     fruit: ["apple", "pear"],
  //     sweets: ["cake", "pie"],
  //     vegetables: ["carrot"]
  //  }

///////////////////////////////////////////////////////////////

// // [3]
// // Use destructuring to use the property names as variables. Destructure the object in the parameter:

/*
function parseSentence(_________){
  return `We're going to have a good time in ${location} for ${duration}`
}

parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
});
*/

const vacation = { 
  location: "Burly Idaho", 
  duration: "2 weeks" 
}

const { location, duration } = vacation

function parseSentence() {
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence());

////////////////////////////////////////////////////////////////

// // [4]
// // Use array destructuring to make this code ES6:

/*
function returnFirst(items){
    const firstItem = items[0]; /change this line to be es6/
    return firstItem
}

*/

function returnFirst(items){
  // const firstItem = items[0]; /*change this line to be es6*/
  const [firstItem] = items
  return firstItem
}

// const [varIMakeUpRightHereForTheFirstItemInTheArray] = arr
// does the same thing as:
// const varIMakeUpRightHereForTheFirstItemInTheArray = arr[0]

/////////////////////////////////////////////////////////////////

// // [5]
// // Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

/*
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /your code here/
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
}

returnFavorites(favoriteActivities)

*/

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(){
  /*your code here*/
  const [ firstFav, secondFav, thirdFav ] = favoriteActivities

  return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities))

/////////////////////////////////////////////////////////////////

// // [6]
// // Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

/*
function combineAnimals() {

}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

*/

function combineAnimals(arr1, arr2, arr3) {
  return ([ ...arr1, ...arr2, ...arr3])
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

/////////////////////////////////////////////////////////////////

// // [7]
// // Try to make the following function more ES6y:

/*
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

*/

function product(...numbers) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) => acc * number, 1)
}

/////////////////////////////////////////////////////////////////

// [8]
// Make the following function more ES6y. Use at least both the rest and spread operators:

/* 
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

function unshift(array, a, b, c, d, e) {
  return ;
}

//////////////////////////////////////////////////////////////////

// [9]
// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

/*
function populatePeople(names){
  return names.map(function(name){
      name = name.split(" ");
      // your code
      return {
          firstName: firstName,
          lastName: lastName
      }
  })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
*/

function populatePeople(names){
  return names.map(function(name){
      const [firstName, lastName] = name.split(" ");
      return {
          firstName: firstName,
          lastName: lastName
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]