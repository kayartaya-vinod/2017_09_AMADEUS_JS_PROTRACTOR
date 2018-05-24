var msg;
msg = "Hello, World!";
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var p1 = new Person("Vinod");
alert(p1.name);
