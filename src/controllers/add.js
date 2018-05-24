var ContactService = require("../services/contact-service-async");
var cs = new ContactService();

module.exports = (req, resp)=>{
	cs.add(req.body, (err, id)=>{
		var out = {};
		if(err){
			out.success = false;
			out.error = err;
		}
		else {
			out.success = true;
			out.id = id;
		}
		resp.json(out);
	});
};