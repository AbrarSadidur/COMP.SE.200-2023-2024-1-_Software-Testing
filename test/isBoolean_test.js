// Import the 'isBoolean' function
import isBoolean from '../src/isBoolean.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'isBoolean' function
describe('isBoolean.js', () => {
  // Test case 1
  it('should return true for boolean primitive true', () => {
    expect(isBoolean(true)).to.be.true;
  });

  // Test case 2
  it('should return true for boolean primitive false', () => {
    expect(isBoolean(false)).to.be.true;
  });

  // Test case 3
  it('should return false for null', () => {
    expect(isBoolean(null)).to.be.false;
  });

  // Test case 4
  it('should return false for a number', () => {
    expect(isBoolean(42)).to.be.false;
  });

  // Test case 5
  it('should return false for a string', () => {
    expect(isBoolean('true')).to.be.false;
  });

  // Test case 6
  it('should return false for an object', () => {
    expect(isBoolean({})).to.be.false;
  });

  // Test case 7
  it('should return false for an array', () => {
    expect(isBoolean([true])).to.be.false;
  });

  // Test case 8
  it('should return false for undefined', () => {
    expect(isBoolean(undefined)).to.be.false;
  });

  // Test case 9
  it('should return false for a function', () => {
    expect(isBoolean(() => true)).to.be.false;
  });

  // Test case 10
  it('should return false for a symbol', () => {
    expect(isBoolean(Symbol('test'))).to.be.false;
  });

  // Test case 11
  it('should return false for NaN', () => {
    expect(isBoolean(NaN)).to.be.false;
  });

  // Test case 12
  it('should return false for Infinity', () => {
    expect(isBoolean(Infinity)).to.be.false;
  });
});
