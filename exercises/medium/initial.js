
/* 
Write a function `initial` that takes an array as argument. 
The function should return the array with all but the last entry of the array. */
function initial(arr) {
  arr.pop()
  return arr;
  // return arr.filter((el, i) => i < arr.length - 1)
}

console.log(initial([4, 3, 6, 7])) // -> [4, 3, 6]