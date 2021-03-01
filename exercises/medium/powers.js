/* Write a function `powers` that takes an array of numbers as first argument, 
and a single number as second argument. Return a new array with all numbers in the given array mapped 
to the nth power given by the second argument.*/

function powers(arrNumbers, singleArr) {
  let newArray = [];
  
  for (let index = 0; index < arrNumbers.length; index++) {
    let result = Math.pow(arrNumbers[index], singleArr)
    newArray.push(result);
  }
  return newArray;
}

console.log(powers([1, 2, 3], 2));
// -> [1, 4, 9]
console.log(powers([1, 2, 3], 3));
// -> [1, 8, 27]
