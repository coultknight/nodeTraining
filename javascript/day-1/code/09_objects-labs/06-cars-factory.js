// Defining a generic car
function Car() {}

Car.prototype.drive = function () {
  console.log('Driving')
}

Car.prototype.color = 'gray'
Car.prototype.doors = 2

var car = new Car()

function Ferrari() {}

// TODO: make `Ferrari` to use the Car prototype
// TODO: add a property brand = 'Ferrari' to Ferrari prototype

var f50 = new Ferrari()
var enzo = new Ferrari()

console.log(f50 instanceof Car) // true
console.log(f50.brand === 'Ferrari') // true
console.log(enzo.brand === 'Ferrari') // true

// TODO: add a turbo function to f50 object

console.log(typeof(f50.turbo) === 'function') // true
console.log(typeof(enzo.turbo) === undefined) // true

// TODO: change color for all Ferrari to red

console.log(f50.color === 'red' && enzo.color === 'red') // true