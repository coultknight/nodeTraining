var farm = [
  {
    animal: 'three-legged dog',
    legs: 3
  },
  {
    animal: 'duck',
    legs: 2
  },
  {
    animal: 'cow',
    legs: 4
  },
  {
    animal: 'chick',
    legs: 2
  }
]

// function receiving 2 animals
function sortByLegs(animal1,animal2) {
  return animal1.legs - animal2.legs
}

farm.sort(sortByLegs)

// farm was sorted and now objects order is: 'duck', 'chick', 'three-legged dog' and 'cow'
console.log(farm)