// visitor_count.js: Simple node server with variable
// persistent across requests and server restarts.

(function() {

  var 
    fs   = require('fs');
    f    = 'n.txt'
    http = require('http');
    n    = 0;

  var start = function(data) {
    n = parseInt(data); 
    http.createServer(function (req, res) {
      n += 1;
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end( 'You are visitor #'+n+', congratulations!' );
      fs.writeFile(f, n, function(err){ if (err) throw err; });
    }).listen(1337, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:1337/');
  };

  var load = function() {
    console.log('loading...');
    fs.readFile(f, {encoding: 'utf8'}, function(err, data) { 
      if (err) throw err;
      start(data);
    });
  };

  load();

}).call(this);
