var http = require('http');

var results = [];
var count = 0;

function get(url, index) {
    http.get(url, function(response) {
        var body = '';
        response.setEncoding('utf8');
        response.on('data', function(data) {
            body += data;
        });
        response.on('end', function() {
            results[index] = body;
            count++;
            if (count === 3) {
                results.forEach(function(result) {
                    console.log(result);
                });
            }
        });
    });
}

get(process.argv[2], 0);
get(process.argv[3], 1);
get(process.argv[4], 2);