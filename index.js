const email = document.getElementById('input');
const validation = document.getElementById('validation');
const mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

function ValidateEmail(email) {
  if(email.value.length === 0) {
    validation.style.visibility = 'visible';
    return this;
  } else if(email.value.match(mailformat)){
    validation.style.visibility = 'hidden';
    alert('Valid email address!');
    return this;
  } else {
    validation.style.visibility = 'visible';
    return this;
  }
}
