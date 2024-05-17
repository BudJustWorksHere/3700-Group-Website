document.addEventListener("DOMContentLoaded", function() {
    // URL of the HTML document to fetch
    const htmlDocUrl = 'footer.html';
  
    // Fetch the HTML document
    fetch(htmlDocUrl)
        .then(response => response.text())
        .then(data => {
            // Get the container where you want to embed the HTML
            const embedContainer = document.getElementById('footer');
            // Insert the fetched HTML into the container
            embedContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching HTML document:', error);
        });
  });
  