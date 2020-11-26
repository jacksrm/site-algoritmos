"use strict";Object.defineProperty(exports, "__esModule", {value: true});const fibonacci = (quantidade) => {
  if (typeof quantidade === 'string') parseInt(quantidade);

  let numAnt = 0;
  let numAtual = 1;
  let proxNum;
  let saida = '';

  if (quantidade === 1) saida = numAnt;

  if (quantidade === 2) saida = `${numAnt} ${numAtual}`;

  if (quantidade > 2) {
    saida = `${numAnt} ${numAtual} `;

    for (let i = 2; i < quantidade; i++) {
      proxNum = numAnt + numAtual;
      numAnt = numAtual;
      numAtual = proxNum;

      saida += `${numAtual} `;
    }
  }

  return saida;
};

exports. default = fibonacci;
