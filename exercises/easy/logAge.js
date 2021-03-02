/* Write a function `logAge` that takes a single object as argument. 
Check if the `age` key is set on the object, and if it's then log its value to the console.
*/
function logAge(obj) {
    console.log(obj)
   if ('age' in obj) {
       return obj.age
   } else {
       return 'object not found'
   }
}
let object = {name: "Smith", age: 54}
console.log(logAge(object)) // -> 54