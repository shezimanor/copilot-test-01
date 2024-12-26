import { describe, it, expect } from 'vitest';
import { deepClone } from './deepClone';

describe('deepClone', () => {
  it('should return the same primitive value', () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('should clone an array', () => {
    const arr = [1, 2, 3];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
  });

  it('should clone a nested array', () => {
    const arr = [1, [2, 3], 4];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
  });

  it('should clone an object', () => {
    const obj = { a: 1, b: 2 };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  it('should clone a nested object', () => {
    const obj = { a: 1, b: { c: 2, d: 3 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  it('should handle circular references', () => {
    const obj: any = { a: 1 };
    obj.self = obj;
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.self).toBe(clonedObj);
  });
});
