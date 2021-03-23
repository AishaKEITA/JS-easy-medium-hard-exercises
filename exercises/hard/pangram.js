/* A pangram is a text that includes every letter in the alphabet (only english letters).

Write a function `pangram` that takes a string `value` as argument, 
returning true or false depending on if the string is a pangram or not. */

function pangram(str){
    const regex = /([a-z])(?!.*\1)/gi;
    return (str.match(regex) || []).length === 26;
}

console.log(pangram('abc'))
// -> false
console.log(pangram('The quick brown fox jumps over the lazy dog'))
// -> true
console.log(pangram('abcdefghijklmnopqrstuvwxyz'))
// -> true