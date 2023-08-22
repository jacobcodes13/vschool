import React from "react"

export default function Boxes(props) {

  // console.log(props)
  return (
    <div className="box" style={{backgroundColor: props.color}}></div>
  )
}