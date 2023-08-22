// Forms Part 2

{/* <form name="myForm">
Male:   <input type="radio" name="gender" value="Male"/>
Female: <input type="radio" name="gender" value="Female"/>

Which are your favorite? Select all that apply:
Movies: <input type="checkbox" value="Movies" name="entertainment"/>
Games: <input type="checkbox" value="Games" name="entertainment"/>

<select name="city">
    <option value="Paris">Paris</option>
    <option value="New York">New York</option>
    <option value="Chicago">Chicago</option>
</select>


<button>Submit</button>
</form> */}

// const form = document.myForm

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
    
//     // Radio Inputs
//     console.log(form.gender.value)
    
    
//     // Checkbox Inputs
//     console.log(form.entertainment)
    
//     const checkedInputs = []
    
//     for(let i = 0; i < form.entertainment.length; i++){
//         if(form.entertainment[i].checked){
//             checkedInputs.push(form.entertainment[i].value)
//         }
//     }
    
//     console.log(checkedInputs)
    
    
//     Select Option inputs
    
//     console.log(form.city.value)
    
    
// })


// TRAVEL FORM

const form = document.myForm;

form.addEventListener("submit", (e) => {
  e.preventDefault()

  // New array to push Dietary Restrictions to
  dietaryArr = [];

  // First Name input
  console.log(form.fName.value);

  // Last Name input
  console.log(form.lName.value);

  // Age input
  console.log(form.age.value);

  // Gender input
  console.log(form.gender.value);

  // Location input
  console.log(form.city.value);

  // Dietary Restrictions input
  for (let i = 0; i < form.diet.length; i++) {
    if (form.diet[i].checked) {
      dietaryArr.push(form.diet[i].value);
      console.log(dietaryArr);
    }
  }
  alert(`
    First Name: ${form.fName.value}\n
    Last Name: ${form.lName.value}\n
    Age: ${form.age.value}\n
    Gender: ${form.gender.value}\n
    Location: ${form.city.value}\n
    Dietary Restriction: ${dietaryArr}
  `)
})