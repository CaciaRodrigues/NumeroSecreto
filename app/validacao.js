function verificarValorValidoChute(chute) {
    const numero = +chute;

    
    
    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido </div>';
        
    }

    if(numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += ` <div>Valor Inválido: O número precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        
    }
    
    if (numero === numeroSecreto) {
         document.body.innerHTML = `
         <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>` 
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}



