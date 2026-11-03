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
delegateOn('#tiers', '[data-action="delete"]', 'click', (el, parent, evt) => {
    console.log(el);
    console.log(parent);
    console.log(evt);
    const card = el.closest('.item'); //Closest est l'inverse de querySelector(Cherche vers le bas), closest(Cherche vers le haut)
    if (window.confirm("Veux-tu supprimer cette carte ?")){
    card.remove(); 
    }
})

//Changement de tier
const TIERS = ['S', 'A', 'B', 'C', 'D'];
cardtier = el.closest('.tier')
cardtier.dataset.tier

delegateOn('#tiers', '[data-action="delete"]', 'click', (el, parent, evt) => {
    console.log(el);
    console.log(parent);
    console.log(evt);
    const card = el.closest('.item'); //Closest est l'inverse de querySelector(Cherche vers le bas), closest(Cherche vers le haut)
    if (window.confirm("Veux-tu supprimer cette carte ?")){
    card.remove(); 
    }
})