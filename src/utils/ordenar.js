function quick(vetor, left = 0, right = vetor.length - 1) {

  let pivo = left;
  if (left < right) {
    let pivoIndex = quebra(vetor, left, right, pivo);

    quick(vetor, left, pivoIndex - 1);
    quick(vetor, pivoIndex + 1, right);
  }
  return vetor;
}

function quebra(vetor, left, right, pivo) {
  let p = vetor[pivo];
  troca(vetor, right, pivo);
  let aux = left;

  for (let i = left; i < right; i++) {
    if (vetor[i] <= p) {
      troca(vetor, i, aux);
      aux = aux + 1;
    }
  }

  troca(vetor, right, aux);
  return aux;
}

function troca(vetor, i, j) {
  let temp = vetor[i];
  vetor[i] = vetor[j];
  vetor[j] = temp;
}

export default quick;