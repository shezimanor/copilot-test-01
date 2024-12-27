import { describe, it, expect } from 'vitest';
import groupBy from './groupBy';

describe('groupBy', () => {
  it('應該根據給定的鍵來分組項目', () => {
    const collection = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' }
    ];
    const result = groupBy(collection, (item) => item.category);
    expect(result).toEqual({
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' }
      ],
      vegetable: [{ category: 'vegetable', name: 'carrot' }]
    });
  });

  it('應該在沒有提供迭代器時根據其值分組項目', () => {
    const collection = [1, 2, 1, 3];
    const result = groupBy(collection);
    expect(result).toEqual({
      1: [1, 1],
      2: [2],
      3: [3]
    });
  });

  it('應該處理空集合', () => {
    const collection: any[] = [];
    const result = groupBy(collection, (item) => item.category);
    expect(result).toEqual({});
  });

  it('應該處理只有一個項目的集合', () => {
    const collection = [{ category: 'fruit', name: 'apple' }];
    const result = groupBy(collection, (item) => item.category);
    expect(result).toEqual({
      fruit: [{ category: 'fruit', name: 'apple' }]
    });
  });
});
