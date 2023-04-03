import Popup from "./Popup.js";
import { formsConfig } from "../utils/constants.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(formsConfig.formSelector);
    this._submitButton = this._popup.querySelector(formsConfig.submitSelector);
  }

  open(cardId) {
    super.open();
    this._submitButton.setAttribute('value', cardId);

  }

  close() {
    super.close();
    this._submitButton.setAttribute('value', '');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      this._handleFormSubmit(evt, this._submitButton.value);
    });
  }

}
