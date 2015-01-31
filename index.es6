const curry = require('fj-curry').curry,
  isDom = require('is-dom');
require('6to5/polyfill');

export function select(dom, selector) {
  if(typeof dom === 'string') {
    return [ ... document.querySelectorAll(dom) ];
  }

  if (isDom(dom) && selector) {
    return [ ... dom.querySelectorAll(selector) ];
  }
  return curry(select)(dom);
}
