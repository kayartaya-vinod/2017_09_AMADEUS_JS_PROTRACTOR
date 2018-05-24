var fs = require("fs");
var path = require("path");

// async function
var filename = path.join(__dirname, "ex05.js");
fs.readFile(filename, "utf-8", (err, data)=>{
	if(err) throw err;

	console.log(data);
});
console.log("Reading the file strated...");