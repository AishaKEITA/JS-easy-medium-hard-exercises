/* Write a function `wordCount` that takes a single string as argument. Then return the number of words there are in the string.
 */
function wordCount(str) {
    return str.split(" ").length
}
console.log(wordCount('Hello World'))
// -> 2