/*  Write a function `range` that takes two number arguments, 
start and end, and returns an array with all numbers from start to end.*/
function range (start, end) {
    return new Array(end - start).fill().map((el, i) => i + start);
  }
console.log(range(4, 10))
// -> [4, 5, 6, 7, 8, 9]

//The fill() method changes all elements in an array to a static value, 
//from a start index (default 0) to an end index (default array.length). It returns the modified array.