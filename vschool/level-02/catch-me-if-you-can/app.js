// // Error Handling

// try {
    
//   if(2 === 2){
//      throw new Error("Hey I am an error!")
//   }
//   console.log("Did I console log?")
// }
// catch(err){
//   console.log(err)
// }
// finally {
//  console.log("I am running no matter what!") 
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CATCH ME IF YOU CAN

// // [1]
// function sum(x, y){
//   //check data types first and throw error
//   try {
//     if (isNaN(x) || isNaN(y)) {
//       throw new Error("Not a number");
//     }
//   } catch (e) {
//     console.log(e);
//   }
//   return x + y;
//   }

// // console.log(sum(1, "A"))
// console.log(sum(13, 21))

//////////////////////////////////////////////////////////////////

// // [2]
// var user = {username: "sam", password: "123abc"};

// function login(username, password){
//   if (username === user.username || password === user.password) {
//     console.log("Login successful!")
//   } else {
//     throw ("That's incorrect!")
//   }
// }

// try {
//   console.log(login("sam", "123abc"));
//   // console.log(login("jacob", "1321jj"));
// } catch (e) {
//   console.log(e);
// }
