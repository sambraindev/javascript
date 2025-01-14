'use strict'
// read something from the keyboard and show in the screen it primitive type
// and all pssible informations about it
// -------------------------------------
// Articles I used to learn how to verify if data is alphanumeric 
// https://labex.io/tutorials/javascript-string-is-alphanumeric-28407
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// -------------------------------------


const myPrompt = require('prompt-sync')();
let data = myPrompt('Type something: ');

const isAlphaNumeric = (str) => /^[A-z]+$/g.test(str);
const isDecimal      = (str) => /^[0-9]+$/g.test(str);
const isFloat        = (str) => /^[0-9]+\.[0-9]+/g.test(str);
const isInteger      = (str) => /^[0-9]+$/g.test(str);
const isDigit        = (str) => /^([0-9].+\.[0-9].+|[0-9].+)$/g.test(str);
const isIdentifier   = (str) => /^([a-zA-Z].+|_.*)$/g.test(str);
const isLower        = (str) => /^[a-z].+/g.test(str);
const isNumeric      = (str) => /^[0-9].+$/g.test(str);
const isPrintable    = (str) => /^[^\n\t\s]/g.test(str);
const isSpace        = (str) => /^\s+$/g.test(str);
const isUpperCase    = (str) => /^[A-Z]+$/g.test(str);
const isLowerCase    = (str) => /^[a-z]+$/g.test(str);
const isTitle        = (str) => /^[A-Z][a-z].+/.test(str);


console.log(`is alphanumeric ${isAlphaNumeric(data)}`);
console.log(`is decimal      ${isDecimal(data)}`);
console.log(`is float        ${isFloat(data)}`);
console.log(`is integer      ${isInteger(data)}`);
console.log(`is digit        ${isDigit(data)}`);
console.log(`is identifier   ${isIdentifier(data)}`);
console.log(`is lower        ${isLower(data)}`);
console.log(`is numeric      ${isNumeric(data)}`);
console.log(`is printable    ${isPrintable(data)}`);
console.log(`is space        ${isSpace(data)}`);
console.log(`is upercase     ${isUpperCase(data)}`);
console.log(`is lowercase    ${isLowerCase(data)}`);
console.log(`is title        ${isTitle(data)}`);
