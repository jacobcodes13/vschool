//BRONZE SECTION

// HEADER
const h1 = document.createElement("h1");
h1.textContent = "Javascript Made This!!";
h1.className = "header";

document.getElementById("header").appendChild(h1);

const subTitle = document.createElement("span");

subTitle.innerHTML += "<span class='name'>Jacob</span> wrote this Javascript";

document.getElementById("header").appendChild(subTitle);
subTitle.style.display = "block";
subTitle.style.textAlign = "center";

//MESSAGE BOX
const classM = document.getElementsByClassName("message")

classM[0].textContent = "I would like to order a sandwich to go please!";
classM[1].textContent = "Would you like a drink with that?";
classM[2].textContent = "No thanks, just the sandwich.";
classM[3].textContent = "That'll be $5.00 please!";

//CLEAR MESSAGE
let clearButton = document.getElementById("clear-button")

// for (var i = 0; i < classM.length; i++) {
//   (function(i) {
//     clearButton.addEventListener('click', function() {
//       classM[i].textContent = "";
//     });
//   })(i);
// }

function clearChat() {
  for (var i = classM.length - 1; i >= 0; i--) {
    classM[i].remove();
  }
}

clearButton.addEventListener('click', clearChat);


//SILVER SECTION

//DROP DOWN
const dropDown = document.getElementById("theme-drop-down");
const leftM = document.getElementsByClassName("message left");
const rightM = document.getElementsByClassName("message right");

function changeTheme() {
  if (dropDown.value === "theme-one") {
    for (var i = 0; i < leftM.length; i++) {
      leftM[i].style.backgroundColor = "burlywood";
    }
    for (var i = 0; i < rightM.length; i++) {
      rightM[i].style.backgroundColor = "lightblue";
      rightM[i].style.color = "black";
    } 
  } else if (dropDown.value === "theme-two") {
    for (var i = 0; i < leftM.length; i++) {
      leftM[i].style.backgroundColor = "red";
    }
    for (var i = 0; i < rightM.length; i++) {
      rightM[i].style.backgroundColor = "black";
      rightM[i].style.color = "white";
    } 
  }
}

dropDown.addEventListener("change", changeTheme);


//GOLD

//ADD MESSAGES
const messageP = document.getElementById("message-page");
const userInput = document.getElementById("input");
const sendM = document.getElementById("send-message");

function uploadM(e) {
  e.preventDefault();
  var newDiv = document.createElement("div");
  newDiv.textContent = userInput.value;
  newDiv.className = "message left";
  if (leftM.length > rightM.length) {
    newDiv.className = "message right";
  }
  messageP.append(newDiv);
  userInput.value = "";
}

sendM.addEventListener("click", uploadM);

