const fs = require('fs');

fs.writeFileSync('myfile.txt', 'Hello programmers,');
fs.appendFileSync('myfile.txt', ' How wre you?');

const data = fs.readFileSync('myfile.txt');
console.log(data.toString());

fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
})

console.log('hello');