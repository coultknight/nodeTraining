var me = {
  firstName: "Chuck",
  lastName: "Norris",
  speak: function(what) {
    console.log(this.firstName + " " + this.lastName + " says: " + what);
  }
};

var realMe = {
  firstName: "Carlos",
  lastName: "Ray"
};

var realMeSpeak = me.speak.bind(realMe);

// default `this`, the owning object `me`
me.speak("Chun Kuk Do"); // "Chuck Norris says: Chun Kuk Do"

// using apply with a null value for `this` leaves it `undefined` in the function
realMeSpeak("Chun Kuk Do"); // "Chuck Norris says: Chun Kuk Do"
