import quick from '../src/utils/ordenar';
import toArray from '../src/utils/toArray';

describe('Ordenação', () => {
  it('Esperado ordenar um array', () => {
    const array = [4, 5, 1, 0, 1];
    const ordenado = quick(array);

    expect(ordenado).toEqual(expect.arrayContaining([0, 1, 1, 4, 5]));
  });

  it('Esperado um array ordenado com sete posições', () => {
    const arrayErro = '4,5,1,0,1, ,a';
    const arrayCerto = toArray(arrayErro);
    const ordenado = quick(arrayCerto);

    expect(ordenado).toHaveLength(7);
  });
});
