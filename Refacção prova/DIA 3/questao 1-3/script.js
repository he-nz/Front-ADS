let revelado = false;

function add() {
    if (revelado) return; 

    const foto = document.getElementById('FotoJogador');
    foto.src = 'img/_vinicius_junior.jpg';

    const elNome = document.getElementById('Nome');
    const elRank = document.getElementById('Rank');
    const elData = document.getElementById('Data_Nas');
    const elAltura = document.getElementById('Alutra');
    const elPosicao = document.getElementById('Posição ');
    const btn = document.getElementById('btnAcao');
    elNome.innerHTML = `Vinícius Júnior <span id="Rank" class="badge badge-sucesso">9,5</span>`;
    
    elData.classList.remove('placeholder');
    elData.innerHTML = `<strong>Nascimento:</strong> 12/07/2000 (25 anos)`;

    elAltura.classList.remove('placeholder');
    elAltura.innerHTML = `<strong>Altura:</strong> 1,76 m`;

    elPosicao.classList.remove('placeholder');
    elPosicao.innerHTML = `<strong>Posição:</strong> Ponta-esquerda / Atacante`;

    btn.textContent = "Jogador Revelado";
    btn.disabled = true;
    revelado = true;
}
