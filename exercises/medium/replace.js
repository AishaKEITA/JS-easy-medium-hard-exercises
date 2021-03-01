/* Write a function `replace` that takes three arguments. A string `str`, a second string `keyword` and a third string `replaceWith`.

Replace all occurences of the value `keyword` inside `str` with the value given by `replaceWith`.

This is basically your own implementation of String.replace().

Do not use String.replace() to solve this problem. */

function replace(str, keyword, replaceWith) {

    return str.split(keyword).join(replaceWith);
    
}


console.log(replace("JavaScript", "a", "c"))
