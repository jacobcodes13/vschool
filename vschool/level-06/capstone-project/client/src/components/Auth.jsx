import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import { MovieContext } from "../context/MovieProvider";

const initialInputs = { username: "", password: "" }

export default function Auth() {

  const [ inputs, setInputs ] = useState(initialInputs)
  const [ toggle, setToggle ] = useState(false)

  const { signup, login, errMsg, resetAuthError } = useContext(MovieContext)

  function handleChange(e) {
    const { name, value } = e.target

    setInputs(prevInputs => ({
      ...prevInputs,
      [ name ]: value
    }))
  }

  function handleSignup(e) {
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e) {
    e.preventDefault()
    login(inputs)
  }

  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthError()
  }

  return (
    <div className="auth-page">
      <h1>Movie App</h1>
      { !toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Already a member?</p>
        </>
      :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Not a member?</p>
        </>
      }
    </div>
  )
}