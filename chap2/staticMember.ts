// class ClassA {
//   static typeName: string;

//   constructor() {}
//   static getFullName() {
//     return "ClassA " + ClassA.typeName;
//   }
// }
// const mya = new ClassA();
// console.log(ClassA.typeName);

class Runner {
  static lastRunTypeName: string;

  constructor(private typeName: string) {}

  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const mya = new Runner("a");
const myb = new Runner("b");

myb.run();
mya.run();

console.log(Runner.lastRunTypeName);
