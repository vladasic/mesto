import{handleCardClick} from '../../src/index.js'

export class Card {
    constructor(name, link, elementTemplate,) {
        this._link = link;
        this._name = name;
        this._elementTemplate = elementTemplate;
        this._handleCardClick = handleCardClick;
       
    }


    _getClonedTemplate() {
        return this._elementTemplate.content.querySelector('.element').cloneNode(true);
    }

    _setEventListener() {
        this._elementImage.addEventListener('click', () => {
             handleCardClick(this._elementImage.src ,this._elementText.textContent, this.openPopup)
        });

        this._elementButton.addEventListener('click', () => {
            this._addElementBlackIcons();
        });

        this._elementTrash.addEventListener('click', () => {
            this._removeElement()
        });

    }

    _addElementBlackIcons() {
        this._elementButton.classList.toggle('element__button_add_black-icon');
    }
    //не совсем понял что значит занулить??
    _removeElement() {
        this._element.remove();
    }

    createCard() {
        this._element = this._getClonedTemplate();
        this._elementText = this._element.querySelector('.element__text');
        this._elementImage = this._element.querySelector('.element__img');
        this._elementButton = this._element.querySelector('.element__button');
        this._elementButtonBlackIcon = this._element.querySelector('.element__button_add_black-icon');
        this._elementTrash = this._element.querySelector('.element__trash');


        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementText.textContent = this._name;

        this._setEventListener()
        return this._element;
    }
}

