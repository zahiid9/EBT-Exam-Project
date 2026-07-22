document.getElementById('contactForm').addEventListener('submit', function (event) {
  // Prevent form submission until checked
  event.preventDefault();

  // Fetch all form input elements
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Track overall form status
  let isFormValid = true;

  // Helper function to manage validation classes
  function validateField(element, condition) {
    if (condition) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
      isFormValid = false;
    }
  }

  // 1. Name Validation (Required, min 2 characters)
  validateField(name, name.value.trim().length >= 2);

  // 2. Phone Validation (Matches standard 10-digit number structure)
  const phoneRegex = /^\d{10}$/;
  validateField(phone, phoneRegex.test(phone.value.trim()));

  // 3. Address Validation (Required)
  validateField(address, address.value.trim() !== '');

  // 4. Email Validation (Standard email formatting)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validateField(email, emailRegex.test(email.value.trim()));

  // 5. Message Validation (Required, min 10 characters)
  validateField(message, message.value.trim().length >= 10);

  // Submit form data if all inputs pass validation criteria
  if (isFormValid) {
    alert('Form submitted successfully!');
    // Un-comment the line below to let the form submit natively to a server backend:
    // this.submit();
  }
});


const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit' 
};
document.getElementById('live-date-time').innerHTML = now.toLocaleDateString('en-US', options);
