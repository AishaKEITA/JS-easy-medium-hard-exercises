/* 
Write a function `jsonModify` that takes three arguments, a string `json` that may be a JSON valid string, 
a string `key` and a parameter that can be anything called `value`.
Try to parse the JSON string, and then find the `key` in the object and replace its value with the given `value`. 
Then return the object formatted as a JSON string */

function jsonModify(str, key, value) {
   try {
      let parseJson = JSON.parse(str);
      if (!(key in parseJson)) {
         throw "not a key in object"
      }
      parseJson[key] = value
      return JSON.stringify(parseJson)
   } catch (error) {
      console.log(error)
   }
}
console.log(jsonModify('{"foo": "bar"}', 'foo', 'baz'));
// -> '{"foo": "baz"}'