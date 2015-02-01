import { curry2 } from 'fj-curry';
import isDom from 'fd-isDom';
import ifElse from 'fj-ifelse';
import and from 'fj-and';


function of(arr) {
  return Array.prototype.slice.call(arr);
}

function isString(obj) {
  return () => {
    return typeof obj === 'string';
  };
}

function wrongType() {
  throw new TypeError();
}

export function select(dom, selector) {
  return ifElse(
    isString(dom),
    () => of(document.querySelectorAll(dom)),
    () => ifElse(
      and(isDom(dom), () => !!selector),
      () => of(dom.querySelectorAll(selector)),
      () => ifElse(
        isDom(dom),
        () => curry2(select)(dom),
        wrongType
      )
    )
  );
}
