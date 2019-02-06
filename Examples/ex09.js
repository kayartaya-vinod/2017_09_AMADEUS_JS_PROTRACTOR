// ex09.js
var express = require("express");
var server = express();

server.get("/", handler);

function handler(req, resp){

	var p1 = {};
	p1.name = "vinod";
	p1.email = "vinod@vinod.co";

	resp.json(p1);
}


// start the server at port specified
server.listen(3000);

