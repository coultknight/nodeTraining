var myName = {
  firstName: "Chuck",
  lastName: "Norris",

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(myName.fullName()); // "Chuck Norris"
