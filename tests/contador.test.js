import contador from '../src/utils/contador';

describe('Conta quantos números inteiros entre 1 (incluso) e N (incluso) existem', () => {
  it('Esperado contar a quantidade de inteiros', () => {
    const num = 15.5;
    const result = contador(num);

    expect(result).toBe(15);
  });
  
  it('Esperado NaN ao contar', () => {
    const num = 'string';
    const result = contador(num);
  
    expect(result).toBeNaN();
  });
});