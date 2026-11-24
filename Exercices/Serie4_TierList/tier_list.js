import { getNode, getNodes, forEach, on, delegateOn, swapNodes } from '../utils/dom.js';


const firstP = document.querySelector('p');
firstP.querySelector('span');

const tpmlItem = getNode('article.item', getNode('#item-template').content).cloneNode(true); //Création d'un template

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
    if (window.confirm("Veux-tu supprimer cette carte ?")) {
        card.remove();
    }
})

//Changement de tier
const TIERS = ['S', 'A', 'B', 'C', 'D'];

delegateOn('#tiers', '[data-action="up"]', 'click', (button) => {
    const cardtier = button.closest('.tier');
    const currentTier = cardtier.dataset.tier;
    console.log(currentTier);
    const currentTierIndex = TIERS.indexOf(currentTier);
    if (currentTierIndex === 0) {
        return;
    }
    const destinationIndex = currentTierIndex - 1;
    const destinationTier = TIERS[destinationIndex];
    const destinationSection = getNode(`[data-tier = "${destinationTier}"]`);
    const destinationItems = getNode('.items', destinationSection);
    const card = button.closest('.item');
    destinationItems.append(card);
})

delegateOn('#tiers', '[data-action="down"]', 'click', (button) => {
    const cardtier = button.closest('.tier');
    const currentTier = cardtier.dataset.tier;
    console.log(currentTier);
    const currentTierIndex = TIERS.indexOf(currentTier);
    if (currentTierIndex === TIERS.length - 1) {
        return;
    }
    const destinationIndex = currentTierIndex + 1;
    const destinationTier = TIERS[destinationIndex];
    const destinationSection = getNode(`[data-tier = "${destinationTier}"]`);
    const destinationItems = getNode('.items', destinationSection);
    const card = button.closest('.item');
    destinationItems.append(card);
})

// Changement de place

delegateOn('#tiers', '[data-action="previous"]', 'click', (button) => {
    const card = button.closest('.item');
    const previousCard = card.previousElementSibling;
    if (previousCard === null) {
        return;
    }
    swapNodes(card, previousCard);
})

delegateOn('#tiers', '[data-action="next"]', 'click', (button) => {
    const card = button.closest('.item');
    const nextCard = card.nextElementSibling;
    if (nextCard === null) {
        return;
    }
    swapNodes(card, nextCard);
})
