/* Write a function `initial` that takes an array as argument. 
The function should return the array with all but the last entry of the array.*/

function initial(arr) {
    // const newarray = [];
    // for (index = 0; index < arr.length - 1; index++) {
    //     newarray.push(arr[index]);
    // }
    // return newarray;
    return arr.slice(0,-1)
}

console.log(initial([4, 3, 6, 7])) // -> [4, 3, 6]
