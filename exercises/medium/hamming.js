/*  The Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, 
it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed one string into the other.

Write a function `hamming` that takes two seperate strings as arguments. 
Then return the hamming distance of these two strings.
*/

function hamming(stringA, stringB) {
    let count = 0;

    if (stringA.length === stringB.length) {
        for (let i = 0; i <= stringA.length; i++) {
            if (stringA.toLowerCase()[i] !== stringB.toLowerCase()[i]) {
                count++;
            }
        }
        return count;
    }
    return "not equal word lengths";
}

console.log(hamming('AAA', 'AAB'))
// -> 1
console.log(hamming('Hello', 'Hilla'))
// -> 2

// for each
//reduce