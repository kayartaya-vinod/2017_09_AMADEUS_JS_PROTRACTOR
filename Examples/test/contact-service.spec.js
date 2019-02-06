// contact-service.spec.js

var ContactService = require("../src/services/contact-service");

// test suite
describe("Testing contact-service operations", function(){

	// nested test suite
	describe("Testing the add() function", function(){

		// test spec
		it("should add a new contact", function(){
			// a spec should consist of one or more expectations
			var service = new ContactService();
			expect(service).toBeDefined();
			expect(service["add"]).toBeDefined();
			var c = {name: "Vinod", email: "vinod@vinod.co"};
			c.phone = "9731424784";
			c.age = 44;
			var id = service.add(c);
			expect(id).toEqual(c.id);
			expect(id).toEqual(1);
		});

		// negative test case
		it("should throw an error when no object is supplied", function(){
			var service = new ContactService();
			expect(()=>service.add()).toThrow();
		});

	});

	describe("Testing the get() function", function(){
		var service; // undefined

		// lifecycle hook
		// gets invoked just before each test spec is executed
		beforeEach(()=>{
			service = new ContactService();
			service.contactList.push({id: 1, name: "John", email: "john@mail.com", phone: "5553334455"});
			service.contactList.push({id: 2, name: "Jane", email: "jane@mail.com", phone: "5553223455"});
			service.idCounter = 2;
		});

		it("should throw an error when no id (or other than number) is supplied", function(){
			expect(service).toBeDefined();
			expect(()=>service.get()).toThrow();
			expect(()=>service.get("xyz")).toThrow();
		});

		it("should fetch contact for id 1", ()=>{
			var c = service.get(1);
			expect(c).toBeDefined();
			expect(c).not.toBeNull();
			expect(c.name).toEqual("John");
			expect(c.email).toContain("john");
		});

		it("should get null for non existing id", ()=>{
			var c;

			expect(()=>{c=service.get(100)}).not.toThrow();
			expect(c).toBeDefined();
			expect(c).toBeNull();
		});
	});

	xdescribe("Testing the update() function", function(){});
	
	xdescribe("Testing the delete() function", function(){});

	xdescribe("Testing the getAll() function", function(){
		var service = new ContactService();
		var list = service.getAll();
		// expect(list).toBeArray();
	});

	xdescribe("Testing the search() function", function(){});

});











