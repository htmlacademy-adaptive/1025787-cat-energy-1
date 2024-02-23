const menuBtn = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  menu.classList.toggle('is-active');
})
