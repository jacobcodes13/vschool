// import React from "react"

export default function Practice() {
  /* [1]
  const [color, setColor] = React.useState("pink")

  setColor("blue")
  */

  /* [2]
  const [color, setColor] = React.useState("pink")

  setColor(prevColor => prevColor === "pink" ? "blue" : "pink")
  */

  /* [3]
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Smith"
    }
  ])

  setPeople(prevPeople =>
    return [
      ...prevPeople,
      {
        firstName: "Jacob",
        lastName: "Nevitt"
      }
    ])
  */

  /* [4a]
  const [colors, setColors] = setState(["pink", "blue"])

  setColors(prevColors => [...prevColors, "green"])
  */

  /* [4b]
  const [countObject, setCountObject] = setState({
	  count: 0
  })

  setCountObject(prevState => ({count: prevState.count + 1}))
  */

  /* [5]
  const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Smith"
  })

  setPerson(prevState => ({...prevState, age: 30}))
  */

  /* [6]
  const [colors, setColors] = useState(["pink", "blue"])

  setColors("green") - The previous state has been overwritten.
  */
}