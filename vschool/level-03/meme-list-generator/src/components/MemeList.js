import React, {useState} from "react"

export default function MemeList(props) {
console.log(props)
  /*
  
  PASSED DOWN STATE:
  
  deleteMeme: ƒ deleteMeme(deletingItem)

  storedMemes: 
  (100) [{…}, ...]

  submittedMemeInfo: 
  0: {topText: '', bottomText: '', randomImage: 'https://i.imgflip.com/4t0m5.jpg'}
  
  */

  const [editedMeme, setEditedMeme] = useState({
    ...props.passedDownState.submittedMemeInfo[props.index]
  })

  console.log(editedMeme)

  //state for toggling the edit inputs

  const [isEditToggle, setIsEditToggle] = useState(false)
 
 function editToggle() {
   setIsEditToggle(prev => !prev)
   
  //  console.log(isEditToggle, "isEditToggle value")
  }
  
  function handleEditChange(e) {
    const { name, value } = e.target
    
    setEditedMeme(prev => ({
      ...prev,
      [ name ]: value 
    }))
  }

  // console.log(props.submittedMemeInfo)

  function saveEditChange() {
    props.passedDownState.submittedMemeInfo[props.index].topText = editedMeme.topText
    props.passedDownState.submittedMemeInfo[props.index].bottomText = editedMeme.bottomText
    props.passedDownState.submittedMemeInfo[props.index].randomImage = editedMeme.randomImage

    setIsEditToggle(prev => !prev)
    
  }

  // console.log(props.passedDownState.submittedMemeInfo)
  
  return (
    <div className="main-wrapper" key={props.index}>
    <hr></hr>

    <div className="edit--save--buttons">
      {isEditToggle === false && <button className="button" onClick={editToggle}>Edit</button>}
      {isEditToggle === true && <button className="button" onClick={() => saveEditChange()}>Save</button>}
      <button className="button" onClick={() => props.passedDownState.deleteMeme(props.index)}>Delete</button>

    </div>

      {isEditToggle === true && <form className="form">
          <input 
            type="text"
            placeholder="Top Text"
            name="topText"
            value={editedMeme.topText}
            onChange={handleEditChange}>
          </input>
          <input 
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={editedMeme.bottomText}
            onChange={handleEditChange}>
          </input>
        </form>}
    
    <div className="meme--wrapper">
      <img className="meme" src={props.memeInfo.randomImage} alt="Meme"/>
      <h2 className="meme--text top">{props.memeInfo.topText}</h2>
      <h2 className="meme--text bottom">{props.memeInfo.bottomText}</h2>
    </div>
  </div>
  )
}