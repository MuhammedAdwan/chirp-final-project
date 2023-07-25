 let hamburger = document.querySelector('#hamburger-icon');
let nav = document.querySelector('#my-nav');
let body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  body.classList.toggle('active');
  hamburger.classList.toggle('clicked');
});