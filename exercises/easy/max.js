/* Write a function `max` that takes two numbers as argument. Return the largest number of the two.
When you're done, write another function `min` that works the same, but instead returns the smallest number.*/ 

function max(num1, num2) {
 return Math.max(num1, num2)
}
console.log(max(1, 2)) // -> 2
console.log(max(25, 4)) // -> 25

function min(num1, num2) {
    return Math.min(num1, num2)
}
console.log(min(1, 2)) // -> 1
console.log(min(25, 4)) // -> 4