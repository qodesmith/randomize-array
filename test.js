const randomize = require('./index')
const numbers = []

for (let i = 0; i < 100; i++) numbers.push(i)

const randomized = randomize(numbers)

let test1 = true
let test2 = true

/*
  Test 1
  ------
    * The original array should not have been mutated.
    * Check that each number is from 0 - 99.
    * Check that it's length = 100.
*/
if (numbers.length !== 100) test1 = false
if (!numbers.every((num, i) => num === i)) test1 = false


/*
  Test 2
  ------
    * The randomized array should have the same length as the original array.
    * The randomized array should not be the same array as the original array.
    * The randomized array should have it's contents randomized.
*/
if (randomized.length !== 100) test2 = false
if (randomized === numbers) test2 = false
if (!randomized.some((num, i) => num !== numbers[i])) test2 = false

console.log('Test 1:', test1 ? 'PASSED' : 'FAILED')
console.log('Test 2:', test2 ? 'PASSED' : 'FAILED')
