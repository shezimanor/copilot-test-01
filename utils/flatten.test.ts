import { describe, it, expect } from 'vitest';
import { flatten } from './flatten';

describe('flatten', () => {
  it('應該將嵌套陣列扁平化一層', () => {
    const input = [1, [2, 3], [4, 5]];
    const output = flatten(input);
    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  it('應該處理空陣列', () => {
    const input: any[] = [];
    const output = flatten(input);
    expect(output).toEqual([]);
  });

  it('應該處理已經扁平化的陣列', () => {
    const input = [1, 2, 3, 4, 5];
    const output = flatten(input);
    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  it('應該處理包含空陣列的陣列', () => {
    const input = [1, [], 2, [3, 4], []];
    const output = flatten(input);
    expect(output).toEqual([1, 2, 3, 4]);
  });

  it('應該處理不同類型的元素', () => {
    const input = [1, ['a', 'b'], true, [false, null]];
    const output = flatten(input);
    expect(output).toEqual([1, 'a', 'b', true, false, null]);
  });
});
