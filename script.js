let botao = document.querySelector("#Home");
let onoff = true;

let horas = new Date().getHours();
let minutos = new Date().getMinutes();
let dias = new Date().getDate();
let mes = new Date().getMonth();
let ano = new Date().getFullYear();
let todoosmeses = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let meses = todoosmeses[mes];

console.log(horas);
console.log(minutos);

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

document.querySelector('#horas').innerHTML = `${horas}:${minutos}`;

document.querySelector('#data').innerHTML = `${dias}/${meses}/${ano}`;