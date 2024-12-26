export default (
  collection: any[],
  iteratee: (value: any) => any = (value) => value
): { [key: string]: any[] } => {
  return collection.reduce((result, value) => {
    const key = iteratee(value);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(value);
    return result;
  }, {});
};
