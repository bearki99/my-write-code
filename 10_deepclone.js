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

function myDeepClone(obj, map = new WeakMap()) {
  if (typeof obj !== "object" || !obj) return obj;
  const constuctor = obj.constructor;
  if (/^(Function | Set | Map | Date | RegExp)$/i.test(constuctor.name))
    return new constuctor(obj);
  if (map.has(obj)) return map.get(obj);
  const target = Array.isArray(obj) ? [] : {};
  map.set(obj, target);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) target[key] = myDeepClone(obj[key], map);
  }
  return target;
}

function myDeepCloneV(obj, hash = new WeakMap()) {
  if (!obj || typeof obj !== "object") return obj;
  const constructor = obj.constructor;
  if (/^(Function|Date|Set|Map|RegExp)$/i.test(constructor.name))
    return new constructor(obj);
  if(hash.has(obj)) return hash.get(obj);
  const target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      target[key] = myDeepCloneV(obj[key], hash);
    }
  }
  return target;
}
