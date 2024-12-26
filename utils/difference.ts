export function difference(array1: any[], array2: any[]): any[] {
  return array1.filter((value) => !array2.includes(value));
}
