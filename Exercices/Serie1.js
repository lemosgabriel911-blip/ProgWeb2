// EXERCICE 1 TROUVER LE MAX
function getMax(a, b, c) {
    return Math.max(a, b, c);
}

const max = getMax(1, 5, 8);

console.log(max);

// EXERCICE 2 NOMBRE ALEATOIRE

function getRandomInt(min, max) {

    min = Math.min(1);
    max = Math.max(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    console.log(getRandomInt(1, 10));
}

//EXERCICE 3 COMPARAISON

function compareA(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
console.log(compareA(4, '4'));
console.log(compareA(4.0, '4'));
console.log(compareA(4, 'quatre'));

function compareB(c, d) {
    if (c === d) {
        return true;
    } else {
        return false;
    }
}
console.log(compareB(8, '8'));
console.log(compareB(8, 'huit'));

//EXERCICE 4 AFFICHAGE SELON CONDITION

// Nombres pairs entre 0 et n 
function Pair(number) {
    const max = 20;
    const min = 0;

    if (number < min || number > max) {
        return "Ce chiffre est hors limite";
    }

    for (let x = 0; x <= number; x = x + 2) {
        console.log(x);
    }
    return "Terminé";
}

console.log(Pair(18));

// Nombres pairs et mulitples de 7 entre 0 et n 

function PairAnd7(number) {
    const max = 20;
    const min = 0;

    if (number < min || number > max) {
        return "Ce chiffre est hors limite";
    }

    for (let x = 0; x <= number; x++) {
        if (x % 2 === 0 && x % 7 === 0) {
            console.log(x);
        }
    }
    return "Terminé";
}



console.log(PairAnd7(19));
// Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.

function PairAnd3And7(number) {
    const max = 20;
    const min = 0;

    if (number < min || number > max) {
        return "Ce chiffre est hors limite";
    }

    for (let x = 0; x <= number; x++) {
        if ((x % 2 === 0 && x % 3 === 0) || x % 7 === 0) {
            console.log(x);
        }
    }
    return "Terminé";
}
console.log(PairAnd3And7(10));

// Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.

function PairAnd3No7(number) {
    const max = 20;
    const min = 0;

    if (number < min || number > max) {
        return "Ce chiffre est hors limite"
    }

    for (let x = 0; x <= number; x++) {
        if ((x % 2 === 0 && x % 3 === 0) && x % 7 !== 0) {
            console.log(x);
        }
    }
    return "Terminé"
}
console.log(PairAnd3No7(20));

//EXERCICE 5 Pile ou face

//Le nombre de piles obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.
function nPiles(number) {

    let attempt = 0;

    for (let x = 0; x < number; x++) {
        if (Math.random() >= 0.5) {
            attempt++;
        }
    }
    return attempt
}

console.log(nPiles(10));

//Le nombre de piles et de faces obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.

function nPilesOuFace(number) {

    let pile = 0;
    let face = 0;

    for (let x = 0; x < number; x++) {
        if (Math.random() >= 0.5) {
            pile++;
        } else {
            face++;
        }
    }
    return { pile: pile, face: face }; //Les accolades créent un objet ou l'on peut stocker des valeurs que l'on nomme "nom : valeur"
}

const result = nPilesOuFace(20);
console.log(result);
console.log(result.pile); //On peut ainsi les réutiliser séparément en les assignant à une constante résultat 
console.log(result.face);

//EXERCICE 5 Solution Prof

// function rollNTimes(min, max, times) {
//     const rolls = [];
//     for (let i = 0; i < times; i++) {
//         rolls.push(getRandomInt(min, max));
//     }
//     return rolls;
// }

// function count(n, values) {
//     let count = 0;
//     for (const v of values) { //const gère l'itération et values va parcourir les valeurs d'un tableau et les stocker dans v
//         if (v === n) {
//             count++;
//         }
//     }
// }

// const TAIL = 0;
// const FACE = 1;
// function getNbTailsAndFaces(times) {
//     const rolls = rollNTimes(TAIL, FACE, times);
//     const nbTails = count(TAIL, rolls);
//     const nbFaces = rolls.length - nbTails;
//     return {
//         tails: nbTails,
//         face: nbFaces,
//     }
// }

// console.log(getNbTailsAndFaces(10000))


//EXERCICE 6 Tester pour des nombres premiers

function nPremiers(number) {

    if (number < 2) {
        return "Pas un nombre premier"
    }

    for (let compteur = 2; Math.sqrt(number) >= compteur; compteur++) {

        if (number % compteur == 0) {
            return "Pas un nombre premier";
        }
    }
    return "Nombre premier";
}

console.log(nPremiers(87178291199))

//EXERCICE 7 CL

function cl(...args){ // ... rest operator => mettre dans un tableau tous les paramètres
    for (const v of args){
        console.log(v);
    }
    /*
    function cl(...args){ // ... rest operator => mettre dans un tableau tous les paramètres
    for (let i=0; i<args.length; i++){
        console.log(v);
    }
    */
}
cl(1);
cl(1, 2 ,"a", [3.1, 4, 159]);

