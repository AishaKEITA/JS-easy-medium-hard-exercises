/* Write a function `bracketValidation` that takes a string containing brackets [], 
braces {} and parentheses () as argument. 
Verify that all the pairs are matched and nested correctly, return true or false. */

function bracketValidation([...str]) {
    return str.reduce((uptoPrevChar, thisChar) => {
    ((thisChar === '(' && uptoPrevChar++ || thisChar === ')' && uptoPrevChar--)) &&
    ((thisChar === '{' && uptoPrevChar++ || thisChar === '}' && uptoPrevChar--)) &&
    ((thisChar === '[' && uptoPrevChar++ || thisChar === ']' && uptoPrevChar--));

    return uptoPrevChar;
}, 0) === 0 }

console.log(bracketValidation('[({})]'))
// -> true
console.log(bracketValidation('[[])'))
// -> false

/* Basically, the above function just increments the variable uptoPrevChar 
for each opening parenthesis and reduces it for each closing parenthesis 

And ultimately I should just get zero for a bracket string.

*/
