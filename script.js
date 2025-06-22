document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitButton = this.querySelector('button[type="submit"]');
  const formMessage = document.getElementById("formMessage");

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear previous messages
  formMessage.textContent = "";
  formMessage.className = "form-message";

  // Basic validation
  if (!name || !email || !message) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    showMessage("Enter a valid email address.", "error");
    return;
  }

  // Show loading state
  submitButton.classList.add("loading");
  submitButton.disabled = true;
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = "Sending";

  // Simulate form submission
  setTimeout(() => {
    // Success
    showMessage("Thank you! Your message has been sent.", "success");
    
    // Reset the form
    document.getElementById("contactForm").reset();
    
    // Reset button
    submitButton.classList.remove("loading");
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }, 1500);
});

// Message display function
function showMessage(text, type) {
  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = text;
  formMessage.className = `form-message ${type} show`;
  
  // Hide message after a few seconds
  setTimeout(() => {
    formMessage.classList.remove("show");
  }, 4000);
}

// Add input focus effects
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.style.transform = 'scale(1.02)';
  });
  
  input.addEventListener('blur', function() {
    this.parentElement.style.transform = 'scale(1)';
  });
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});