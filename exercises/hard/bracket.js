/*Write a function `bracketValidation` that takes a string containing brackets [], braces {} and parentheses () as argument. 
Verify that all the pairs are matched and nested correctly, return true or false.
 */

bracketValidation = function (str) {
   let stack = [];
   let match = {
      '(': ')',
      '[': ']',
      '{': '}'
   }
   // console.log(map)
   for (let index = 0; index < str.length; index++) {

      // If character is an opening brace add it to a stack
      if (str[index] === '(' || str[index] === '{' || str[index] === '[') {
         stack.push(str[index]);
         console.log(stack)
      }
      //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
      else {
         let last = stack.pop();
         console.log(last)

         //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the match, then return false
         if (str[index] !== match[last]) {
            return false
         };
      }
   }
   // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
   if (stack.length !== 0) {
      return false
   };

   return true;
}


console.log(bracketValidation('[({})]'))
// -> true
console.log(bracketValidation('[[])'))
// -> false
