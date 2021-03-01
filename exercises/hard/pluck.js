/* Write a function `pluck` that takes an array of objects as argument and a string as second argument.
Select and return the values from the objects in the array based on the second argument given.
*/

function pluck(arrayObj, string) {
    let newArray = [];
    for ( let obj of arrayObj) {
        // console.log(obj[string])
        // console.log(obj)
        if (obj[string]) {
            newArray.push(obj[string])
        }
    
    }
    return newArray;
}

let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(pluck(stooges, 'name'));
// -> ["moe", "larry", "curly"]
console.log(pluck(stooges, 'age'));
console.log(pluck(stooges, 'job'));