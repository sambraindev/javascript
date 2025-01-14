// make a script that reads a person's name and show a greetings messages

// return an object to readline
const readline = require('readline');

// create a object to handle user input on the terminal
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// use rl object methods to ask a user his name
rl.question("Enter your name: ", (name) => {
	console.log(`Welcome abord ${name}`);
	rl.close();
});
