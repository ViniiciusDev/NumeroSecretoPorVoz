function verificaValorValido(resultado) {
    const numero = +resultado;

    if (chuteValorInvalido(numero)) {
        exibirValorInvalidoNaTela();
        return;
    }

    if (chuteMaiorOuMenorPermitido(numero)) {
        exibirChuteMaiorOuMenorPermitidoNaTela();
        return;
    }

    if (numero === numeroSorteado) {
        chuteCorreto();
    } else if (numero > numeroSorteado) {
        chuteMaior();
    } else {
        chuteMenor();
    }
}

// Valor Invalido não é um numero na tela
function chuteValorInvalido(numero) {
    return Number.isNaN(numero);
}

function exibirValorInvalidoNaTela() {
    tentativa.innerHTML += `
        <h2>Valor Invalido:</h2>
        <h4>O valor não é um número</h4>
    `;
}

// Valor Invalido é menor ou maior do permitido exibe na tela
function chuteMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function exibirChuteMaiorOuMenorPermitidoNaTela() {
    tentativa.innerHTML += `
        <h2>Valor Invalido:</h2>
        <h4>O numero deve estar entre ${menorValor} e ${maiorValor}</h2></h4>
    `;
}

// Chute Correto
function chuteCorreto() {
    document.body.innerHTML = `
        <div class="chute-correto">Você Acertou!!</div>
        <h3>O número secreto era ${numeroSorteado}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
}

function chuteMaior() {
    tentativa.innerHTML += `
    <div>
        O número secreto é menor <i class="fa-solid fa-down-long"></i>
    </div> `;
}

function chuteMenor() {
    tentativa.innerHTML += `
    <div>
        O número secreto é maior <i class="fa-solid fa-up-long"></i>
    </div> `;
}

document.body.addEventListener("click", (e) => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload();
    }
});
