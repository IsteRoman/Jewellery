const runAccordionWork = (list) => {
  const accordionList = document.querySelectorAll(list);
  accordionList.forEach((element) => {
    if (!element) {
      return;
    }
    element.addEventListener('click', () => {
      element.classList.toggle('block--open');
    });
  });
};

export {runAccordionWork};
