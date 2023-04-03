class Card {
  constructor({
    item,
    cardTemplate,
    handleCardClick,
    handleTrashButtonClick
  }, selectors) {
    this._item = item;
    this._handleCardClick = handleCardClick;
    this._handleTrashButtonClick = handleTrashButtonClick;
    this._cardElement = cardTemplate.querySelector(selectors.item).cloneNode(true);
    this._cardCaption = this._cardElement.querySelector(selectors.caption);
    this._cardImage = this._cardElement.querySelector(selectors.image);
    this._cardButtonTrash = this._cardElement.querySelector(selectors.buttonTrash);
    this._cardButtonLike = this._cardElement.querySelector(selectors.buttonLike);
    this._cardLikesCount = this._cardElement.querySelector(selectors.likesCount);
    this._buttonLike_active = selectors.buttonLike_active;
  }

  createCard(userId){
    this._setEventListners();
    if (this._item.owner._id != userId) {
      this._cardButtonTrash.remove();
    }
    this._cardCaption.textContent = this._item.name;
    this._cardImage.src = this._item.link;
    this._cardImage.alt = this._item.name;
    this._cardLikesCount.textContent = this._item.likes.length;
    this._cardElement.setAttribute('id', this._item._id)
    return this._cardElement;
  }

  _deleteCard() {
    //this._cardElement.remove();
    //console.log(this._cardElement);
    //this._handleTrashButtonClick(this._cardElement);
  }

  _toggleLike = (evt) => {
    evt.target.classList.toggle(this._buttonLike_active);
  }

  _handleImageClick = () => {
    this._handleCardClick(this._cardCaption.textContent, this._cardImage.src)
  }

  _setEventListners() {
    //this._cardButtonTrash.addEventListener('click', this._deleteCard);
    this._cardButtonTrash.addEventListener('click', (evt) => {
      this._handleTrashButtonClick(evt, this._item._id);
    });
    this._cardButtonLike.addEventListener('click', this._toggleLike);
    this._cardImage.addEventListener('click', this._handleImageClick);
  }

}

export default Card;
