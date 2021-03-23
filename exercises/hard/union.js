/* Write a function `union` that takes an unlimited amount of arguments. All the arguments should be arrays.
Return a new array that includes the union of the arrays.*/

function union(a, b, c) {
    const union = [...new Set([...a, ...b, ...c])];
    return union;
}

console.log(union([1, 2, 3], [101, 2, 1, 10], [2, 1]));
// -> [1, 2, 3, 101, 10]