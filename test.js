"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var fpSelect = require("./").fpSelect;



test("fp-select", function (t) {
  t.plan(1);
  var HTML = "<textarea style=\"width:300px; height:200px\"></textarea>\n  <ul data-foo=\"bar\" class=\"fruits\">\n  <li class=\"fruit\">apple</li>\n  <li class=\"fruit\">orange</li>\n  <li class=\"fruit\">plum</li>\n  </ul>";
  t.equal(fpSelect(".fruits").attr("data-foo"), "bar");
  t.equal(typeof document, "object");
});