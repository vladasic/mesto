import "./index.css"
import { Card } from './scripts/components/Card.js'
import { initialCards,validateConfigEditForm,
    validateConfigAddCard } from './scripts/utils/utils.js'
import { FormValidator } from './scripts/components/FormValidator.js'
import { Section } from './scripts/components/Section.js';
import { PopupWithImage } from './scripts/components/PopupWithImage.js';
import { UserInfo } from './scripts/components/UserInfo.js';
import { PopupWthForm } from './scripts/components/PopupWithForm.js';
import {openEditProfileButton,popupEditUserProfile,popupContainer,popupAddImage,openAddCardPopupButton,
    popupToggleBigImage,closeImageButton,imageFull,imageText,popupFormAdd,popupButtonAddImage,formSumbit,formSubmitName,formSubmitProff,
    buttonSubmit,isActiveEditForm,formAddCard,formAddCardName,formAddCardLink,buttonAddCard,isActiveAddCardForm,popupChangeAvatar,
    formEditAvater,openEditAvatar,profileAvatar}
     from './scripts/utils/constatnts.js';
import { Api } from './scripts/components/Api.js';

const api = new Api('options')
function loadNewCard(){
    api.getInitialCards()
    .then((cards)=>{        
        cards.forEach((card)=>{
          addNewItem(card.name,card.link,card.likes.length,card._id, card.owner._id)
        })
      })
      .catch((err)=>{console.log(err)})
}



//функция рендеринга карточек на странице
const section = new Section({items: initialCards,
    renderer: () =>{
        loadNewCard()
      },
     },
    '.elements');
  
api.getUserMe()
  .then((me)=>{
    document.querySelector('.profile__title').textContent =  me.name;
    document.querySelector('.profile__subtitle').textContent = me.about;
    document.querySelector('.profile__avatar').src =  me.avatar
  })


const openBigImage = new PopupWithImage(popupToggleBigImage)
openBigImage.setEventListeners()
section.renderItems();

const userInfo = new UserInfo('profile__title','profile__subtitle')

const editProfileSubmit = new PopupWthForm({
    handleFormSubmit: (data) =>{
        userInfo.setUserInfo(api.patchUserMe(data["firstname"],data['lastname']));
        userInfo.setUserInfo(data["firstname"],data['lastname'])
        editProfileSubmit.close();
        
    }
   },popupEditUserProfile, popupContainer
 );

 editProfileSubmit.setEventListeners();


 openEditProfileButton.addEventListener('click',()=>{
    editProfileSubmit.open()
 })
 
const popupQuestion = document.querySelector('.popup_question')
const popupFormQuestion = document.querySelector('.popup__container_rounding')

function addNewItem(name,link,like,cardId,trash){
    const card = new Card({
        handleCardClick: (name, link) =>{
            openBigImage.open(name,link)      
        },
        openDelCard: () =>{
          const popupDelateCard = new PopupWthForm({handleFormSubmit: ()=>{}},popupQuestion,popupFormQuestion)
          popupDelateCard.setEventListeners()
          popupDelateCard.open()
          document.querySelector('.element__button_question').addEventListener('click',()=>{
            popupDelateCard.close()
          })
        },
        putleLike: () =>{
          api.putLikecard(cardId)
        },
        delLike: () =>{
          api.delLikeCard(cardId)
        },
        deleteFullCard: () =>{
          api.delFullCard(cardId)
        }
    },
    name,
    link,
    like,
    cardId,
    '.template',
    trash
    );

    const cardElement = card.generateCard();
    card.renderTrashIcon()

    section.addItems(cardElement);
}


const popupAddCard = new PopupWthForm({
    handleFormSubmit: (data)=>{
      addNewItem(data['firstname'],data['lastname']);
     
      api.postNewCard(data['firstname'],data['lastname'])
      popupAddCard.close()
      popupButtonAddImage.classList.add("popup__button_invalid");
      popupButtonAddImage.disabled = true;
    }
},popupAddImage, popupFormAdd
);

popupAddCard.setEventListeners()
openAddCardPopupButton.addEventListener('click',()=>{
    popupAddCard.open()
})
const popupEditAvatar = new PopupWthForm({
  handleFormSubmit: (data)=>{
    api.postAvatarMe(data['urlavatar'])
    profileAvatar.src = (data['urlavatar']) 
    popupEditAvatar.close()
  }
},popupChangeAvatar,formEditAvater
)

popupEditAvatar.setEventListeners()

openEditAvatar.addEventListener('click',()=>{
  popupEditAvatar.open()
})


const editFormValidate = new FormValidator(
    formSumbit,
    formSubmitName,
    buttonSubmit,
    isActiveEditForm,
    validateConfigEditForm
    )
editFormValidate.enableValidation()

const addCardValidate = new FormValidator(
  formAddCard,
  formAddCardName,
  buttonAddCard,
  isActiveAddCardForm,
  validateConfigAddCard
)
addCardValidate.enableValidation()
