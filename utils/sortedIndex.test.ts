import { describe, it, expect } from 'vitest';
import sortedIndex from './sortedIndex';

describe('sortedIndex', () => {
  it('應該返回正確的索引以將值插入排序陣列', () => {
    const array = [10, 20, 30, 40, 50];
    const value = 35;
    const expectedIndex = 3;
    const result = sortedIndex(array, value);
    expect(result).toBe(expectedIndex);
  });

  it('應該返回 0 以插入小於所有元素的值', () => {
    const array = [10, 20, 30, 40, 50];
    const value = 5;
    const expectedIndex = 0;
    const result = sortedIndex(array, value);
    expect(result).toBe(expectedIndex);
  });

  it('應該返回陣列的長度以插入大於所有元素的值', () => {
    const array = [10, 20, 30, 40, 50];
    const value = 55;
    const expectedIndex = array.length;
    const result = sortedIndex(array, value);
    expect(result).toBe(expectedIndex);
  });

  it('應該處理空陣列', () => {
    const array: any[] = [];
    const value = 10;
    const expectedIndex = 0;
    const result = sortedIndex(array, value);
    expect(result).toBe(expectedIndex);
  });
});
