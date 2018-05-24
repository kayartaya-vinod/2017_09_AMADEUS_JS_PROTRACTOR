// contact-service-async.spec.js

var ContactService = require("../src/services/contact-service-async");
var path = require("path");
var fs = require("fs");


describe("Testing Async version of ContactService", ()=>{

	var service;

	beforeEach(()=>{
		var filename = path.join(__dirname, "..", "src", "services", "contacts.json");
		var data = {};
		data.idCounter = 2;
		data.contactList = [];
		data.contactList.push({id: 1, name: "John", email: "john@mail.com", phone: "5553334455"});
		data.contactList.push({id: 2, name: "Jane", email: "jane@mail.com", phone: "5553223455"});

		fs.writeFileSync(filename, JSON.stringify(data), "utf-8");

		service = new ContactService();
	});

	beforeEach(()=>{
		var matchers = {
			toBeArray : function(){
				return {
					compare: function(actual){
						var obj = {};
						obj.pass = actual instanceof Array;

						if(!obj.pass){
							obj.message = `expected ${acutal} an array`;
						}
						return obj;
					}
				};
			}
		};
		jasmine.addMatchers(matchers);

	});

	// when a function test is asynchronous, declare a callback variable
	// as an argument to the function supplied to "it" function
	it("should add a new contact", function(done){
		var c = {name: "Vinod", email: "vinod@vinod.co"};
		c.phone = "9731424784";
		c.age = 44;
		service.add(c, (err, id)=>{
			expect(id).toEqual(3);
			done(); // done with expectations; produce test result
		});
	});


	it("should get data for id 1", done=>{
		service.get(1, (err, data)=>{
			expect(err).toBeNull();
			expect(data).not.toBeNull();
			expect(data).toBeDefined();
			expect(data.name).toEqual("John");
			expect(data.email).toContain("john");
			done();
		});
	});

	it("should get all contacts", (done)=>{
		service.getAll((err, data)=>{
			expect(data).toBeArray(); // custom matcher
			done();
		});
	});

});












