import { toggleFormSubmit, focusHandler } from "./utils.js";

class FormValidator {
  constructor(config, form) {
    this._fieldSelector = config.fieldSelector;
    this._submitSelector = config.submitSelector;
    this._invalidFieldClass = config.invalidFieldClass;
    this._errorSelectorPrefix = config.errorSelectorPrefix;
    this._form = form;
  }

  _checkFormValidity(elementsFields, elementSubmit) {
    toggleFormSubmit(elementSubmit, { disable: true });

    const formIsValid = elementsFields.every(({ validity }) => validity.valid);

    if (!formIsValid) {
      toggleFormSubmit(elementSubmit, { disable: false });
    }

    return formIsValid;
  };

  _setFieldError(
    elementField,
    elementError,
    { validationMessage, valid, invalidFieldClass },
    ) {
    elementError.textContent = validationMessage;
    if (valid) {
      elementField.classList.remove(invalidFieldClass);
    } else {
      elementField.classList.add(invalidFieldClass);
    }
  };

  _checkFieldValidity(elementField, elementError, invalidFieldClass) {
    const { validationMessage, validity: { valid } } = elementField;

    const params = {
      validationMessage,
      valid,
      invalidFieldClass,
    };

    this._setFieldError(elementField, elementError, params);
    return valid;
  };

  enableValidation() {
    const formFields = Array.from(this._form.querySelectorAll(this._fieldSelector));
    const buttonSubmit = this._form.querySelector(this._submitSelector);
    formFields.forEach((elementField) => {
      const errorTextSelector = `.${this._errorSelectorPrefix + elementField.name}`;
      const elementError = this._form.querySelector(errorTextSelector);

      elementField.addEventListener('input', (evt) => {
        const field = evt.target;
        this._checkFormValidity(formFields, buttonSubmit);
        this._checkFieldValidity(field, elementError, this._invalidFieldClass);
      });

      elementField.addEventListener('focus', focusHandler(elementField));
    });
    this._form.addEventListener('click', (evt) => evt.stopPropagation());
  };

  resetForm() {
    this._form.reset();
    const formFields = Array.from(this._form.querySelectorAll(this._fieldSelector));
    formFields.forEach((elementField) => {
      const errorTextSelector = `.${this._errorSelectorPrefix + elementField.name}`;
      const elementError = this._form.querySelector(errorTextSelector);
      elementError.textContent = '';
      elementField.classList.remove(this._invalidFieldClass);
    });
  };

}

export default FormValidator;
