import React from "react"

export default function Badge(props) {
  // console.log(props)

  return (
    <div className='badge'>
      <div className='header'>Badge:</div>
      <div className='row'>
        <div><p>Name: {props.badge.fName + " " + props.badge.lName}</p></div>
        <div><p>Phone: {props.badge.phone}</p></div>
      </div>
      <div className='row'>
        <div><p>Place of Birth: {props.badge.birthPlace}</p></div>
        <div><p>Favorite Food: {props.badge.favoriteFood}</p></div>
      </div>
      <div className='email--comments'>
        <div><p>Email: {props.badge.email}</p></div>
      </div>
      <div className='email--comments'>
        <div><p className="comment--section">{props.badge.comments}</p></div>
      </div>
      <div className='footer'></div>
    </div>
  )
}