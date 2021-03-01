/* Write a function `getAges` that takes an array of objects as argument. 
Return a new array that contains the `age` values set on the objects. 
If there doesn't exists an age, ignore the object.*/
function getAges(objects) {
    let newArray = [];
    for(let person in objects) {
        console.log(objects[person]);
        if(objects[person].age) {
            newArray.push(objects[person].age);
        }
    }
    //console.log(objects);
    return newArray;
}

let object = {name: "Smith", age: 54};
let object2 = {name: "Sophie", age: 33};
let object3 = {name: "Banana"};
let objectArray = [object, object2, object3];
console.log(getAges(objectArray));// -> [54, 33];