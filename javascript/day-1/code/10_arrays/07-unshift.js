var farm = ['cow', 'chick']
var unshifted = 'duck'

farm.unshift(unshifted)

// Printing 'duck' 'cow' 'chick' in the console
for (var i = 0; i < farm.length; i++) {
  console.log(farm[i])
}