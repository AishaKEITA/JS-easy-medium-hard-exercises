/* Write a function `unique` that takes an array of strings as argument. 
Return a new array including only unique strings that exists in the given array.*/
function unique(string) {
    const unique = string.filter((v, i, a) => a.indexOf(v) === i);
    return unique
}

console.log(unique(["banana", "apple", "banana", "carrot"]))
// -> ["banana", "apple", "carrot"]
// a is the entire array