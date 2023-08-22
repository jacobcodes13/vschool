/*
  Auto Updating Notes
*/

// // GET's THE TODO's FROM THE DATABASE
// function getData(){
//   axios.get("https://api.vschool.io/johnsmith2/todo")
//       .then(res => listData(res.data))
//       .catch(err => console.log(err))
// }



// // LISTS THE TODO TITLES TO THE DOM
// function listData(data){
//   // document.getElementById('todo-list').innerHTML = ""
//   clearList()
  
//   for(let i = 0; i < data.length; i++){
//       const h1 = document.createElement('h1')
//       h1.textContent = data[i].title
//       document.getElementById('todo-list').appendChild(h1)
//   }
// }

// function clearList(){
//   const el = document.getElementById('todo-list')
//   while(el.firstChild){
//       el.removeChild(el.firstChild)
//   }
// }

// getData()


// // FORM FOR THE POST REQUEST
// const todoForm = document["todo-form"]

// todoForm.addEventListener("submit", function(e){
//   e.preventDefault()
  
//   const newTodo = {
//       title: todoForm.title.value
//   }
  
//   todoForm.title.value = ""
  
//   axios.post("https://api.vschool.io/johnsmith2/todo", newTodo)
//       .then(res => getData())
//       .catch(err => console.log(err))
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// AXIOS TODO PROJECT

// Get
const myURL = "https://api.vschool.io/jacobnevittproject/todo";
const todoForm = document.todoForm;
const submitButton = document.getElementById("#submitButton");

// - The user can see their current list of todos.
function getTodos() {
  axios.get(myURL)
    .then(res => showTodos(res.data))
    .catch(err => console.log(err))
}

// Todos show up as soon as the page loads.
function showTodos(data) {
  for(let i = 0; i < data.length; i++) {
    // console.log(data[i])
    clearList();

    const div = document.createElement("div"); // Add an attribute to reference the ID for each GET request
    div.className = "newDiv";

    // Create checkbox and give it the value of ID
    const checkedBox = document.createElement("input");
    checkedBox.type = "checkbox";
    checkedBox.checked = data[i].completed;
    checkedBox.setAttribute("dataID", data[i]._id);

    // Create a delete button and give it the value of ID
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("dataID", data[i]._id);
    // console.log(deleteButton)

    const titleValue = document.createElement("h1");
    const descriptionValue = document.createElement("h1");
    const priceValue = document.createElement("h1");
    // console.log("Created H1 elements")

    titleValue.textContent = data[i].title;
    descriptionValue.textContent = data[i].description;
    priceValue.textContent = data[i].price;
    // console.log("Assigned Values")

    if (data[i].completed === true) {
      // If a todo item is complete, it should have a strikethrough line on it
      titleValue.style.textDecoration = "line-through";
      descriptionValue.style.textDecoration = "line-through";
      priceValue.style.textDecoration = "line-through";
    }
    // console.log("Striked out... bummer deal")

    document.body.append(div);

    // create checkbox(input) then append checkbox
    div.append(checkedBox);

    // create a delete button for each div and append it to the div
    div.append(deleteButton);

    // create a div then append the h1 to the div
    div.append(titleValue);
    div.append(descriptionValue);
    div.append(priceValue);
    
    // event listener on checkbox then use a put request to update the todo to completed or not
    checkedBox.addEventListener("click", (box) => {
      // console.log(box.target.checked)
      checkedValue(box.target.checked, box.target.getAttribute("dataID"))
    })

    // event listener on the delete button that deletes the todo
    deleteButton.addEventListener("click", (ID) => {
      // console.log(ID.target.getAttribute("dataID"))
      const idValue = ID.target.getAttribute("dataID");
      // console.log(ID)

      axios.delete(`${myURL}/${idValue}`)

      document.body.removeChild(div);
    });
  }
}

  // Create a new todo
  
  todoForm.addEventListener("submit", postTodos);
  
  function postTodos(e) {
    e.preventDefault(); // Prevents the page from refreshing automatically

    const newTodo = { // Grabbing the users input
      title: todoForm.title.value,
      description: todoForm.description.value,
      price: todoForm.price.value
    }

    axios.post(myURL, newTodo) // Posting a new Todo to axios
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  }

  function checkedValue(isCompleted, ID) {
    const newTodo = {
      completed: isCompleted // Only add the one thing that is changing "completed (true or false)"
    }

    axios.put(`${myURL}/${ID}`, newTodo)
  }

  function clearList() {
    const el = document.getElementsByClassName("newDiv");

    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }


getTodos()