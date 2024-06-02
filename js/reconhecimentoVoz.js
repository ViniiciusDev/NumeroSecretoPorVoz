window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const tentativa = document.querySelector("#chute");
const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();
recognition.addEventListener("result", onSpeak);
function onSpeak(e) {
    const resultado = e.results[0][0].transcript;
    elementoNaTela(resultado);
    verificaValorValido(resultado);
}
function elementoNaTela(resultado) {
    tentativa.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${resultado}</span>
`;
}

recognition.addEventListener("end", () => recognition.start());
