// Forms Practice

{
  /* <form name="my-form"> 
<input type="text" name="firstName"/>
<input type="text" name="lastName"/>
<button>Submit</button>
</form> */
}

// const form = document["my-form"]

// // Submit event

// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     const firstName = form.firstName.value
//     const lastName = form.lastName.value
//     form.firstName.value = ""
//     form.lastName.value = ""

//     // 1 . <h1></h1>
//     const h1 = document.createElement('h1')
//     // 2. <h1>Harry Potter</h1>
//     h1.textContent = firstName + " " + lastName
//     // 3. Append
//     document.getElementsByTagName("body")[0].append(h1)
// })

// Simple HTML Calculator

const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiply-button");

addButton.addEventListener("click", addFunction);
subtractButton.addEventListener("click", subtractFunction);
multiplyButton.addEventListener("click", multiplyFunction);

function addFunction(e) {
  e.preventDefault();

  let firstNumber = Number(addForm.addFirstNumber.value);
  let secondNumber = Number(addForm.addSecondNumber.value);

  let result = firstNumber + secondNumber;

  let h1 = document.createElement("h1");
  
  h1.textContent = result;

  addForm.appendChild(h1);

  console.log(result);
}

function subtractFunction(e) {
  e.preventDefault()

  let firstNumber = Number(subtractForm.subtractFirstNumber.value);
  let secondNumber = Number(subtractForm.subtractSecondNumber.value);

  let result = firstNumber - secondNumber;

  let h1 = document.createElement("h1");
  
  h1.textContent = result;

  subtractForm.appendChild(h1);

  console.log(result);
}

function multiplyFunction(e) {
  e.preventDefault()

  let firstNumber = Number(multiplyForm.multiplyFirstNumber.value);
  let secondNumber = Number(multiplyForm.multiplySecondNumber.value);

  let result = firstNumber * secondNumber;

  let h1 = document.createElement("h1");
  
  h1.textContent = result;

  multiplyForm.appendChild(h1);

  console.log(result);
}