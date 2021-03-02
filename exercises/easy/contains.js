/* 
Write a function `contains` that takes two arguments. The first should be an array, and the second one should be a value of any type.
The function should return whether the second argument exists inside the array.
*/
 function contains(arr, value) {
    const found = arr.find(element => element === value);
    // return found ? true : false
    if (found) {
        return true
    } else {
        return false
    }
 }
console.log(contains([1, 2, 3], 2) )// -> true
console.log(contains(["dog", "cat"], "cat")) // -> true
console.log(contains(["banana", "carrot"], "orange")) // -> false