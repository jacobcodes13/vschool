var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove last item
vegetables.pop();
console.log("vegetables: ", vegetables);

//Remove first item
fruit.shift();
console.log("fruit: ", fruit);

//Index of orange
var indexOfOrange = fruit.indexOf("orange");
console.log("fruit: ", indexOfOrange);

//Add number 2 to fruit
fruit.push(2);
console.log("fruit: ", fruit);

//Find the length of vegetables
var lengthOfVegetables = vegetables.length;
console.log("vegetables: ", lengthOfVegetables);

//Add the number 3 to vegetables
vegetables.push(3);
console.log("vegetables: ", vegetables);

//Add the arrays together
var food = fruit.concat(vegetables);
console.log("food: ", food);

//Remove 2 items from the index of 4
var slicedFood = food.slice(4, 6);
console.log("slicedFood: ", slicedFood);
var removedCarrotAndTomato = food.splice(4, 2);
console.log("food: ", food);

//Reverse the new array
var reversedFood = food.reverse();
console.log("reversedFood: ", reversedFood);

//Turn the array into a string
var arrayToString = reversedFood.join(", ");
console.log("arrayToString: ", arrayToString);