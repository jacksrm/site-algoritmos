const primo = (numero) => {
  if (typeof numero === 'string') numero = parseInt(numero);

  for (let i = 2; i < numero; i++) {
    let aux = numero % i;

    if (aux === 0) return false;
  }

  return numero > 1;
};

export default primo;
