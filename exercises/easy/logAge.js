/* Write a function `logAge` that takes a single object as argument. 
Check if the `age` key is set on the object, and if it's then log its value to the console.*/

function logAge(object) {
    if('age' in object) {
        return object.age;
    } else {
        return 'no age key';
    }
}

let object = {name: "Smith", age: 54}
console.log(logAge(object));// -> 54
let object1 = {name: 'Sarah'}
console.log(logAge(object1));