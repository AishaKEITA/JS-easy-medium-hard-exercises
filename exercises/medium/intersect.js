/* Write a function `intersect` that takes two arrays as arguments. 
The function should return a new array 
that contains all the values that exists in the arrays given as arguments. */

function intersect(array1, array2) {
    let interSection = [];
    for (let index = 0; index < array1.length; index++) {
        if (array2.includes(array1[index])) {
            interSection.push(array1[index])
        }
    }
    return interSection;
}
console.log(intersect([1, 2, 3, 4, 5], [2, 7, 8, 5]))
// -> [2, 5]

// intersection basically means element that are in set a as well as well as set b 
// intersection will give us elements both arrays share in common 

/* I most say, without the example answer I would probaly just return an array that is concated
    it was a bit tricky to undertand this bit of the code: " The function should return a new array
that contains all the values that exists in the arrays given as arguments "

*/
