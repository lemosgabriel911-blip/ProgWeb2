const btn = document.querySelector("#select-ace-spade");
btn.addEventListener('click', evt => {
    const aceOfSpade = document.querySelector("#SPADE-ACE");
    aceOfSpade.classList.add('selected');
    console.log('btn');
    console.log(evt);
});

const body = document.querySelector("body");
body.addEventListener('click', evt => {
    console.log('body'); 
    console.log(evt);
});

const aceOfSpade = document.querySelector("#SPADE-ACE");
const aceOfSpadeClone = aceOfSpade.cloneNode(true);
const hand = document.querySelector('hand');
hand.append(aceOfSpadeClone);