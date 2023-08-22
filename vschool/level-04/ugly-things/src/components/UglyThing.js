import React, { useState, useContext } from "react"
import { UglyThingContext } from "../uglyThingContext"

export default function  UglyThing({ item }) {

  const { removeData, saveEditData } = useContext(UglyThingContext)

  const [ isEditing, setIsEditing ] = useState(false)
  const [ editInputs, setEditInputs ] = useState({
    title: item.title,
    description: item.description
  })

  function onChangeEdit(e) {
    const { name, value } = e.target

    setEditInputs(prevData => ({
      ...prevData,
      [ name ]: value
    }))
  }

  function editToggle() {

    setIsEditing(prev => !prev)
  }

  function handleEditSubmit(){
    saveEditData(item._id, editInputs)
    editToggle()
  }

  // console.log("inputs in UglyThing: ", inputs)

  return (
    <div className="main--div">
      <h1>{item.title}</h1>
      <h4>{item.description}</h4>
      <img alt="Random URL" src={item.imgUrl} />
      <div className="remove--edit--button">
        <div>
          <button onClick={() => removeData(item._id)}>Remove Me</button>
          {isEditing === false && <button onClick={editToggle}>Edit Me</button>}
          {isEditing && <button onClick={handleEditSubmit}>Save Me</button>}
        </div>
          {isEditing && 
            <form className="edit--form">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={editInputs.title}
                onChange={onChangeEdit}
              />
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={editInputs.description}
                onChange={onChangeEdit}
              />
            </form>
          }
      </div>
      <hr></hr>
    </div>
  )
}