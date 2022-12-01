class Turn {
    constructor(guess, card) {
      this.currentGuess = guess
      this.currentCard = card
    }
  
    returnGuess() {
      return this.currentGuess
    }
  
    returnCard() {
      return this.currentCard
    }
  
    evaluateGuess() {
      return this.currentGuess === this.currentCard.correctAnswer
    }
  
    giveFeedback() {
      if (this.evaluateGuess()) {
        return 'correct!'
      }
      return 'incorrect!'
    }
  }
  
  module.exports = Turn