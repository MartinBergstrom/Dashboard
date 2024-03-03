const bcrypt = require('bcrypt');
const readline = require('readline-sync');

const saltRounds = 10;

const password = readline.question('Enter the password to hash: ', {
    hideEchoBack: true,
});

console.log(`Original Password: ${password}`);

bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log('hashed pw: ' + hash)
});