"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var curry4 = require("fj-curry").curry4;
var isDom = _interopRequire(require("fd-isdom"));

var cond = _interopRequire(require("fj-cond"));

var always = _interopRequire(require("fj-always"));

var and = _interopRequire(require("fj-and"));




var ELSE = always(true);

function toArray(arr) {
  return Array.prototype.slice.call(arr);
}

function identity(arr) {
  return arr;
}

function isString() {
  return function (obj) {
    return typeof obj === "string";
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
  return cond([[isString(), function () {
    return wrap(queryFn(document, dom));
  }], [and(isDom(), function () {
    return !!selector;
  }), function () {
    return wrap(queryFn(dom, selector));
  }], [isDom(), function () {
    return curry4(_select)(queryFn)(wrap)(dom);
  }], [ELSE, wrongType]])(dom);
}

var select = exports.select = function (dom, selector) {
  return _select(queryAll, toArray, dom, selector);
};

var selectOne = exports.selectOne = function (dom, selector) {
  return _select(queryOne, identity, dom, selector);
};
exports.__esModule = true;