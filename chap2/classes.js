var myPerson = /** @class */ (function () {
    function myPerson(msg) {
        this.msg = msg;
    }
    myPerson.prototype.speak = function () {
        console.log(this.msg);
    };
    return myPerson;
}());
var mytom = new myPerson("hello");
// tom.msg = "hello";
mytom.speak();
