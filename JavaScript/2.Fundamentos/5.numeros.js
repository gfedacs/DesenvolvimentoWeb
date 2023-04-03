const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isNaN(peso1)) // Se não for um número, retorna True.


const avaliacao1 = 9.139831
const avaliacao2 = 6.83277

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total/(peso1+peso2)

console.log(media.toFixed(3))

console.log(media.toString(2)) // Em binário.

console.log(typeof media)
console.log(typeof Number)

isNaN(5); // false
isNaN("5"); // false
isNaN(5.1); // false
isNaN(null); // false
isNaN("abc"); // true

Number.isInteger(5); // true
Number.isInteger(5.0); // true
Number.isInteger(5.1); // false
Number.isInteger("5"); // false
Number.isInteger(null); // false