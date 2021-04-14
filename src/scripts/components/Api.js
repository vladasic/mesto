export class Api{
    constructor(options){
        this._options = options;
        this._apiBaseUrl = `https://mesto.nomoreparties.co/v1/cohort-22`;
    }

    getInitialCards(){
       return fetch(`${this._apiBaseUrl}/cards`,{
        headers:{
            authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70'
        }
    })
        .then(res=>{
            if(res.ok){
               return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    patchUserMe(name,about){
       return fetch(`${this._apiBaseUrl}/users/me`,{
          method: 'PATCH',
          headers:{
            authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              about: about
          })
        })
        .then(this._getResponseData())
    }

    getUserMe(){
       return fetch(`${this._apiBaseUrl}/users/me`,{
           headers:{
            authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70'
           }
       })
       .then(this._getResponseData())
    }

    postNewCard(name,link){
        return fetch(`${this._apiBaseUrl}/cards`,{
            method: 'POST',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link,

            })
        })
        .then(this._getResponseData())
    }
    
    postAvatarMe(avatar){
        return fetch(`${this._apiBaseUrl}/users/me/avatar`,{
            method: 'PATCH',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then(this._getResponseData())
    }

    putLikecard(cardId){
        return fetch(`${this._apiBaseUrl}/cards/likes/${cardId}`,{
            method: 'PUT',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            }
        })
        .then(this._getResponseData())
    }
    delLikeCard(cardId){
        return fetch(`${this._apiBaseUrl}/cards/likes/${cardId}`,{
            method: 'DELETE',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            }
        })
        .then(this._getResponseData())
    }

    delFullCard(cardId){
        return fetch(`${this._apiBaseUrl}/cards/${cardId}`,{
            method:'DELETE',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            }
        })
        .then(this._getResponseData())
    }
    _getResponseData(){
     return   res=>{
            if(res.ok){
               return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        }
    }
}
