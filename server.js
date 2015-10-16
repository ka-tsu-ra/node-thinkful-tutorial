var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

  res.send('Hello World');
});

app.get('/jedi/:firstname/:lastname', function(req, res) {
  var firstname = req.params.firstname;
  var lastname  = req.params.lastname;

  var jediName = lastname.slice(0,3) + firstname.slice(0,2);
  res.json("Hello " + jediName);

});


app.listen(8080);
console.log("App listening on port 8080"); 
