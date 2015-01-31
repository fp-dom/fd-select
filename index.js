"use strict";

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

exports.select = select;
var curry = require("fj-curry").curry,
    isDom = require("is-dom");
require("6to5/polyfill");

function select(dom, selector) {
  if (typeof dom === "string") {
    return [].concat(_toArray(document.querySelectorAll(dom)));
  }

  if (isDom(dom) && selector) {
    return [].concat(_toArray(dom.querySelectorAll(selector)));
  }
  return curry(select)(dom);
}
exports.__esModule = true;