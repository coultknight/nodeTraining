var farm = ['duck', 'cow', 'chick']

function chicksTest(animal) {
  return animal === 'chick'
}

// checking if all animals are chicks
var allAreChicks = farm.every(chicksTest)

// print false because `duck` and `cow` are not chicks
console.log(allAreChicks)