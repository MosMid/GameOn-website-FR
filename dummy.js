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
  const btnSumbit = document.querySelector(".btn-submit");
  
  
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
  // valid form elements 
  const radioButtons = document.querySelectorAll("input[name='location']");
  // valid form popup
  //btnSumbit.addEventListener('click', formValidate)
  
  const form = document.querySelector("#form");
  
  var i = 0;
  var j = 0;
  form.addEventListener("submit", function (e) {
      e.preventDefault();
      for (let radioButton of radioButtons) {
      i = i+1;
        if (radioButton.checked) { 
          j = j+1;
        }
        if (i == 6 && j == 1) {
          alert("Merci ! Votre réservation a été reçue.");
          break
        }
        if (i == 6 && j != 1) {
          alert("Inscription Invalide : Selectionez un lieu");
          break
        }
    }
    modalCloseBtn.addEventListener('click', closeModal);
  });
  
  /*var i = 0;
  var j = 0;
  function formValidate() {
    for (let radioButton of radioButtons) {
      i = i+1;
        if (radioButton.checked) { 
          j = j+1;
        }
        if (i == 6 && j == 1) {
          alert("Merci ! Votre réservation a été reçue.");
          break
        }
        if (i == 6 && j != 1) {
          alert("Inscription Invalide : Selectionez un lieu");
          break
        }
    }
  }*/
  
  /*const minFirst = document.querySelector("#first");
  const minLast = document.querySelector("#last");
  const emailCheck = document.querySelector("#email");
  const nombreConcours = document.querySelector("#quantity");
  const checkTerms = document.querySelector("#checkbox1");
  
  function formValidate() {
    let num1 = nombreConcours.value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numOnly = /\d/;
    const checkTerms = document.querySelector("input[name= 'checkBox']");
    if (minFirst.value.length >= 2 && minLast.value.length >= 2 && emailCheck.value.match(validRegex) && nombreConcours.value.match(numOnly) && checkTerms.checked) {
        alert("Form Valid");
    } else {
        alert("Form InValid");
    }
  }*/
  
 