class myPerson {
  constructor(private readonly msg: string) {}
  speak() {
    this.msg = "speak" + this.msg;
    console.log(this.msg);
  }
}

const mytom = new myPerson("hello");
// tom.msg = "hello";
mytom.speak();
