// contact-service-async.js

var fs = require("fs");
var path = require("path");

var filename = path.join(__dirname, "contacts.json");
if(!fs.existsSync(filename)){
	var data = {};
	data.idCounter = 0;
	data.contactList = [];
	fs.writeFileSync(filename, JSON.stringify(data), "utf-8");
}

// ES6 style of class
class ContactService{

	constructor(){
	}

	// async methods; no return value, but invoke callback
	add(contact, callback){
		if(!callback || typeof callback!="function"){
			throw new Error("callback was not supplied or was not a function");
		}
		if(!contact || typeof contact!="object"){
			var err = {};
			err.code = 1001;
			err.message = "contact was not supplied or was not an object!";
			callback(err);
			return;
		}
		var requiredFields = ["name", "email", "phone"];
		var missingFields = [];
		requiredFields.forEach(fld=>{
			if(!(fld in contact)){
				missingFields.push(fld);
			}
		});
		if(missingFields.length){
			var err = { code: 1002 };
			err.message = `Missing required fields: ${missingFields.join()}`;
			callback(err);
			return;
		}

		fs.readFile(filename, "utf-8", (err, data)=>{
			if(err){
				callback(err);
				return;
			}
			data = JSON.parse(data);
			contact.id = ++data.idCounter;
			data.contactList.push(contact);
			data = JSON.stringify(data);
			fs.writeFile(filename, data, "utf-8", (err, data)=>{
				if(err){
					callback(err);
					return;
				}
				else {
					callback(null, contact.id);
				}
			});
		});
	}

	get(id, callback){
		if(!callback || typeof callback!="function"){
			throw new Error("callback was not supplied or was not a function");
		}

		if(!id || isNaN(id)){
			var err = {};
			err.code = 1003;
			err.message = "id was not supplied or was not an number!";
			callback(err);
			return;
		}
		id = parseInt(id);
		
		fs.readFile(filename, "utf-8", (err, data)=>{
			if(err){
				callback(err);
				return;
			}
			data = JSON.parse(data);
			var result = data.contactList.find(c=>c.id==id);
			callback(null, result?result:null);
		});

	}

	getAll(callback){
		if(!callback || typeof callback!="function"){
			throw new Error("callback was not supplied or was not a function");
		}

		fs.readFile(filename, "utf-8", (err, data)=>{
			if(err){
				callback(err);
				return;
			}
			data = JSON.parse(data);
			callback(null, data.contactList);
		});
	}

	update(contact, callback){
		if(!callback || typeof callback!="function"){
			throw new Error("callback was not supplied or was not a function");
		}
	}

	delete(id, callback){
		if(!callback || typeof callback!="function"){
			throw new Error("callback was not supplied or was not a function");
		}

		if(!id || isNaN(id)){
			var err = {};
			err.code = 1003;
			err.message = "id was not supplied or was not an number!";
			callback(err);
			return;
		}
		id = parseInt(id);
		
		fs.readFile(filename, "utf-8", (err, data)=>{
			if(err){
				callback(err);
				return;
			}
			data = JSON.parse(data);
			var index = data.contactList.findIndex(c=>c.id==id);
			if(index==-1){
				var err = {};
				err.code = 1004;
				err.message = "No data found for id "+id;
				callback(err);
				return;
			}

			var result = data.contactList.splice(index, 1)[0];
			data = JSON.stringify(data);
			fs.writeFile(filename, data, "utf-8", (err, data)=>{
				if(err){
					callback(err);
					return;
				}
				else {
					callback(null, result);
				}
			});
		});
	}
}


module.exports = ContactService;





