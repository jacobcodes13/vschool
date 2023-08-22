//PRELIMINARY SECTION
arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const fruitOne = ["banana", "orange", "apple", "kiwi"];

for (var i = 0; i < arrayOfNumbers.length; i++) {
  console.log(arrayOfNumbers[i])
}
  
for (var i = arrayOfNumbers.length - 1; i >= 0; i--) {
  console.log(arrayOfNumbers[i])
}

for (var i = 0; i < fruitOne.length; i++) {
  console.log(fruitOne[i])
}
      
      
//BRONZE SECTION
const newArray = [];

const evenNumbers = [];

const fruitTwo = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const newFruit = [];

newArray.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(newArray);

for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " - " + "this is an even number");
  }
}

for (var i = 0; i < fruitTwo.length; i += 2) {
    newFruit.push(fruitTwo[i]);
    console.log(newFruit);
}


//SILVER SECTION
const nameArray = [];
const occupationArray = [];
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

for (var i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
};

for (var i = 0; i < peopleArray.length; i++) {
  if (peopleArray[i].name) {
    nameArray.push(peopleArray[i].name);
  };
  if (peopleArray[i].occupation) {
    occupationArray.push(peopleArray[i].occupation);
  };
};
console.log(nameArray);
console.log(occupationArray);

for (var i = 0; i < peopleArray.length; i += 2) {
  nameArray.push(peopleArray[i].name);
}
for (var i = 1; i < peopleArray.length; i += 2){
  occupationArray.push(peopleArray[i].occupation);
}
console.log(nameArray);
console.log(occupationArray);


//GOLD SECTION
