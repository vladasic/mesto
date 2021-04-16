export class Api{
    constructor(apiBaseUrl,token){
        this._apiBaseUrl = apiBaseUrl;
        this._token = token;
    }

    getInitialCards(){
       return fetch(`${this._apiBaseUrl}/cards`,{
        headers:{
            authorization: this._token
        }
    })
        .then(this._getResponseData())
    }

    patchUserMe(name,about){
       return fetch(`${this._apiBaseUrl}/users/me`,{
          method: 'PATCH',
          headers:{
            authorization: this._token,
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
            authorization: this._token
           }
       })
       .then(this._getResponseData())
    }

    postNewCard(name,link){
       return  fetch(`${this._apiBaseUrl}/cards`,{
            method: 'POST',
            headers:{
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._getResponseData())
    }
    
    postAvatarMe(avatar){
        return fetch(`${this._apiBaseUrl}/users/me/avatar`,{
            method: 'PATCH',
            headers:{
                authorization: this._token,
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
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then(this._getResponseData())
    }
    delLikeCard(cardId){
        return fetch(`${this._apiBaseUrl}/cards/likes/${cardId}`,{
            method: 'DELETE',
            headers:{
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then(this._getResponseData())
    }

    delFullCard(cardId){
        return fetch(`${this._apiBaseUrl}/cards/${cardId}`,{
            method:'DELETE',
            headers:{
                authorization: this._token,
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
