var farm = ['duck', 'cow', 'chick', 'horse']
var smallFarm = farm.slice(1)

// Printing 'cow' 'chick' 'horse' in the console
for (var i = 0; i < smallFarm.length; i++) {
  console.log(smallFarm[i])
}

var smallerFarm = farm.slice(1,3)

// Printing 'cow' 'chick' in the console
for (var i = 0; i < smallerFarm.length; i++) {
  console.log(smallerFarm[i])
}