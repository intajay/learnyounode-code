var http = require('http');

var options = {
  hostname: 'localhost',
  port: 3000,
  method: 'POST',
  headers: {
      'Content-Type': 'text/plain',
  }
};

var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});

req.on('error', function(err) {
  console.log(err);
});

req.write('heLlo');
req.end();