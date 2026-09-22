// Exercice 1 TROUVER LE MAX
function getMax(a, b, c) {
    return Math.max(a, b, c);
}

const max = getMax(1, 5, 8);

console.log(max);

// Exercice 2 NOMBRE ALEATOIRE

function getRandomInt(min, max) {

    min = Math.min(1);
    max = Math.max(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    console.log(getRandomInt(1, 10));
}

//Exercice 3 COMPARAISON

function compareA(a, b) {
    if (a == b) {
        return true
    } else {
        return false
    }
}
console.log(compareA(4, '4'));
console.log(compareA(4.0, '4'));
console.log(compareA(4, 'quatre'));

function compareB(c, d) {
    if (c === d) {
        return true
    } else {
        return false
    }
}
console.log(compareB(8, '8'));
console.log(compareB(8, 'huit'));

//Exercice 4 AFFICHAGE SELON CONDITION

// Nombres pairs entre 0 et n 
function Pair(number) {
    const max = 20;
    const min = 0;
    for (let x = 0; x <= number; x = x + 2) {
        console.log(x);
    }
}

console.log(Pair(18));

// Nombres pairs et mulitples de 7 entre 0 et n 

// Nombres pairs entre 0 et n 
function Pair(number) {
    const max = 20;
    const min = 0;
    for (let x = 0; x <= number; x = x + 2 || x % 7 == 0) {
        console.log(x);
        if(number > max || number < min){
            return "Ce chiffre est hors limite"
        }
    }
}

console.log(Pair(24));
// Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.
// Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.
