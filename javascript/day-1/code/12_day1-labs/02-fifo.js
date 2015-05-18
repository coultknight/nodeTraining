function FIFO() {}

// TODO: Implement push method
FIFO.prototype.push = function () {}

// TODO: Implement shift method
FIFO.prototype.shift = function () {}

var fifo = new FIFO()

fifo.push('hi')
console.log(fifo.length === 1)  // true
console.log(fifo.shift() === 'hi')  // true
console.log(fifo.length === 0) // true

fifo.push('hi')
fifo.push('ho')
console.log(fifo.length === 2) // true
console.log(fifo.shift() === 'hi') // true
console.log(fifo.shift() === 'ho') // true
console.log(fifo.length === 0) // true
