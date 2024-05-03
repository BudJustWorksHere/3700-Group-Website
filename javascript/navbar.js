document.addEventListener("DOMContentLoaded", function() {
  // Get the current directory path
  var navbarPath = '/~apena1/3700-Website-Group-8/javascript/navbar.html';

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbarPlaceholder').innerHTML = data;
    });
});
