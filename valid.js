function init(ev) {
  let form = document.getElementById('regForm');
  form.addEventListener('submit', validateForm);
  //add individual listeners
}

function validateForm(ev) {
  //validate the whole form
}

function validateName(ev) {
  //validate the full name input with a regular expression
}

document.addEventListener('DOMContentLoaded', init);
