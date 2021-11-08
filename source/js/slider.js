import Swiper from 'swiper/bundle';
const MAX_TABLET_WIDTH = 1023;
const MIN_DESCTOP_WIDTH = 1024;
const COST_NTH_NUMBER_NOT_DESCTOP = 2;
const COST_NTH_NUMBER_DESCTOP = 4;


const runSliderWork = () => {
  if (!document.querySelector('.swiper')) {
    return;
  }
  
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    direction: 'horizontal',
    slideClass: 'news__slider-item',
    slidesPerView: 2,
    slidesPerGroup: 2,
    centeredSlides: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      type: 'fraction',
      renderFraction: function(currentClass, totalClass) {
        return `<span class= ${currentClass}></span> of <span class= ${totalClass}></span>`;
      },
    },

    navigation: {
      nextEl: '.news__pagination-button--next',
      prevEl: '.news__pagination-button--back',
    },

    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: 'bullets',
          renderBullet: function(index, className) {
            return `<span class= ${className}> ${index + 1} </span>`;
          },
        },
      },
      768: {
        pagination: {
          slidesPerView: 'auto',
          slidesPerGroup: 2,
          type: 'bullets',
          renderBullet: function(index, className) {
            return `<span class= ${className}> ${index + 1} </span>`;
          },
        },
      },
    },
  });

  const useTabButton = () => {
    const sliderBlock = document.querySelector('.news__slider')

    const runTabFunction = (cost) => {
      const skipElement = document.querySelectorAll(`.news__slider-item:nth-of-type(${cost}n)`)
        skipElement.forEach((el) => {
          el.classList.add('lastElement');
        });
        sliderBlock.addEventListener('keydown', (evt) => {
          const eventTarger = evt.target;
          const eventTargerParentElement = eventTarger.parentElement;

          if (evt.keyCode === 9 && eventTargerParentElement.classList.contains('lastElement')) {
            swiper.slideNext();
          }
        });
      }

    if (window.matchMedia(`(min-width:${MIN_DESCTOP_WIDTH}px)`).matches) {
      runTabFunction(COST_NTH_NUMBER_DESCTOP);
    } else if (window.matchMedia(`(max-width:${MAX_TABLET_WIDTH}px)`).matches) {
      runTabFunction(COST_NTH_NUMBER_NOT_DESCTOP);
    }
  }
  useTabButton();
};

export {runSliderWork};
