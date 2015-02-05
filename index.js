"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.select = select;
var curry2 = require("fj-curry").curry2;
var isDom = _interopRequire(require("fd-isDom"));

var cond = _interopRequire(require("fj-cond"));

var always = _interopRequire(require("fj-always"));

var and = _interopRequire(require("fj-and"));




function of(arr) {
  return Array.prototype.slice.call(arr);
}

function isString() {
  return function (obj) {
    return typeof obj === "string";
  };
}

function wrongType() {
  throw new TypeError();
}

function select(dom, selector) {
  return cond([[isString(), function () {
    return of(document.querySelectorAll(dom));
  }], [and(isDom(), function () {
    return !!selector;
  }), function () {
    return of(dom.querySelectorAll(selector));
  }], [isDom(), function () {
    return curry2(select)(dom);
  }], [always(true), wrongType]])(dom);
}
exports.__esModule = true;