class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._formFields = Array.from(form.querySelectorAll(config.fieldSelector));
    this._buttonSubmit = form.querySelector(config.submitSelector);
    this._errorSelectorPrefix = config.errorSelectorPrefix;
    this._invalidFieldClass = config.invalidFieldClass;
  }

  _focusHandler(target) {
    target.select()
  };

  _toggleFormSubmit({ disable }) {
    if (disable) {
      this._buttonSubmit.removeAttribute('disabled');
    } else {
      this._buttonSubmit.setAttribute('disabled', 'disabled');
    }
  };

  _checkFormValidity () {
    this._toggleFormSubmit({ disable: true });
    const formIsValid = this._formFields.every(({ validity }) => validity.valid);
    if (!formIsValid) {
      this._toggleFormSubmit({ disable: false });
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
      invalidFieldClass
    };

    this._setFieldError(elementField, elementError, params);
    return valid;
  };

  enableValidation() {
    this._formFields.forEach((elementField) => {
      const errorTextSelector = `.${this._errorSelectorPrefix + elementField.name}`;
      const elementError = this._form.querySelector(errorTextSelector);

      elementField.addEventListener('input', (evt) => {
        const field = evt.target;
        this._checkFormValidity();
        this._checkFieldValidity(field, elementError, this._invalidFieldClass);
      });

      elementField.addEventListener('focus', this._focusHandler(elementField));
    });
    this._form.addEventListener('click', (evt) => evt.stopPropagation());
  };

  resetForm({ disable }) {
    this._form.reset();
    this._toggleFormSubmit({ disable });
    this._formFields.forEach((elementField) => {
      const errorTextSelector = `.${this._errorSelectorPrefix + elementField.name}`;
      const elementError = this._form.querySelector(errorTextSelector);
      elementError.textContent = '';
      elementField.classList.remove(this._invalidFieldClass);
    });
  };

}

export default FormValidator;
