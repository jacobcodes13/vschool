import React, { useState, useEffect } from "react"
import axios from "axios"

const UglyThingContext = React.createContext()

function UglyThingContextProvider(props) {
  
  const uglyThingURL = "https://api.vschool.io/jacobnevitt/thing"

  const [ storedData, setStoredData ] = useState([])
  const [ inputs, setInputs ] = useState({

    title: "",
    description: "",
    imgUrl: ""

  })

  function userInput(e) {

    const { name, value } = e.target;

    setInputs(prevInputs => ({
      ...prevInputs,
      [ name ]: value
    }))
  }

  function sendData() {
    
    axios.post(uglyThingURL, {
      title: inputs.title,
      description: inputs.description,
      imgUrl: inputs.imgUrl
    })
    .then(res => setStoredData(prev => [...prev, res.data]))
    .catch(err => console.log("erorr posting uglyThing: ", err))

    setInputs({

      title: "",
      description: "",
      imgUrl: ""
    })
  }

  function removeData(id) { 

    axios.delete(`${uglyThingURL}/${id}`)
    .then(setStoredData(storedData.filter(item => {
      return item._id !== id
    })))
    .catch(err => console.log("error deleting uglyThing: ", err))
  }

  function saveEditData(id, newThing) {   

    axios.put(`${uglyThingURL}/${id}`, newThing)
      .then(res => setStoredData(prev => prev.map(item => item._id !== id ? item : res.data)))
      .catch(err => console.log("error updating uglyThing: ", err))
  }

  // step 2: need to create the axios get call and display it on the webpage [x]

  useEffect(() => {
    axios.get(uglyThingURL)
      .then(res => setStoredData(res.data))
      .catch(err => console.log("error doing GET request: ", err))
      console.log()
  }, [])

  return (
    <UglyThingContext.Provider value={{
      storedData,
      uglyThingURL,
      inputs,
      setStoredData,
      sendData,
      removeData,
      saveEditData,
      userInput,
    }}>
      {props.children}
    </UglyThingContext.Provider>
  )
}

export {UglyThingContext, UglyThingContextProvider}