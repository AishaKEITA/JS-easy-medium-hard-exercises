/* 
Write a program that uses the function `prompt` to get two different numbers from the user. 
You'll then `alert` the sum of these two numbers. */

function prompt(num1, num2) {
    return num1 += num2;
}

console.log(prompt(50, 50));
console.log(prompt(30, 90));