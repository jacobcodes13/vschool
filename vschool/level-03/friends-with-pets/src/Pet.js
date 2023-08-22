export default function Pet(props) {
  return (
    <div className="pets">
      <h2>Dog Name: {props.name}</h2>
      <h4>Dog Breed: {props.breed}</h4>
    </div>
  )
}