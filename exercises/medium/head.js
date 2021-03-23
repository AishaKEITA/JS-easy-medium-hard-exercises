
/*   Write a function `head` that takes an array as first argument `arr` 
and a second argument `n` that should be a number. The function should return the `n` first elements in the array.
When you're done, write another function `tail` that returns the last `n` elements in the array.*/

function head(arr, n) {
  return arr.slice(0, n)
}

function tail(arr, n) {
 return arr.slice(-n)
}
console.log(head([4, 10, 3, 6, 5], 3)) // -> [4, 10, 3]
console.log(tail([4, 10, 3, 6, 5], 3))// -> [3, 6, 5]
