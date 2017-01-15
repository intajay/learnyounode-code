var https = require('https');
var fs = require('fs');
var path = require('path');

const dir = 'download';

fs.mkdir(dir, function(excep) {
	https.get('https://github.com', function(response) {
		response.setEncoding('utf8');
		var writable = fs.createWriteStream(path.join(__dirname, dir) + '/download.html');

		response.on('data', function(chunk) {
			console.log(chunk);
			writable.write(chunk);
		});

		// response.pipe(writable);
	});
})