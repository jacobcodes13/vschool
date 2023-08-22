import Pet from "./Pet"

export default function Friend(props) {
  const petsArr = props.pets
  // console.log(petsArr)

  const petList = petsArr.map(pet => {
    return (
      <Pet
        key={pet.name}
        name={pet.name}
        breed={pet.breed}
      />
    )
  })

  // console.log(props)
  return (
    <div className="friends">
      <h1 className="friend--name">Name: {props.name}</h1>
      <h2 className="friend--age">Age: {props.age}</h2>
      {petList}
    </div>
  )
}