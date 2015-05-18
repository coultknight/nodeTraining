function hanoi(disc, firstPole, middlePole, lastPole) {
  // Implement a function to solve the Tower of Hanoi puzzle
  // use the `moveDisk` function to print the movement of a disk
  moveDisk(disc, firstPole, lastPole)
}

function moveDisk(disc, fromPole, toPole) {
  console.log('Moving disk %s from pole %s to pole %s', disc, fromPole, toPole)
}

hanoi(3, 'A', 'B', 'C')
