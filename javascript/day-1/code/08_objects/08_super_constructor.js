// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function move(x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle(width, height) {
  Shape.call(this); // call super constructor.
  this.width = width;
  this.height = height;
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function area() {
  return this.width * this.height;
}

// Square - subclasses Rectangle
function Square(length) {
  Rectangle.call(this, length, length);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var rect = new Rectangle(2, 4);
var square = new Square(4);

console.log("Is rect an instance of Rectangle? " + (rect instanceof Rectangle)); // true
console.log("Is rect an instance of Shape? " + (rect instanceof Shape)); // true
console.log("rect area", rect.area());
rect.move(1, 1);

console.log("square area", square.area());
console.dir(Object.getPrototypeOf(square));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(square)));
