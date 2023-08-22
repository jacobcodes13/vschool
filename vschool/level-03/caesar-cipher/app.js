const readline = require('readline-sync');

// Wait for users response
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

// Wait for users response and shift that
const shift = parseInt(readline.question('How many letters would you like to shift? '));

