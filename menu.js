const menuToggle = document.querySelector('.menu-toggle');
const navSite = document.querySelector('.nav-site');

menuToggle.addEventListener('click', () => {
  navSite.classList.toggle('active');
});
