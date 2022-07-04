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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
modalCloseBtn.addEventListener('click', closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const date = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const checkTerms = document.querySelector("input[name= 'checkBox']");
const radio = document.getElementsByName('location');
//const radio = document.querySelectorAll('input[name=location]:checked');
const gcond = document.querySelector("#checkbox1");

let firstErr = document.querySelector("#firstErr");
let lastErr = document.querySelector("#lastErr");
let emailErr = document.querySelector("#emailErr");
let dateErr = document.querySelector("#dateErr");
let quantErr = document.querySelector("#quantErr");
let locationErr = document.querySelector("#locationErr");
let condErr = document.querySelector("#condErr");

let firstval = false;
let lastval = false;
let emailval = false;
let dateval = false;
let quantval = false;
let locationval = false;
let condval = false;

const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {

  if (/^[a-zA-Z]+$/.test(first.value) && first.value.length >1) {
		firstErr.innerText = "";
    firstval = true;
	} else {
		firstErr.innerText = "Deux caractères minimum de aA à zZ";
	}

  if (/^[a-zA-Z]+$/.test(last.value) && last.value.length >1) {
		lastErr.innerText = "";
    lastval = true;
	} else {
		lastErr.innerText = "Deux caractères minimum de aA à zZ";
	}

  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
		emailErr.innerText = "";
    emailval = true;
	} else {
		emailErr.innerText = "Inserez une adresse email valide!";
	}

  if (/^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/.test(date.value)) {
		dateErr.innerText = "";
    dateval = true;
	} else {
		dateErr.innerText = "Veuillez inserer une date";
	}

  if (quantity.value.length < 3 && quantity.value.length >= 1) {
		quantErr.innerText = "";
    quantval = true;
	} else {
		quantErr.innerText = "Veuillez entrer un nombre entre 0 et 99";
	}

  var i = 0;
  let checkmark = false;
  for (let radioButton of radio) {
    i = i+1;
    if (radioButton.checked) { 
      checkmark = true;
    }
    if (i == 6 && checkmark == true) {
      locationErr.innerText = "";
      locationval = true;
      break
    }
    if (i == 6 && checkmark == false) {
      locationErr.innerText = "Selectionnez un lieu";
      break
    }
  }

  if (gcond.checked) { 
    condErr.innerText = "";
    condval = true;
  } else {
    condErr.innerText = "Veuillez accepter les conditions";
  }

  if ( firstval == true && lastval == true && emailval == true && dateval == true && quantval == true && locationval == true && condval == true){
    alert("Merci ! Votre réservation a été reçue.");
  } else {
    e.preventDefault();
  }

});

