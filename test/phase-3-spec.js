const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
  //Arrange step for all tests
  //Be sure to do this BEFORE the tests

  //initialize a variable for the new instance outside of the test so that it can be reassigned for each test
  let computer;
  //pick a sample word to work with during the tests
  const word = "computer";

  //beforeEach test, create a new instance of the Word class
  //this means we don't have to set it up for every test - a new instance of the Word class will be created for us before every test
  beforeEach(() => {
    computer = new Word(word);
  });

  describe('Word constructor function', function () {
    it('should have a "word" property', function() {

      //we expect the computer instance to have a property called "word"
      expect(computer).to.have.property("word")
      //note: "word" MUST have quotes around it bc it's the property name - NOT a variable

    })
     it('should set the "word" property when a new word is created', function() {

      //we expect the computer instace at the word property to equal the VARIABLE value, which is "computer"
      expect(computer.word).to.equal(word);
      //note: NO quotes this time bc we are referring to a variable called word

    })
  })

  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {

      //we expecte that running the removeVowels function on "computer" will give us "cmptr"
      let expected = "cmptr";
      //initialize a variable to hold the value of running the removeVowels function
      let actual = computer.removeVowels(); //this should return a new word for us

      //compare the actual value with the expected value
      expect(actual).to.equal(expected)
    })
  })

  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {

    //we expect the removeConsonants function to turn "computer" into "oue"
    let expected = "oue";
    //initialize a variable to hold the actual result of running the removeConsonants function
    let actual = computer.removeConsonants();

    //compare the actual value with the expected value
    expect(actual).to.equal(expected)
  })

  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //we expect this function to cut off the first letter if it's a consonant, add it to the end of the word, and then add 'ay'
    //if the word starts with a vowel we expect the word + 'yay' (e.g., apple -> appleyay)
    let expected = "omputercay";
    //initialize a variable to hold the return value of the function
    let actual = computer.pigLatin();

    //compare the actual value with the expected value
    expect(actual).to.equal(expected)

  })
})
