/* 
Write a function `longestWord` that takes a single string `word` as argument. 
Then return the word in the string that is the longest.
 */

// function longestWord(word) {
//     let wordSplit = word.split(" ");
//     let longestWord = "";
//     for (let index = 0; index < wordSplit.length; index++) {
//         // console.log(wordSplit[index])
//         if (wordSplit[index].length > longestWord.length) {
//             longestWord = wordSplit[index] // understand this part of the code
//         }
//     }
//     return longestWord;
// }


function longestWord(word) {
    let wordSplit = word.split(" ");
    let longestWordLength = 0;
    let currentlyLongestWord = "";
    for (let index = 0; index < wordSplit.length; index++) {
        // console.log(wordSplit[index])
        if (wordSplit[index].length > longestWordLength) {
            longestWordLength = wordSplit[index].length // understand this part of the code
            currentlyLongestWord = wordSplit[index]
        }
    }
    return currentlyLongestWord;
}
console.log(longestWord("Kate Hello"))
// -> "Hello"