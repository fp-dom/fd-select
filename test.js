"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var select = require("./").select;



it("fp-select", function () {
  var HTML = "\n    <ul data-foo=\"bar\" class=\"fruits\">\n    <li class=\"fruit\">apple</li>\n    <li class=\"fruit\">orange</li>\n    <li class=\"fruit\">plum</li>\n    </ul>\n  ";
  var fixture = document.createElement("div");
  fixture.innerHTML = HTML;
  document.body.appendChild(fixture);

  assert.equal(select(".fruits").length, 1);
  assert.equal(select(".fruits")[0].dataset.foo, "bar");
  assert.equal(select(fixture, ".fruits").length, 1);
  assert.equal(select(fixture, ".fruits")[0].dataset.foo, "bar");
  assert.equal(select(fixture)(".fruits").length, 1);
  try {
    select(null);
    assert.ok(false);
  } catch (e) {
    assert.ok(true);
  }
});