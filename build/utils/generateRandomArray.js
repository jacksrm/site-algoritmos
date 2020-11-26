"use strict";Object.defineProperty(exports, "__esModule", {value: true});const generateRandomArray = (min, max, size) => {
  const array = [];

  for (let i = 0; i < size; i++)
    array.push(Math.floor(Math.random() * (max - min + 1) + min));

  return array;
};

exports. default = generateRandomArray;
