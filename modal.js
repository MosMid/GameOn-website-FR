function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const inscriptioReussie = document.querySelector("#inscriptionReussie");
const modalBody = document.querySelector(".modal-body");
const fermerBtn = document.querySelector("#fermer");

const form = document.querySelector("#form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const date = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.getElementsByName('location');
const conditions = document.querySelector("#checkbox1");
const notification = document.querySelector("#checkbox2");

const firstNameError = document.querySelector("#firstErr");
const lastNameError = document.querySelector("#lastErr");
const emailError = document.querySelector("#emailErr");
const dateError = document.querySelector("#dateErr");
const quantityError = document.querySelector("#quantErr");
const locationError = document.querySelector("#locationErr");
const conditionsError = document.querySelector("#condErr");

// Regex
const nameReg = /^[a-zA-Z]+$/;
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const dateReg = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
modalCloseBtn.addEventListener('click', closeModal);
fermerBtn.addEventListener('click', closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalBody.style.display = "block";
  inscriptioReussie.style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (firstName.value.match(nameReg) && firstName.value.length >1) {
		firstNameError.innerText = "";
    var firstNameIsValid = true;
	} else {
		firstNameError.innerText = "Deux caractères minimum de aA à zZ";
    firstNameIsValid = false;
	}

  if (lastName.value.match(nameReg) && lastName.value.length >1) {
		lastNameError.innerText = "";
    var lastNameIsValid = true;
	} else {
		lastNameError.innerText = "Deux caractères minimum de aA à zZ";
    firstNameIsValid = false;
	}

  if (email.value.match(emailReg)) {
		emailError.innerText = "";
    var emailIsValid = true;
	} else {
		emailError.innerText = "Inserez une adresse email valide!";
    firstNameIsValid = false;
	}

  if (date.value.match(dateReg)) {
		dateError.innerText = "";
    var dateIsValid = true;
	} else {
		dateError.innerText = "Veuillez inserer une date";
    firstNameIsValid = false;
	}

  if (quantity.value.length < 3 && quantity.value.length >= 1) {
		quantityError.innerText = "";
    var quantityIsValid = true;
	} else {
		quantityError.innerText = "Veuillez entrer un nombre entre 0 et 99";
    firstNameIsValid = false;
	}

  var i = 0;
  var checkmark = false;
  for (let radioButton of locations) {
    i = i+1;
    if (radioButton.checked) { 
      checkmark = true;
    }
    if (i == 6 && checkmark == true) {
      locationError.innerText = "";
      var locationIsValid = true;
      break
    }
    if (i == 6 && checkmark == false) {
      locationError.innerText = "Selectionnez un lieu";
      firstNameIsValid = false;
      break
    }
  }

  if (conditions.checked) { 
    conditionsError.innerText = "";
    var conditionsIsValid = true;
  } else {
    conditionsError.innerText = "Veuillez accepter les conditions";
    firstNameIsValid = false;
  }
  if (firstNameIsValid && lastNameIsValid && emailIsValid && dateIsValid && quantityIsValid && locationIsValid && conditionsIsValid){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    date.value = "jj/mm/aaaa";
    quantity.value = "";
    conditions.checked = false;
    notification.checked = false;
    i=0
    for (let radioButton of locations) {
      i=i+1;
      radioButton.checked = false;
      if (i == 6){
        break
      }
    }
    modalBody.style.display = "none";
    inscriptioReussie.style.display = "block";
  }
});
