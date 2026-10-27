import { getNode, getNodes, forEach, on, delegateOn, swapNodes } from '../utils/dom.js';


const firstP = document.querySelector('p');
firstP.querySelector('span');

const tpmlItem = getNode ('article.item', getNode('#item-template').content).cloneNode(true); //Création d'un template

//Créer
on('#add-item-form', 'submit', (form, event) => {
    event.preventDefault();
    const tierS = getNode('#tier-s');
    const itemName = getNode('#item-name', form).value;
    const clone = tpmlItem.cloneNode(true);
    getNode(".item-name", clone).textContent = itemName;
    tierS.append(clone);
})

//Supprimer
delegateOn('body', '[data-action="delete"]', 'click', () => {
    console.log('click');
})