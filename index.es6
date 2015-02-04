import { curry2 } from 'fj-curry';
import isDom from 'fd-isDom';
import ifElse from 'fj-ifelse';
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
  return ifElse(
    isString(),
    () => of(document.querySelectorAll(dom)),
    (dom) => ifElse(
      and(isDom(), () => !!selector),
      () => of(dom.querySelectorAll(selector)),
      (dom) => ifElse(
        isDom(),
        () => curry2(select)(dom),
        wrongType
      )(dom)
    )(dom)
  )(dom);
}
