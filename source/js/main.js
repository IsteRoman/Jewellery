import {checkJS} from './start.js';
import {runMenuWork} from './menu.js';
import {runPopupWork} from './popup.js';
import {runFormWork} from './validation.js';
import {runAccordionWork} from './accordion.js';
import {runFilterWork} from './filter.js';
import {runSliderWork} from './slider.js';

checkJS();
runMenuWork();
runPopupWork();
runFormWork();
runAccordionWork('.faq__item');
runFilterWork();
runSliderWork();
