// myutils.js

// Parameters: duration -> number in millis
function sleep(duration){
	var ms1 = Date.now(); // current time in millis
	while(true){
		var ms2 = Date.now();
		if((ms2-ms1)>=duration) break;
	}
}

module.exports.execAfterDelay = function(callback, duration=1000){
	if(!callback || typeof callback != "function"){
		throw new Error("callback was not supplied or not a function!");
	}
	if(duration<0 || typeof duration != "number"){
		throw new Error("duration must be a positive number or zero");
	}

	// wait for the given duration
	sleep(duration);
	callback();
}