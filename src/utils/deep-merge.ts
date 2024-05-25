/**
 * Recursively merges properties from a source object into a target object.
 * Note: This function mutates the target object.
 *
 * @param {any} target - The target object to which properties will be merged.
 * @param {any} source - The source object from which properties will be merged.
 * If a property value is an object (excluding arrays), it will be merged into the corresponding target property.
 * Otherwise, the property value will be copied over to the target object, overwriting any existing property with the same key.
 */
export function deepMerge(target: any, source: any) {
  Object.keys(source).forEach((key) => {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !(source[key] instanceof Array)
    ) {
      if (!target[key]) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
}
