export default class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch(this._options.baseUrl + '/cards', {
      headers: this._options.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getUserInfo() {
    return fetch(this._options.baseUrl + '/users/me', {
      headers: this._options.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  updateUserInfo({userName, userAbout}) {
    return fetch(this._options.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  postCard(item) {
    return fetch(this._options.baseUrl + '/cards', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteCard(cardId) {
    return fetch(this._options.baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._options.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  addLike(cardId) {
    return fetch(this._options.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: this._options.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteLike(cardId) {
    return fetch(this._options.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: this._options.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

}
