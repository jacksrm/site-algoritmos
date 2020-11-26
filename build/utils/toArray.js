"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function toArray(string) {
  const array = string.split(',').map((el) => {
    el = parseFloat(el);
    if (!el) el = 0;
    return el;
  });

  return array;
} exports.default = toArray;