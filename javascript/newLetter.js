document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get email input value
    var email = document.getElementById('email').value;

    // Simulate subscription process (replace with your actual subscription logic)
    setTimeout(function() {
      alert('Thank you for subscribing!'); // Display alert message
      document.getElementById('newsletter-form').reset(); // Clear form
    }, 1000); // Simulate a delay of 1 second (remove this line in actual implementation)
  });
