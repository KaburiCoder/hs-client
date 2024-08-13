export const getLoopItems = (store: any, items: string[], i: number) => {
  const isLast = i === items.length - 1;
  const number = i + 1;
  const key = `n${number}` as any;
  const nextKey = isLast
    ? key
    : (`n${number + 1}` as any);

  const value = (store as any)[key];
  const setValueFn = (store as any)[`setN${number}`];

  return {
    key, nextKey, value, setValueFn, number
  }
}