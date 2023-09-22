import { MovieContext } from "./movieContext"

export default  function AddMovieForm() {

  const { addMovie } = useContext(MovieContext)

  const [ userInput, setUserInput ] = useState({
    title: "",
    image: "",
    description: ""
  })

  function handleChange(e) {
    const{ name, value } = e.target

    setUserInput(prevInput => ({
      ...prevInput,
      [ name ]: value
    }))
  }

  function handleSubmit() {

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Title"
          name="title"
          value={userInput.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cover Image"
          name="image"
          value={userInput.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={userInput.description}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}