class Card {
  constructor({ item, cardTemplate, handleCardClick }, selectors) {
    this._caption = item.name;
    this._image = item.link;
    this._handleCardClick = handleCardClick;
    this._cardElement = cardTemplate.querySelector(selectors.item).cloneNode(true);
    this._cardCaption = this._cardElement.querySelector(selectors.caption);
    this._cardImage = this._cardElement.querySelector(selectors.image);
    this._cardButtonTrash = this._cardElement.querySelector(selectors.buttonTrash);
    this._cardButtonLike = this._cardElement.querySelector(selectors.buttonLike);
    this._buttonLike_active = selectors.buttonLike_active;
  }

  createCard(){
    this._setEventListners();
    this._cardCaption.textContent = this._caption;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._caption;
    return this._cardElement;
  }

  _deleteCard = () => {
    this._cardElement.remove();
  }

  _toggleLike = (evt) => {
    evt.target.classList.toggle(this._buttonLike_active);
  }

  _handleImageClick = () => {
    this._handleCardClick(this._cardCaption.textContent, this._cardImage.src)
  }

  _setEventListners() {
    this._cardButtonTrash.addEventListener('click', this._deleteCard);
    this._cardButtonLike.addEventListener('click', this._toggleLike);
    this._cardImage.addEventListener('click', this._handleImageClick);
  }

}

export default Card;
