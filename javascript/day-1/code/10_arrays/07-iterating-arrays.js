var farm = ['duck', 'cow', 'chick']

// Printing 'duck' 'cow' 'chick' in the console
for (var i = 0; i < farm.length; i++) {
  console.log(farm[i])
}

// Printing 'duck' 'cow' 'chick' in the console
farm.forEach(function printElement(el) {
  console.log(el)
})