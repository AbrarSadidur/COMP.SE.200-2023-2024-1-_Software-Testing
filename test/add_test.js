// Import the 'add' function
import add from '../src/add.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'add' function
describe('add.js', () => {
  // Test case 1
  it('Add two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });

  // Test case 2
  it('Add a positive and a negative number', () => {
    expect(add(6, -4)).to.equal(2);
  });

  // Test case 3
  it('Add two negative numbers', () => {
    expect(add(-6, -4)).to.equal(-10);
  });

  // Test case 4
  it('Add a positive number and zero', () => {
    expect(add(6, 0)).to.equal(6);
  });

  // Test case 5
  it('Add zero and a negative number', () => {
    expect(add(0, -4)).to.equal(-4);
  });
  
  // Additional Test case 6
  it('Add two floating-point numbers', () => {
    expect(add(3.14, 2.86)).to.equal(6);
  });

  // Additional Test case 7
  it('Add a positive and a zero', () => {
    expect(add(5, 0)).to.equal(5);
  });

  // Additional Test case 8
  it('Add two large positive numbers', () => {
    expect(add(999999999, 1)).to.equal(1000000000);
  });

  // Additional Test case 9
  it('Add two large negative numbers', () => {
    expect(add(-999999999, -1)).to.equal(-1000000000);
  });
  
  it('should add two numbers', () => {
    expect(add(2, 3)).toEqual(5);
    expect(add(0, 0)).toEqual(0);
    expect(add(-1, 1)).toEqual(0);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('should return NaN if any argument is not a number', () => {
    expect(add(2, '3')).toBeNaN();
    expect(add('2', 3)).toBeNaN();
    expect(add('2', '3')).toBeNaN();
    expect(add(NaN, 3)).toBeNaN();
    expect(add(2, NaN)).toBeNaN();
  });
});
