/**
 * Module dependencies.
 */

var express = require("express")
	,http		= require("http");

var app = express();

   app.set("port", process.env.PORT || 3000);
   app.set("views", __dirname + "/views");
   app.set("view engine", "jade");
   // Middleware - order is important
   app.use(express.bodyParser());
   app.use(express.methodOverride());
   app.use(app.router);
   app.use(express.static(__dirname + "/public"));


app.get("/", function (req,res) {
   res.render("home",{ title:"Having Fun with Express"});
});

var newlist = ['apple','orange','beer','banana','strawberry','bread'];

app.param('from', function (req, res, next, from) {
   req.from = parseInt(from, 10)
   next();
});

app.param('to', function (req, res, next, to) {
   req.to = parseInt(to, 10)
   next();
});

app.get("/users/:from-:to", function (req, res) {
       res.json(newlist.slice(req.from, req.to + 1));
}); 

var count  = 0;

app.get('/hello.txt', function (req, res, next) {
   count+=1;
   // go to next middleware
   next();
});

app.get('/count', function (req, res) {
   res.send(" ", + count + " views");
});
 
http.createServer(app).listen(app.get("port"), function(){
  console.log("Express server listening on port " + app.get("port"));
});
