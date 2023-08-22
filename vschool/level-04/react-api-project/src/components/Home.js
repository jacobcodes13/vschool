import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ValorantContext } from "../valorantContext";

export default function Home() {
  const navigate = useNavigate();

  const { characters, weapons } = useContext(ValorantContext)

  const mappedCharacters = characters.map(character => {
    // console.log("character: ", character)
    return (
      <div key={character.uuid} className="home--character--icon">
        <img onClick={() => navigate("/characters")} alt="Character Icon" src={character.displayIconSmall} />
      </div>
    )
  })

  const mappedWeapons = weapons.map(weapon => {
    // console.log("weapons: ", weapon)
    return (
      <div key={weapon.uuid} className="home--weapon--icon">
        <img onClick={() => navigate("/weapons")} alt="Weapon Icon" src={weapon.killStreamIcon} />
      </div>
    )
  })

  return (
    <div className="home--page">
      <div className="home--title">
        <h1>Characters</h1>
      </div>
      {mappedCharacters}
      <div className="home--title">
        <h1>Weapons</h1>
      </div>
      {mappedWeapons}
    </div>
  )
}