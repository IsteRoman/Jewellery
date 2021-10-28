import {body} from  './start.js';
const ESC_CODE = 27;
const menuButton = document.querySelector('.header__button');

const toggleMenu = () => {
  menuButton.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });
};

const closeMenuByEsc = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_CODE) {
      body.classList.remove('menu-open');
    }
  });
};

const workMenu = () => {
  toggleMenu();
  closeMenuByEsc();
};


export {workMenu};
