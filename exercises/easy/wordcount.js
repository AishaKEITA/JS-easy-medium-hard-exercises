/* Write a function `wordCount` that takes a single string as argument. 
Then return the number of words there are in the string.*/
function wordCount(string) {
    return string.split(" ").length;
}
console.log(wordCount('Hello World'));// -> 