var http = require('http');
var fs = require('fs');

// first call
http.get('http://todocors.herokuapp.com', function(response) {
	response.setEncoding('utf8');
	var writable = fs.createWriteStream(__dirname + '/todocors.html');

	response.on('data', function(chunk) {
		console.log(chunk);
		writable.write(chunk);
	});

	// second call
	http.get('http://esp8266.com', function(response) {
		response.setEncoding('utf8');
		var writable = fs.createWriteStream(__dirname + '/esp8266.html');

		response.on('data', function(chunk) {
			console.log(chunk);
			writable.write(chunk);
		});

		// third call
		http.get('http://to2do.herokuapp.com', function(response) {
			response.setEncoding('utf8');
			var writable = fs.createWriteStream(__dirname + '/to2do.html');

			response.on('data', function(chunk) {
				console.log(chunk);
				writable.write(chunk);
			});
		});
	});
});