/* Write a function `leap` that takes a number
 parameter `year` and returns 
if the year is leap or not.*/
function leap(year) {

    return new Date(year, 1, 29).getDate() === 29;
}

console.log(leap(2012));
// -> true
console.log(leap(2011));
// -> false