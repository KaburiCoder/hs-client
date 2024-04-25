export function convertBoolToInt(bool: boolean | undefined) {
  if (bool === undefined) {
    return undefined;
  }
  return bool ? 1 : 0;
}
