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
    console.log('HEEY');
}

function validateFullName(ev) {
  let regExp = /^[a-zA-Z]*( |-)[a-zA-Z]*( |-)*[a-zA-Z]*$/g;
  // let fullName = ev.target.value;
  let error = document.querySelector('.error-name');
  

  if (typeof ev === 'string') {
    var fullName = ev;
  } else {
    var fullName = ev.target.value;
  }

  if(regExp.test(fullName)){
    error.innerHTML ='';
  }else {
    error.innerHTML ='Invalid full name';
  }
}

function validateEmail(ev) {
  let regExp = /^[a-zA-Z0-9\.!#$%&'*+=?^_`{|}~-]*@[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/g;
  // let email = ev.target.value;
  let error = document.querySelector('.error-email');

  if (typeof ev === 'string') {
    var email = ev;
  } else {
    var email = ev.target.value;
  }

  if(regExp.test(email)){
    error.innerHTML ='';
  }else {
    error.innerHTML ='Invalid email';
  }
}

function validateAddress(ev) {
  let regExp = /^\d{1,7}( |-)?([a-zA-Z]|\d)*( [a-zA-Z-]+\.?){1,4}(Rd|Lane|Cres|St|Ave|Circle|)\.?/g;
  // let address = ev.target.value;
  let error = document.querySelector('.error-address');

  if (typeof ev === 'string') {
    var address = ev;
  } else {
    var address = ev.target.value;
  }

  if(regExp.test(address)){
    error.innerHTML ='';
  }else {
    error.innerHTML ='Invalid address';
  }
}

function validateCity(ev) {
  let regExp = /^[a-zA-Z]{2,}([ |-][a-zA-Z]+)*$/g
  // let city = ev.target.value;
  let error = document.querySelector('.error-city');

  if (typeof ev === 'string') {
    var city = ev;
  } else {
    var city = ev.target.value;
  }

  if(regExp.test(city)){
    error.innerHTML ='';
  }else {
    error.innerHTML ='Invalid city';
  }
}

function validateProvince(ev) {
  // let province = ev.target.value;
  let error = document.querySelector('.error-prov');
  
  if (typeof ev === 'string') {
    var province = ev;
  } else {
    var province = ev.target.value;
  }

  if(province === "selectOption"){
    error.innerHTML= 'Invalid selection';
  }else {
    error.innerHTML= '';
  }
}

function validatePostal(ev) {
  let regExp = /^[a-zA-Z]\d[a-zA-Z]( |-)?\d[a-zA-Z]\d$/g
  // let postal = ev.target.value;
  let error = document.querySelector('.error-post');

  if (typeof ev === 'string') {
    var postal = ev;
  } else {
    var postal = ev.target.value;
  }

  if(regExp.test(postal)){
    error.innerHTML ='';
  }else {
    error.innerHTML ='Invalid postal code';
  }
}

document.addEventListener('DOMContentLoaded', init);
