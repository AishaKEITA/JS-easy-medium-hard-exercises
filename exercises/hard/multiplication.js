

/* Write a program that creates a multiplication table for numbers up to 12 in HTML.*/
const number = parseInt(prompt('Enter a number: '));

const body = document.getElementsByTagName('body');
const table = document.createElement('table');
body[0].appendChild(table)
for(let index = 1; index <= 12; index++) {
    const tr = document.createElement('tr');
    table.appendChild(tr)
    const td = document.createElement('td');

    const result = index * number;
    console.log(`${number} * ${index} = ${result}`);

    td.innerText = `${number} * ${index} = ${result}`
    tr.appendChild(td)    
}