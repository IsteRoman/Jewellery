import Swiper from 'swiper/bundle';

const workSlider = () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    direction: 'horizontal',
    slideClass: 'news__slider-item',
    slidesPerView: '2',
    slidesPerGroup: '2',

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
      1023: {
        slidesPerView: '4',
        slidesPerGroup: '4',
        pagination: {
          type: 'bullet',
          renderBullet: function(index, className) {
            return `<span class= ${className}> ${index + 1} </span>`;
          },
        },
      },
      768: {
        pagination: {
          type: 'bullet',
          renderBullet: function(index, className) {
            return `<span class= ${className}> ${index + 1} </span>`;
          },
        },
      },
    },
  });
};

export {workSlider};
