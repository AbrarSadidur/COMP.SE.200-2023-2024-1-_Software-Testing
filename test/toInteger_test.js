// Import the 'toInteger' function
import toInteger from '../src/toInteger.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'toInteger' function
describe('toInteger function', () => {
  // Test case 1
  it('should convert a positive float to an integer', () => {
    expect(toInteger(3.2)).to.equal(3);
  });

  // Test case 2
  it('should convert Number.MIN_VALUE to 0', () => {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
  });

  // Test case 3
  it('should convert Infinity to a large positive integer', () => {
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
  });

  // Test case 4
  it('should convert a string representation of a float to an integer', () => {
    expect(toInteger('3.2')).to.equal(3);
  });

  // Test case 5
  it('should convert a negative float to an integer', () => {
    expect(toInteger(-5.7)).to.equal(-5);
  });

  // Test case 6
  it('should convert a large positive float to an integer', () => {
    expect(toInteger(1.7976931348623157e+308)).to.equal(1.7976931348623157e+308);
  });

  // Test case 7
  it('should convert NaN to 0', () => {
    expect(toInteger(NaN)).to.equal(0);
  });

  // Test case 8
  it('should convert null to 0', () => {
    expect(toInteger(null)).to.equal(0);
  });

  // Test case 9
  it('should convert undefined to 0', () => {
    expect(toInteger(undefined)).to.equal(0);
  });

  // Test case 10
  it('should convert a boolean to 0 or 1', () => {
    expect(toInteger(true)).to.equal(1);
    expect(toInteger(false)).to.equal(0);
  });

  // Test case 11
  it('should convert an object to 0', () => {
    expect(toInteger({})).to.equal(0);
  });

  // Test case 12
  it('should convert an array to 0', () => {
    expect(toInteger([1, 2, 3])).to.equal(0);
  });
});
