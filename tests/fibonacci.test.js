import fibonacci from '../src/utils/fibonacci';

describe('Mostrar a saida da sequencia de fibonacci', () => {
  it('Esperado mostrar a sequencia de fibonacci', () => {
    const quantidade = 5;
    const sequencia = fibonacci(quantidade);

    expect(sequencia).toBe('0 1 1 2 3 ');
  });

  it('Esperado falha ao mostrar sequencia', () => {
    const quantidade = 's';
    const sequencia = fibonacci(quantidade);

    expect(sequencia).toBe('');
  });
});