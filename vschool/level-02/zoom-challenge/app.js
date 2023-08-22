const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
  return arr.map((name) => `<h1> ${name} </h1>`)
}

console.log(peopleElements(people))

// .map to wrap ea string in a array in a h1 opening and closing tag

// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]