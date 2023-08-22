import React from "react"

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function watchWidth() {
      // console.log("Running...")
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    return function() {
      // console.log("Cleaning up...")
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

    return (
      <h1 className="h1">Window width: {windowWidth}</h1>
    )
}