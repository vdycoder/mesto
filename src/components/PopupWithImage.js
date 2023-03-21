import Popup from './Popup.js';
import { popupSelectors } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(popupSelectors.image);
    this._popupCaption = this._popup.querySelector(popupSelectors.caption);
  }

  open(name, link) {
    super.open();
    this._popupImage.setAttribute('src', link);
    this._popupImage.setAttribute('alt', name);
    this._popupCaption.textContent = name;
  }
}
