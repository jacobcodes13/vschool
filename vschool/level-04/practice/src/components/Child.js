import React from "react"
import GrandChild from "../components/GrandChild"

function Child() {
    return (
        <React.Fragment>
            <h1>I'm the Child component</h1>
            <GrandChild />
        </React.Fragment>
    )
}

export default Child