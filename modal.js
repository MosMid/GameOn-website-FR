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
const nameReg = /[a-zA-Zà-ïò-öù-ü]{2,}$/;
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const dateReg = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;

// obtenir la date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

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
  if (firstName.value.match(nameReg)) {
		firstNameError.innerText = "";
    var firstNameIsValid = true;
	} else {
		firstNameError.innerText = "Deux caractères minimum de aA à zZ";
    firstNameIsValid = false;
	}

  if (lastName.value.match(nameReg)) {
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
    let year = date.value.substring(0,4);
    let month = date.value.substring(5,7);
    let day = date.value.substring(8,10);
    if(yyyy-year > 16){
      dateError.innerText = "";
      var dateIsValid = true;
    } else if(yyyy-year == 16 && mm-month < 0){
      dateError.innerText = "Vous devez avoir 16 ans ou plus";
      firstNameIsValid = false;
    }else if(yyyy-year == 16 && mm-month >= 0 && dd-day < 0){
      dateError.innerText = "Vous devez avoir 16 ans ou plus";
      firstNameIsValid = false;
    } else if(yyyy-year < 16) {
      dateError.innerText = "Vous devez avoir 16 ans ou plus";
      firstNameIsValid = false;
    } else {
      dateError.innerText = "";
      var dateIsValid = true;
    }
    
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

  let locationIsValid = false;
  try {
    locations.forEach(function(radioButton) {
      locationError.innerText = "Selectionnez un lieu";
      if (radioButton.checked) throw true;
    });
  } 
  catch (e) {
    if(e){
      locationError.innerText = "";
      locationIsValid = true;
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
    locations.forEach(function(radioButton) {
      radioButton.checked = false;
    });
    modalBody.style.display = "none";
    inscriptioReussie.style.display = "block";
  }
});