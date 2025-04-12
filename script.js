const input = document.getElementById('texto');
const botaoContar = document.getElementById('botaoContar');
const botaoInverter = document.getElementById('inverterOrdem');
const resultadoContagem = document.getElementById('resultado');

function contarChar() {
    let quantidade_char = input.value.replace(/\s/g, '').length; //Remove os espaços da string e conta os caracteres
    resultadoContagem.textContent = `O número de caracteres é: ${quantidade_char}`;
}

function inverterPalavra () {
    let palavra_digitada = input.value;
    let palavra_invertida = '';

    for(let i = palavra_digitada.length - 1; i >= 0; i--) {
        palavra_invertida += palavra_digitada[i];
    }

    resultadoContagem.textContent = palavra_invertida

    
}

botaoContar.addEventListener('click', contarChar);
botaoInverter.addEventListener('click', inverterPalavra);