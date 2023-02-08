function _myget(obj, path, defaultValue = "undefined") {
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  return (
    newPath.reduce((o, k) => {
      return (o || {})[k];
    }, obj) || defaultValue
  );
}
var object = { a: [{ b: { c: 3 } }] };

console.log(_myget(object, "a[0].b.c"));
// => 3

console.log(_myget(object, ["a", "0", "b", "c"]));
// => 3

console.log(_myget(object, "a.b.c", "default"));
// => 'default'
