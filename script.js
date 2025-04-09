const input = document.getElementById('texto');
const botaoContar = document.getElementById('botao');
const resultadoContagem = document.getElementById('resultado');

function contarChar() {
    let quantidade_char = input.value.trim().length;  
    resultadoContagem.textContent = `O número de caracteres é: ${quantidade_char}`;
}

botaoContar.addEventListener('click', contarChar);