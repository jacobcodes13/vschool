import React, { useState } from "react"

export default function Character({ id, data, img }) {
  // console.log("data: ", data)
  // console.log("img: ", img)

  const [ hover, setHover ] = useState(false)

  function show() {
    setHover(prev => !prev)
  }

  const characterAbilities = data.abilities

  const mappedCharacterAbilities = characterAbilities.map(each => {
    // console.log(each)
    return (
      <ul>
        <li key={id} className="ability--list--item">{each.displayName}</li>
        { each.displayIcon === null ? <img alt="Not Found" className="ability--avatar" src="https://static.thenounproject.com/png/3674270-200.png" /> : <img alt="Ability Icon" onMouseOver={show} onMouseOut={show} className="ability--image" src={each.displayIcon} /> }
        { hover ? <div className="display--ability--content">{each.description}</div> : hover === false }
      </ul>
    )
  })

  return (
    <div className="character--list">
      { img === null ? <img alt="Not Found" className="character--avatar" src="https://static.thenounproject.com/png/3674270-200.png" /> : <img alt="Character Avatar" className="character--avatar" src={img} /> }
      <div className="character--info">
        <h1>{data.displayName}</h1>
        <h4>{data.description}</h4>
        <h3>Abilities</h3>
        <div className="character--abilities">
          {mappedCharacterAbilities}
        </div>
      </div>
      <br></br>
    </div>
  )
}