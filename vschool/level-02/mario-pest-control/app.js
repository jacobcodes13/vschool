const gForm = document["goombaForm"];
const bForm = document["bombOmbForm"];
const cForm = document["cheepCheepForm"];

// Goomba Price Value
const p1 = document.createElement("p");
p1.classList.add("goomba-value");
p1.style.fontWeight = "bold";
p1.style.fontSize = "25px";
document.getElementById("goombas-price").append(p1);

// Bomb-omb Price Value
const p2 = document.createElement("p");
p2.classList.add("bomb-omb-value");
p2.style.fontWeight = "bold";
p2.style.fontSize = "25px";
document.getElementById("bomb-ombs-price").append(p2);

// Cheep-cheep Price Value
const p3 = document.createElement("p");
p3.classList.add("cheep-cheep-value");
p3.style.fontWeight = "bold";
p3.style.fontSize = "25px";
document.getElementById("cheep-cheeps-price").append(p3);


gForm.addEventListener("click", goombaFunction);
bForm.addEventListener("click", bombOmbFunction);
cForm.addEventListener("click", cheepCheepFunction);

function goombaFunction(e) {
  e.preventDefault()

  let goombaAmount = gForm.baddie.value;
  
  let totalPrice = Number(goombaAmount * 5);

  p1.textContent = `${totalPrice} coins`; 
}

function bombOmbFunction(e) {
  e.preventDefault()

  let bombOmbAmount = bForm.baddie.value;
  
  let totalPrice = Number(bombOmbAmount * 7);

  p2.textContent = `${totalPrice} coins`;
}

function cheepCheepFunction(e) {
  e.preventDefault()

  let cheepCheepAmount = cForm.baddie.value;
  
  let totalPrice = Number(cheepCheepAmount * 11);

  p3.textContent = `${totalPrice} coins`;
}