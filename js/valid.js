function init(ev) {
  let form = document.getElementById('regForm');
  form.addEventListener('submit', validateForm);

  //add individual listeners - change listener to ALL input elements
  document.getElementById('fullname').addEventListener('change', validateFullName);
  document.getElementById('email').addEventListener('change', validateEmail);
  document.getElementById('address').addEventListener('change', validateAddress);
  document.getElementById('city').addEventListener('change', validateCity);
  document.getElementById('prov').addEventListener('change', validateProvince);
  document.getElementById('post').addEventListener('change', validatePostal);
}

function validateForm(ev) {
  //validate the whole form
  ev.preventDefault();

  let fullName = document.getElementById('fullname').value;
  let email = document.getElementById('email').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let province = document.getElementById('prov').value;
  let postal = document.getElementById('post').value;
  
  validateFullName(fullName);
  validateEmail(email);
  validateAddress(address);
  validateCity(city);
  validateProvince(province);
  validatePostal(postal);
}

function validateFullName(ev) {
  let regExp = /^[a-zA-Z]*( |-)[a-zA-Z]*( |-)*[a-zA-Z]*$/g;
  let fullName = ev.target.value;
  let errorMessage = document.querySelector('.error-name');

  if(regExp.test(fullName)){
    errorMessage.innerHTML ='';
  }else {
    errorMessage.innerHTML ='Invalid full name';
  }
}

function validateEmail(ev) {
  let regExp = /^[a-zA-Z0-9\.!#$%&'*+=?^_`{|}~-]*@[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/g;
  let email = ev.target.value;
  let errorMessage = document.querySelector('.error-email');

  if(regExp.test(email)){
    errorMessage.innerHTML ='';
  }else {
    errorMessage.innerHTML ='Invalid email';
  }
}

function validateAddress(ev) {
  let regExp = /^\d{1,7}( |-)?([a-zA-Z]|\d)*( [a-zA-Z-]+\.?){1,5}(Rd|Ln|Blvd|Cres|St|Ave|Cir|Crt|Pl|)\.?$/g;
  let address = ev.target.value;
  let errorMessage = document.querySelector('.error-address');

  if(regExp.test(address)){
    errorMessage.innerHTML ='';
  }else {
    errorMessage.innerHTML ='Invalid address';
  }
}

function validateCity(ev) {
  let regExp = /^[a-zA-Z]{2,}([ |-][a-zA-Z]+)*$/g
  let city = ev.target.value;
  let errorMessage = document.querySelector('.error-city');

  if(regExp.test(city)){
    errorMessage.innerHTML ='';
  }else {
    errorMessage.innerHTML ='Invalid city';
  }
}

function validateProvince(ev) {
  let province = ev.target.value;
  let errorMessage = document.querySelector('.error-prov');

  if(province === "selectOption"){
    errorMessage.innerHTML= 'Invalid selection';
  }else {
    errorMessage.innerHTML= '';
  }
}

function validatePostal(ev) {
  let regExp = /^[a-zA-Z]\d[a-zA-Z]( |-)?\d[a-zA-Z]\d$/g
  let postal = ev.target.value;
  let errorMessage = document.querySelector('.error-post');

  if(regExp.test(postal)){
    errorMessage.innerHTML ='';
  }else {
    errorMessage.innerHTML ='Invalid postal code';
  }
}

document.addEventListener('DOMContentLoaded', init);
