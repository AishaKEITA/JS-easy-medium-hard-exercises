/* 
Write a function `toCamelCase` that takes a single string as argument. 
The function should return the argument formatted as a Camel case string.*/

function toCamelCase(str) {

    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());

}
console.log(toCamelCase("Hello World")) // -> "helloWorld"
/*--------------------------------------------------------------------------------------------------------------------------------*/

/* Write a function `toSnakeCase` that takes a single string as argument. 
The function should return the argument formatted as Snake case */
function toSnakeCase(str) { 
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
}

console.log(toSnakeCase("Hello World")) // -> "hello_world"
/*--------------------------------------------------------------------------------------------------------------------------------*/


/* Write two functions, one `fromSnakeToCamel` and another `fromCamelToSnake` 
that takes either a camelCase formatted string or a snakeCase one. The function should return the other type of casing.   
*/

function fromSnakeToCamel(camelCase) {
    return camelCase.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

function fromCamelToSnake(snakeCase) {
    return snakeCase.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
}


console.log(fromSnakeToCamel('hello_world')) // -> "helloWorld"

console.log(fromCamelToSnake('helloWorld')) // -> 'hello_world'
/*--------------------------------------------------------------------------------------------------------------------------------*/
