function _render(vnode) {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    for (const key in vnode.attrs) {
      dom.setAttribute(key, vnode.attrs[key]);
    }
  }
  if (vnode.children) {
    vnode.children.forEach((newVNode) => {
      dom.appendChild(_render(newVNode));
    });
  }
  return dom;
}
