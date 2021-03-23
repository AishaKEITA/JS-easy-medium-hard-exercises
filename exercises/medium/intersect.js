/* Write a function `intersect` that takes two arrays as arguments. 
The function should return a new array that contains all the values that exists in the arrays given as arguments.*/

function intersect(array1, array2) {
    const filteredArray = array1.filter(value => array2.includes(value));
    return filteredArray;
}
console.log(intersect([1, 2, 3, 4, 5], [2, 7, 8, 5]))
// -> [2, 5]