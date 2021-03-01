/*  
Write a function `unique` that takes an array of strings as argument. Return a new array including only unique strings that exists in the given array.
*/

function unique(string) {
    let newArray = [];
    for (let str of string) {
        // console.log(str)
        if(newArray.indexOf(str) === -1) {
            newArray.push(str)
        }
    }
    return newArray;

}


console.log(unique(["banana", "apple", "banana", "carrot"]))
// -> ["banana", "apple", "carrot"]
