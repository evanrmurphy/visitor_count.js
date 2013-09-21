// visitor_count.js: Simple node server with variable
// persistent across requests.
var n = 0;
var http = require('http');
http.createServer(function (req, res) {
  n += 1;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end( 'You are visitor #'+n+', congratulations!' );
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
