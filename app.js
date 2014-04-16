/**
 * Module dependencies.
 */

var express = require('express')
	,http		= require('http');

var app = express();
// parse body of req
app.use(express.bodyParser());
app.set('port', process.env.PORT || 3000);
// get
// reads data
app.get('/', function(req,res) {
	res.send("Hello, Express!");

	});

app.get('/hi', function(req,res) {
// send more than text
	var message = [
			'<ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>',
			'<li>Aliquam tincidunt mauris eu risus.</li>',
			'<li>Vestibulum auctor dapibusneque.</li></ul>'].join("\n");
	res.send(message);

	});

app.get('/users/:userId', function(req,res) {
	res.send("<h2>Hello, User #" + req.params.userId + "!");
	
	});

// post
// create data
app.post("/users", function(req,res) {
	res.send("Creating a new user with the name " + req.body.username + ".");
});

// delete
// delete data

// put
// update data


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
