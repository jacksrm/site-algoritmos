const somador = (array) => {
    array = array.split(',').map((el) => {
        el = parseFloat(el);
        if (!el) el = 0;
        return el;
    });
    
    return array.reduce((soma, el) => soma += el)
};

export default somador;