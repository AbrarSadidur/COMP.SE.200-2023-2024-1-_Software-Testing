// Import the 'isLength' function
import isLength from '../src/isLength.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'isLength' function
describe('isLength function', () => {
  // Test case 1
  it('should return true for a valid array-like length', () => {
    expect(isLength(3)).to.be.true;
  });

  // Test case 2
  it('should return false for Number.MIN_VALUE', () => {
    expect(isLength(Number.MIN_VALUE)).to.be.false;
  });

  // Test case 3
  it('should return false for Infinity', () => {
    expect(isLength(Infinity)).to.be.false;
  });

  // Test case 4
  it('should return false for a string', () => {
    expect(isLength('3')).to.be.false;
  });

  // Test case 5
  it('should return false for a negative number', () => {
    expect(isLength(-1)).to.be.false;
  });

  // Test case 6
  it('should return false for a floating-point number', () => {
    expect(isLength(3.14)).to.be.false;
  });

  // Test case 7
  it('should return false for null', () => {
    expect(isLength(null)).to.be.false;
  });

  // Test case 8
  it('should return false for undefined', () => {
    expect(isLength(undefined)).to.be.false;
  });

  // Test case 9
  it('should return false for a boolean', () => {
    expect(isLength(true)).to.be.false;
    expect(isLength(false)).to.be.false;
  });

  // Test case 10
  it('should return false for an object', () => {
    expect(isLength({ length: 5 })).to.be.false;
  });

  // Test case 11
  it('should return false for an array', () => {
    expect(isLength([1, 2, 3])).to.be.false;
  });
});
