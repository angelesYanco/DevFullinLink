"use strict"

//Temporizadores o timers
//setInterval
//setTimeout

// var temporizador = setInterval(function(){
//     setColor();
// }, 10000)

setTimeout(function(){
    setColor();
}, 20000)

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green": "blue";
}

function stopChangeColor(){
    clearInterval(temporizador);
}