/* Write a function `sublist` that takes two seperate arrays as arguments. 
Then return if the second argument is a subarray of the first.
*/

function sublist(master, sub) {
    return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
}
console.log(sublist([1,2,3,4,5], [2,3]))
// -> true
console.log(sublist([1,2,3,4,5], [2,6]))
// -> false


// The every() method tests whether all elements in the array pass the test implemented by the provided function. 
//It returns a Boolean value.

/* This solution features a closure over the index for starting the position for searching the element if the array. 
If the element of the sub array is found, 
the search for the next element starts with an incremented index. */