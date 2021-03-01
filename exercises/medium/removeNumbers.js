/* Write a function `removeNumbers` that takes an array as argument. Return the same array but with all numbers in it removed. */

function removeNumbers(array) {
    const newArray = [];
    for (let index = 0; index < array.length; index++ ) {
        // console.log(array[index])
        if (typeof array[index] !== 'number') {
            newArray.push(array[index]);
        }
    }
    return newArray

}

console.log(removeNumbers(['hello', '2', 3, 138, 'banana']));
// -> ['hello', '2', 'banana']