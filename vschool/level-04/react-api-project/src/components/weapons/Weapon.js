import React, { useState } from "react"

export default function Weapons({ id, data, img }) {
  // console.log("data: ", data)
  // console.log("img: ", img)

  const [ toggleWeaponSkins, setToggleWeaponSkins ] = useState(false)

  function toggleSkins() {
    setToggleWeaponSkins(prev => !prev)
  }

  const weaponSkins = data.skins

  const skins = weaponSkins.map(skin => {
    // console.log(skin)
    return (
      <img key={skin.uuid} src={skin.displayIcon} alt="Weapon Icon" />
    )
  })

  return (
    <div className="weapons--page">
      <div className="weapons--list">
        <div className="weapon--info">
          <h1>{data.displayName}</h1>
          <img alt="Weapon Avatar" className="weapon--avatar" src={img} />
        </div>
        <div className="weapon--skin">
          { toggleWeaponSkins ? <div className="weapon--item--info">
              {skins}
            </div> : <h1>{`${data.displayName} Skins`}</h1> 
          }
        </div> 
        <div>
          <button className="skins--button" onClick={toggleSkins}>Toggle Skins</button>
        </div>
      </div>
    </div>
  )
}