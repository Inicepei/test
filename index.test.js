import { describe, it, expect } from 'vitest';
import { add, isEven, capitalize } from './index.js';

describe('math', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });
});

describe('isEven', () => {
  it('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  it('returns false for odd or non-number', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven('2')).toBe(false);
  });
});

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns empty string for non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});
