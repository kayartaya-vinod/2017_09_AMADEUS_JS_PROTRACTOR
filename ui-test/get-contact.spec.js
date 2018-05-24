// get-contact.spec.js

var fs = require("fs");
var path = require("path");

describe("Testing the get-contact screen", ()=>{

	var baseUrl = "http://localhost:3000";

	beforeEach(()=>{
		var filename = path.join(__dirname, "..", "src", "services", "contacts.json");
		var data = {};
		data.idCounter = 2;
		data.contactList = [];
		data.contactList.push({id: 1, name: "John", email: "john@mail.com", phone: "5553334455"});
		data.contactList.push({id: 2, name: "Jane", email: "jane@mail.com", phone: "5553223455"});

		fs.writeFileSync(filename, JSON.stringify(data), "utf-8");

	});

	it("should get data for id 1", ()=>{

		browser.get(baseUrl);
		element(by.partialLinkText("Get")).click();

		// <h3 ng-bind="pageCaption">
		var caption = element(by.binding("pageCaption")).getText();
		expect(caption).toEqual("Search contact details by id");

		element(by.model("id")).sendKeys("1");
		element(by.buttonText("Get details")).click();

		var name = element(by.model("contact.name")).getAttribute("value");
		expect(name).toEqual("John");
	});

	it("should not get data for id 333", ()=>{
		browser.get(baseUrl+"/#!/get");

		element(by.model("id")).sendKeys("333");
		element(by.buttonText("Get details")).click();

		var dialog = browser.switchTo().alert(); // alert, confirm, prompt
		expect(dialog.getText()).toEqual("No data found for id : 333");
		dialog.dismiss();
	});

	xit("should delete data for id 1", ()=>{
		browser.get(baseUrl);
		element(by.partialLinkText("Get")).click();

		element(by.model("id")).sendKeys("1");
		element(by.buttonText("Get details")).click();

		element(by.buttonText("Delete")).click();
		var dlg = browser.switchTo().alert(); // confirmation dialog
		dlg.dismiss(); // cancel the confirm() dialog box

		var name = element(by.model("contact.name")).getAttribute("value");
		expect(name).toEqual("John");

		element(by.buttonText("Delete")).click();
		dlg = browser.switchTo().alert(); // confirmation dialog
		dlg.accept(); // okay the confirm() dialog box

		// dismiss the feedback dialog box
		// "Details of your contact 'XXXX' deleted from the address book."
		dlg = browser.switchTo().alert(); // confirmation dialog
		dlg.dismiss();

		name = element(by.model("contact.name")).getAttribute("value");
		expect(name).toEqual("");

	});
});



















