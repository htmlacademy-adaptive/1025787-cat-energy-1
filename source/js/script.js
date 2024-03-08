const menuBtn = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('main-nav__toggle--active');
  menu.classList.toggle('main-nav__list--active');
})
