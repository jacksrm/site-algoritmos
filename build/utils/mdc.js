"use strict";Object.defineProperty(exports, "__esModule", {value: true});const mdc = (num1, num2) => {
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
  }

  let teto = num1 <= num2 ? num1 : num2;

  for (teto; teto >= 1; teto--) {
    let resto1 = num1 % teto;
    let resto2 = num2 % teto;

    if (resto1 === 0 && resto2 === 0) return teto;
  }
};

exports. default = mdc;
