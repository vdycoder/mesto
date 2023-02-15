/* helpers functions */
const focusHandler = ({ target }) => target.select();

const toggleFormSubmit = (elementSubmit, { disable }) => {
  if (disable) {
    elementSubmit.removeAttribute('disabled');
  } else {
    elementSubmit.setAttribute('disabled', 'disabled');
  }
};

const checkFormValidity = (elementsFields, elementSubmit) => {
  toggleFormSubmit(elementSubmit, { disable: true });

  const formIsValid = elementsFields.every(({ validity }) => validity.valid);

  if (!formIsValid) {
    toggleFormSubmit(elementSubmit, { disable: false });
  }

  return formIsValid;
};

const setFieldError = (
  elementField,
  elementError,
  { validationMessage, valid, invalidFieldClass },
) => {
  elementError.textContent = validationMessage;
  if (valid) {
    elementField.classList.remove(invalidFieldClass);
  } else {
    elementField.classList.add(invalidFieldClass);
  }
};

const checkFieldValidity = (elementField, elementError, invalidFieldClass) => {
  const { validationMessage, validity: { valid } } = elementField;

  const params = {
    validationMessage,
    valid,
    invalidFieldClass,
  };

  setFieldError(elementField, elementError, params);
  return valid;
};

const enableValidation = (config) => {
  // обход всех форм и всех полей каждой формы
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    const formFields = Array.from(form.querySelectorAll(config.fieldSelector));
    const buttonSubmit = form.querySelector(config.submitSelector);
    formFields.forEach((elementField) => {
      const errorTextSelector = `.${config.errorSelectorPrefix + elementField.name}`;
      const elementError = form.querySelector(errorTextSelector);

      elementField.addEventListener('input', (e) => {
        const field = e.target;
        checkFormValidity(formFields, buttonSubmit);
        checkFieldValidity(field, elementError, config.invalidFieldClass);
      });

      elementField.addEventListener('focus', focusHandler);
    });
    form.addEventListener('click', (evt) => evt.stopPropagation());
  });
};

const resetForm = (config, form) => {
  // сброс формы, текста ошибок и классов ошибок
  form.reset();
  const formFields = Array.from(form.querySelectorAll(config.fieldSelector));
  formFields.forEach((elementField) => {
    const errorTextSelector = `.${config.errorSelectorPrefix + elementField.name}`;
    const elementError = form.querySelector(errorTextSelector);
    elementError.textContent = '';
    elementField.classList.remove(config.invalidFieldClass);
  });
};

