/* Write a function `roman` that takes a number as an argument. Then return the roman numeral representation of that number.

*/
function roman(num) {
    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
    roman = '',index;
    for ( index in lookup ) {
      while ( num >= lookup[index] ) {
        roman += index;
        num -= lookup[index];
      }
    }
    return roman;
}

console.log(roman(5))
// -> 'V'
console.log(roman(123))
// -> 'CXXIII