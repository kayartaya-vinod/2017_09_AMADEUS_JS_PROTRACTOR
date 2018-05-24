// ex03.js

var fact = require("./factorial");
var calci = require("./calculator");
var add = require("./calculator").add;


console.log("typeof fact is", typeof fact);
console.log("typeof calci is", typeof calci);
console.log("typeof add is", typeof add);
console.log(calci);

n = 5;
f = fact(n);

console.log(`factorial of ${n} is ${f}`);

n1 = 12;
n2 = 22;

console.log(`${n1} + ${n2} is ${calci.add(n1, n2)}`);
console.log(`${n1} - ${n2} is ${calci.subtract(n1, n2)}`);
console.log(`${n1} * ${n2} is ${calci.multiply(n1, n2)}`);
console.log(`${n1} / ${n2} is ${calci.divide(n1, n2)}`);
console.log(`${n1} % ${n2} is ${calci.modulo(n1, n2)}`);
