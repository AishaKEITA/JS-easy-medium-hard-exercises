/* A pangram is a text that includes every letter in the alphabet (only english letters).

Write a function `pangram` that takes a string `value` as argument, returning true or false depending on if the string is a pangram or not.
*/

function pangram(string) {
    
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string) 
}

console.log(pangram('abc'))
// -> false
console.log(pangram('The quick brown fox jumps over the lazy dog'))
// -> true
console.log(pangram('abcdefghijklmnopqrstuvwxyz'))
// -> true
