// visitor_count.js: Simple node server with variable
// persistent across requests.
var 
  fs   = require('fs');
  http = require('http');
  n    = 0;

console.log('loading...');
fs.readFile('n.txt', {encoding: 'utf8'}, function(err, data) { 
  if (err) throw err;
  n = parseInt(data); 

  http.createServer(function (req, res) {
    n += 1;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end( 'You are visitor #'+n+', congratulations!' );
    fs.writeFile('n.txt', n, function(err){ if (err) throw err; });
  }).listen(1337, '127.0.0.1');
  console.log('Server running at http://127.0.0.1:1337/');
});
