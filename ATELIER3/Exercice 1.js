const numbers = [1, 7, 10, 9, 8, 2];
let pairnbr = numbers.filter(n => n % 2 === 0);
pairnbr = pairnbr.sort((x, y) => x - y);
console.log(pairnbr); //[ 2, 8, 10 ]
