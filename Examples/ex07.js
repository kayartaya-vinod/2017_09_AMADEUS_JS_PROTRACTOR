var os = require("os");

console.log(os.userInfo());
console.log("------------------------");
// console.log(os.cpus());
console.log(os.uptime());

console.log("current directory is", __dirname);
console.log("current file is", __filename);

var path = require("path");
console.log(path.join(os.userInfo().homedir, "a", "b", "c"));

var fs = require("fs");
// sync function
var filename = path.join(__dirname, "ex06.js");

var found = fs.existsSync(filename);
if(found){
	console.log(`${filename} exists!`);
}
else {
	console.log(`${filename} does not exist!`);
}