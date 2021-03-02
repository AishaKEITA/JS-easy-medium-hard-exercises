/* Write a function `isBetween` that takes three numbers as arguments. `x`, `from` and `to`. Return if `x` is between `from` and `to`*/
function isBetween(x, from, to) {
 return x > from && x < to
}
console.log(isBetween(40, 50, 20))