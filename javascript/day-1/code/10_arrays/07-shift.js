var farm = ['duck', 'cow', 'chick']

var shifted = farm.shift()

// Printing 'cow' 'chick' in the console
for (var i = 0; i < farm.length; i++) {
  console.log(farm[i])
}

// shifted now contains 'duck', printing 'duck' in the console
console.log(shifted)