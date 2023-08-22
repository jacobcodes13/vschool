/*
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1


const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://swapi.co/api/people", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.results)
    } 
}


function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POKEMON LIST

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)

xhr.send()

xhr.onreadystatechange = function() {

  if (xhr.readyState === 4 && xhr.status === 200) {

    const JSONdata = xhr.responseText
    const PokemonData = JSON.parse(JSONdata)

    showPokemon(PokemonData.objects[0].pokemon)
  }
}

function showPokemon(pokemonArr) {

  for (let i = 0; i < pokemonArr.length; i++) {

    const h1 = document.createElement("h1")

    h1.textContent = pokemonArr[i].name

    document.body.appendChild(h1)
  }
}