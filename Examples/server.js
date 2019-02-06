// server.js
var express = require("express");
var app = express();
var port = 3000;
var baseUrl = "/api/contacts/";
var parser = require("body-parser");
app.use(parser.json());

// serve all static content (urls not mapped to express) from "web" directory
app.use(express.static("web"));

// HTTP GET request mappings
app.get(baseUrl, require("./src/controllers/getall"));
app.get(baseUrl+":id", require("./src/controllers/get"));

// HTTP POST request mapping
app.post(baseUrl, require("./src/controllers/add"));

// HTTP DELETE request mapping
app.delete(baseUrl+":id", require("./src/controllers/delete"));

app.listen(port);
console.log("Server starting at port", port);