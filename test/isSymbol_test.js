// Import the 'isSymbol' function
import isSymbol from '../src/isSymbol.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'isSymbol' function
describe('isSymbol function', () => {
  // Test case 1
  it('should return true for a Symbol', () => {
    expect(isSymbol(Symbol.iterator)).to.be.true;
  });

  // Test case 2
  it('should return false for a string', () => {
    expect(isSymbol('abc')).to.be.false;
  });

  // Test case 3
  it('should return false for a number', () => {
    expect(isSymbol(42)).to.be.false;
  });

  // Test case 4
  it('should return false for an object', () => {
    expect(isSymbol({})).to.be.false;
  });

  // Test case 5
  it('should return false for an array', () => {
    expect(isSymbol([1, 2, 3])).to.be.false;
  });

  // Test case 6
  it('should return false for null', () => {
    expect(isSymbol(null)).to.be.false;
  });

  // Test case 7
  it('should return false for undefined', () => {
    expect(isSymbol(undefined)).to.be.false;
  });

  // Test case 8
  it('should return false for a boolean', () => {
    expect(isSymbol(true)).to.be.false;
    expect(isSymbol(false)).to.be.false;
  });
});
