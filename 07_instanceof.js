function myInstance(obj, proto) {
  let proto1 = Object.getPrototypeOf(obj);
  let proto2 = proto.prototype;
  while (1) {
    if (proto1 == null) return false;
    if (proto1 == proto2) return true;
    proto1 = Object.getPrototypeOf(proto1);
  }
}
