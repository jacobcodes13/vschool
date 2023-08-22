// var form = document.getElementByID("arline-form");
// var submit = document.getElementByID(submit);
// var query = document.querySelector;

// function formAlert{} {
//     var firstName = form.elements["firstName"].value;
//     var lastName = form.elements["lastName"].value;
//     var age = form.elements["age"].value;
//     var gender = form.elements["gender"].value;
//     var location = form.elements["travel-location"].value;
//     var diet = {};
//     if (form.elements['vegan'].checked) {
//         var diet.pop(document.getElementById("vegan").value);
//     }
//     if (form.elements['gluten'].checked) {
//         diet.push(document.getElementById('gluten').value);
//     }
//     if (form.elements['paleo'].checked) {
//         diet.push(document.getElementById('paleo').value);
//     }


//     alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
// }

// submit.addEventListener("click", formalert);


// BUG ON A PLANE

var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.elements['first-name'].value;
    var lastName = form.elements['last-name'].value;
    var age = form.elements['age'].value;
    var gender = form.elements['gender'].value;
    var location = form.elements['travel-location'].value;
    var diet = [];
    if (form['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form['gluten'].checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (form['paleo'].checked) {
        diet.push(document.getElementById("paleo").value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);