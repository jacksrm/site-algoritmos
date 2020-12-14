import somador from '../src/utils/somador';

describe('Soma um array', () => {
  it('Esperado somar um array', () => {
    const array = [1,2,3,4,5];
    const soma = somador(array);
    
    expect(soma).toBe(15);
  });
  
  it('Esperado soma não ser número', () => {
    const arrayString = ['asdasd,asdasdasd,sdfsdfsdf, false'];
    const soma = somador(arrayString);
    expect(soma).not.toBeInstanceOf(Number);
  });
});