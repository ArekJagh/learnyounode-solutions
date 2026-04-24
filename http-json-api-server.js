var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);
    var now = new Date();
    var result;

    if (parsedUrl.pathname === '/api/parsetime') {
        result = {
            hour: now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds()
        };
    } else if (parsedUrl.pathname === '/api/unixtime') {
        result = { unixtime: now.getTime() };
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
});

server.listen(parseInt(process.argv[2]));