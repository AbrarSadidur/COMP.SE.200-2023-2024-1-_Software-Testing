// Import the 'toString' function
import toString from '../src/toString.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'toString' function
describe('toString.js', () => {
  // Negative Test case 1
it('should not convert a non-null value to an empty string', () => {
  const nonNullValue = 'test';
  expect(toString(nonNullValue)).to.not.equal('');
});

  // Test case 2
  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  // Test case 3
  it('should convert an array to a string', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });

  // Test case 4
  it('should convert a nested array to a string', () => {
    expect(toString([1, [2, [3]]])).to.equal('1,2,3');
  });

  // Test case 5
  it('should convert a symbol to its string representation', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  // Test case 6
  it('should convert a number to a string', () => {
    expect(toString(42)).to.equal('42');
  });

  // Test case 7
  it('should convert a boolean to a string', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });

  // Negative Test case 2
it('should not convert a non-undefined value to an empty string', () => {
  const nonUndefinedValue = 42;
  expect(toString(nonUndefinedValue)).to.not.equal('');
});

});