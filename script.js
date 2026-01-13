// Simple script for toggling mobile navigation
function toggleNav() {
  var nav = document.getElementById('navbar-links');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
}

// Optional: basic form validation for contact form
function validateContactForm(event) {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  if (!name.value || !email.value || !message.value) {
    alert('Please fill out all fields before sending.');
    event.preventDefault();
  }
}

var contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', validateContactForm);
}
