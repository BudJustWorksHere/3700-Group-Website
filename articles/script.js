// Wait for the DOM content to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const articleButton = document.getElementById('articleButton');

    // Add a click event listener to the button
    articleButton.addEventListener('click', function() {
        // Redirect to the article page when the button is clicked
        window.location.href = 'article.html'; // Replace 'article.html' with the actual URL of your article page
    });
});
