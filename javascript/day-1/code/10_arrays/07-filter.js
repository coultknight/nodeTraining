var farm = ['duck', 'cow', 'chick']

function startWithC(animal) {
  return animal.match(/^c/)
}

var filterFarm = farm.filter(startWithC)

// printing `[ 'cow', 'chick' ]` in the console
console.log(filterFarm)