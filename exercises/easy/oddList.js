/* Write a function `oddList` that takes an array as argument. 
The function should return a new array containing all the odd elements in the given array.*/

function oddList(array) {
    let newArray = [];
    for(let index = 0; index < array.length; index++) {
        if(array[index] %2 !== 0) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}

console.log(oddList([1, 2, 3, 4, 5]));// -> [1, 3]
console.log(oddList(['Hello', 55, 'World'])); // -> ['Hello', 'World']
console.log(oddList([2, 3, 4, 5]));// -> [1, 3]
