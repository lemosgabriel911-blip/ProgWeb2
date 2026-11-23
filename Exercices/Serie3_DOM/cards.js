import { shuffleInPlace } from '../Serie2.js';

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

const redButton = document.querySelector('#select-red');
const allRedCards = document.querySelectorAll('.deck .heart, .deck .diamond');

redButton.addEventListener('click', () =>{
    clearSelection();
    allRedCards.forEach((redCard)=>{
        redCard.classList.add('selected');
    });
});

const faceCardsButton = document.querySelector('#select-face-cards');
const allFaceCards = document.querySelectorAll('.deck [data-face-card]');

faceCardsButton.addEventListener('click', () => {
    clearSelection();
    allFaceCards.forEach((faceCard)=>{
        faceCard.classList.add('selected');
    });

});

const redFaceCardsButton = document.querySelector('#select-red-face-cards');
const allRedFaceCards = document.querySelectorAll('.deck .heart[data-face-card], .deck .diamond[data-face-card]')

redFaceCardsButton.addEventListener('click', () => {
    clearSelection();
    allRedFaceCards.forEach((redFaceCards) => {redFaceCards.classList.add('selected')});
});

const allButSpadesButton = document.querySelector('#select-not-spades');
const allCardsButSpades = document.querySelectorAll('.deck playing-card:not(.spade)');

allButSpadesButton.addEventListener('click', () => {
    clearSelection();
    allCardsButSpades.forEach((otherThanSpades) => {otherThanSpades.classList.add('selected')});
});


const completeDeck  = [...document.querySelectorAll('.deck playing-card')];
const drawHand = document.querySelector('#draw-hand');

drawHand.addEventListener('click', () => {
    let copyDeck = [...completeDeck];
    let shuffledDeck = shuffleInPlace(copyDeck);    
    let fiveFirstCards = shuffledDeck.slice(0, 5);
    let handCards = fiveFirstCards.map(card => card.cloneNode(true));
    console.log(handCards);
    const hand = document.querySelector("#hand");
    hand.replaceChildren(...handCards);
});



//SOLUTION ALTERNATIVE POUR LES BOUTONS -> Créer une fonction puisque les logiques des codes se ressemblent
// function selectCards(selector){
//     const cards = document.querySelectorAll(selector);
//     clearSelection();
//     forEach((selectCards) => {cards.classList.add('selected')});
// }

// document.querySelector('#select-red')
//     .addEventListener('click', () => {selectCards('.deck .heart, .deck .diamond')})