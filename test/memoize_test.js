// Import the 'memoize' function
import memoize from '../src/memoize.js';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('memoize', () => {
  it('should memoize a function', () => {
    let callCount = 0;

    const originalFunction = (a, b) => {
      callCount++;
      return a + b;
    };

    const memoizedFunction = memoize(originalFunction);

    // First call
    const result1 = memoizedFunction(2, 3);
    expect(result1).to.equal(5);
    expect(callCount).to.equal(1);

    // Second call with the same arguments
    const result2 = memoizedFunction(2, 3);
    expect(result2).to.equal(5);
    expect(callCount).to.equal(1); // Should not increment callCount

    // Third call with different arguments
    const result3 = memoizedFunction(4, 5);
    expect(result3).to.equal(9);
    expect(callCount).to.equal(2); // Should increment callCount
  });

  it('should support a custom resolver function', () => {
    const resolver = (a, b) => a + '-' + b;

    let callCount = 0;
    const originalFunction = (a, b) => {
      callCount++;
      return a + b;
    };

    const memoizedFunction = memoize(originalFunction, resolver);

    // First call
    const result1 = memoizedFunction(2, 3);
    expect(result1).to.equal(5);
    expect(callCount).to.equal(1);

    // Second call with the same resolved key
    const result2 = memoizedFunction(2, 3);
    expect(result2).to.equal(5);
    expect(callCount).to.equal(1);

    // Third call with different resolved key
    const result3 = memoizedFunction(4, 5);
    expect(result3).to.equal(9);
    expect(callCount).to.equal(2);
  });

  it('should throw an error for invalid input', () => {
    const invalidInputs = [null, undefined, 42, 'string', {}, []];

    invalidInputs.forEach((invalidInput) => {
      expect(() => memoize(invalidInput)).to.throw(TypeError, 'Expected a function');
    });
 
});
});

