import { describe, it, expect } from 'vitest';
import groupBy from './groupBy';

describe('groupBy', () => {
  it('should group items by a given key', () => {
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

  it('should group items by their value when no iteratee is provided', () => {
    const collection = [1, 2, 1, 3];
    const result = groupBy(collection);
    expect(result).toEqual({
      1: [1, 1],
      2: [2],
      3: [3]
    });
  });

  it('should handle an empty collection', () => {
    const collection: any[] = [];
    const result = groupBy(collection, (item) => item.category);
    expect(result).toEqual({});
  });

  it('should handle a collection with one item', () => {
    const collection = [{ category: 'fruit', name: 'apple' }];
    const result = groupBy(collection, (item) => item.category);
    expect(result).toEqual({
      fruit: [{ category: 'fruit', name: 'apple' }]
    });
  });
});
