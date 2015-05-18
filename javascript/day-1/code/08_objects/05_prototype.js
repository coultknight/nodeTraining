function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

User.prototype.sayHello = function () {
  console.log("Hello, my name is %s", this.name);
}

var user = new User("Arthur", "Dent");
user.sayHello(); // "Hello, my name is Arthur"
