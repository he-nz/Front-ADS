const cria = document.getElementById("salsicha");
const btn = document.getElementById("btn");

const estados = {
    normal:  "dog_normal.png",
    puto: "dog_bravo.png",
    morto: "dog_morto.png",
    comendo: "dog_comendo.png",
    alimentado: "dog_cheio.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;
let morto = 0;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 5){
                cria.src = estados.puto;
            }

            if(contador == 10){
                cria.src = estados.morto;
                morto = 1;
            }
        }, 1000);
}

function alimentar() {
    if (morto > 0) {
        console.log("Tarde demais o bixim morreu");
        return;
    }
    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);

}

function mudarCenario() {
    let corpo = document.body;
    let botao = document.getElementById("botaoFundo");

    if (botao.innerText == "Mudar para Noite") {
        
        corpo.style.backgroundImage = "url('fundo_noite.png')";
        
        botao.innerText = "Mudar para Dia";

    } else {
        corpo.style.backgroundImage = "url('fundo.png')";
        botao.innerText = "Mudar para Noite";
    }
}

function abrir() {
    document.getElementById("Imagem").style.display = "flex";
    
}

function fechar(event) {
    let container = document.getElementById("Imagem");
    if (event.target == container) {
        container.style.display = "none";
    }
}


controlador();