document.addEventListener("DOMContentLoaded", function() {
  // Get the current directory path
  var currentPath = window.location.pathname;
  
  // Navigate to the parent directory
  var parentPath = currentPath.split('/').slice(0, -2).join('/'); // Go up two levels
  
  // Construct the path to navbar.html
  var navbarPath = parentPath + '/javascript/navbar.html';

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbarPlaceholder').innerHTML = data;
    });
});
