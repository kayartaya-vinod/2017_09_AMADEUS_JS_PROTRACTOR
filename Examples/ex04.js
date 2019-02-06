var Person = require("./person");

var p1 = new Person("Vinod", "vinod@vinod.co");
var p2 = new Person("John Doe");


p1.info();
p2.info();

delete p2.info; // info is not part of p2

p1.info();
p2.info();

var props = Object.keys(p1);
console.log("p1 has properties - ", props);

console.log("p1's name is ", p1["name"]);
console.log("p1's city is ", p1["city"]);
console.log("p1's email is ", p1["email"]);

// a hard way to get all property/values of an object:
for(let i=0; i<props.length; i++){
	let key = props[i];
	let val = p1[key];
	console.log(`${key} --> ${val}`);
}

// a better way to do the same thing:
for(let key in p1){
	if(p1.hasOwnProperty(key)){
		console.log(`${key} --> ${p1[key]}`);	
	}
}

















