function enviarWhats(event) {
    event.preventDefault()

const nome = document.getElementById('nome').value;

const mensagem = document.getElementById('mensagem').value;

const telefone = '5521970665385';
const texto = `Olá! Sou o ${nome}, ${mensagem}`;

const msgFormatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

window.open(url, '_blank')

console.log(url);

}

document.querySelectorAll('.projetos-card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    window.open(link, '_blank');
  });
});