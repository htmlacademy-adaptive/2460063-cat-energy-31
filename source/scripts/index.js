const navheader = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');

navheader.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navheader.classList.contains('header-nav--closed')) {
    navheader.classList.remove('header-nav--closed');
    navheader.classList.add('header-nav--opened');
  } else {
    navheader.classList.add('header-nav--closed');
    navheader.classList.remove('header-nav--opened');
  }
});/* в этот файл добавляет скрипты*/
