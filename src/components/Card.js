class Card {
  constructor({
    item,
    cardTemplate,
    handleCardClick,
    handleTrashButtonClick,
    handleLikeButtonClick
  }, selectors) {
    this._item = item;
    this._likes = item.likes;
    this._handleCardClick = handleCardClick;
    this._handleTrashButtonClick = handleTrashButtonClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
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
    this._userId = userId;
    if (this._item.owner._id != this._userId) {
      this._cardButtonTrash.remove();
    };
    this._cardCaption.textContent = this._item.name;
    this._cardImage.src = this._item.link;
    this._cardImage.alt = this._item.name;
    this._cardElement.setAttribute('id', this._item._id);
    this.setLikes(this._item.likes);
    return this._cardElement;
  }

  _isLiked() {
    return this._likes.some((user) => user._id === this._userId);
  }

  setLikes(likes) {
    this._likes = likes;
    this._cardLikesCount.textContent = this._likes.length;
    if (this._isLiked()) {
      this._cardButtonLike.classList.add(this._buttonLike_active)
    } else {
      this._cardButtonLike.classList.remove(this._buttonLike_active)
    }
  }

  _handleImageClick = () => {
    this._handleCardClick(this._cardCaption.textContent, this._cardImage.src)
  }

  _setEventListners() {
    this._cardButtonTrash.addEventListener('click', (evt) => {
      this._handleTrashButtonClick(evt, this._item._id);
    });
    this._cardButtonLike.addEventListener('click', (evt) => {
      this._handleLikeButtonClick(evt, this, this._item._id, this._isLiked());
    });
    this._cardImage.addEventListener('click', this._handleImageClick);
  }

}

export default Card;
