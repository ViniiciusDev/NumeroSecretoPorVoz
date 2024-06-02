const menorValor = 1;
const maiorValor = 100;
const numeroSorteado = gerarNumeroSorteado();
const elementMinValor = document.querySelector("#min-value");
const elementMaxValor = document.querySelector("#max-value");
elementMinValor.textContent = menorValor;
elementMaxValor.textContent = maiorValor;

function gerarNumeroSorteado() {
    return parseInt(Math.random() * maiorValor + 1);
}
console.log(numeroSorteado);
