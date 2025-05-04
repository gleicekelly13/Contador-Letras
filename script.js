const input = document.getElementById('texto');
const botaoContar = document.getElementById('botaoContar');
const botaoInverter = document.getElementById('inverterOrdem');
const resultadoContagem = document.getElementById('resultado');
const resultadoInvertido = document.getElementById('resultado_invertido');
const botaoLimpar = document.getElementById('limpar');

function contarChar() {
    let quantidade_char = input.value.replace(/\s/g, '').length; //Remove os espaços da string e conta os caracteres
    resultadoContagem.textContent = `Total de caracteres: ${quantidade_char}`;
}

function inverterPalavra () {
    let palavra_digitada = input.value;
    let palavra_invertida = '';

    for(let i = palavra_digitada.length - 1; i >= 0; i--) {
        palavra_invertida += palavra_digitada[i];
    }

    resultadoInvertido.textContent = `A palavra '${palavra_digitada}' invertida fica: ${palavra_invertida}`;
}

function limparInputs() {
    resultadoContagem.textContent = '';
    resultadoInvertido.textContent = '';
    input.value = '';
}

botaoContar.addEventListener('click', contarChar);
botaoInverter.addEventListener('click', inverterPalavra);
botaoLimpar.addEventListener('click', limparInputs);