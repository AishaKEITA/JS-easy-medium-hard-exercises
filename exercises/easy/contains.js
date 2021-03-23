/* 
Write a function `contains` that takes two arguments. The first should be an array, and the second one should be a value of any type.
The function should return whether the second argument exists inside the array.
*/
function contains(arr, value) {
    const result = arr.filter(el => el === value)
    return result.length >= 1;
}
console.log(contains([1, 2, 3], 2))// -> true
console.log(contains(["dog", "cat"], "cat")) // -> true
console.log(contains(["banana", "carrot"], "orange")) // -> false

//find method would work too try 