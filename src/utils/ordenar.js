var left = 0;
var right = 100;

function quick(vetor, left, right){
    
    if (typeof vetor === 'string')
    vetor = vetor.split(',').map((el) => {
      el = parseFloat(el);
      if (!el) el = 0;
      return el;
    });

   var pivo = left;
   if(left < right){
       var pivoIndex = quebra(vetor, left, right, pivo);

       quick (vetor, left, pivoIndex - 1);
       quick (vetor, pivoIndex + 1, right);
   }
   return vetor;
}

function quebra(vetor, left, right, pivo){
    var p = vetor[pivo];
    troca (vetor, right, pivo);
    var aux = left;

    for (let i = left; i < right; i++){
        if (vetor[i] <= p){
            troca(vetor, i, aux);
            aux = aux + 1;
        }
    }

    troca(vetor, right, aux);
    return aux;
}

function troca(vetor, i, j){
    let temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
}

export default quick;

//vetor de exemplo para teste: 1, 100, 39, 200, 100, 25, 0, 45
