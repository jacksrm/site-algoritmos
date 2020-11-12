
const primo = (n) => {
    n = parseInt(n);
    for (let i = 2; i < n; i++) {
        let aux = n % i;

        if (aux === 0) return false;
    }

    return n > 1;
};
export default primo;