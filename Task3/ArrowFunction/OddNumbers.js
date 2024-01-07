const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let OddNumbers = [];

const oddNumbers = numbers.filter(num => num % 2 !== 0);

oddNumbers.forEach(num => OddNumbers.push(num));
console.log(OddNumbers)