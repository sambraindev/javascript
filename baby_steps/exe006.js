'use strict'
// Read a number and show its double, triple and squareRoot

const input = require('prompt-sync')();

function isInt(str) {
    str.trim();
    return /^[0-9]+$/.test(str);
}   


let myNumber;
while (true) {
    myNumber = input("Enter an integer number: ");
    if (isInt(myNumber)) {
        myNumber = parseInt(myNumber);
        break;
    } else {
        console.log('INVALID NUMBER!');
        continue;
    }   
}   

console.log(`The double of ${myNumber} is ${myNumber * 2}`);
console.log(`The triple of ${myNumber} is ${myNumber * 3}`);
console.log(`The sqroot of ${myNumber} is ${myNumber ** (1/2)}`);
