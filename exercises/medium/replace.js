/*  Write a function `replace` that takes three arguments. A string `str`, a second string 
`keyword` and a third string `replaceWith`.

Replace all occurences of the value `keyword` inside `str` with the value given by `replaceWith`. */

function replace(str, keyword, replaceWith) {
    return str.split(keyword).join(replaceWith);
}
console.log(replace("JavaScript", "a", "c"))
// -> JcvcScript