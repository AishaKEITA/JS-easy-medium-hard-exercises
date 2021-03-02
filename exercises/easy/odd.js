/* Write a function `oddList` that takes an array as argument. The function should return a new array containing all the odd elements in the given array.*/

function oddList(arr) {
    const result = arr.filter(x => x%2 !== 0 );
   
        return result
}


console.log(oddList([1, 2, 3, 4])) // -> [1, 3]
console.log(oddList(['Hello', 55, 'World']) )// -> ['Hello', 'World']