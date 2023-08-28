import React from "react"

export default function User(props) {
  // console.log(props)

  const { name, hobby, _id } = props
  return (
    <div>
      <div className="user">
        <h1>Name: { name }</h1>
        <p>Hobby: { hobby }</p>
      </div>
    </div>
  )
}