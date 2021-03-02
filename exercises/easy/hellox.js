/* Write a function `hellox` that takes a string as argument `x`. Then output the text "Hello X" to the console where X is replaced with the argument `x`. */

function hellox(x) {
   let replaceString = 'Hello X'
   let newstr = replaceString.replace(/X/i, x)
   return newstr
}

console.log(hellox("Viktor"))
// -> "Hello Viktor"