// calculator.js
// module name is "./calculator"

// module.exports by default is an empty object
// in JavaScript, we can add/delete members to any object


module.exports.add = function(n1, n2){ return n1 + n2 };
module.exports.subtract = function(n1, n2){ return n1 - n2 };
module.exports.multiply = function(n1, n2){ return n1 * n2 };
module.exports.divide = function(n1, n2){ return n1 / n2 };
module.exports.modulo = function(n1, n2){ return n1 % n2 };
