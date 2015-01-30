"use strict";

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

exports.select = select;
var doc = document.body,
    curry = require("fj-curry").curry,
    isDom = require("is-dom");

function select(dom, selector) {
  if (typeof dom === "string") {
    return [].concat(_toArray(doc.querySelectorAll(dom)));
  }
  // needs a isDom check.
  if (isDom(dom) && selector) {
    return [].concat(_toArray(dom.querySelectorAll(selector)));
  }
  return curry(select)(dom);
}
exports.__esModule = true;