/**
 * This is a function to remove some fields from an object
 * @param {Model} record - input object.
 * @param {Key[]} keys - list of fields in object need to be removed.
 * @returns {Model} result - The new object.
 */
export function exclude<Model, Key extends keyof Model>(
  record: Model,
  keys: Key[],
): Omit<Model, Key> {
  for (const key of keys) {
    delete record[key];
  }
  return record;
}
