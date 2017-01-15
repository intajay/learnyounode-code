var https = require('https');
var fs = require('fs');

// first call
https.get('https://github.com', function(response) {
	response.setEncoding('utf8');
	var writable = fs.createWriteStream(__dirname + '/github.html');

	response.on('data', function(chunk) {
		console.log(chunk);
		writable.write(chunk);
	});

	// second call
	https.get('https://nodejs.org/en/', function(response) {
		response.setEncoding('utf8');
		var writable = fs.createWriteStream(__dirname + '/nodejs.html');

		response.on('data', function(chunk) {
			console.log(chunk);
			writable.write(chunk);
		});

		// third call
		https.get('https://www.npmjs.com', function(response) {
			response.setEncoding('utf8');
			var writable = fs.createWriteStream(__dirname + '/npm.html');

			response.on('data', function(chunk) {
				console.log(chunk);
				writable.write(chunk);
			});
		});
	});
});