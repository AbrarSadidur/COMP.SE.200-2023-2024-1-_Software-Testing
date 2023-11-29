// Import the 'isEmpty' function
import isEmpty from '../src/isEmpty.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'isEmpty' function
describe('isEmpty function', () => {
  // Test case 1
  it('should return true for null', () => {
    expect(isEmpty(null)).to.be.true;
  });

  // Test case 2
  it('should return true for true', () => {
    expect(isEmpty(true)).to.be.true;
  });

  // Test case 3
  it('should return true for 1', () => {
    expect(isEmpty(1)).to.be.true;
  });

  // Test case 4
  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  // Test case 5
  it('should return false for a non-empty string', () => {
    expect(isEmpty('abc')).to.be.false;
  });

  // Test case 6
  it('should return false for a non-empty object', () => {
    expect(isEmpty({ 'a': 1 })).to.be.false;
  });

  // Test case 7
  it('should return true for an empty array', () => {
    expect(isEmpty([])).to.be.true;
  });

  // Test case 8
  it('should return true for an empty string', () => {
    expect(isEmpty('')).to.be.true;
  });

  // Test case 9
  it('should return true for an empty object', () => {
    expect(isEmpty({})).to.be.true;
  });

  // Test case 10
  it('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).to.be.true;
  });

  // Test case 11
  it('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).to.be.true;
  });

  // Test case 12
  it('should return true for an empty Buffer', () => {
    expect(isEmpty(Buffer.from(''))).to.be.true;
  });

  // Test case 13
  it('should return true for an empty typed array', () => {
    expect(isEmpty(new Int8Array())).to.be.true;
  });

  // Test case 14
  it('should return true for an empty arguments object', function() {
    expect(isEmpty(arguments)).to.be.true;
  });

  // Test case 15
  it('should return true for an empty prototype object', () => {
    expect(isEmpty(Object.create(null))).to.be.true;
  });

  // Test case 16
  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).to.be.true;
  });
});
