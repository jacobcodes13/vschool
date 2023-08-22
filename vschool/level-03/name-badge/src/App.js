import React from "react"
import Badge from "./components/Badge"
// import Badges from "./components/Badges"

function App() {

// Not using setInitFormData
  const [initFormData, setInitFormData] = React.useState({
    fName: "",
    lName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favoriteFood: "",
    comments: ""
  })
  
  const [newData, setNewData] = React.useState([])

  function handleChange(event) {
    const {name, value} = event.target

    setInitFormData(prevData => ({
      ...prevData,
      [name] : value
    }))
  }

  function submitHandle(event) {
    event.preventDefault()

    // console.log(formData)

    setNewData(prev => [
      ...prev,
      initFormData
    ])
    setInitFormData(
      {
        fName: initFormData.fName,
        lName: initFormData.lName,
        email: initFormData.email,
        birthPlace: initFormData.birthPlace,
        phone: initFormData.phone,
        favoriteFood: initFormData.favoriteFood,
        comments: initFormData.comments
      }
    )

    // console.log(newData)
  }

  const Badges = newData.map((badge, index) => <Badge 
    badge={{...badge, index}}
    key={badge.fName}
  />)

  return (
    <div className="App">
      <form className="form" onSubmit={submitHandle}>
        <div className="line--one">
          <input
            type="text"
            placeholder="First Name"
            name="fName"
            className="first--name"
            onChange={handleChange}
            value={initFormData.fName}
            minLength={3}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lName"
            className="last--name"
            onChange={handleChange}
            value={initFormData.lName}
            minLength={3}
            required
          />
        </div>

        <div className="line--two">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email"
            onChange={handleChange}
            value={initFormData.email}
            minLength={3}
            required
          />
          <input
            type="text"
            placeholder="Place Of Birth"
            name="birthPlace"
            className="birth--place"
            onChange={handleChange}
            value={initFormData.birthPlace}
            minLength={3}
            required
          />
        </div>

        <div className="line--three">
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            className="phone"
            onChange={handleChange}
            value={initFormData.phone}
            minLength={3}
            required
          />
          <input
            type="text"
            placeholder="Favorite Food"
            name="favoriteFood"
            className="favorite--food"
            onChange={handleChange}
            value={initFormData.favoriteFood}
            minLength={3}
            required
          />
        </div>

        <div className="comment--button">
          <textarea
            name="comments"
            placeholder="Tell Us About Yourself"
            className="comments"
            onChange={handleChange}
            value={initFormData.comments}
            minLength={3}
            required
          />
          <button className="submit--button">Submit</button>
        </div>
      </form>
      <br />
      <br />

    {Badges}

    </div>
  );
}

export default App;