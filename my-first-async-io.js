// Exercise 4: My First Async I/O
// Same as before but using asynchronous file reading with a callback
var fs = require('fs');

// readFile is async - it takes a callback function that runs when done
fs.readFile(process.argv[2], function(err, contents) {
    // Split on newlines and count them
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
});