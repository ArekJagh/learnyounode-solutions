
// Read a file synchronously and count the number of newlines
var fs = require('fs');

// Read the file contents synchronously
var contents = fs.readFileSync(process.argv[2]);

// Count newlines by splitting on '\n' and subtracting 1
var lines = contents.toString().split('\n').length - 1;

console.log(lines);