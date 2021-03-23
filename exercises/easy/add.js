/* Write a program that uses the function `prompt` to get two different numbers from the user. 
You'll then `alert` the sum of these two numbers.

This code needs to be run in a browser. */
function sum() {
    let num1 = +prompt('write a number');
    let num2 = +prompt('write another number');

    alert(`the sum of your numbers are: ${num1 + num2}`)
}

sum();