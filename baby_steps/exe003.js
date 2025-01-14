// Crie um script que leia o dia, o mes, e o ano de nascimento de uma pessoa
// mostre uma mensagem com a data formatada
// ----------------------------------------
// Article I used to learn how to get user input
// https://www.codecademy.com/article/getting-user-input-in-node-js
// ---------------------------------------
// sudo apt install npm
// npm install prompt-sync
// ----------------------------------------
const prompt = require('prompt-sync')();

const day   = prompt('Day: ');
const month = prompt('Month: ');
const year  = prompt('Year: ');


console.log(`You are borned in ${day}/${month}/${year}.`);
