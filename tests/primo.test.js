
import primo from '../src/utils/primo';

describe('Retorna se o número digitado é pertencente a família de numeros primos', () => {
    it('Almeja-se que retorne um valor falso', () => {
        const num = 16;
        const isPrimo = primo(num);

        expect(isPrimo).toBeFalsy();
    });

    it('Almeja-se que retorne um valor verdadeiro', () => {
        const num = 2;
        const isPrimo = primo(num);

        expect(isPrimo).toBeTruthy();
    });
});