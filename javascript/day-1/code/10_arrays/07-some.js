var farm = ['duck', 'cow', 'chick']

function chicksTest(animal) {
  return animal === 'chick'
}

// checking if all animals are chicks
var thereIsAChick = farm.some(chicksTest)

// print true because we have a `chick`
console.log(thereIsAChick)