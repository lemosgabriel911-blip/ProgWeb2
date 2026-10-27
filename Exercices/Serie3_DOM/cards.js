// import { shuffleInPlace } from '../Serie2.js';
console.log('cards.js chargé');

const deck = document.querySelector('.deck'); // 1 Créer une fonction pour enlever la sélection des cartes
const allCards = deck.querySelectorAll('playing-card');

function clearSelection() {
    allCards.forEach((card) => { card.classList.remove('selected') });
}

const aceSpadeButton = document.querySelector('#select-ace-spade'); // 2 Configuration de chaque bouton 
const aceSpade = deck.querySelector('#SPADE-ACE');

aceSpadeButton.addEventListener('click', () => {
    clearSelection();
    aceSpade.classList.add('selected');
});

const heartsButton = document.querySelector('#select-hearts');
const allHearts = deck.querySelectorAll('.heart');

heartsButton.addEventListener('click', () => {
    clearSelection();
    allHearts.forEach((heart) => {
        heart.classList.add('selected');
    });
});



//SOLUTION ALTERNATIVE POUR LES BOUTONS -> Créer une fonction puisque les logiques des codes se ressemblent
function selectCards(selector){
    const cards = document.querySelectorAll(selector);
    clearSelection();
    forEach((selectCards) => {cards.classList.add('selected')});
}

document.querySelector('#select-red')
    .addEventListener('click', () => {selectCards('.deck .heart, .deck .diamond')})