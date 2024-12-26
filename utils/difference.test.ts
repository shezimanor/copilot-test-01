import { describe, it, expect } from 'vitest';
import difference from './difference';

describe('difference 函式', () => {
  it('應該回傳在第一個陣列中但不在第二個陣列中的元素', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    const result = difference(array1, array2);
    expect(result).toEqual([1, 2]);
  });

  it('應該回傳空陣列如果第一個陣列是空的', () => {
    const array1: any[] = [];
    const array2 = [1, 2, 3];
    const result = difference(array1, array2);
    expect(result).toEqual([]);
  });

  it('應該回傳第一個陣列如果第二個陣列是空的', () => {
    const array1 = [1, 2, 3];
    const array2: any[] = [];
    const result = difference(array1, array2);
    expect(result).toEqual([1, 2, 3]);
  });

  it('應該回傳空陣列如果兩個陣列相同', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    const result = difference(array1, array2);
    expect(result).toEqual([]);
  });

  it('應該處理包含不同資料型別的陣列', () => {
    const array1 = [1, '2', true, null];
    const array2 = [true, null, 3];
    const result = difference(array1, array2);
    expect(result).toEqual([1, '2']);
  });
});
