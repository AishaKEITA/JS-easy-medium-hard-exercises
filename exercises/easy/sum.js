/* Write a function `sum` that takes an array of numbers as argument. 
Return the sum of all the numbers in the array.*/
function sum(array) {
    let totalSum = 0;
   
    for(let index = 0; index < array.length; index++) {
        totalSum += array[index];
    }
    return totalSum;
}

console.log(sum([7, 9])); // -> 16
console.log(sum([1, 2, 3])); // -> 6