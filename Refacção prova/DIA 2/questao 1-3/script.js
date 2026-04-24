let paquetaAdicionado = false;

function add() {
    if (paquetaAdicionado) {
        alert("Lucas Paquetá já está na lista!");
        return;
    }

    const container = document.getElementById('Cards');

    const novoCard = document.createElement('div');
    novoCard.className = 'card';
    novoCard.id = 'card-paqueta';


    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body">
            <h5 class="card-title">
                <span>Lucas Paquetá</span>
                <span class="badge">8,8</span>
            </h5>
            <div class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997</span><br>
                <span><strong>Altura:</strong> 1,80 m</span><br>
                <span><strong>Posição:</strong> Meio-campista</span>
            </div>
        </div>
    `;

    container.appendChild(novoCard);

    paquetaAdicionado = true;
    const botao = document.getElementById('btnAdicionar');
    botao.textContent = "Paquetá Adicionado";
    botao.disabled = true;
}