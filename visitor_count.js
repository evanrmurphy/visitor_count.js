// visitor_count.js: Simple node server with variable
// persistent across requests.
var n = 0;
var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function (req, res) {
  n += 1;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end( 'You are visitor #'+n+', congratulations!' );
}).listen(port);
