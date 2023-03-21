import Popup from "./Popup.js";
import { formsConfig } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(formsConfig.formSelector);
    this._inputs = Array.from(this._form.querySelectorAll(formsConfig.fieldSelector));
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.id] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      this._handleFormSubmit(evt, this._getInputValues());
    });
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
