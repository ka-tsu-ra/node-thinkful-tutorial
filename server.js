var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

  res.send('Hello World');
});

app.get('/jedi/:firstname/:lastname', function(req, res) {
  res.send(req.params.firstname);
  // console.log(req.params.firstname); this makes the first name in the url query string pop up in the terminal console but not in the Chrome inspect element console.
});


app.listen(8080);
console.log("App listening on port 8080"); 
