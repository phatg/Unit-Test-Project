const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    let expected = true;
    let expected2 = false;
    //Act
    let actual = isFive(5)
    let actual2 = isFive(6)
    //Assert
    expect(actual).to.equal(expected)
    expect(actual2).to.equal(expected2)
    //Arrange

    //Act

    //Assert

  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let expected = true;
    //Act
    let actual = isOdd(5)

    //Assert
    expect(actual).to.equal(expected)

  });
  it("should return false if the num is even", () => {
    //Arrange
    let expected2 = false;
    //Act
    let actual2 = isOdd(6)
    //Assert
    expect(actual2).to.equal(expected2)
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    //Act
    let actual3 = () => isOdd('test') // add function
    //Assert
    expect(actual3).to.throw(Error)
  });
});

describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      let expected = [1, 2, 3, 4, 5]
      //Act
      let actual = myRange(1, 5)
      // Assert
      expect(actual).to.eql(expected)

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange
      let expected = [5, 6, 7, 8, 9, 10]
      let expected2 = [4, 6, 8, 10]
      //Act
      let actual = myRange(5, 10, step=1)
      let actual2 = myRange(4, 10, step=2)
      // Assert
      expect(actual).to.eql(expected)
      expect(actual2).to.eql(expected2)
      //expect.fail('Remove this expect.fail and replace it with your test');
    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let actual = () => myRange("Test", "Test2", step=1)
    //Act

    //Assert
    expect(actual).to.throw(Error)

  });
});

describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange
    
    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should throw a TypeError if max is not a number', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange
    let expected = [3, 5, 6, 9, 10]
    //Act
    let actual = fizzBuzz(11)
    //Assert
    expect(actual).to.eql(expected)

  })
})
