var animal = {
  walk: function () {
    console.log("Walking!");
  }
};

var dog = Object.create(animal);
dog.walk(); // from animal prototype, "=Walking!""
