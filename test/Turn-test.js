const chai = require('chai')
const Card = require('../src/Card')
const expect = chai.expect

const Turn = require('../src/Turn')

let turn1
let turn2

beforeEach(() => {
  const card1 = new Card(
    1,
    'what is your favorite cold drink?',
    ['iced tea', 'sparkling water', 'smoothie'],
    'smoothie'
  )

  const card2 = new Card(
    2,
    'what is your favorite cold drink?',
    ['iced tea', 'sparkling water', 'smoothie'],
    'iced tea'
  )

  turn1 = new Turn('smoothie', card1)
  turn2 = new Turn('sparkling water', card2)
})

describe('Turn', () => {
  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceOf(Turn)
  })

  it('should take in a guess as an argument and set it as a property', () => {
    expect(turn1.currentGuess).to.equal('smoothie')
  })

  it('should take in a card as an argument and set it as a property', () => {
    expect(turn1.currentCard).to.deep.equal({
      id: 1,
      question: 'what is your favorite cold drink?',
      answers: ['iced tea', 'sparkling water', 'smoothie'],
      correctAnswer: 'smoothie',
    })
  })

  it('should have a method that returns the current guess', () => {
    expect(turn1.returnGuess()).to.equal('smoothie')
  })

  it('should have a method that returns the current card', () => {
    expect(turn1.returnCard()).to.deep.equal({
      id: 1,
      question: 'what is your favorite cold drink?',
      answers: ['iced tea', 'sparkling water', 'smoothie'],
      correctAnswer: 'smoothie',
    })
  })

  it('should have a method that returns if the current guess is true or false', () => {
    expect(turn1.evaluateGuess()).to.equal(true)
    expect(turn2.evaluateGuess()).to.equal(false)
  })

  it('should have a method that returns feedback on the current guess', () => {
    expect(turn1.giveFeedback()).to.equal('correct!')
    expect(turn2.giveFeedback()).to.equal('incorrect!')
  })
})