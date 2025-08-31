// Smooth scroll helper
function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
}

// Contact form mock handler
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');
  if(!name || !email || !msg){
    status.textContent = 'Please fill all fields.';
    return;
  }
  // Simulate sending...
  status.textContent = 'Sending message...';
  setTimeout(()=>{
    status.textContent = 'Thanks, ' + name + '! Your message was sent (demo).';
    document.getElementById('contactForm').reset();
  }, 900);
}

// Small accessibility tweak: enable keyboard focus for project buttons
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.project-btn, button').forEach(b=>{
    b.setAttribute('tabindex','0');
  });
});
