/* Write a function that takes an arithmetic expression as a string argument. 
Perform the calculation and return the result as a number. */

function calculator(a) {
    return Function('"use strict";return (' + a + ')')()
}
console.log(calculator("2 * 2"));
// -> 2

// the object is being evaluated in the global scope, so it is safe for the browser to assume 