const input = document.getElementById('texto');
const botaoContar = document.getElementById('botaoContar');
const resultadoContagem = document.getElementById('resultado');

function contarChar() {
    let quantidade_char = input.value.replace(/\s/g, '').length; //Remove os espaços da string e conta os caracteres
    resultadoContagem.textContent = `O número de caracteres é: ${quantidade_char}`;
}

botaoContar.addEventListener('click', contarChar);