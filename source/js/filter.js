import {body} from  './start.js';
import {ESC_CODE} from  './menu.js';
const filter = document.querySelector('.filters');
const MAX_LENGTH = 4;

const runFilterWork = () => {
  if (!filter) {
    return;
  }
  const buttonOpenFiltr = filter.querySelector('.filters__button');
  const buttonCloseFilter = filter.querySelector('.filters__form-button-close');
  const buttonApplyFilter = filter.querySelector('.filters__form-submit');
  const fieldsets = filter.querySelectorAll('fieldset');
  const priceFilter = filter.querySelector('.filters__price-filter');

  const openFilter = () => {
    if (!buttonOpenFiltr) {
      return;
    }
    buttonOpenFiltr.addEventListener('click', () => {
      body.classList.add('filter-open');
      filter.querySelector('fieldset').classList.add('block--open');
    });
  };

  const stopInput = () => {
    if (filter.querySelectorAll('input[type="number"]')) {
      const numberInput = filter.querySelectorAll('input[type="number"]');
      numberInput.forEach((el) => {
        if (!el) {
          return;
        }
        el.addEventListener('input', () => {
          const sumbolsLength = el.value.length;
          if (sumbolsLength > MAX_LENGTH) {
            el.value = el.value.slice(0, MAX_LENGTH);
          }
        });
      });
    }
  };

  const stopCloseFilter = () => {
    fieldsets.forEach((el) => {
      if (el.contains(priceFilter)) {
        if (!priceFilter) {
          return;
        }
        priceFilter.addEventListener('click', (evt) => {
          evt.stopPropagation();
        });
      }
    });
  };

  const closeFilter = () => {
    if (!buttonCloseFilter) {
      return;
    }
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
    if (!buttonApplyFilter) {
      return;
    }
    buttonApplyFilter.addEventListener('click', (evt) => {
      evt.preventDefault();
      body.classList.remove('filter-open');
    });
  };

  const runAccordionWorkFliter = () => {
    fieldsets.forEach((el) => {
      const clickZone = el.children[1];
      clickZone.addEventListener('click', () => {
        el.classList.toggle('block--open');
      });
    });
  };

  runAccordionWorkFliter();
  stopCloseFilter();
  stopInput();
  openFilter();
  closeFilter();
  closeEscFilter();
  closeFilterByApply();
};

export {runFilterWork};
