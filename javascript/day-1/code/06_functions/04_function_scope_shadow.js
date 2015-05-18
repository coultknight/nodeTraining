function nameMe() {
  var firstName = "Func";
  var lastName = "Tion";

  function concat() {
    var firstName = "Alpha";
    var lastName = "Bet";
    return firstName + " " + lastName;
  }

  // `firstName` is still "Func" here
  // `lastName` is still "Tion" here

  return concat() + " (was: " + firstName + " " + lastName + ")";
}

console.log(nameMe()); // "Alpha Bet (was: Func Tion)"
