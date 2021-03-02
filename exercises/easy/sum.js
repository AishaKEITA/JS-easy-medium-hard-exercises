/* Write a function `sum` that takes an array of numbers as argument. Return the sum of all the numbers in the array.*/
function sum(arr) {
    const sum = arr.reduce((a, b) => a + b, 0)
    return sum
}
console.log(sum([7, 9])); // -> 16
console.log(sum([1, 2, 3])); // -> 6