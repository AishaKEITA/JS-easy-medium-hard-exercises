/* Write a function min that takes two arguments and returns their minimum.

When you're done, modify the function to allow an unlimited amount of arguments using an array.

Then you can create a function called `maximum` that does the same as `minimum` but instead returns the max number.*/

function minimum(...a) {
  let merged = [].concat.apply([], a);
    return Math.min.apply(null, merged);
}

console.log(minimum(1, 2))
// -> 1
console.log(minimum([2, 3, 4]))
// -> 2

function maximum(...a) {
  let merged = [].concat.apply([], a);
  return Math.max.apply(null, merged);
}

console.log(maximum(1, 2));
// -> 2
console.log(maximum(1, 2, 5));
// -> 5
console.log(maximum([2, 3, 4]))
// -> 4

// spread is operator is the key to answering this solution