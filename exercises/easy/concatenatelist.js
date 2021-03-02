/* Write a function `concatenate` that takes two arrays as arguments.
The function should return the two arrays merged into a single array.
*/

// function concatenate(array1, array2) {
//     return [...array1, ...array2];
// }

function concatenate(arr1, arr2) {
    let flattened = arr.reduce((acc, curVal) => {
        return acc.concat(curVal)
        }, []);
}
console.log(concatenate([1, 2, 3], [4, 5, 6]))
// -> [1, 2, 3, 4, 5, 6]
