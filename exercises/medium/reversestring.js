/* Write a function called `reverseString` that takes a string as input and returns the reversed value of it.
 */

 function reverseString(str) {
    let stringArray = str.split("");
    let stringReverse = stringArray.reverse();
    let stringJoin = stringReverse.join();
    // console.log(stringJoin)
    return stringJoin;
    
 }
console.log(reverseString('Hello'));
// -> 'olleH'