function Animal() {}
Animal.prototype.walk = function () {
  console.log("Walking!");
}

function Bird() {}
Bird.prototype = new Animal();
Bird.prototype.fly = function () {
  console.log("Flying!");
}

var bird = new Bird();
bird.walk(); // from Animal prototype, "Walking!""
bird.fly(); // from Bird prototype, "Flying!""

console.log(bird instanceof Bird); // "true"
console.log(bird instanceof Animal); // "true"
console.log(bird instanceof Object); // "true"
