
/* Active menu element */

const navLinks = document.querySelectorAll('.aside-navbar .nav li a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

/* animations */

var typed = new Typed('.typing', {
  strings: ['Software Engineering', 'Backend and Frontend Services', 'AI Engineering'],
  typeSpeed: 100, 
  backSpeed: 60,
  loop: true,
});