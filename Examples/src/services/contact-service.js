// contact-service.js
// sync operations
// module name relative to your project "./src/services/contact-service"

// based on ES5 constructor based classes

// constructor for ContactService

function ContactService(){
	this.contactList = [];
	this.idCounter = 0;
}

var requiredFields = ["name", "email", "phone"];

ContactService.prototype.add = function(contact){
	if(!contact || typeof contact!="object"){
		throw new Error("contact was not supplied or was not an object!");
	}

	var missingFields = [];
	requiredFields.forEach(fld=>{
		if(!(fld in contact)){
			missingFields.push(fld);
		}
	});
	if(missingFields.length){
		throw new Error(`Missing required fields: ${missingFields.join()}`)
	}

	// in JS, for any existing object, we can add new properties
	contact.id = ++this.idCounter;
	this.contactList.push(contact);
	return contact.id;
};


ContactService.prototype.get = function(id){
	if(!id || typeof id!="number"){
		throw new Error("id was not supplied or was not a number!");
	}

	var result = this.contactList.find(c=>c.id==id);
	return result ? result: null;
};

ContactService.prototype.getAll = function(){
	return this.contactList;
};

// the current module represents a class - ContactService
module.exports = ContactService;

















