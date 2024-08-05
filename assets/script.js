let simbolo = "X";
let cont_x = 0;
let cont_o = 0;
let jogadas = 0;
let container = document.querySelectorAll('.quadrados');
const matriz = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const jogador = document.getElementById("jogador");
jogador.innerHTML = "X"
const h1 = document.querySelector(".title");
const h2 = document.querySelector(".sub");

function reiniciar(){
    alert("O jogo será reiniciado.");
    location.reload();
}
function checar(simbolo) {
    for (let j = 0; j < 8; j++) {
        let cont = 0;
        for (let n = 0; n < 3; n++) {
            if (container[matriz[j][n]].textContent == simbolo) {
                cont++;
                if (cont == 3) {
                    return "V";
                }
            }
        }
    }
}

function troca() {
    for (let i = 0; i < container.length; i++) {
        if (container[i].textContent == "O") {
            if (cont_x == cont_o) {
                simbolo = "X";
            }
        }
        if (container[i].textContent == "X") {
            if (cont_x > cont_o) {
                simbolo = "O";
            }
        }
    }
    if (simbolo === "X") {
        cont_x++;
    }
    else {
        cont_o++;
    }
    if (cont_x >= 3 || cont_o >= 3) {

    }
    jogador.innerHTML = simbolo;
    return simbolo;
}

function jogar(id) {
    jogadas++;

    if (id.textContent == "") {
        simbolo = troca();
        id.style = "color: red"
        id.innerHTML = simbolo;
    }
    if (simbolo == "X") {
        jogador.innerHTML = "O";
        id.style = "color: blue"
    }
    else {
        jogador.innerHTML = "X";
        id.style = "color: red"
    }
    if (checar(simbolo) == "V") {
        for (let i = 0; i < container.length; i++) {
            container[i].removeAttribute("onclick");
        }
        h1.innerHTML = `O jogador "${simbolo}" ganhou o jogo!`
        h2.innerHTML = `Parabéns jogador "${simbolo}"!!!`;
        setTimeout(reiniciar, 3000);

    }
    if(checar(simbolo) != "V" && jogadas == 9){
        h1.innerHTML = "O jogo terminou em empate!"
        h2.innerHTML = "Nenhum dos jogadores ganhou!";
        setTimeout(reiniciar, 3000);
    }
}