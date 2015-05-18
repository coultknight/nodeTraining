var universe = {
  secret: 42,
  size: Infinity
};

for (property in universe) {
  console.log(property + ' : ' + universe[property]);
}

// secret : 42
// size : Infinity
