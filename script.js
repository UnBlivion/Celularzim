let botao = document.querySelector("#Home");
let swipe = document.querySelector("footer");
let onoff = true;
let telaVaiVem = true;


swipe.onclick = () => {
    if (telaVaiVem == true) {
        document.querySelector("#telasenha").style.transform = "translateX(0%) translateY(-100%)";
        document.querySelector(".anime:nth-child(1)").style.transform = "rotate(180deg)";
        document.querySelector(".anime:nth-child(2)").style.transform = "rotate(180deg)";
        document.querySelector(".anime:nth-child(3)").style.transform = "rotate(180deg)";
        document.querySelector(".anime:nth-child(4)").style.transform = "rotate(180deg)";
        document.querySelector(".anime:nth-child(5)").style.transform = "rotate(180deg)";
        document.querySelector(".anime:nth-child(6)").style.transform = "rotate(180deg)";
        telaVaiVem = false;
    }
    else {
        document.querySelector("#telasenha").style.transform = "translateX(-100%) translateY(-100%)";
        document.querySelector(".anime:nth-child(1)").style.transform = "rotate(0deg)";
        document.querySelector(".anime:nth-child(2)").style.transform = "rotate(0deg)";
        document.querySelector(".anime:nth-child(3)").style.transform = "rotate(0deg)";
        document.querySelector(".anime:nth-child(4)").style.transform = "rotate(0deg)";
        document.querySelector(".anime:nth-child(5)").style.transform = "rotate(0deg)";
        document.querySelector(".anime:nth-child(6)").style.transform = "rotate(0deg)";
        telaVaiVem = true;
    }
}


let horas = new Date().getHours();
let minutos = new Date().getMinutes();
let dias = new Date().getDate();
let mes = new Date().getMonth();
let ano = new Date().getFullYear();
let todoosmeses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
        document.querySelector("#tela").style.transform = "scale(0.0005)";
        onoff = true;
        if (telaVaiVem == false) {
            document.querySelector("#telasenha").style.transform = "translateX(-100%) translateY(-100%)";
            document.querySelector(".anime:nth-child(1)").style.transform = "rotate(0deg)";
            document.querySelector(".anime:nth-child(2)").style.transform = "rotate(0deg)";
            document.querySelector(".anime:nth-child(3)").style.transform = "rotate(0deg)";
            document.querySelector(".anime:nth-child(4)").style.transform = "rotate(0deg)";
            document.querySelector(".anime:nth-child(5)").style.transform = "rotate(0deg)";
            document.querySelector(".anime:nth-child(6)").style.transform = "rotate(0deg)";
            telaVaiVem = true;
        }
    }
}

document.querySelector('#horas').innerHTML = `${horas}:${minutos}`;

document.querySelector('#data').innerHTML = `${dias}/${meses}/${ano}`;