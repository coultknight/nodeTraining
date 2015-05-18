var farm = ['duck', 'cow', 'chick']

function getSuper(animal) {
  return 'super ' + animal
}

var superFarm = farm.map(getSuper)

// printing `[ 'super duck', 'super cow', 'super chick' ]` in the console
console.log(superFarm)