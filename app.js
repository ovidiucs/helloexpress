/**
 * Module dependencies.
 */

var express = require('express')
	,http		= require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
// get
// reads data
app.get('/', function(req,res) {
	res.send("Hello, Express!");

	});
// post
// create data

// delete
// delete data

// put
// update data


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
