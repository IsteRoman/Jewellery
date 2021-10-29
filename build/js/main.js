/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./source/js/menu.js
var menu_namespaceObject = {};
__webpack_require__.r(menu_namespaceObject);
__webpack_require__.d(menu_namespaceObject, {
  "q": function() { return workMenu; }
});

;// CONCATENATED MODULE: ./source/js/start.js
const body = document.querySelector('body');

const checkJS = () => {
  body.classList.remove('no-js');
};




;// CONCATENATED MODULE: ./source/js/menu.js

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




;// CONCATENATED MODULE: ./source/js/popup.js


const TAB_CODE = 9;
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

const tabFocusRestrictor = () => {
  window.addEventListener('keydown', (evt) => {
    const focused = document.activeElement;
    if (focused === buttonCloseModal && evt.keyCode === TAB_CODE) {
      popupForm.focus();
    }
  });
};

const openPopup = () => {
  buttonOpenModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
    }
    body.classList.add('popup--open');
    popupForm.children[1].focus();
    body.style.overflow = 'hidden';
    tabFocusRestrictor();
    closeByOverlay();
  });
};

const closeByEsc = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === menu_namespaceObject.ESC_CODE) {
      closeBlock();
    }
  });
};

const closeByButton = () => {
  buttonCloseModal.addEventListener('click', () => {
    closeBlock();
  });
};

const workPopup = () => {
  openPopup();
  closeByEsc();
  closeByButton();
};



;// CONCATENATED MODULE: ./source/js/validation.js
const ZERO_VALUE = 0;
const mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const validation_forms = document.querySelectorAll('form');

const setErrorStyle = (object) => {
  object.style.borderColor = 'rgb(255, 17, 0)';
  object.style.color = 'rgb(255, 17, 0)';
};

const removeError = (object) => {
  object.removeAttribute('style');
};

const workForm = () => {
  validation_forms.forEach((form) => {
    if (!form.querySelector('input[type="email"]')) {
      return;
    }
    const emailInput = form.querySelector('input[type="email"]');
    const checkMailField = () => {
      emailInput.addEventListener('blur', () => {
        if (emailInput.value.length === ZERO_VALUE) {
          removeError(emailInput);
        } else if (!mailRegEx.test(emailInput.value)) {
          setErrorStyle(emailInput);
        } else if (mailRegEx.test(emailInput.value)){
          removeError(emailInput);
        }
      });
    };
    const stopSubmit = () => {
      form.addEventListener('submit', (evt) => {
        if (undefined.querySelector('input[type="email"]').hasAttribute('style')) {
          evt.preventDefault();
        }
        localStorage.setItem('tel', undefined.querySelector('input[type="email"]').value);
      });
    };
    checkMailField();
    stopSubmit();
  });
};



;// CONCATENATED MODULE: ./source/js/accordion.js
const workAccordion = (list) => {
  const accordionList = document.querySelectorAll(list);
  accordionList.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('block--open');
    });
  });
};



;// CONCATENATED MODULE: ./source/js/filter.js



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
      if (evt.keyCode === menu_namespaceObject.ESC_CODE) {
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



;// CONCATENATED MODULE: ./source/js/main.js







const err = 1;

if (document.querySelector('body')) {
  checkJS();
} else {
  err + 1;
}

if (document.querySelector('header')) {
  workMenu();
} else {
  err + 1;
}

if(document.querySelector('.login')) {
  workPopup();
} else {
  err + 1;
}

if(document.querySelector('input[type="email"]')) {
  workForm();
} else {
  err + 1;
}

if(document.querySelector('.faq')) {
  workAccordion('.faq__item');
} else {
  err + 1;
}

if(document.querySelector('.filters')) {
  workFilter();
} else {
  err + 1;
}

/******/ })()
;