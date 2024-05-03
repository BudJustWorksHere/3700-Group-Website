// Wait for the DOM content to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const articleButton = document.getElementById('articleButton');
    articleButton.addEventListener('click', function() {
        
        window.location.href = 'article_1.html'; 
    });
});
