export function deleteObject(obj: any, condition: (value: any) => boolean) {
  if (typeof obj === "object") {
    for (const key in obj) {
      const inObj = obj[key];
      if (condition(inObj)) {
        delete obj[key];
      }

      if (typeof inObj === "object") {
        deleteObject(inObj, condition);
      }
    }
  }
}