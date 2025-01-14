'use strict'
// read two numbers and try to show the sum between them 
const myPrompt = require('prompt-sync')();

let number1 = parseInt(myPrompt('Enter a number1: '));
let number2 = parseInt(myPrompt('Enter a number2: '));
let total = number1 + number2;

console.log(`${number1} + ${number2} = ${total}`);
