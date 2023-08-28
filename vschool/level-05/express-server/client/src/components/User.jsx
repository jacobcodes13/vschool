import React from "react"

export default function User(props) {
  // console.log(props)

  const { name, hobby, _id } = props
  return (
    <div>
      <h1>Name: { name }</h1>
      <p>Hobby: { hobby }</p>
    </div>
  )
}