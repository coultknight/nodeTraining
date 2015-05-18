var farm = ['duck', 'cow', 'chick']

// This is valid but not optimal as the function is created for each
// element in the array
var superFarm = farm.map(function getSuper(animal) {
  return 'super ' + animal
})

// Taking the function out of the method
function getExtraSuper(animal) {
  return 'Extra super ' + animal
}

// This way is using the function already declared above and just reuse it with each element
var extraSuperFarm = farm.map(getExtraSuper)