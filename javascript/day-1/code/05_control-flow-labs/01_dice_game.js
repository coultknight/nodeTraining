function diceGame(playerName1, playerName2) {
  var maxScore = 100; // Max score to decide a winner
  var winner = false; // Anyone reached max score?

  var player1 = 0; // Score for player1
  var player2 = 0; // Score for player2

  // TODO: Implement the logic to play until there is a winner and
  // announce winner name

  function play() {
    // TODO: Roll two dices for player1 and calculate score

    // TODO: Roll two dices for player2 and calculate score

    // TODO: Check if someone reached max score and define a winner
  }

  function calculateScore(d1, d2) {
    // TODO: Calculate score using the following rules:
    // score = d1 + d2
    // Exceptions:
    //  - if one of the values is 1, score should be 1
    //  - if both values are equals, score is 2 times d1 + d2
  }

  // Return a random number between 1 and 6
  function rollDice() {
    return Math.ceil(Math.random() * 6)
  }
}

diceGame('Arthur', 'Trillian'); // start a game with some names
