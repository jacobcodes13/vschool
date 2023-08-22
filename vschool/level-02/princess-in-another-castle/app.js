// // Constructor Functions
// // blueprint for generate js objects with the same shape

// // Constructor is "what it is to be car"
// function Car(make, model){
//     this.make = make
//     this.model = model
// }

// // What do cars "Do"
// Car.prototype.honk = function(){
//     console.log("Honk")
// }

// // instantiate
// const jeep = new Car("jeep", "cherokee")
// const mazda = new Car("mazda", "3")

// mazda.honk()


// // ES6 Classes
// class Vehicle {
//   constructor(make, model, honkSound){
//       this.make = make
//       this.model = model
//       this.honkSound = honkSound
//   }
  
//   honk(){
//       console.log(this.honkSound)
//   }
  
//   drive(){
//       console.log("Vrooom")
//   }
// }

// // Don't repeat yourself . DRY

// class Motorcycle extends Vehicle {
//   constructor(make, model, honkSound, hasSideCar){
//       super(make, model, honkSound)
//       this.hasSideCar = hasSideCar
//   }
// }


// const jeep = new Vehicle("jeep", "cherokee", "Veerp")
// // jeep.honk()

// const harley = new Motorcycle("Harley", "davidson", "Honkey", true)

// harley.honk()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PRINCESS IN ANOTHER CASTLE

// Requirements:

// - Create a class for a player that has the following properties:
// - `name` of type `String`
// - `totalCoins` of type `Number`
// - `status` of type `String` (options are `Powered Up`, `Big`,`Small`, and `Dead`)
// - `hasStar` of type `Boolean` (Is a star active?)
// - `setName` of type `function` - Has a parameter called `namePicked` where you pass in "Mario" or "Luigi". Sets `name` to "Mario" or "Luigi".
// - `gotHit` of type `function` - this is called whenever the player is hit by an enemy. `gotHit()` will set the `status` property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
// - `gotPowerup` of type `function` - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
// - `addCoin` of `function` - adds a coin to totalCoins
// - `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
//     - Name: Luigi,
//     - Status: Small, etc, etc

// Use that class to create the object.

// Create a [random range function](http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range) that returns either 0, 1, or 2.

// If the value is 0 call the `gotHit()` function on the object. If the value is 1 call the `gotPowerup()` function on the object. If the value is 2 call the `addCoin()` function

// Then call the print method on the object.

// Now put the random range function inside a `setInterval` function that ends after the player is dead

// The end product will look something like this:

let intervalID;
let message = "";

class player {
  constructor (name, totalCoins, status, hasStar, gameActive) {
    this.name = name; // Mario or Luigi
    this.totalCoins = totalCoins; // Number
    this.status = status; // Powered Up, big, small or dead
    this.hasStat = hasStar; // Is star active?
    this.gameActive = gameActive; // Is game active or dead?
  }

  // Set name to Mario or Luigi, set it to namePicked
  setName(namePicked) {
    this.name = namePicked;
  }

  // Called whenever a playyer is hit by a enemy
  // Set's the status property to Powered Up, Big, Small or Dead
  gotHit() {
    if (this.hasStar) {
      message = "You got hit! But your star protects you.";
      this.hasStar = false;

    } else {
      message = "You got hit!"
      if (this.gotPowerup === "Powered Up") {
        this.status = "Big";

      } else if (this.gotPowerup === "Big") {
        this.status = "Small";

      } else if (this.gotPowerup === "Small") {
        this.status = "Dead";
        this.gameActive = false;
      }
    }
  }

  // Called when a power up is received
  // Sets the status from Small to Big to Powered Up
  // If already powered up then you get a star!
  gotPowerup() {
    message = "You got a Power Up!";
    if (this.status = "Small") {
      this.status = "Big";

    } else if (this.status = "Big") {
      this.status = "Powered Up"

    } else if (this.status = "Powered Up") {
      message = "Congrats! You got a star.";
      this.hasStar = true;
    }
  }

  // Adds a coin to total coins
  addCoin() {
    message = "You found a coin!";
    this.totalCoins += 1;
  }

  // Prints the Name, Status and Total Coins
  print(str = "") {
    
    if (str !== "") {
        console.log(message)
    }
    
    console.log(`\n Name: ${this.name}\n Status: ${this.status}\n Total Coins: ${this.totalCoins}`)

    if (this.hasStar) {
        console.log("You have a star!")
    }
    console.log("\n")
  }
}

function startGame() {
  // Randomly select a player
  const result = Math.floor(Math.random() * 2);
  if (result === 1) {
    myPlayer.setName("Luigi");
  }

  message = "Let the games begin!";

  gameLoop();
}

function gameLoop() {
  // Create a 1 second loop
  intervalID = setInterval(randomRange, 1000);

}

function randomRange() {
  if (myPlayer.gameActive) {

    myPlayer.print(message);

    const result = Math.floor(Math.random() * 3);

    if (result === 0) {
      myPlayer.gotHit();

    } else if (result === 1) {
      myPlayer.gotPowerup();

    } else {
      myPlayer.addCoin();

    }

  } else {
    // Game over
    myPlayer.print(`Your final score is: ${player.totalCoins}`);

    clearInterval(intervalID);
  }

}

// Default to Mario
const myPlayer = new player("Mario", 0, "Big", false, true);

startGame();