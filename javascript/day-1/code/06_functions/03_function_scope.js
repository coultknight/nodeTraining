function nameMe() {
  var firstName = "Func";
  var lastName = "Tion";

  function concat() {
    var fullName = firstName + " " + lastName;
    return fullName;
  }

  // `fullName` is not accessible here

  return concat();
}

console.log(nameMe()); // "Func Tion"
