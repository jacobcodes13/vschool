// // forEach & find & findIndex Practice

// // .forEach
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const newArr = []

// arr.forEach(num => num % 2 === 0 && newArr.push(num))

// console.log(newArr)

// ////////////////////////////////

// // .find()
// const result = users.find(function(user){
//     if(user.name === "julie"){
//         return user
//     }
// })

// console.log(result)


// const users = [
//     { name: "joe" },
//     { name: "julie" },
//     { name: "rick" }
// ]

// ///////////////////////////////////

// // .findIndex()
// const userIndex = users.findIndex(function(user){
//     if(user.name === "julie"){
//         return true
//     }
// })

// console.log(userIndex)

////////////////////////////////////////////////////////////////////////////////////////////////

// // some & every

// const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

// // .some()
// const result = names.some(function(name){
//     if(name[0] === "S"){
//         return true
//     }
// })

// console.log(result)

////////////////////////////////////////

// // .every()
// const result = names.every(name => name[0] === "J")

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////////////

// // sort

// const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// // .sort()

// arr.sort((a, b) => a - b)

// console.log(arr)

///////////////////////////////////////////////////////////////////////////////////////////////

// ARRAY SORT

// // [1]
// function leastToGreatest(arr) {
//   return arr.sort((a, b) => a - b)
// }

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); 
// // [1, 2, 3, 5, 20, 90]

/////////////////////////////////////////

// // [2]
// function greatestToLeast(arr) {
//   return arr.sort((a, b) => b - a)
// }

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); 
// // [90, 20, 5, 3, 2, 1]

/////////////////////////////////////////

// // [3]
// function lengthSort(arr) {
//   return arr.sort((a, b) => {
//     return a.length - b.length
//   })
// }

// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); 
// // ["by", "dog", "wolf", "eaten", "family"]

//////////////////////////////////////////

// [4]
function alphabetical(arr) {
  return arr.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1
  })
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); 
// ["by", "dog", "eaten", "family", "wolf"]

//////////////////////////////////////////

// // [5]
// function byAge(arr){
//   return arr.sort((a, b) => {
//     return a.age - b.age
//   })
// }

// console.log(byAge([
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]));
// // => [ { name: 'Misunderstood Observer', age: 2 },
// //  { name: 'Quiet Samurai', age: 22 },
// //  { name: 'Unlucky Swami', age: 77 },
// //  { name: 'Arrogant Ambassador', age: 100 } ]