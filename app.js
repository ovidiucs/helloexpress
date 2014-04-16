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


http.createServer(app).listen(app.get("port"), function(){
  console.log("Express server listening on port " + app.get("port"));
});
