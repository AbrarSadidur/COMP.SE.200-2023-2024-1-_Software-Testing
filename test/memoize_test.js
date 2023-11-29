// Import the 'memoize' function
import memoize from '../src/memoize.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'memoize' function
describe('memoize function', () => {
  // Test case 1
  it('should memoize the result of the function', () => {
    const mockFunction = sinon.fake.returns('result');
    const memoizedFunction = memoize(mockFunction);

    // First call should invoke the original function
    const result1 = memoizedFunction('arg1', 'arg2');
    expect(result1).to.equal('result');
    expect(mockFunction.calledOnce).to.be.true;

    // Second call with the same arguments should return the cached result
    const result2 = memoizedFunction('arg1', 'arg2');
    expect(result2).to.equal('result');
    expect(mockFunction.calledOnce).to.be.true;

    // The cache property should be available
    expect(memoizedFunction.cache instanceof Map).to.be.true;
  });

  // Test case 2
  it('should allow custom resolver function', () => {
    const mockFunction = sinon.fake.returns('result');
    const resolver = (...args) => args.join('-');
    const memoizedFunction = memoize(mockFunction, resolver);

    const result1 = memoizedFunction('arg1', 'arg2');
    expect(result1).to.equal('result');
    expect(mockFunction.calledOnce).to.be.true;

    const result2 = memoizedFunction('arg1', 'arg2');
    expect(result2).to.equal('result');
    expect(mockFunction.calledOnce).to.be.true;

    // The cache key should be based on the custom resolver
    expect(memoizedFunction.cache.has('arg1-arg2')).to.be.true;
  });

  // Test case 3
  it('should handle custom cache constructor', () => {
    const mockFunction = sinon.fake.returns('result');
    const CustomCache = class CustomMap extends Map {
      // Custom cache logic if needed
    };
    memoize.Cache = CustomCache;

    const memoizedFunction = memoize(mockFunction);

    const result1 = memoizedFunction('arg1', 'arg2');
    expect(result1).to.equal('result');
    expect(memoizedFunction.cache instanceof CustomCache).to.be.true;
  });

  // Test case 4
  it('should throw an error if not passed a function', () => {
    // Memoize requires a function as its first argument
    expect(() => memoize('not a function')).to.throw(TypeError, 'Expected a function');
  });

  // Test case 5
  it('should throw an error if resolver is provided and is not a function', () => {
    // Resolver, if provided, should be a function
    const mockFunction = sinon.fake();
    expect(() => memoize(mockFunction, 'not a function')).to.throw(TypeError, 'Expected a function');
  });
});
