function collect() {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

var result = collect(1, 2, 3, 4, 5); // result is 15
