const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = geradorNumero();

const itemMenorValor = document.getElementById('menor-valor');
const itemMaiorValor = document.getElementById('maior-valor');

itemMenorValor.innerHTML = JSON.stringify(menorValor);
itemMaiorValor.innerHTML = JSON.stringify(maiorValor);

function geradorNumero() {
    return `O número secreto é ${parseInt(Math.random() * maiorValor + 1)}`;
}

console.log(numeroSecreto);




