/**
 * 將陣列扁平化一層
 * @param arr - 要扁平化的陣列
 * @returns 扁平化後的陣列
 */
export function flatten<T>(arr: T[]): T[] {
  return arr.reduce((acc: T[], val: T) => acc.concat(val), []);
}
