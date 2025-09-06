// Contact form interaction
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! Thank you for reaching out.');
  this.reset();
});

// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
