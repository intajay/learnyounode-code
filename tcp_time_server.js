var net = require('net');

var server = net.createServer(function(socket) {
	var date = new Date();
	var month = date.getMonth() + 1;

	if (month < 9) {
		month = '0' + month;
	}

	socket.write(date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
	socket.end();
	// socket.end('hello');
});

server.listen(process.argv[2], function() {
	console.log('TCP Server listening on Port ' + process.argv[2]);
});