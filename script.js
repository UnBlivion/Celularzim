let botao = document.querySelector("#Home");
let onoff = true;

let horas = new Date().getHours();
let minutos = new Date().getMinutes();

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

document.querySelector('#relogio').innerHTML = `${horas}:${minutos}`;
console.log(`${horas}:${minutos}`);