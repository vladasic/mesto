export class Api{
    constructor(options){
        this._options = options
    }

    getInitialCards(){
       return fetch('https://mesto.nomoreparties.co./v1/cohort-22/cards',{
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
       return fetch('https://mesto.nomoreparties.co./v1/cohort-22/users/me',{
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
    }

    getUserMe(){
       return fetch('https://mesto.nomoreparties.co./v1/cohort-22/users/me',{
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

    postNewCard(name,link){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/cards',{
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
    }
    
    postAvatarMe(avatar){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/users/me/avatar',{
            method: 'PATCH',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
    }

    putLikecard(cardId){
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-22/cards/likes/${cardId}`,{
            method: 'PUT',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            }
        })
    }
    delLikeCard(cardId){
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-22/cards/likes/${cardId}`,{
            method: 'DELETE',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            }
        })
    }

    delFullCard(cardId){
         fetch(`https://mesto.nomoreparties.co/v1/cohort-22/cards/${cardId}`,{
            method:'DELETE',
            headers:{
                authorization: '58232a31-4e24-43a3-8b98-3fa6f2453c70',
                'Content-Type': 'application/json'
            }
        })
    }

}
