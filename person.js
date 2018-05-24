// person.js

// module name is "./person"
// This module represents the class Person


// constructor
function Person(name, email, city="Bangalore"){
	this.name = name;
	this.email = email;
	this.city = city;
}

Person.prototype.info = function(){
	console.log("Name = " + this.name);
	console.log("Email = " + this.email);
	console.log("City = " + this.city);
	console.log("--------------------------");
};


module.exports = Person;