document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Change navbar color on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = '#3d2b1f';
  } else {
    navbar.style.backgroundColor = '#5b3b28';
  }
});
