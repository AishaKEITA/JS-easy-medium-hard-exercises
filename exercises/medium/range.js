/* Write a function `range` that takes two number arguments, start and end, 
and returns an array with all numbers from start to end.
*/
function range(num1, num2) {
    const result = [];
    for (let index = num1; index <= num2; index++) {
        result.push(index);
    }
    console.log(num1)
    return result;
}
console.log(range(4, 10));
// -> [4, 5, 6, 7, 8, 9]

// a function range takes a starting index to the end and returns a list of integers 
/* i was a bit confuse here as to why i cannot use a for loop 
where i can access just num1 rather i had to use this other  method*/