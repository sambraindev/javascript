'use strict'
// read two numbers from the user, show in the terminal the sucessor and antecessor

const input = require('prompt-sync')();
// regular expressions to verify if a number is integer of float
const isInteger = (str) => /^[0-9]+$/g.test(str);
const isFloat   = (str) => /^[0-9]+\.[0-9]+$/g.test(str);

let myNumber;

// asks the user for a number until it types the number correctly
while (true) {
    myNumber = input('Enter a number: ');
    // Remove left and right spaces
    myNumber = myNumber.trim();
    if (isInteger(myNumber)) {
        myNumber = parseInt(myNumber);
        break;
    } else if (isFloat(myNumber)) {
        myNumber = parseFloat(myNumber);
        break;
    } else {
        console.log("Invalid number!");
    }   
}   

console.log(`The sucessor   is: ${myNumber + 1}`);
console.log(`The antecessor is: ${myNumber - 1}`);
