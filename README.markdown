# fd-select

[![Build Status](https://travis-ci.org/fp-dom/fd-select.svg)](https://travis-ci.org/fp-dom/fd-select) [![npm version](https://badge.fury.io/js/fd-select.svg)](http://badge.fury.io/js/fd-select)
> Select DOM elements, FD style.


## Installation

`npm install fd-select --save`

## Usage

```js
var select = require('fd-select').select;
var selectOne = require('fd-select').selectOne;

var foo = select(document)('.foo');
// or
var foo = select('.foo');
// ^ foo is an array!

var foo = selectOne('.foo');
// ^ foo is the first element!
```
