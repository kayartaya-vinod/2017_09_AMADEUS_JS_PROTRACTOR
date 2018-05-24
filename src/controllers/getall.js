var ContactService = require("../services/contact-service-async");
var cs = new ContactService();

module.exports = (req, resp)=>{
	cs.getAll((err, contacts)=>{
		var out = {};
		if(err){
			out.success = false;
			out.error = err;
		}
		else {
			out.success = true;
			out.contacts = contacts;
		}

		resp.json(out);
	});
};