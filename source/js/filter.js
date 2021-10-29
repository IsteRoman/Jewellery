import {body} from  './start.js';
import {ESC_CODE} from  './menu.js';
import {workAccordion} from './accordion.js';
const filter = document.querySelector('.filters');

const workFilter = () => {
  const buttonOpenFiltr = filter.querySelector('.filters__button');
  const buttonCloseFilter = filter.querySelector('.filters__form-button-close');
  const buttonApplyFilter = filter.querySelector('.filters__form-submit');

  const openFilter = () => {
    buttonOpenFiltr.addEventListener('click', () => {
      body.classList.add('filter-open');
      filter.querySelector('fieldset').classList.add('block--open');
    });
  };

  const closeFilter = () => {
    buttonCloseFilter.addEventListener('click', () => {
      body.classList.remove('filter-open');
    });
  };

  const closeEscFilter = () => {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === ESC_CODE) {
        body.classList.remove('filter-open');
      }
    });
  };

  const closeFilterByApply = () => {
    buttonApplyFilter.addEventListener('click', (evt) => {
      evt.preventDefault();
      body.classList.remove('filter-open');
    });
  };

  workAccordion('fieldset');
  openFilter();
  closeFilter();
  closeEscFilter();
  closeFilterByApply();
};

export {workFilter};
