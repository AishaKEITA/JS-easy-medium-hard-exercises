/* 
Write a function `sublist` that takes two seperate arrays as arguments. Then return if the second argument is a subarray of the first.
 */

function sublist(array1, array2) {

    return array1.join().includes(array2.join());
}
console.log(sublist([1, 2, 3, 4, 5], [2, 3]))
// -> true
console.log(sublist([1, 2, 3, 4, 5], [2, 6]))
// -> false