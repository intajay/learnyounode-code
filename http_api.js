var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var request = url.parse(req.url, true);
	var date = new Date(request.query.iso);

	if (req.method === 'POST' && request.pathname === '/api/parsetime') {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		
		res.end(JSON.stringify({
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		}));
	} else if (req.method === 'POST' && request.pathname === '/api/unixtime') {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			'unixtime': date.getTime()
		}));
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		res.end('404 : Not Found');
	}
});

server.listen(process.argv[2], function() {
	console.log('HTTP Server listening on Port ' + process.argv[2]);
});