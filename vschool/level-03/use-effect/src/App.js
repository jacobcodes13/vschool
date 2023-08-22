import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    // console.log("Component rendered")
    
    
    // side effects
    React.useEffect(() => {
    //   console.log("Rendered")

      fetch(`https://swapi.dev/api/people/${count}`)
          .then(res => res.json())
          .then(data => setStarWarsData(data))
    }, [count]) // if its [0] compared to [0] it will not run because its the exact same
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}