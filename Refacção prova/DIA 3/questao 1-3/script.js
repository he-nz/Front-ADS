function revelar() {
    const foto = document.getElementById('avatar');
    foto.src = './img/_vinicius_junior.png';

    const nome = document.getElementById('Nome');
    const rank = document.getElementById('Rank');
    const dataNas = document.getElementById('Data_Nas');
    const altura = document.getElementById('Alutra');
    const posicao = document.getElementById('Posição ');

    nome.firstChild.textContent = 'Vinícius José P. de Oliveira Jr. ';
    rank.textContent = '9,5';
    dataNas.textContent = 'Nasc: 12/07/2000 (25 anos)';
    altura.textContent = 'Altura: 1,76 m';
    posicao.textContent = 'Ponta-esquerda / Atacante';

    const placeholders = document.querySelectorAll('.placeholder');
    placeholders.forEach(p => {
        p.classList.remove('placeholder', 'col-8', 'col-10', 'col-6', 'col-9');
        p.classList.add('card-text'); 
    });

    const glows = document.querySelectorAll('.placeholder-glow');
    glows.forEach(g => g.classList.remove('placeholder-glow'));

    rank.classList.replace('text-bg-secondary', 'text-bg-success');
}
