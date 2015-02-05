import { curry4 } from 'fj-curry';
import isDom from 'fd-isdom';
import cond from 'fj-cond';
import always from 'fj-always';
import and from 'fj-and';


let ELSE = always(true);

function toArray(arr) {
  return Array.prototype.slice.call(arr);
}

function identity(arr) {
  return arr;
}

function isString() {
  return (obj) => {
    return typeof obj === 'string';
  };
}

function wrongType() {
  throw new TypeError();
}

function queryAll(dom, selector) {
  return dom.querySelectorAll(selector);
}

function queryOne(dom, selector) {
  return dom.querySelector(selector);
}

function _select(queryFn, wrap, dom, selector) {
  return cond([
    [isString(), () => wrap(queryFn(document, dom))],
    [and(isDom(), () => !!selector), () => wrap(queryFn(dom, selector))],
    [isDom(), () => curry4(_select)(queryFn)(wrap)(dom)],
    [ELSE, wrongType]
  ])(dom);
}

export let select = (dom, selector) => _select(queryAll, toArray, dom, selector);

export let selectOne = (dom, selector) => _select(queryOne, identity, dom, selector);
