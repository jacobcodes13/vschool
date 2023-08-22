import React, { useContext } from "react"
import { ValorantContext } from "../../valorantContext"
import Character from "./Character"

export default function Characters() {
  const { characters } = useContext(ValorantContext)
  
  const mappingCharactersList = characters.map(char => {
    // console.log(char)
    return (
      <ul className="character--background" style={{background: `linear-gradient(90deg, #${char.backgroundGradientColors[0]}, #${char.backgroundGradientColors[1]}, #${char.backgroundGradientColors[2]}, #${char.backgroundGradientColors[3]})`}}>
        <li key={char.uuid} className="character--list--item">
          <Character
            id={char.uuid}
            data={char}
            img={char.fullPortrait}
          />
        </li>
      </ul>
    )
  })

  return (
    <div className="characters--page">
      {mappingCharactersList}
    </div>
  )
}