let botao = document.querySelector("#Home");
let onoff = true;

botao.onclick = ligar;

function ligar() {
    if (onoff == true) {
        document.querySelector("#tela").style.transform = "scale(1)";
        onoff = false;
    }
    else {
        document.querySelector("#tela").style.transform = "scale(0.001)";
        onoff = true;
    }
}