
/* Write a function called `reverseString` that takes a string as input and returns the reversed value of it. */

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString('Hello'))
// -> 'olleH'
