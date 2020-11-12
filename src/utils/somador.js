const somador = (array) => {
  if (typeof array === 'string')
    array = array.split(',').map((el) => {
      el = parseFloat(el);
      if (!el) el = 0;
      return el;
    });

  return array.reduce((soma, el) => (soma += el));
};

export default somador;
