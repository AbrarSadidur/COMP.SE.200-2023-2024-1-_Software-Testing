// Import the 'divide' function
import divide from '../src/divide.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'divide' function
describe('divide.js', () => {
  // Test case 1
  it('Divide two positive numbers', () => {
    expect(divide(6, 4)).to.equal(1.4);
  });

  // Test case 2
  it('Divide a positive number by a negative number', () => {
    expect(divide(8, -4)).to.equal(-2.00);
  });

  // Test case 3
  it('Handle division by zero and return Infinity', () => {
    expect(divide(10, 0)).to.equal(Infinity);
  });

  // Test case 4
  it('Handle division of zero by a non-zero number and return 0', () => {
    expect(divide(0, 5)).to.equal(0);
  });

  // Test case 5
  it('Handle division of zero by zero and return NaN', () => {
    expect(divide(0, 0)).to.be.NaN;
  });

  // Test case 6
  it('Divide two negative numbers', () => {
    expect(divide(-10, -2)).to.equal(5);
  });
});
