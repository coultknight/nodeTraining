var obj = new Object();

console.log(obj instanceof Object); // true

function User() {}

var user = new User();

console.log(user instanceof User); // true
console.log(user instanceof Object); // true
