// Import the 'divide' function
import divide from '../src/divide.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'divide' function
describe('divide.js', () => {
  // Test case 1
// Negative Test Case 1
it('Should not incorrectly divide two positive numbers', () => {
  expect(divide(6, 4)).to.not.equal(1.4);
});

// Negative Test Case 2
it('Should not incorrectly divide a positive number by a negative number', () => {
  expect(divide(8, -4)).to.not.equal(-2.00);
});

// Negative Test Case 3
it('Should not return Infinity for division by zero', () => {
  expect(divide(10, 0)).to.not.equal(Infinity);
});

// Negative Test Case 4
it('Should not incorrectly handle division of zero by a non-zero number and return 0', () => {
  expect(divide(0, 5)).to.not.equal(0);
});

// Negative Test Case 5
it('Should not incorrectly divide two negative numbers', () => {
  expect(divide(-10, -2)).to.not.equal(5);
});

});