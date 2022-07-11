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

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const date = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.getElementsByName('location');
//const radio = document.querySelectorAll('input[name=location]:checked');
const conditions = document.querySelector("#checkbox1");
const notification = document.querySelector("#checkbox2");

let firstNameError = document.querySelector("#firstErr");
let lastNameError = document.querySelector("#lastErr");
let emailError = document.querySelector("#emailErr");
let dateError = document.querySelector("#dateErr");
let quantityError = document.querySelector("#quantErr");
let locationError = document.querySelector("#locationErr");
let conditionsError = document.querySelector("#condErr");

let firstNameIsValid = false;
let lastNameIsValid = false;
let emailIsValid = false;
let dateIsValid = false;
let quantityIsValid = false;
let locationIsValid = false;
let conditionsIsValid = false;

let nameReg = /^[a-zA-Z]+$/;
let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let dateReg = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;

const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (firstName.value.match(nameReg) && firstName.value.length >1) {
		firstNameError.innerText = "";
    firstNameIsValid = true;
	} else {
		firstNameError.innerText = "Deux caractères minimum de aA à zZ";
    firstNameIsValid = false;
	}

  if (lastName.value.match(nameReg) && lastName.value.length >1) {
		lastNameError.innerText = "";
    lastNameIsValid = true;
	} else {
		lastNameError.innerText = "Deux caractères minimum de aA à zZ";
    firstNameIsValid = false;
	}

  if (email.value.match(emailReg)) {
		emailError.innerText = "";
    emailIsValid = true;
	} else {
		emailError.innerText = "Inserez une adresse email valide!";
    firstNameIsValid = false;
	}

  if (date.value.match(dateReg)) {
		dateError.innerText = "";
    dateIsValid = true;
	} else {
		dateError.innerText = "Veuillez inserer une date";
    firstNameIsValid = false;
	}

  if (quantity.value.length < 3 && quantity.value.length >= 1) {
		quantityError.innerText = "";
    quantityIsValid = true;
	} else {
		quantityError.innerText = "Veuillez entrer un nombre entre 0 et 99";
    firstNameIsValid = false;
	}

  var i = 0;
  let checkmark = false;
  for (let radioButton of locations) {
    i = i+1;
    if (radioButton.checked) { 
      checkmark = true;
    }
    if (i == 6 && checkmark == true) {
      locationError.innerText = "";
      locationIsValid = true;
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
    conditionsIsValid = true;
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
    //form.reset();
    modalBody.style.display = "none";
    inscriptioReussie.style.display = "block";
  }
});

