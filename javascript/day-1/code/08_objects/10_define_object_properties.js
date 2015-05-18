var universe = {};

Object.defineProperty(universe, "secret", {
  value: 42,
  writable: false
})

console.log(universe.secret); // "42"
universe.secret = 0 // do nothing because property is read only
console.log(universe.secret) // "42"
