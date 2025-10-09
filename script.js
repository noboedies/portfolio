 //Google Sheet connect code
  var scriptURL = "https://script.google.com/macros/s/AKfycbz3DTokdV5Iz4F_8XW13KP0BTxYHxKBvKaTiznljuwprq9T-SJxZm6e6DMlm0ht2VX3/exec";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });



  

  AOS.init();