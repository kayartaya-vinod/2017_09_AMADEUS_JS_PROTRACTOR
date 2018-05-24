var ContactService = require("../services/contact-service-async");
var cs = new ContactService();

module.exports = (req, resp)=>{
	var id = req.params.id;

	cs.get(id, (err, contact)=>{
		var out = {};
		if(err){
			out.success = false;
			out.error = err;
		}
		else {
			out.success = true;
			out.contact = contact;
		}

		resp.json(out);
	});
};