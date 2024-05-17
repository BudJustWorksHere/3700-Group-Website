document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
  
    readMoreBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const fullText = this.previousElementSibling;
        const shortText = fullText.previousElementSibling;
  
        if (fullText.style.display === 'none') {
          fullText.style.display = 'inline';
          shortText.style.display = 'none';
          this.textContent = 'Read less';
        } else {
          fullText.style.display = 'none';
          shortText.style.display = 'inline';
          this.textContent = 'Read more';
        }
      });
    });
  });
  
