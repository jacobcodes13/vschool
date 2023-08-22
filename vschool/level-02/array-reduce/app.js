// // .reduce()

// // 1 - reduce the array of numbers into a sum of all the numbers
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result1 = nums.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(result1)

/////////////////////////////////////////////////////////

// // 2 - reduce the users to an array of strings of the user's first and last names
// const users = [
//     { fName: "joe", lName: "smithy" },
//     { fName: "tina", lName: "johnson" },
//     { fName: "rick", lName: "sanchez" }
// ]

// ["joe smithy", "tina johnson", "rick sanchez"]

// const result = users.reduce(function(final, user){
//     final.push(user.fName + " " + user.lName)
//     return final
// }, [])

// console.log(result)

//////////////////////////////////////////////////////////

// // 3 - reduce the array into a count of how many people voted
// const voters = [
//     { name: "steve", voted: true },
//     { name: "janet", voted: true },
//     { name: "rebecca", voted: false },
//     { name: "harvey", voted: true },
// ]

// const voteCount = voters.reduce(function(final, voter){
//     if(!voter.voted){
//         final++
//     }
//     return final
// }, 0)

// console.log(voteCount)

//////////////////////////////////////////////////////////////

// // Return an object that has a count of both who voted and who didnt
// // { didVote: 3, didntVote: 1 }

// const voterObj = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final.didVote++
//     } else {
//         final.didntVote++
//     }
//     return final
// }, { didVote: 0, didntVote: 0 })

// console.log(voterObj)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ARRAY SORT

// // [1]
// function total(arr) {
//   const result = arr.reduce((final, num) => {
//     final += num
//     return final
//   })
//   return result
// }

// console.log(total([1,2,3])); 
// // 6

////////////////////////////////////////////////////////

// // [2]
// function stringConcat(arr) {
//   return arr.reduce((final, num) => final + num, "")
// }

// console.log(stringConcat([1,2,3])); 
// // "123"

///////////////////////////////////////////////////////

// // [3]
// function totalVotes(arr) {
//   return arr.reduce((final, voter) => {
//     return final + voter.voted
//   }, 0)
// }

// var voters = [
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
// ];

// console.log(totalVotes(voters)); 
// // 7

//////////////////////////////////////////////////

// // [4]
// function shoppingSpree(arr) {
//   return arr.reduce((final, item) => {
//     return final + item.price
//   }, 0)
// }

// var wishlist = [
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); 
// // 227005

////////////////////////////////////////////////////////

// // [5]
// function flatten(arr) {
//   return arr.reduce((final, array) => {
//     return final.concat(array)
//   })
// }

// var arrays = [
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
// ];

// console.log(flatten(arrays)); 
// // ["1", "2", "3", true, 4, 5, 6];

//////////////////////////////////////////////////////

// // [6]
// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//  return arr.reduce((final, voter) => {
//   if (voter.age <= 25 && voter.voted === true) {
//     final.numYoungVotes++
//   }
//   if (voter.age <= 25) {
//     final.numYoungPeople++
//   }
//   if (voter.age >= 26 && voter.age <= 35 && voter.voted === true) {
//     final.numMidVotesPeople++
//   }
//   if (voter.age >= 26 && voter.age <= 35) {
//     final.numMidsPeople++
//   }
//   if (voter.age >= 36 && voter.voted === true) {
//     final.numOldVotesPeople++
//   }
//   if (voter.age >= 36) {
//     final.numOldsPeople++
//   }
//   return final
//  }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 })
// }

// console.log(voterResults(voters)); 
// // Returned value shown below:
// /*
// { numYoungVotes: 1,
// numYoungPeople: 4,
// numMidVotesPeople: 3,
// numMidsPeople: 4,
// numOldVotesPeople: 3,
// numOldsPeople: 4
// }
// */