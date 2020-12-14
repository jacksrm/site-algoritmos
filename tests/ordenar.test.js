import quick from '../src/utils/ordenar';

describe('Ordenar', () => {
  it('Esperado ordenar um array', () => {
    const array = [4, 5, 1, 0, 1];
    const ordenado = quick(array);

    expect(ordenado).toEqual(expect.arrayContaining([0, 1, 1, 4, 5]));
  });

  it('Esperado um array ordenado com sete posições', () => {
    const array = [4, 5, 1, 0, 1, , ,];
    const ordenado = quick(array);
    expect(ordenado).toHaveLength(7);
  });
});
