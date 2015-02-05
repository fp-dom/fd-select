import { curry2 } from 'fj-curry';
import isDom from 'fd-isDom';
import cond from 'fj-cond';
import always from 'fj-always';
import and from 'fj-and';


function of(arr) {
  return Array.prototype.slice.call(arr);
}

function isString() {
  return (obj) => {
    return typeof obj === 'string';
  };
}

function wrongType() {
  throw new TypeError();
}

export function select(dom, selector) {
  return cond([
    [isString(), () => of(document.querySelectorAll(dom))],
    [and(isDom(), () => !!selector), () => of(dom.querySelectorAll(selector))],
    [isDom(), () => curry2(select)(dom)],
    [always(true), wrongType]
  ])(dom);
}
