/* Write a function `first` that takes an array as argument. The function should return the first value in the array.
When you're done, write another function `last` that returns the last value in the array.
*/

function first( arr) {
   return arr[0]
}
console.log(first([4, 9, 3])) // -> 4

function last(arr) {
    return arr[0] - 1
}
console.log(last([4, 9, 3])) // -> 3