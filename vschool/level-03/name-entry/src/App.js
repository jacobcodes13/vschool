import React from "react"

function App() {
  const [formData, setFormData] = React.useState({
    name: ""
  })

  function handleChange(event) {
    // console.log("changed")

    const {name, value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData, 
      [name] : value
    }))
  }
  // console.log(formData)

  const [friendList, setFriendList] = React.useState([])

  function handleSubmit(event) {
    event.preventDefault()

    // console.log("submitted")

    // need to push the data over to the h1 so it displays the new name thats been entered
    setFriendList(prevFriendList => [
      ...prevFriendList, formData.name
    ])
  }

  const newFriendList = friendList.map((friend, index) => {
    return <li key={index}>{friend}</li>
  })

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Name"
          className="form--name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <h1>{formData.name}</h1>
        <button className="form--submit">Submit</button>
        <ol>
          {newFriendList}
        </ol>
      </form>
    </div>
  );
}

export default App;
