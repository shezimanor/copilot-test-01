export function deepClone<T>(obj: T, map = new WeakMap()): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  if (Array.isArray(obj)) {
    const clonedArray = obj.map((item) => deepClone(item, map)) as unknown as T;
    map.set(obj, clonedArray);
    return clonedArray;
  }

  const clonedObj = {} as T;
  map.set(obj, clonedObj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key], map);
    }
  }

  return clonedObj;
}
