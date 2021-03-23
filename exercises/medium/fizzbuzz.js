/*  Write a function `fizzbuzz` that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead.

When you have that working, modify your function to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those
*/

console.log(
    Array.apply(null, { length: 100 }).map(function (val, index) {
        index++;
        if (index % 15 === 0) {
            return "FizzBuzz";
        }
        if (index % 3 === 0) {
            return "Fizz";
        }
        if (index % 5 === 0) {
            return "Buzz";
        }
        return index;
    }).join('\n')
);

//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
//f the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed. This argument is required.

//escape sequence (\n) which, creates a new line for the forthcoming text.