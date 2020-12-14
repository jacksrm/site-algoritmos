import mdc from '../src/utils/mdc';

describe('Fazer MDC dos números', () => {
  it('Esperado fazer o MDC dos números escolhidos', () => {
    const Num1 = 10;
    const Num2 = 12;
    const result = mdc(Num1, Num2);

    expect(result).toBe(2);
  });
  
  it('Esperado fazer o MDC dos números escolhidos', () => {
    const Num1 = 'sdadsadsa';
    const Num2 = 'sdadsada';
    const result = mdc(Num1, Num2);

    expect(result).toBe(undefined);
  });
});
