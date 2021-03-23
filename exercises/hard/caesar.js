/* A caesar cipher is a very simple encryption technique. It takes any letter and changes the value of it 
to another letter a fixed number of positions. 
For example (D becomes A).

Write a program that takes two arguments. The first is whether the input should be encoded or decrypted. 
The second argument is the string that should be encoded or decrypted.

Then return the string with each letter replaced with a left shift of 3 (e.g D to A).

You could add a third argument that specifices the number of shifts that should be done.
*/
function cipher(encode, input) {
  let amount;
  if (encode) {
    amount = -3
  } else {
    amount = 3
  }

  // Wrap the amount
  if (amount < 0) {
    amount += 26;
  }
  
  return input.split("")
    .map(function (char) {
      let code = char.charCodeAt();
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    })
    .join("");
}

encryptedString = cipher(true, 'D')
console.log(encryptedString)

decryptedString = cipher(false, encryptedString)
console.log(decryptedString)


// console.log(cipher(true, 'PRASHANTYADAV'));

// left shift of three that is why -3