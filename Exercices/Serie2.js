//EXERCICE 1 Tableaux de Nombres
const numbers = Object.freeze([3, 14, 15, 92, 65, 35, 89, 79, 32, 38]);

console.log(numbers); // 1 Afficher les valeurs du tableau

console.log(numbers.map(numbers => numbers * 2)); // 2 Afficher les valeurs doublées

console.log(numbers.filter(numbers => numbers % 2 !== 0)); // 3 Afficher les nombres impaires

console.log(numbers.slice(1)); // 4 Renvoie le tableau sans le premier élément

console.log(numbers.slice(0, -1)); // 5 Renvoie le tableau sans la dernière valeur

console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // 6 Retourner la somme des nombres

console.log(Math.max(...numbers)); // 7 Retourner la plus grande valeur

console.log(numbers.some(numbers => numbers % 9 === 0)); // 8 Indique si le tableau a au moins 1 multiple de 9

console.log(numbers.every(numbers => numbers > 0)); // 9 Indique si tous les chiffres sont positifs

const even = numbers.filter(numbers => numbers % 2 === 0); // 10 Afficher le tableau de la façon suivante : paire, impaires. Sans changer l'ordre relatif
const odd = numbers.filter(numbers => numbers % 2 !== 0);
const result1 = [...even, ...odd];
console.log(result1);

//EXERCICE 2 Tableau de chaîne de caractères

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

const lowerCase = strings.map(strings => strings.toLowerCase()); // 1 Retourner les mots qui ont un r
const result2 = lowerCase.filter(lowerCase => lowerCase.includes("r"));
console.log(result2);

console.log(strings.every(strings => strings.length === 5)); // 2 True si tous les mots font 5 caractères

const newStrings = ["Lorem", ...strings]; // 3 Ajouter Lorem au début (exemple en gardant le tableau de référence avec object.freeze)
console.log(newStrings);

const newStrings2 = [...strings, "Ipsum"]; // 4 Ajouter Ipsum à la fin (exemple en gardant le tableau de référence avec object.freeze)
console.log(newStrings2);

const middleIndex = Math.floor(strings.length / 2); // 5 Retourner le tableau avec le mot "Radar" qui remplace le mot du milieu
const result3 = strings.map((word, index) => {
    if (index === middleIndex) {
        return ("Radar");
    } else {
        return (word);
    }
});
console.log(result3);

console.log(strings.reduce((accumulator, currentValue) => accumulator + currentValue)); // 6 Concaténation de tous les mots
// console.log(strings.join('')); Solution Exercice 6 avec .join()

console.log(strings.toSorted((mot1, mot2) => { // 7 Retourner le premier mot selon l'ordre alphabétique sans modifier le tableau initial
    return mot1.localeCompare(mot2);
})[0]);

const concatene = strings.reduce((accumulator, currentValue) => accumulator + currentValue); // 8 Concaténer, convertir en minuscules, puis vérifier si c'est un palindrome
const minuscule = concatene.toLowerCase();
const inverse = minuscule.split("").reverse().join("");
console.log(minuscule === inverse);

//EXERCICE 3 Tableau d'objets

const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;

const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE];
const SUITS = ['hearts', 'spades', 'clubs', 'diamonds'];

console.log(deck = RANKS.reduce( // 1 Proposition de structure pour visualiser les carte 
    (accumulator, rank) =>
        accumulator.concat(
            SUITS.map(suit => ({ rank, suit }))
        ),
    []
));

function buildBaseDeck() {
    const deck = RANKS.reduce( // 2 Construit un paquet et le renvoie (résultat identique à 1)
        (accumulator, rank) =>
            accumulator.concat(
                SUITS.map(suit => ({ rank, suit }))
            ),
        []
    );
    return deck;
}

const newDeck = buildBaseDeck();
console.log(newDeck);

function shuffleInPlace(newDeck) { // 3 Mélange le paquet en fonction de l'algorithme Fisher-Yates. 
    for (let i = newDeck.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    return newDeck;
}

console.log(shuffleInPlace(newDeck));
