/* Write a function min that takes two arguments and returns their minimum.

When you're done, modify the function to allow an unlimited amount of arguments using an array.

Then you can create a function called `maximum` that does the same as `minimum` but instead returns the max number. */
/*--------------------------------------------------------------------------------------------------------------------------------*/

//... ignores that is an array and send every element 
//inside the array as a seperate element

// function min(...args) { 
//     console.log("length: " + args.length)
//     console.log(args)
//     if (args.length === 1) {
//         return Math.min(...args[0])
//     } else {
//         return Math.min(...args)
//     } 
// }

function min(...a) {
    let merged = [].concat.apply([], a);
    return Math.min.apply(null, merged);
}

console.log(min(1, 2));
// -> 1
console.log(min(1, 2, 5));
// -> 1
console.log(min([2, 3, 4]))
// -> 2
/*--------------------------------------------------------------------------------------------------------------------------------*/

// function max(...args) {
//     console.log("length: " + args.length)
//     console.log(args)
//     if (args.length === 1) {
//         return Math.max(...args[0])
//     } else {
//         return Math.max(...args)
//     }
// }
function max(...a) {
    let merged = [].concat.apply([], a);
    return Math.max.apply(null, merged);
}

console.log(max(1, 2));
// -> 2
console.log(max(1, 2, 5));
// -> 5
console.log(max([2, 3, 4]))
// -> 4
