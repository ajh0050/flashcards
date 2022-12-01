const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', () => {
  let round

  beforeEach(() => {
    const card1 = new Card(
      1,
      'What color is grass?',
      ['blue', 'green', 'red'],
      'green'
    )

    const card2 = new Card(
      2,
      'What color is the sun?',
      ['yellow', 'white', 'pink'],
      'yellow'
    )

    const card3 = new Card(
      3,
      'What color is the ocean?',
      ['blue', 'purple', 'black'],
      'blue'
    )

    const deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an insance of Round', () => {
    expect(round).to.be.an.instanceOf(Round)
  })

  it('should take in a deck as an argument and set it as a property', () => {
    expect(round.deck).to.be.an.instanceOf(Deck)
  })

  it('should have a turn property that starts off at 0', () => {
    expect(round.turns).to.equal(0)
  })

  it('should have a property of incorrect guesses that stars an empty array', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should have the time when the Round instance was created as a property', () => {
    expect(round.startTime).to.be.an.instanceOf(Date)
  })

  it('should be able to return the current card', () => {
    expect(round.deck.cards[0]).to.deep.equal({
      id: 1,
      question: 'What color is grass?',
      answers: ['blue', 'green', 'red'],
      correctAnswer: 'green',
    })
  })

  it('should increase turns each time a turn is taken', () => {
    round.takeTurn('cat')
    round.takeTurn('dog')
    round.takeTurn('bird')
    expect(round.turns).to.equal(3)
  })

  it('show move the next card to the top of the deck when a turn occurs', () => {
    round.takeTurn('cat')

    expect(round.deck.cards[0]).to.deep.equal({
      id: 2,
      question: 'What color is the sun?',
      answers: ['yellow', 'white', 'pink'],
      correctAnswer: 'yellow',
    })
  })

  it('should evaulate a guess and return if the guess is correct or incorrect', () => {
    let round1 = round.takeTurn('yellow')
    let round2 = round.takeTurn('yellow')

    expect(round1).to.equal('incorrect!')
    expect(round2).to.equal('correct!')
  })

  it('should be able to return the percent of correct guesses', () => {
    round.takeTurn('yellow')
    round.takeTurn('purple')
    round.takeTurn('blue')

    expect(round.calculatePercentCorrect()).to.equal(33)
  })

  it('should be able to caculate the time the round took from start to end', () => {
    expect(round.calculateTimeForRound()).to.equal('0 seconds')
  })

  it('should be able to give a message that ends the round', () => {
    round.takeTurn('green')
    round.takeTurn('yellow')

    expect(round.endRound()).to.deep.equal({
      response: `**Round over!** You answered 100% of the questions correctly ✅!`,
      time: `You took 0 seconds to complete the round 🎉!`,
    })
  })
})