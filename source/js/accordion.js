const workAccordion = (list) => {
  const accordionList = document.querySelectorAll(list);
  accordionList.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('block--open');
    });
  });
};

export {workAccordion};
