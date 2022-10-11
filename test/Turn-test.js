const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });
  
    it('should be an instance of Card', function() {
      const turn = new Turn();
      expect(turn).to.be.an.instanceof(Turn);
    }); 
  
    it('stores users guess to the question', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object');
      expect(turn.guess).to.equal('object');
    });  
  
    it('stores current card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.card).to.deep.equal(card);
    });  

    it('returnGuess method returns the users guess', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.returnGuess()).to.equal('object');
    });

    it('returnCard method returns the current card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.returnCard()).to.deep.equal(card);
    });

    it('evaluateGuess method returns true if the users guess matches the correct answer on the card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.evaluateGuess()).to.equal(true);
    });
  
    it('evaluateGuess method returns false if the users guess matches the correct answer on the card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('giveFeedback method returns either "incorrect!" or "correct!" based on whether the guess is correct or not', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const trueTurn = new Turn('object', card);
        const falseTurn = new Turn('array', card)
        expect(trueTurn.giveFeedback()).to.equal('correct!');
        expect(falseTurn.giveFeedback()).to.equal('incorrect!');
    });
  });