class Card {
  static _template = document.querySelector("#element_template").content;

  constructor({ item, handleOpenCardPopup }, selectors) {
    this.caption = item.name;
    this.image = item.link;
    this._handleOpenCardPopup = handleOpenCardPopup;
    this._selectors = selectors;
    this._buttonTrashHandle = this._buttonTrashHandle.bind(this);
  }

  createCard(){
    this._cardElement = Card._template.querySelector(this._selectors.item).cloneNode(true);
    const cardCaption = this._cardElement.querySelector(this._selectors.caption);
    const cardImage = this._cardElement.querySelector(this._selectors.image);
    const cardButtonTrash = this._cardElement.querySelector(this._selectors.buttonTrash);
    const cardButtonLike = this._cardElement.querySelector(this._selectors.buttonLike);
    this._setEventListners(cardButtonTrash, cardButtonLike, cardImage, cardCaption);

    cardCaption.textContent = this.caption;
    cardImage.src = this.image;
    cardImage.alt = this.caption;

    return this._cardElement;
  }

  _buttonTrashHandle() {
    this._cardElement.remove();
  }

  _setEventListners(trash, like, cardImage, cardCaption) {
    trash.addEventListener('click', this._buttonTrashHandle);
    like.addEventListener('click', (evt) => {
      evt.target.classList.toggle(this._selectors.buttonLike_active);
    });
    cardImage.addEventListener('click', (evt) => {
      this._handleOpenCardPopup(cardCaption.textContent, cardImage.src);
    });
  }

}

export default Card;
