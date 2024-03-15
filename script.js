function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Code to submit form data to server goes here
    
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Clear form fields
    document.getElementById('contactForm').reset();
  }