/* Write a function `omit` that takes an array of objects as first argument. The second argument `key` should be a string.

Return a copy of the array with all objects, but for each object the key given by the `key` argument should be removed.

*/
 function omit(array, key) {
    let newArray = []
    for (let name of array) {
        let objectCopy = {...name}
        delete objectCopy[key]
        newArray.push(objectCopy)
    }
    console.log(newArray)
    return newArray
}

omit([
  {
    name: 'moe',
    age: 50,
  },
  {
    name: 'simon',
    age: 23
  }
], 'age'); // -> [{name: 'moe'}, {name: 'simon'}]
