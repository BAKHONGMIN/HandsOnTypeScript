interface User {
  name: string;
  age: number;
}

function cnaDrive(usr: User) {
  console.log("user is", usr.name);
  if (usr.age >= 16) {
    console.log("allow to drive");
  } else {
    console.log("do not allow to drive");
  }
}

const tom = {
  name: "tom",
  age: 17,
};

cnaDrive(tom);
