// factorial.js

var factorial = function (num){
	var f = 1;
	for(var i=2; i<=num; i++){
		f *= i;
	}
	return f;
}

module.exports = factorial;
