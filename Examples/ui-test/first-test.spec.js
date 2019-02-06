// first-test.spec.js

// browser.waitForAngularEnabled(false);

describe("Testing if protractor is working fine", ()=>{

	it("should get the page title", ()=>{
		var url = "http://localhost:3000";

		browser.get(url);
		var title = browser.getTitle();
		expect(title).toEqual("Addressbook App");

	});

});