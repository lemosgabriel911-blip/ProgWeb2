const numbers = [1,2,3,4,5,6,7,8,9,0];

console.log(typeof numbers);

function double(n){
    return n * 2;
}

const doubleValues = numbers.map(double); //Ici double n'as pas de () ou de (10) car .map va appeler double avec le numbers donc numbers.map(double)
console.log(numbers);
console.log(doubleValues);

//Ce serait comme écrire ceci sans le .map

const doubleValuesB = [];
for (let i = 0; i < numbers.length; i++){
    const n = numbers[i];
    doubleValuesB.push(double(n));
}

//Ce serait comme écrire ceci sans le .map, mais avec for of

const doubleValuesC = [];
for (const n of numbers){
    doubleValuesC.push(double(n));
}

//On peut encore la rendre plus petite avec map en créant la fonction dans le map de part sa petite taille et sa simplicité

const doubleValuesD = numbers.map(function (n){
    return n * 2;
})

//La version la plus optimisée serait probablement
const doubleValuesE = numbers.map(n => n * 2);