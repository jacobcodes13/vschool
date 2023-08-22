import React, { useState, useEffect} from "react"
import MemeList from "./MemeList"
// import { v4 as uuidv4 } from 'uuid'

export default function Main() {

  // Initializing state
  
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/4t0m5.jpg"
  });

  // Where Im going to store the memes

  const [storedMemes, setStoredMemes] = useState([]);

  const [submittedMemeInfo, setSubmittedMemeInfo] = useState([])


  // Retreiving images from API

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(gather => setStoredMemes(gather.data.memes))
  }, [])

  // How I get a random image when Generate New Meme is clicked

  function randomMemeImage() {
    const randomMeme = Math.floor(Math.random() * storedMemes.length)
    const url = storedMemes[randomMeme].url
    setMeme(prevMeme => ({ 
      ...prevMeme,
      topText : "",
      bottomText : "",
      randomImage : url
    })) // Only changing the url of randomImage
  }
  
  // Handling the input change
  
  function handleChange(e) {
    const { name, value } = e.target
    
    setMeme(prevMeme => ({
      ...prevMeme,
      [ name ] : value
    }))
  }

  // Submitting all the meme info to State

  function submitted() { // Be cautious if in setSubmittedMemeInfo is targeting a obj or arr
    setSubmittedMemeInfo(prev => [
      ...prev,
      meme
    ])
  }

  // Create a delete button that can delete that meme from the array

  function deleteMeme(index) { // INDEX is just a placeholder (have to call it in MemeList)
    // use .filter() and use the index to remove the meme

    const newSubmittedMemeInfo = submittedMemeInfo.filter((meme, memeIndex) => {
      return memeIndex !== index
    })

    setSubmittedMemeInfo(newSubmittedMemeInfo) // How to remove just one meme instead of all
  }

  // Passing down all the States to the component

  const passedDownState = {
    storedMemes: storedMemes,
    submittedMemeInfo: submittedMemeInfo,
    deleteMeme: deleteMeme
  }

  // Use .map() to filter through and passed down state

    const submittedMemes = submittedMemeInfo.map((meme, index) => {
      return (
        <MemeList
          passedDownState={passedDownState}
          key={index}
          index={index}
          memeInfo={meme}
        />
      )
    })

  return (
    <div className="main-wrapper">
      <div className="refresh--submit--buttons">
        <button onClick={randomMemeImage} className="button">Generate New Meme</button>
        <button onClick={submitted} className="button">Submit</button>
      </div>
      <div className="topText--bottomText--inputs">
        <form className="form">
          <input 
            type="text" 
            placeholder="Top Text"
            name="topText" 
            value={meme.topText} 
            onChange={handleChange}>
          </input>
          <input 
            type="text" 
            placeholder="Bottom Text"
            name="bottomText" 
            value={meme.bottomText} 
            onChange={handleChange}>
          </input>
        </form>
      </div>
      <div className="meme--wrapper">
        <img src={meme.randomImage} className="meme" alt="Meme"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

      {submittedMemes}

    </div>
  )
}