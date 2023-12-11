// Import the 'capitalize' function
import capitalize from '../src/capitalize.js';

// Import necessary modules from Mocha and Chai
import { describe, it } from 'mocha';
import { expect } from 'chai';

// Describe the test suite for the 'capitalize' function
describe('capitalize.js', () => {
  // Test case 1
  it('Capitalize the first letter of a word', () => {
    expect(capitalize('apple')).to.equal('Apple');
  });

  // Test case 2
  it('Capitalize the first letter of a sentence', () => {
    expect(capitalize('hello world')).to.equal('Hello world');
  });

  // Test case 3
  it('Handle an empty string', () => {
    expect(capitalize('')).to.equal('');
  });

  // Test case 4
  it('Handle a string with only one character', () => {
    expect(capitalize('a')).to.equal('A');
  });

  // Test case 5
  it('Handle a string with all uppercase characters', () => {
    expect(capitalize('FOO')).to.equal('Foo');
  });

  // Test case 6
  it('Handle a string with all lowercase characters', () => {
    expect(capitalize('bar')).to.equal('Bar');
  });

  // Test case 7
  it('Handle a string with leading and trailing spaces', () => {
    expect(capitalize('  test  ')).to.equal('  test  ');
  });
  
  // Additional Test case 8
  it('Handle a string with mixed case characters', () => {
    expect(capitalize('MiXeD')).to.equal('Mixed');
  });

  // Additional Test case 9
  it('Handle a sentence with mixed case words', () => {
    expect(capitalize('the qUick brown fox')).to.equal('The quick brown fox');
  });

  // Additional Test case 10
  it('Handle a string with non-alphabetic characters', () => {
    expect(capitalize('123abc')).to.equal('123abc');
  });
});
