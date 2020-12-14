import toArray from '../src/utils/toArray';

describe('Transforma uma string formatada em array', () => {
  it('Esperado transformar a string em array', () => {
    const arrayString = '1,2,3,4,5,,,,,,';
    const array = toArray(arrayString);
    const esperado = [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0];

    expect(array).toEqual(
      expect.arrayContaining(esperado)
    );
  });
});
