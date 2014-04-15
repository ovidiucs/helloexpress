
/**
 * Module dependencies.
 */

var express = require('express');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
