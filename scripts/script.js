const hamMenuEl = document.querySelector('.hamburger-menu');

function navToggle() {
  const navMenuEl = document.querySelector('.page-links');
  navMenuEl.classList.toggle('show');
}

hamMenuEl.addEventListener('click', navToggle);