/* Write a function `palindrom` that can detect if a given string is a palindrom 
(meaning that the word is the same when read backward as forward). */

const palindrom = (string) => {
    return string === string.split("").reverse().join("");
}
console.log(palindrom('Hello'));
// -> false
console.log(palindrom('ABBA'));
// -> true
