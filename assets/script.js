function enviarWhats(event) {
    event.preventDefault()

const nome = document.getElementById('nome');

const mensagem = document.getElementById('mensagem');

const telefone = '5521970665385';
const texto = `Olá! Sou o ${nome}, ${mensagem}`;

const msgFormatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

window.open(url, '_blank')

console.log(url);

}