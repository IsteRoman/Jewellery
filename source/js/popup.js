import {body} from  './start.js';
import {ESC_CODE} from  './menu.js';
const TAB_CODE = 9;
const popupBlock = document.querySelector('.login');
const buttonOpenModal = document.querySelector('.header__navigation-login');
const popupForm = document.querySelector('.login__form');
const buttonCloseModal = document.querySelector('.login__button-close');

const closeBlock = () => {
  body.classList.remove('popup--open');
  body.removeAttribute('style');
};

const closeByOverlay = () => {
  if (body.classList.contains('popup--open')) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.login') === null && e.target.closest('.header__navigation-login') === null) {
        closeBlock();
      }
    });
  }
};

const createPopupTabCycle = () => {
  window.addEventListener('keydown', (evt) => {
    const focused = document.activeElement;
    if (focused === buttonCloseModal && evt.keyCode === TAB_CODE) {
      popupForm.focus();
    }
  });
};

const openPopup = () => {
  if (!buttonOpenModal) {
    return;
  }
  buttonOpenModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
    }
    body.classList.add('popup--open');
    popupForm.children[1].focus();
    body.style.overflow = 'hidden';
    createPopupTabCycle();
    closeByOverlay();
  });
};

const closeByEsc = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_CODE) {
      closeBlock();
    }
  });
};

const closeByButton = () => {
  if (!buttonCloseModal) {
    return;
  }
  buttonCloseModal.addEventListener('click', () => {
    closeBlock();
  });
};

const runPopupWork = () => {
  if (!popupBlock || !buttonOpenModal) {
    return;
  }
  openPopup();
  closeByEsc();
  closeByButton();
};

export {runPopupWork};
