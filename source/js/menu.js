import {body} from  './start.js';
const ESC_CODE = 27;
const menuButton = document.querySelector('.header__button');
const search = document.querySelector('.header__search');
const searchInput = search.querySelector('input');

const toggleMenu = () => {
  if (!menuButton) {
    return;
  }
  menuButton.addEventListener('click', () => {
    if (!body.classList.contains('menu-open')) {
      body.classList.add('menu-open');
      searchInput.focus();
    } else if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
    }
  });
};

const closeMenuByEsc = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_CODE) {
      body.classList.remove('menu-open');
    }
  });
};

const runMenuWork = () => {
  if (!menuButton) {
    return;
  }
  toggleMenu();
  closeMenuByEsc();
};

export {ESC_CODE};
export {runMenuWork};
