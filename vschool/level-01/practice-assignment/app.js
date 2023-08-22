document.body.innerHTML += "<p id='paragraph'>This is a paragraph</p>"
document.getElementById("paragraph").style.textAlign = "center"
document.getElementById("paragraph").style.fontSize = "25px"

//Code for BOX event
const box = document.getElementById("box")

box.addEventListener('mouseover', function() {
  box.style.backgroundColor = "blue"
})

box.addEventListener('mouseout', function() {
  box.style.backgroundColor = "black"
})

box.addEventListener('mousedown', function() {
  box.style.backgroundColor = "red"
})

box.addEventListener('mouseup', function() {
  box.style.backgroundColor = "yellow"
})

box.addEventListener('dblclick', function() {
  box.style.backgroundColor = "green"
})

document.body.addEventListener('wheel', function() {
  box.style.backgroundColor = "orange"
})

document.body.addEventListener('keypress', function(event) {
  if (event.key === 'r') {
    box.style.backgroundColor = "red"
  }
})