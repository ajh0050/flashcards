const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
    this.startTime = new Date()
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[0])

    this.turns++

    this.deck.cards.shift()

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id)
    }

    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    return Math.floor(
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    )
  }

  calculateTimeForRound() {
    const endTime = new Date()
    const timeFinishSeconds = (endTime - this.startTime) / 1000
    const roundMinutes = Math.floor(timeFinishSeconds / 60)
    const roundSeconds = Math.round(timeFinishSeconds % 60)
    let timeResponse

    if (roundMinutes === 0) {
      timeResponse = `${roundSeconds} seconds`
    } else if (roundMinutes === 1) {
      timeResponse = `${roundMinutes} minute and ${roundSeconds} seconds`
    } else {
      timeResponse = `${roundMinutes} minutes and ${roundSeconds} seconds`
    }

    return timeResponse
  }

  endRound() {
    const response = `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly ✅!`

    const time = `You took ${this.calculateTimeForRound()} to complete the round 🎉!`

    console.log(response)
    console.log(time)

    return { response: response, time: time }
  }
}

module.exports = Round