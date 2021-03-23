/* Write a function `longestWord` that takes a single string `word` as argument. 
Then return the word in the string that is the longest. */
function longestWord(string) {
    const longestWord = string.split(' ').reduce(function (longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
}
console.log(longestWord("Hello I am elephant crocodile Kate"));
// -> "Hello"

//(ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), 
//then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.