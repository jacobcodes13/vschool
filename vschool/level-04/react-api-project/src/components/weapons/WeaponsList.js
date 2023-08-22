import React, { useContext } from "react"
import { ValorantContext } from "../../valorantContext"
import Weapon from "./Weapon"

export default function Characters() {
  const { weapons } = useContext(ValorantContext)
  
  const mappingWeaponsList = weapons.map(weapon => {
    // console.log("weapon: ", weapon)
    return (
      <div className="weapon--background">
        <ul>
          <li className="weapon--list--item">
            <Weapon
              // key={weapon.uuid}
              // id={weapon.uuid}
              data={weapon}
              img={weapon.displayIcon}
            />
          </li>
        </ul>
      </div>
    )
  })

  return (
    <div className="weapons--page">
      {mappingWeaponsList}
    </div>
  )
}