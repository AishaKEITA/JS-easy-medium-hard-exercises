/* Write a function `removeNumbers` that takes an array as argument. 
Return the same array but with all numbers in it removed. */
const removeNumbers = (arr) => arr.filter(x => typeof x !== 'number');

console.log(removeNumbers(['hello', '2', 3, 138, 'banana']));
// -> ['hello', '2', 'banana']