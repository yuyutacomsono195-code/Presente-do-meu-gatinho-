const botao = document.getElementById('botaoCoracao');
const texto = document.getElementById('texto');

botao.addEventListener('click', function() {
    texto.innerHTML = "<strong>Eu te amo, Ezaias! ❤️</strong>";
    texto.style.color = "#d63384";
    texto.style.fontSize = "22px";
});

