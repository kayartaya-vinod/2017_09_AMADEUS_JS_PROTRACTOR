console.log("Start of ex05 script");

var execAfterDelay = require("./myutils").execAfterDelay;

setTimeout(function(){
	console.log("executing after a setTimeout of 2s");
}, 0);

// execAfterDelay(function(){
// 	console.log("executing after a delay of 6s");
// }, 6000);

console.log("End of ex05 script");