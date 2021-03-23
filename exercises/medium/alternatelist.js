/* Write a function `alternate` that combines two lists by alternatingly taking elements.
*/

function alternate(a,b) {
  return a.map((el, i) => [el, b[i]]).flat()
}

console.log(alternate(['a', 'b', 'c'], [1, 2, 3]))
// -> ['a', 1, 'b', 2, 'c', 3]