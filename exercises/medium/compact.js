/* Write a function `compact` that takes a single array as argument. 
The function should return the array with all "falsy" values removed. */

function compact(array) {
    return array.filter(Boolean);
  }

console.log(compact([0, 5, "", false, true, "hello"])) // -> [5, true, "hello"]

//since Boolean() is also a function that returns truthy when true and falsy when false!