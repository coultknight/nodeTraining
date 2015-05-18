function nameMe() {
  if (true) {
    var firstName = "Func"; // variable is hoisted
  }

  switch (firstName) {
    case "Func":
      var lastName = "Tion"; // variable is hoisted
  }

  return firstName + " " + lastName;
}

console.log(nameMe()); // "Func Tion"
