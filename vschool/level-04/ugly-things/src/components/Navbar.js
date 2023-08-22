import React, { useContext } from "react";
import { UglyThingContext } from "../uglyThingContext";

export default function Navbar() {

  const { inputs, userInput, sendData } = useContext(UglyThingContext)

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <form className="form">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={inputs.title}
            onChange={userInput}
          />
          <input
            type="url"
            placeholder="Img URL"
            name="imgUrl"
            value={inputs.imgUrl}
            onChange={userInput}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={inputs.description}
            onChange={userInput}
          />
        </form>
        <button onClick={sendData}>Submit</button>
      </div>
    </>
  )
}