export class Card{
    constructor({handleCardClick, openDelCard,putleLike,delLike,deleteFullCard},name,link,like,cardId,cardSelector,trash){
        this._name = name;
        this._link = link;
        this._like = like;
        this._cardId = cardId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._openDelCard = openDelCard;   
        this._putleLike = putleLike;
        this._delLike = delLike;
        this._deleteFullCard = deleteFullCard;
        this._trash = trash
    }

    _getTemplate(){
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return cardElement
    }

    _setEventListeners(){
        this._element.querySelector('.element__button').addEventListener('click',()=>{
            if(!this._element.querySelector('.element__button').classList.contains('element__button_add_black-icon')){
                this._handleIconClick();
                this._putleLike();
            }else{
                this._handleDeleteClick();
                this._delLike();
            }

        })
        this._element.querySelector('.element__img').addEventListener('click',()=>{
            this._handleCardClick(
                this._name,
                this._link,
            )
        })
        this._element.querySelector(".element__trash").addEventListener('click',()=>{
            this._openDelCard()
            document.querySelector('.popup__button-question').addEventListener('click',()=>{
                this._removeElement()
                this._deleteFullCard()
            })
        })

    }

    _handleIconClick(){
        this._element.querySelector('.element__button').classList.add('element__button_add_black-icon');
        this._element.querySelector('.element__like-info').textContent =  this._like + 1 
    }
    _handleDeleteClick(){
        this._element.querySelector('.element__button').classList.remove('element__button_add_black-icon') 
        this._element.querySelector('.element__like-info').textContent =  this._like - 1 
    }
    _removeElement(){
        this._element.remove()
    }

    returnMethodCardTrash(){
        return this._element.querySelector(".element__trash").addEventListener('click',()=>{
            this._openDelCard()
            document.querySelector('.popup__button-question').addEventListener('click',()=>{this._removeElement()})
        })
    }
    renderTrashIcon(){
         if(this._trash !== 'a5da0c289dddedfe7c89724d'){
            this._trashCard.remove()
          }
    }
    

    generateCard(){
        this._element = this._getTemplate()
        
        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__like-info').textContent =  this._like;
        this._trashCard = this._element.querySelector(".element__trash");
        this._setEventListeners()
        
        return this._element
    }
}


