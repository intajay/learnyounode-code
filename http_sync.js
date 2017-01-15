var https = require('https');
var fs = require('fs');

https.get('https://github.com', function(response) {
	response.setEncoding('utf8');
	var writable = fs.createWriteStream(__dirname + '/github.html');

	response.on('data', function(chunk) {
		console.log(chunk);
		writable.write(chunk);
	});
});

https.get('https://nodejs.org/en/', function(response) {
	response.setEncoding('utf8');
	var writable = fs.createWriteStream(__dirname + '/nodejs.html');

	response.on('data', function(chunk) {
		console.log(chunk);
		writable.write(chunk);
	});
});

https.get('https://www.npmjs.com', function(response) {
	response.setEncoding('utf8');
	var writable = fs.createWriteStream(__dirname + '/npm.html');

	response.on('data', function(chunk) {
		console.log(chunk);
		writable.write(chunk);
	});
});