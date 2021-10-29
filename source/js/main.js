import {checkJS} from './start.js';
import {workMenu} from './menu.js';
import {workPopup} from './popup.js';
import {workForm} from './validation.js';
import {workAccordion} from './accordion.js';

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

if(document.querySelector('form')) {
  workForm();
} else {
  err + 1;
}

if(document.querySelector('.faq')) {
  workAccordion('.faq__item');
} else {
  err + 1;
}
