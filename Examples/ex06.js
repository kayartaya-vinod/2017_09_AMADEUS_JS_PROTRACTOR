// ex06.js

var id = setInterval(function(){
	console.log("Hello", new Date());
}, 1000);

setTimeout(function(){
	clearInterval(id);
	console.log("No more hello message!");
}, 10000);