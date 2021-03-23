/* Write a function `zip` that takes an unlimited amount of arguments. Each argument should be an array. 
The function should "zip" the array values into a new array.

When you're done, create another function `unzip` that does the opposite of `zip`;*/

const zip = (a, b, c) => a.map((k, i) => [k, b[i], k,c[i]]);

const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(         x => x.length))
    }).map(x => [])
  );

console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]))
// -> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

console.log(unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]))
// -> [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]

/* Use Math.max(), Function.prototype.apply() to get the longest subarray in the array, Array.prototype.map() to make each element an array.
Use Array.prototype.reduce() and Array.prototype.forEach() to map grouped values to individual arrays. */