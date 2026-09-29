//EXERCICE 1 Tableaux de Nombres
const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);

console.log(numbers); // 1 Afficher les valeurs du tableau

console.log(numbers.map(numbers => numbers*2)); // 2 Afficher les valeurs doublées

console.log(numbers.filter(numbers => numbers % 2 !== 0)); // 3 Afficher les nombres impaires

console.log(numbers.slice(1)); // 4 Renvoie le tableau sans le premier élément

console.log(numbers.slice(0, -1)); // 5 Renvoie le tableau sans la dernière valeur

console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // 6 Retourner la somme des nombres

console.log(Math.max(...numbers)); // 7 Retourner la plus grande valeur

console.log(numbers.some(numbers => numbers % 9 === 0)); // 8 Indique si le tableau a au moins 1 multiple de 9

console.log(numbers.every(numbers => numbers > 0)); // Indique si tous les chiffres sont positifs

console.log(numbers.toSorted(numbers => numbers ))