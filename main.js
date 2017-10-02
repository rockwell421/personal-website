/* Main functions */

//playVideo
//salesTraining Modal
//Drone Modal
//Web Development Modal
//Consulting Modal
//sendEmail

/*---------------- Window Modal------------------- */

//get modal element
var modal = document.getElementById('simpleModal');

//get open modal button
var modalBtn = document.getElementById('modalBtn');

//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Event listeners

//open modal
modalBtn.addEventListener('click', openModal);

//close modal
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);

//function opens the modal
function openModal() {
  modal.style.display = 'block';
}

//closes modal
function closeModal() {
  modal.style.display = 'none';
}

//closes modal if outside click
function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}


/*-------------------------Contact Form-------------------------*/

var contactForm = document.querySelector('.contact-form');
var nameInput = document.querySelector('.name-input');
var emailInput = document.querySelector('.email-input');
var message = document.querySelector('.contact-message');

//Clears the name when clicked
nameInput.addEventListener('click', function (event) {
  event.preventDefault();
  nameInput.value = "";
})

//Clears the email when clicked
emailInput.addEventListener('click', function (event) {
  event.preventDefault();
  emailInput.value = "";
})

//Clears the email when clicked
message.addEventListener('click', function (event) {
  event.preventDefault();
  message.value = "";
})


//sends AJAX email when the send button is clicked
