/* In reverse Polish notation, the operators follow their operands; 
for instance, to add 3 and 4, one would write 3 4 + rather than 3 + 4. 
If there are multiple operations, operators are given immediately after their second operands; 
so the expression written 3 − 4 + 5 in conventional notation would be written 3 4 − 5 + in reverse Polish notation: 
4 is first subtracted from 3, then 5 is added to it. 
An advantage of reverse Polish notation is that it removes the need for parentheses that are required by infix notation. 
While 3 − 4 × 5 can also be written 3 − (4 × 5), that means something quite different from (3 − 4) × 5. 
In reverse Polish notation, the former could be written 3 4 5 × −, which unambiguously means 3 (4 5 ×) − 
which reduces to 3 20 −; the latter could be written 3 4 − 5 × (or 5 3 4 − ×, if keeping similar formatting), 
which unambiguously means (3 4 −) 5 ×.

Write a function `rpn` that takes a string as input that is in RPN format and then returns the calculated answer. 
You should support all base operators (+, -, \*, /) */

function rpn(expression) {
    let expr = expression.split(" ");
    //console.log(expr)
    let stack = [];
    if (expr === '') {
        return 0;
    }
    expr.forEach(element => {
        if (!isNaN(element) && isFinite(element)) {
            stack.push(element);
        } else {
            let a = stack.pop();
            let b = stack.pop();
            if (element === "+") {
                stack.push(parseInt(a) + parseInt(b));
            } else if (element === "-") {
                stack.push(parseInt(b) - parseInt(a));
            } else if (element === "*") {
                stack.push(parseInt(a) * parseInt(b));
            } else if (element === "/") {
                stack.push(parseInt(b) / parseInt(a));
            }
        }
    });
    if (stack.length > 1) {
        return "ERROR";
    } else {
        return stack[0];
    }

}
console.log(rpn('3 4 +'))
// -> 7
console.log(rpn('15 7 1 1 + - / 3 * 2 1 1 + + -'))
// -> 5*/