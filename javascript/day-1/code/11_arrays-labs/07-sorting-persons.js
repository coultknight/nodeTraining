var today = new Date()
var currentDate = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  day: today.getDate()
}

var persons = [
  {
    name:'Hanna Jones',
    birthdate: {
      year: 1975,
      month: 2,
      day: 24
    }
  },
  {
    name:'Kevin Rice',
    birthdate: {
      year: 1954,
      month: 10,
      day: 24
    }
  },
  {
    name:'July Smith',
    birthdate:{
      year: 1954,
      month: 6,
      day: 28
    }
  },
  {
    name:'Carl Pierce',
    birthdate:{
      year: 1968,
      month: 8,
      day: 2
    }
  }
]

function sortByAge(persons) {
  // TODO: sort the array by age (oldest first)

  // TODO: create an array with just the names after sorting and return it
}

var result = ['July Smith', 'Kevin Rice', 'Carl Pierce', 'Hanna Jones']
var equals = sortByAge(persons).every(function (element, index) {
  return element === result[index]
})

console.log(equals) // true