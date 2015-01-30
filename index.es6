const doc = document.body,
  curry = require('fj-curry').curry,
  isDom = require('is-dom'),
  slice = [].slice,
  sliceIt = (nodeList) => slice.call(nodeList);

export function select(dom, selector) {

  if(typeof dom === 'string') {
    return sliceIt(doc.querySelectorAll(dom));
  }

  if (isDom(dom) && selector) {
    return sliceIt(dom.querySelectorAll(selector));
  }

  return curry(select)(dom);
}
