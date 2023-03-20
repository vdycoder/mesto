class Card {
  constructor({ item, cardTemplate, handleCardClick }, selectors) {
    this.caption = item.name;
    this.image = item.link;
    this._handleCardClick = handleCardClick;
    this._cardElement = cardTemplate.querySelector(selectors.item).cloneNode(true);
    this._cardCaption = this._cardElement.querySelector(selectors.caption);
    this._cardImage = this._cardElement.querySelector(selectors.image);
    this._cardButtonTrash = this._cardElement.querySelector(selectors.buttonTrash);
    this._cardButtonLike = this._cardElement.querySelector(selectors.buttonLike);
    this._buttonLike_active = selectors.buttonLike_active;
    this._handleButtonTrash = this._handleButtonTrash.bind(this);
  }

  createCard(){
    this._setEventListners();
    this._cardCaption.textContent = this.caption;
    this._cardImage.src = this.image;
    this._cardImage.alt = this.caption;
    return this._cardElement;
  }

  _handleButtonTrash() {
    this._cardElement.remove();
  }

  _setEventListners() {
    this._cardButtonTrash.addEventListener('click', this._handleButtonTrash);
    this._cardButtonLike.addEventListener('click', (evt) => {
      evt.target.classList.toggle(this._buttonLike_active);
    });
    this._cardImage.addEventListener('click', (evt) => {
      this._handleCardClick(
        this._cardCaption.textContent,
        this._cardImage.src
        );
    });
  }

}

export default Card;
