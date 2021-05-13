const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    //Arrange
    let expected = [1,2,3,3,2,1]
    //Act
    let actual = mirrorArray([1, 2, 3])
    //Assert
    expect(actual).to.eql(expected)
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    //Arrange
    let expected = 1;
    //Act
    let actual = hiddenCounter()()
    //Assert
    expect(actual).to.eql(expected)
  })
})

//3. myMap
describe('myMap', function () {
 it("should function like the built in Array#map", function () {
    //Arrange
    let expected = [6, 10, 4, 14]
    let array = [3, 5, 2, 7]
    let cb1 = function(num) {
      return num*2;
    }
    //Act
    let actual = myMap(array, cb1); //this value is an array
    //Assert
    expect(actual).to.eql(expected);
  });

  it("should not call the built in Array#map", function () {
    //Arrange -> set up the spy
    const array = [3, 5, 2, 7]    //this is the starting array that we pass in
    const cb = function(num) {    //the cb turns it into [6, 10, 4, 14]
      return num*2;
    }

    const arraySpy = chai.spy.on(myMap, "map")
    //Act -> invoke the thing we want to spy on

    myMap(array, cb);

    //Assert -> run the test
    expect(arraySpy).to.not.have.been.called();
  });
})

//4. avgValue
//When we pass an array of numbers to the function and it returns the average, our code is working

describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
    //Arrange
    //Set up a sample array for the test
    let array = [2, 5, 4, 7, 1];
    //We expected the average of that sample array to equal 3.8
    let expected = 3.8;
    //Act
    //Run the function to get the actual return value
    let actual = avgValue(array)
    //Assert
    //We expected the actual return value to be 3.8
    expect(actual).to.equal(expected);

  })
})
