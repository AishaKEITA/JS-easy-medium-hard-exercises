/* Write a function `omit` that takes an array of objects as first argument. 
The second argument `key` should be a string.

Return a copy of the array with all objects, 
but for each object the key given by the `key` argument should be removed.*/

function omit(objs, key) {
  let arrCopy = [...objs];
  arrCopy.forEach(function (obj, i) {
    if (obj[key]) {
      delete obj[key];
    }
  });
  return arrCopy;
}
console.log(omit([
  {
    name: 'moe',
    age: 50,
  },
  {
    name: 'simon',
    age: 23
  }
], 'age')); // -> [{name: 'moe'}, {name: 'simon'}]