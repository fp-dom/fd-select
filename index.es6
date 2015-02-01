import * as to5 from '6to5/polyfill';

import { curry2 } from 'fj-curry';
import isDom from 'fd-isDom';
import ifElse from 'fj-ifelse';
import and from 'fj-and';


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
    () => [ ... document.querySelectorAll(dom) ],
    () => ifElse(
      and(isDom(dom), () => !!selector),
      () => [ ... dom.querySelectorAll(selector) ],
      () => ifElse(
        isDom(dom),
        () => curry2(select)(dom),
        wrongType
      )
    )
  );
}
