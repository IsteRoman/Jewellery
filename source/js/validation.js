const ZERO_VALUE = 0;
const mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const forms = document.querySelectorAll('form');

const setErrorStyle = (object) => {
  object.style.borderColor = 'rgb(255, 17, 0)';
  object.style.color = 'rgb(255, 17, 0)';
};

const removeError = (object) => {
  object.removeAttribute('style');
};

const runFormWork = () => {
  if (!forms) {
    return;
  }
  forms.forEach((form) => {
    if (!form.querySelector('input[type="email"]')) {
      return;
    }
    const emailInput = form.querySelector('input[type="email"]');
    const checkMailField = () => {
      if (!emailInput) {
        return;
      }

      emailInput.addEventListener('focus', () => {
        if (emailInput.hasAttribute('style')) {
          removeError(emailInput);
        }
      });

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
      if (!form) {
        return;
      }
      form.addEventListener('submit', (evt) => {
        if (this.querySelector('input[type="email"]').hasAttribute('style')) {
          evt.preventDefault();
        }
        localStorage.setItem('tel', this.querySelector('input[type="email"]').value);
      });
    };
    checkMailField();
    stopSubmit();
  });
};

export {runFormWork};
