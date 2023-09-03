// class ClassA {
//   static typeName: string;
//   constructor() {}
//   static getFullName() {
//     return "ClassA " + ClassA.typeName;
//   }
// }
// const mya = new ClassA();
// console.log(ClassA.typeName);
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var mya = new Runner("a");
var myb = new Runner("b");
myb.run();
mya.run();
console.log(Runner.lastRunTypeName);
