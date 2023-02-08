function myDeep(obj, hash = new WeakMap()) {
  if (!obj || typeof obj !== "object") return obj;
  let constructor = obj.constructor;
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
    return new constructor(obj);
  if (hash.has(obj)) return hash.get(obj);
  let object = Array.isArray(obj) ? [] : {};
  hash.set(obj, object);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      object[key] = myDeep(obj[key], hash);
    }
  }
  return object;
}
