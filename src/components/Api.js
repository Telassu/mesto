class Api {
  constructor (options) {
    this._url = options.baseUrl,
    this._headers = options.headers
  }

  getInitialCards() {
    return fetch (`${this._url}/cards`, {headers: this._headers})
   
    .then ((res) => res.ok ? res.json() : Promise.reject(res.status))
    .catch((err) => {
      console.log('ERROR! =>', err)
    })
  };

  getUserInfo () {
    return fetch (`${this._url}/users/me`, {headers: this._headers})

    .then ((res) => res.ok ? res.json() : Promise.reject(res.status))
    .catch((err) => {
      console.log('ERROR! =>', err)
  })
  };

  editUserInfo (data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description
      })
    })

    .then ((res) => res.ok ? res.json() : Promise.reject(res.status))
    .catch((err) => {
      console.log('ERROR! =>', err)
  })
  }

  editNewAvatar (data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })

    .then ((res) => res.ok ? res.json() : Promise.reject(res.status))
    .catch((err) => {
      console.log('ERROR! =>', err)
  })
  }

  editNewCard (data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.place,
        link: data.link
      })
    })

    .then ((res) => res.ok ? res.json() : Promise.reject(res.status))
    .catch((err) => {
      console.log('ERROR! =>', err)
  })
  }


/*
  likeCounterCard()
  deleteCard()
*/

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '6e47bbc5-5375-4cf6-9e12-9c6c5520d107',
    'Content-Type': 'application/json'
  }
});