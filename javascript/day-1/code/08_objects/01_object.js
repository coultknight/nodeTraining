var user = new Object();
user.name = "Arthur";
user.lastName = "Dent";
user.age = 42;
user.sayHello = function () {
  console.log("Hi, where is my towel?");
};

console.log(user.name); // "Arthur"
user.sayHello(); // "Hi, where is my towel?"
