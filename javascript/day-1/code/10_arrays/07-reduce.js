var farm = ['duck', 'cow', 'chick']

function getOne(animals, animal) {
  return animals + '-' + animal
}

var allAnimals = farm.reduce(getOne)

// print a string `duck-cow-chick` in the console
console.log(allAnimals)