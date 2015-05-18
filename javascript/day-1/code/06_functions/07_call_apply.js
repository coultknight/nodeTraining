var me = {
  firstName: "Chuck",
  lastName: "Norris",
  speak: function(what) {
    console.log(this.firstName + " " + this.lastName + " says: " + what);
  }
};

// default `this`, the owning object `me`
me.speak("Chun Kuk Do"); // "Chuck Norris says: Chun Kuk Do"

// using apply with a null value for `this` leaves it `undefined` in the function
me.speak.apply(null, [ "Tang Soo Do" ]); // "undefined undefined says: Tang Soo Do"

var realMe = {
  firstName: "Carlos",
  lastName: "Ray"
};

// a custom `this`
me.speak.call(realMe, "Taekwondo"); // "Carlos Ray says: Taekwondo"
