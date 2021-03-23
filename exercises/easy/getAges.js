/* Write a function `getAges` that takes an array of objects as argument. Return a new array that contains the `age` values set on the objects.
 If there doesn't exists an age, ignore the object.*/
function getAges(arr) {
    let result = arr.filter(el => el.age).map(obj => obj.age)
    return result;
}

let object = { name: "Smith", age: 54 };
let object2 = { name: "Sophie", age: 33 };
let object3 = { name: "Banana" };

let objectArray = [object, object2, object3];
console.log(getAges(objectArray)) // -> [54, 33];