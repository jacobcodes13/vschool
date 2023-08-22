// // Web Storage

// // Local Storage
// // Session Storage

// // JSON - Javascript Object Notation
//     // JSON.stringify => turning JS into JSON
//     // JSON.parse => Turns JSON into JS

// // Setter - Save data in local storage (key = value pairs)
// localStorage.setItem("name", "steve")
// localStorage.setItem("age", 10)
// localStorage.setItem("isAlive", true)
// localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
// localStorage.setItem("address", JSON.stringify({street: "123 street", city: "SLC" }))


// // Getter
// const name = localStorage.getItem("name")
// const age = localStorage.getItem("age")
// const isAlive = localStorage.getItem("isAlive")
// const friends = JSON.parse(localStorage.getItem("friends"))
// const address = JSON.parse(localStorage.getItem("add"))
// console.log(address)

// // Remove
// // localStorage.removeItem("age")


// // setTimeOut and setInterval

// setTimeout(arg1, arg2)

// setTimeout(function(){}, 1000) // 1000 millisecond = 1 second

// setInterval(function(){
//   console.log('hello');
// }, 1000)

// // 1 second
// 'hello!'
// // 2 seconds
// 'hello!'

////////////////////////////////////////////////////////////////

// var intervalID = setInterval(function(){
//   console.log('hello!')
// }, 1000);

// // 1 second
// 'hello!'

// // 2 seconds
// 'hello!'

// clearInterval(intervalID)

// function sayHello(){
//   console.log('hello!');
// }


// function stopSayingHello(){
//   clearInterval(intervalID)
// }


// var intervalID = setInterval(sayHello, 1000);

// setTimeout(stopSayingHello, 6000)

// Clock Example

{/* <body>
    <div>
        <h1 id="time-display"></h1>
    </div>
    <script>

        var display = document.getElementById('time-display');

        function getTime(){
            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            if(hour < 10){
                hour = `0${hour}`;
            }
            if(min < 10){
                min = `0${min}`;
            }
            if(sec < 10){
                sec = `0${sec}`;
            }

            display.textContent = `${hour}:${min}:${sec}`;
        }

        setInterval(getTime, 1000);
    </script>
</body> */}

const btn = document.querySelector("#button");
const clicks = document.getElementById("clicks");

const h1 = document.createElement("h1");

let clickCount = 0; // Starting the click coutner at 0

btn.addEventListener("click", () => {
  clickCount++; // Increasing it by 1 every time it's clicked

  h1.textContent = `Number of clicks: ${clickCount}`;

  clicks.append(h1);
});